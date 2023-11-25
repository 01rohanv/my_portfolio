import Head from "next/head";
import React from "react";
import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";

const page = () => {
  return (
    <>
      <Head>
        <title>Rohan | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose!" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="font-medium">
                After completing my education, I ventured into the professional
                world. I have had the opportunity to work in [mention industry
                or field], where I've gained valuable experience in [highlight
                key skills or areas of expertise]. Some notable achievements
                include [mention any significant accomplishments or projects].
              </p>
              <p className=" my-4 font-medium">
                After completing my education, I ventured into the professional
                world. I have had the opportunity to work in [mention industry
                or field], where I've gained valuable experience in [highlight
                key skills or areas of expertise]. Some notable achievements
                include [mention any significant accomplishments or projects].
              </p>
              <p className="font-medium">
                After completing my education, I ventured into the professional
                world. I have had the opportunity to work in [mention industry
                or field], where I've gained valuable experience in [highlight
                key skills or areas of expertise]. Some notable achievements
                include [mention any significant accomplishments or projects].
              </p>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default page;
