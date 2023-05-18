"use client";
import { Inter } from "next/font/google";
import Typewriter from "typewriter-effect";
const inter = Inter({ subsets: ["latin"] });
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    return (
      <section>
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "50%",
            backgroundImage: "url('/typeWriter.jpg')",
            height: "500px",
          }}
        >
          <div
            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <div className="flex justify-center items-center h-full">
              <div className="absolute top-20 right-0 bottom-0 left-0 text-center text-white px-6 md:px-12">
                <span className="text-xl">Stories A Million</span>
              </div>
              <div className="absolute top-15 right-0 bottom-0 left-0 text-center text-white px-6 md:px-12">
                <h5 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                  Write your stories with
                  <Typewriter
                    options={{
                      strings: ["Collaborators", "AI support"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h5>
              </div>
            </div>
          </div>
        </div>

        
        <div className="flex px-5 justify-center items-center h-full">
          <h1 className="mb-4 mt-4 text-4xl underline decoration-8 decoration-blue-400 font-extrabold text-center leading-none tracking-tight text-black-100 md:text-5xl lg:text-6xl">
              Create, Collaborate, Harness AI to build a story
          </h1>
        </div>
        <div>
          <p>
            S.A.M (Stories A Million) is an AI-driven platform enabling users to
            craft limitless, unique narratives. S.A.M places story creation at
            the fingertips of its users. This fosters a collaborative
            environment where creativity thrives, where anyone can write.
          </p>
        </div>

        <div>
          <div className="flex items-center h-full">
            <h2 className="mb-4 mt-4 text-3xl font-extrabold leading-none tracking-tight text-black-100 md:text-5xl lg:text-6xl dark:text-black">
              Steps
            </h2>
          </div>
          <div>
            <ul>
              <li>1. Create Your Own Story (character, title, genre, body) & AI generate</li>
              <Image
                src="/CreateYourOwnStory2.gif"
                width={500}
                height={500}
                alt="Create your own story"
              />
              <li>2. Collaborate (make new branch) </li>
              <Image
                src="/CollaborateWithOthers2.gif"
                width={500}
                height={500}
                alt="Collaborate with others"
              />
              <li>3. Merge it (merge the story) </li>
              <Image
                src="/MergeStory2.gif"
                width={500}
                height={500}
                alt="Merge story"
              />
            </ul>
          </div>
          <div className="flex items-center h-full">
            <h2 className="mb-4 mt-4 text-3xl font-extrabold leading-none tracking-tight text-black-100 md:text-5xl lg:text-6xl dark:text-black">
              Behind the AI experience
            </h2>
          </div>
          <div className="flex items-center justify-center h-full text-center" >
            <p>
              Utilizes the sophisticated mechanisms of an AI-driven storytelling
              engine, powered by OpenAI's text-completion DaVinci model. The
              model transforms users' inputs into vivid narratives, revealing
              the intelligent design and cutting-edge algorithms that support
              endless creativity.
            </p>
          </div>
        </div>
        <footer>
          <div className="flex items-center justify-center h-full">
            <p>© Copyright 2023 - BBY19</p>
          </div>
        </footer>
      </section>
    );
  }

  return router.push("/threads");
}
