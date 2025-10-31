import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-screen bg-goooey-blue flex items-center justify-center pt-32 pb-20">
        <div className="text-center max-w-2xl px-6">
          <h1 className="font-display text-9xl text-goooey-yellow text-stroke-black mb-6">
            404
          </h1>
          <h2 className="font-display text-5xl text-white mb-6">
            Oops! This page got stuck somewhere else
          </h2>
          <p className="text-xl mb-8 text-white">
            Looks like this treat melted away. Let's get you back to something sweet!
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
