import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section>
      <div className="center py-4">
        <h1 className="text-2xl font-semivold tracking-tight">
          This is LandingPage
        </h1>
      </div>
    </section>
  );
}
