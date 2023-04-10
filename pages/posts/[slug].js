import { GraphQLClient, gql } from "graphql-request";
import Link from "next/link";
import ThemeToggleButton from "../../components/ThemeToggleButton";
 
const graphcms = new GraphQLClient(
    "https://api-sa-east-1.hygraph.com/v2/clg9w9v502fuj01ukd3z8504h/master"
  );
  
  const QUERY = gql`
    query Post($slug: String!){
        post(where: {slug: $slug}) {
            id,
            title, 
            slug,
            excerpt,
            content{
                html
            }
        }
    }
  `;
  const SLUGLIST = gql `
    {
        posts {
            slug
        }
    }
  `
  export async function getStaticPaths() {
    const {posts} = await graphcms.request(SLUGLIST);
    return {
        paths: posts.map(post => ({params: {slug: post.slug}})),
        fallback: false,
    }
  }



  export async function getStaticProps({params}) {
    const slug = params.slug;
    const data = await graphcms.request(QUERY, { slug });
    const post = data.post;
    return {
      props: {
        post,
      },
      revalidate: 10,
    };
  }

  export default function BlogPost({post}) {
    return(
    <div className="font-serif">
        <main className="flex min-h-screen font-serfi  bg-white dark:bg-custom-brown"> 
        <div className="flex-1 overflow-hidden mx-auto max-w-6xl px-10 md:px-20 lg:px-40 justify-center">
          <section>
            <nav className="py-10 flex justify-between dark:text-white">
            <Link href="/">              
                <h1 className=" cursor-pointer text-xl">
                Terminal Verity
              </h1>
              </Link>
              <ul className="flex items-center justify-around w-48">
              <Link className="" href="/posts">
                  <a className=" hover:opacity-70">Posts</a>
                </Link>
  

                <li className="bg-custom-brown px-1 py-1 rounded-md hover:opacity-80 dark:bg-custom-orange ">
                <ThemeToggleButton/>
                </li>
              </ul>
            </nav>

          </section>
          <section className="text-black my-20 max-w-2xl mx-auto flex flex-col items-center dark:text-white">
            <div  dangerouslySetInnerHTML={{__html:  post.content.html}}>

            </div>
          </section>

          </div>

        </main>
    </div>

    )
  }