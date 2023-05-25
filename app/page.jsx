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

        <div className="px-7 my-10 text-gray-700 text-center">
          <p>
            S.A.M (Stories A Million) is an AI-driven platform enabling users to
            craft limitless, unique narratives. S.A.M places story creation at
            the fingertips of its users. This fosters a collaborative
            environment where creativity thrives, where anyone can write.
          </p>
        </div>

        <div className="px-5 py-10 bg-gray-900 flex-row justify-around">
          <div className="flex items-center h-full">
            <h2 className="mb-4 mt-4 text-3xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
              Steps
            </h2>
          </div>

          <div className="mb-6 text-white tracking-tight">
            <div className="mb-4 text-xl font-bold">
              1. Create Your Own Story
            </div>
            <p className="mb-4">
              Choose a title, genre, and the number of characters
            </p>
            <Image
              src="/CreateYourOwnStory2.gif"
              width={300}
              height={300}
              alt="Create your own story"
            />
          </div>

          <div className="mb-6 text-white tracking-tight">
            <div className="mb-4 text-xl font-bold">2. Collaborate</div>
            <p className="mb-4">
              Add your creative story to others' stories or invite others to
              contribute their stories to yours as well!
            </p>
            <Image
              src="/CollaborateWithOthers2.gif"
              width={300}
              height={300}
              alt="Collaborate with others"
            />
          </div>

          <div className="mb-6 text-white tracking-tight">
            <div className="mb-4 text-xl font-bold">3. Merge it</div>
            <p className="mb-4">
              Let people decide which story is better by voting. You can merge
              the story you like.
            </p>

            <Image
              src="/MergeStory2.gif"
              width={300}
              height={300}
              alt="Merge story"
            />
          </div>
        </div>

        <div className="px-7 text-gray-700 flex-row justify-center text-center">
          <h2 className="my-10 text-lg leading-relaxed font-bold text-center tracking-tight text-black-100">
            Behind the AI experience
          </h2>
          <p>
            Utilizes the sophisticated mechanisms of an AI-driven storytelling
            engine, powered by OpenAI's text-completion DaVinci model. The model
            transforms users' inputs into vivid narratives, revealing the
            intelligent design and cutting-edge algorithms that support endless
            creativity.
          </p>
        </div>

        <footer>
          <div className="px-7 my-10 text-gray-700 text-center">
            <p>© Copyright 2023 - BBY19</p>
          </div>
        </footer>
      </section>
    );
  }

  return router.push("/threads");
}
