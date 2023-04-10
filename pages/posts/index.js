
import Link from "next/link";
import { GraphQLClient, gql } from "graphql-request";
import BlogCard from "../../components/BlogCard";
import ThemeToggleButton from "../../components/ThemeToggleButton";
const graphcms = new GraphQLClient(
"https://api-sa-east-1.hygraph.com/v2/clg9w9v502fuj01ukd3z8504h/master");

const QUERY = gql`
  {
    posts {
      id
      title
      excerpt
      slug
      content {
        html
      }
    }
  }
`;

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export default function Home({ posts }) {
  
  return (
    <div>

      <main className="flex  font-serif  min-h-screen bg-white dark:bg-custom-brown">
        <div className="flex-1 overflow-hidden mx-auto max-w-6xl px-10 md:px-20 lg:px-40 justify-center">
          <section>
            <nav className="py-10 flex justify-between dark:text-white">
                <Link href="/">              
                <h1 className="cursor-pointer text-xl">
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
          
          <section className="mx-auto my-20 flex flex-col	items-center max-w-xl dark:text-white ">
            <h2 className="text-5xl mb-7">Posts</h2>
            <div>
              {posts.map((post) => (
                <BlogCard
                  title={post.title}
                  key={post.id}
                  excerpt={post.excerpt}

                  slug={post.slug}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
