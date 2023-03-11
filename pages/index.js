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
import TextAnimation from "../components/TextAnimation";

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
  // const [darkMode, setDarkMode] = useState(false);


  return (
    // <div className={darkMode ? "dark" : ""}>
    <div>
      <Head>
        <title>Nesbant</title>
        <meta name="description" content="Nesbant, website of Esteban Ledesma. Post-scarcity, technocapitalism, identity and loyality." />
        <link rel="icon" href="/speedometer.png" />
      </Head>

      <main className="flex min-h-screen  font-mono  bg-white dark:bg-custom-brown">
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
                  {/* <MdDarkMode
                    // onClick={() => setDarkMode(!darkMode)}

                  /> */}
                  <ThemeToggleButton/>
                </li>
              </ul>
            </nav>
            {/* <div className="text-center p-10 py-10">
              <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
                Nesbant
              </h2>
              <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
                Builder
              </h3>
              <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                Freelancer providing services for programming and design content
                needs. Join me down below and let's get cracking!
              </p>
              <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                <AiFillTwitterCircle />
                <AiFillLinkedin />
                <AiFillYoutube />
              </div>
              <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
                <Image src={deved} layout="fill" objectFit="cover" />
              </div>
            </div> */}
          </section>
          <section className="mx-auto flex flex-col	items-center max-w-xl dark:text-white ">
            <div className="inline-block h-auto w-full p-4 mx-auto my-5 rounded-xl	 bg-custom-brown text-center text-white dark:bg-custom-brown2">
              <TextAnimation/>
            </div>
            <div className="my-4">
              <p className="mb-4">
                In contemplating the direction of a life's trajectory, it
                becomes apparent that a well-defined roadmap is essential to
                make a meaningful impact upon reality. The degree of
                determination inherent within such a map is of great
                significance. Values such as loyalty and freedom are deemed
                deeply valuable for the development of the collective
                consciousness. One does not simply aspire to create more;
                rather, the objective is to conquer the limitations of the human
                psyche. The attainment of a post-scarcity society represents the
                ultimate culmination of collective growth.
              </p>
              <p className="mb-4">
                {" "}
                The human existence is not just about the accumulation of
                material possessions or personal success, but about giving back
                to society as a whole. Loyalty and freedom represent guiding
                principles that help me empower individuals to assert their own
                sovereignty and contribute to a more equitable world.
              </p>
              <p className="mb-4">
                The journey towards a post-scarcity state is one that demands
                great effort and collective commitment. It requires a
                willingness to question the prevailing systems that perpetuate
                scarcity and inequality. Despite the difficulties inherent
                within this process, I remain optimistic about the possibilities
                that the future holds. Through innovative solutions,
                collaborative efforts, and a steadfast adherence to our shared
                values, we can create a world that is both abundant and
                sustainable, leaving no one behind.
              </p>
            </div>
            <div className="flex justify-between">
              <a
                href="https://twitter.com/nesbant"
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
                href="https://pe.linkedin.com/in/estebanledesmaguerrero"
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
                href="mailto:hi@nesbant.com?"
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
            <h2 className="text-5xl mb-7">Beyond well beign</h2>
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
