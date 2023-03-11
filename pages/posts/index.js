
import Link from "next/link";
import { GraphQLClient, gql } from "graphql-request";
import BlogCard from "../../components/BlogCard";
import ThemeToggleButton from "../../components/ThemeToggleButton";
const graphcms = new GraphQLClient(
  "https://api-us-west-2.hygraph.com/v2/cl4m6dyqj7b2o01yr01za4deg/master"
);

const QUERY = gql`
  {
    posts {
      id
      title
      description
      datePublished
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

      <main className="flex  font-mono  min-h-screen bg-white dark:bg-custom-brown">
        <div className="flex-1 overflow-hidden mx-auto max-w-6xl px-10 md:px-20 lg:px-40 justify-center">
          <section>
            <nav className="py-10 flex justify-between dark:text-white">
                <Link href="/">              
                <h1 className="cursor-pointer text-xl">
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
          
          <section className="mx-auto my-20 flex flex-col	items-center max-w-xl dark:text-white ">
            <h2 className="text-5xl mb-7">Under</h2>
            <div>
              {posts.map((post) => (
                <BlogCard
                  title={post.title}
                  key={post.id}
                  description={post.description}
                  datePublished={post.datePublished}
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
