"use client";
import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GitHubIcon } from "../components/Icons";
import projectImg from "../../public/images/netflix.png";
import promptopiaImg from "../../public/images/promptopia.png";
import chattyImg from "../../public/images/chatty.png";
import reactportfolio from "../../public/images/reactportfolio.png";
import taskTracker from "../../public/images/taskTracker.png";
import { motion } from "framer-motion";
import TransitionEffect from "../components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, img, summary, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-br-2xl rounded-3xl border border-solid
     border-dark bg-light shadow-2xl p-12 relative dark:bg-dark dark:border-light
     lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light
      xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GitHubIcon className="!w-10" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark
            sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid
     border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem]
       bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ sale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width:768px) 100vw ,(max-width:1200px) 50vw,50vw"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GitHubIcon className="!w-8" />
          </Link>
        </div>
      </div>
    </article>
  );
};

const page = () => {
  return (
    <>
      <Head>
        <title>Rohan | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-32 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Chatty"
                summary="A FullStack app with Mongo,Express,React.js,Node.js in which you can create an account and chat with your friends."
                link="https://mernchat-app-awbw.onrender.com/"
                github="https://github.com/01rohanv/mernChat-app"
                img={chattyImg}
                type="Featured Project"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="React Portfolio"
                summary="A sample protfolio website made with reactJs."
                link="https://portfolio-reactjs-25a95.web.app/"
                github="https://github.com/01rohanv/React-Portfolio"
                img={reactportfolio}
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Task Tracker"
                summary="A demo project where you can trackyour daily task."
                link="https://github.com/01rohanv/task-tracker"
                github="https://github.com/01rohanv/task-tracker"
                img={taskTracker}
                type="Featured Project"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="Netflix Clone"
                summary="A demo netflix clone in which you can see the trailer also"
                link="https://netflix-clone-faf0d.web.app/"
                github="https://github.com/01rohanv/netflix-clone"
                img={projectImg}
                type="Featured Project"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Promptopia"
                summary="A FullStack app with NextJs 14 and MongoDB and also has an google sign in option where you can create prompt."
                link="https://promptopia-ce0ln7cht-rohans-projects-84da7a69.vercel.app/"
                github="https://github.com/01rohanv/Promptopia"
                img={promptopiaImg}
                type="Featured Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default page;
