/* eslint-disable */
import Head from "next/head";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
// import { MdDarkMode } from "react-icons/md";
// import { useState } from "react";
import Link from "next/link";
import { GraphQLClient, gql } from "graphql-request";
import BlogCard from "../components/BlogCard";
import ThemeToggleButton from "../components/ThemeToggleButton";

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
  // const [darkMode, setDarkMode] = useState(false);


  return (
    // <div className={darkMode ? "dark" : ""}>
    <div> 
      <Head>
        <title>Terminal verity</title>
        <meta name="description" content="Terminal Verity, website of Jorge Visaga. Post-scarcity, technocapitalism, identity and loyality." />
        <link rel="icon" href="/visaicon.jpg" />
      </Head>

      <main className="flex min-h-screen  font-serif  bg-white dark:bg-custom-brown">
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
                  {/* <MdDarkMode
                    // onClick={() => setDarkMode(!darkMode)}

                  /> */}
                  <ThemeToggleButton/>
                </li>
              </ul>
            </nav>

          </section>
          <section className="mx-auto flex flex-col	items-center max-w-xl dark:text-white ">

            <div className="my-2">
              <p className="mb-4">
              The energy I dispose coupled with the infrastructure to execute said energy grants me with the capability of profoundly influence reality.

              </p>
              <p className="mb-4">
                {" "}
                The reality is a scenario filled with imperfections produced by the interaction of the consciousness on reality, said imperfections makes consciousness to suffer, being that state, the ultimate non-wanted consequence of an imperfect reality.

              </p>
              <p className="mb-4">
              Me, as a dissipable opportunity (a biological infrastructure that consumes energy to transform into reality with a gradually performance deterioration) is absolutely committed to provoke a profound change on that current state of reality (a fundamentally perfect individual state, at scale, (therefore, the organic eradication of suffering)), being that purpose the ultimate purpose of any form of interactive consciousness.

              </p>
              <p className="mb-4">
              That absolute purpose needs a roadmap, already designed.

              </p>
              <p className="mb-4">
              The roadmap that will bring the ultimate purpose will be a value aggregate of organically driven cognitive infrastructures aiming for a philosophically perfect interactive system.

              </p>
              <p className="mb-4">
              The roadmap that will bring the Collective Perfection will be the Technical Platform.


              </p>
            </div>
            <div className="flex start">
              <a
                href="https://twitter.com/terminalverity"
                target="_blank"
                rel="noreferre"
                className="mx-2"
              >
                <FaTwitter
                  className="text-primary hover:opacity-60 dark:text-secondary"
                  size={24}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/jorgevisaga"
                target="_blank"
                rel="noreferre"
                className="mx-2"
              >
                <FaLinkedin
                  size={24}
                  className="text-primary hover:opacity-60 dark:text-secondary"
                />
              </a>
              <a
                href="mailto:hi@terminalverity.com?"
                target="_blank"
                rel="noreferre"
                className="mx-2"
              >
                <HiMail
                  size={24}
                  className="text-primary hover:opacity-60 dark:text-secondary"
                />
              </a>
            </div>
          </section>
          <section className="mx-auto my-20 flex flex-col	items-center max-w-xl dark:text-white ">
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
