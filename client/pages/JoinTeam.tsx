import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const JoinTeam = () => {
  return (
    <Layout>
      <HeroSection />
      <LookingFor />
      <WhyWork />
    </Layout>
  );
};

function HeroSection() {
  return (
    <section className="relative bg-goooey-blue py-32 overflow-hidden pt-40 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-[62px] leading-tight uppercase mb-2">
            YOUR DREAM <br /> JOB JUST GOT
          </h1>
          <h2 className="font-display text-5xl md:text-6xl text-goooey-cream text-stroke-black">
            Goooey
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto relative">
          <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/fa6ed1f96b2a86f46de86829bfe895b0d65e1314?width=848"
              alt="Goooey Product"
              className="w-80 md:w-96 lg:w-full max-w-md rounded-[42px]  transform -rotate-[7deg] hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="order-1 lg:order-2 space-y-6 text-center lg:text-left">
            <p className="text-white text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              Do you have a big personality, a love for snacks, and a passion
              for fun? Then you belong at Goooey Treats! We're building a team
              of energetic, creative, and snack-loving superstars who want to
              spread joy one delicious bite at a time.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="bg-black text-white px-8 py-4 rounded-full font-bold inline-flex items-center gap-6 shadow-offset-white hover:translate-y-0.5 hover:shadow-[1px_1px_0_0_#fff] transition-all">
                Join The Team
                <span className="bg-white text-goooey-blue rounded-full w-8 h-8 flex items-center justify-center border-2 border-goooey-yellow">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end mt-12 lg:mt-0 lg:absolute lg:bottom-0 lg:right-0 lg:mr-12">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/d7480586d81653338b97c2729d7145bc8c97ee12?width=589"
            alt="Goooey Fitness"
            className="w-56 md:w-72 rounded-[42px] transform rotate-[16deg] hover:scale-105 transition-transform duration-300"
          />
        </div>
        
      </div>
    </section>
  );
}
function LookingFor() {
  return (
    <section className="relative bg-goooey-cream py-32 overflow-hidden">
      
      <svg
        className="absolute top-0 left-0 w-full h-24 -translate-y-full"
        preserveAspectRatio="none"
        viewBox="0 0 1440 100"
        fill="none"
      >
        <path
          d="M0 50C240 10 480 10 720 50C960 90 1200 90 1440 50V100H0V50Z"
          fill="#FED97C"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div>
              <h2 className="text-black font-bold text-3xl md:text-[42px] leading-tight uppercase">
                WHO WE
              </h2>
              <h3 className="font-display text-5xl md:text-6xl text-goooey-blue text-stroke-white">
                Looking For?
              </h3>
            </div>

            <div className="space-y-3 text-black text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              <p>
                <span className="font-bold">Cooks –</span> Master the art of
                making the gooiest treats ever.
              </p>
              <p>
                <span className="font-bold">Sales Associates –</span> Bring the
                Goooey magic to our customers.
              </p>
              <p>
                <span className="font-bold">Delivery Drivers –</span> Deliver
                happiness straight to people's doors.
              </p>
              <p>
                <span className="font-bold">Social Media Marketers –</span>{" "}
                Create viral content and grow our fanbase.
              </p>
              <p>
                <span className="font-bold">Brand Ambassadors –</span> Represent
                Goooey and spread the love in your community.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <button className="bg-black text-white px-8 py-4 rounded-full font-bold inline-flex items-center gap-6 shadow-offset-white hover:translate-y-0.5 hover:shadow-[1px_1px_0_0_#fff] transition-all">
                Join The Team
                <span className="bg-white text-goooey-blue rounded-full w-8 h-8 flex items-center justify-center border-2 border-goooey-yellow">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/f163ef0ba25a3b500917ca1a101bba9370622728?width=848"
              alt="Team member"
              className="w-80 md:w-96 lg:w-full max-w-md rounded-[42px]  transform rotate-[7deg] hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <div className="mt-12 flex justify-center lg:justify-start">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/72466b4e2a62f3dcd07cc4fe77af09350490d441?width=588"
            alt="Snacks"
            className="w-56 md:w-72 rounded-[42px]  transform -rotate-[6deg] hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}
function WhyWork() {
  return (
    <section className="relative bg-goooey-blue py-16 md:py-24 overflow-hidden">
      <svg
        className="absolute top-0 left-0 w-full h-24 -translate-y-full"
        preserveAspectRatio="none"
        viewBox="0 0 1440 100"
        fill="none"
      >
        <path
          d="M0 50C240 10 480 10 720 50C960 90 1200 90 1440 50V100H0V50Z"
          fill="#0441FE"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/18fc42915216c8fdc05412d009de1a382e1a1de8?width=848"
              alt="Happy team member"
              className="w-80 md:w-96 lg:w-full max-w-md rounded-[42px] transform -rotate-[7deg] hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="order-1 lg:order-2 space-y-6 text-center lg:text-left">
            <div>
              <h2 className="text-white font-bold text-3xl md:text-[42px] leading-tight uppercase">
                WHY WORK AT
              </h2>
              <h3 className="font-display text-5xl md:text-5xl text-goooey-blue text-stroke-white">
                Goooey?
              </h3>
            </div>

            <div className="space-y-3 text-white text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              <p className="text-goooey-yellow font-bold">
                Free Goooey Treats! (Yes, seriously!)
              </p>
              <p>
                <span className="font-bold">
                  A fun, fast-paced work environment
                </span>{" "}
                where every day is exciting.
              </p>
              <p>
                <span className="font-bold">Opportunities to grow</span> in a
                fast-rising snack brand.
              </p>
              <p>
                <span className="font-bold">
                  A team that feels like family—
                </span>{" "}
                because snacks taste better with friends!
              </p>
              <p className="text-goooey-yellow font-bold">
                Join the sweetest team around!
                <br />
                Apply today!
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <button className="bg-black text-white px-8 py-4 rounded-full font-bold inline-flex items-center gap-6 shadow-offset-white hover:translate-y-0.5 hover:shadow-[1px_1px_0_0_#fff] transition-all">
                Join The Team
                <span className="bg-white text-goooey-blue rounded-full w-8 h-8 flex items-center justify-center border-2 border-goooey-yellow">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinTeam;
