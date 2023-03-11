import { GraphQLClient, gql } from "graphql-request";
import Link from "next/link";
import ThemeToggleButton from "../../components/ThemeToggleButton";
 
const graphcms = new GraphQLClient(
    "https://api-us-west-2.hygraph.com/v2/cl4m6dyqj7b2o01yr01za4deg/master"
  );
  
  const QUERY = gql`
    query Post($slug: String!){
        post(where: {slug: $slug}) {
            id,
            title, 
            slug,
            description,
            datePublished,
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
    <div>
        <main className="flex min-h-screen font-mono  bg-white dark:bg-custom-brown"> 
        <div className="flex-1 overflow-hidden mx-auto max-w-6xl px-10 md:px-20 lg:px-40 justify-center">
          <section>
            <nav className="py-10 flex justify-between dark:text-white">
            <Link href="/">              
                <h1 className=" cursor-pointer text-xl">
                Nesbant
              </h1>
              </Link>
              <ul className="flex items-center justify-around w-48">
              <Link className="" href="/posts">
                  <a className=" hover:opacity-70">Posts</a>
                </Link>
  
                <Link href="https://services.nesbant.com/" passHref>
                  <a  className=" hover:opacity-70" target="_blank" rel="noopener noreferrer">Services</a>
              </Link>
                <li className="bg-custom-brown px-1 py-1 rounded-md hover:opacity-80 dark:bg-custom-orange ">
                <ThemeToggleButton/>
                </li>
              </ul>
            </nav>

          </section>
          <section className="text-black my-20 max-w-2xl mx-auto flex flex-col items-center dark:text-white">
          <h2 className="text-xl text-justify font-semibold mb-6">{post.title}</h2>
            <div  dangerouslySetInnerHTML={{__html:  post.content.html}}>

            </div>
          </section>

          </div>

        </main>
    </div>

    )
  }