import Image from "next/image";
import Layout from "./components/Layout";
import profilePic from "@/public/images/profilePic.png";
import AnimatedText from "./components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "./components/Icons";
import HireMe from "./components/HireMe";
import lightBulb from "../public/images/light-bulb-svgrepo-com.svg";

export default function Home() {
  return (
    <main className="flex items-center text-dark w-full min-h-screen">
      <Layout className="pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            <Image src={profilePic} alt="Rohan" className="w-full h-auto" />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center ml-6">
            <AnimatedText
              text="Turning Vision into Reality"
              className="!text-6xl !text-left"
            />
            <p className="my-4 text-base font-medium">
              qwfkbjkvesjlvnsjvnsklvnslngklskeos
              akbfakwbvwejkvbeuvbjsvnsjvnesklvnesvnwiovnuiovnuo
            </p>
            <div className="flex items-center self-start mt-2">
              <Link
                href="/dummy.pdf"
                target="_blank"
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                download={true}
              >
                Resume <LinkArrow className="!w-8" />
              </Link>
              <Link
                href="mailto:abc@gmail.com"
                target="_blank"
                className="ml-4 text-lg font-medium capitalize text-dark underline"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Layout>
      <HireMe />
      <div>
        <Image src={lightBulb} alt="Rohan" className="w-full h-auto" />
      </div>
    </main>
  );
}