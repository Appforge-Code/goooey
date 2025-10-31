import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

interface PlaceholderProps {
  title: string;
}

export default function Placeholder({ title }: PlaceholderProps) {
  return (
    <Layout>
      <div className="min-h-screen bg-goooey-cream flex items-center justify-center pt-32 pb-20">
        <div className="text-center max-w-2xl px-6">
          <h1 className="font-display text-6xl md:text-7xl text-goooey-blue mb-6">
            {title}
          </h1>
          <p className="text-xl mb-8 text-black">
            This page is coming soon! We're working on making it as sweet as our
            treats.
          </p>
          <Link
            to="/"
            className="inline-block bg-black text-white px-8 py-4 rounded-full font-bold shadow-offset-white hover:translate-y-0.5 hover:shadow-[1px_1px_0_0_#fff] transition-all"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
}
