import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";

export default function Fundraising() {
  return (
    <Layout>
      <HeroSection />
      <IntroSection />
      <HowItWorksSection />
    </Layout>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[600px] overflow-hidden pt-20">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/4d332e433516ea5dfa446fe5068e9cf55b1b0425?width=2880"
        alt="Fundraising background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-goooey-blue/60"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-32 flex items-center justify-center min-h-[600px]">
        <h1 className="font-display text-6xl md:text-7xl text-goooey-blue text-stroke-white uppercase text-center">
          Fundraising
        </h1>
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="relative bg-goooey-blue py-32 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 1646"
        preserveAspectRatio="none"
      >
        <path
          d="M111.468 18.4221C36.0628 19.8095 -47.9805 69.417 -47.9805 69.417V1558.69C-47.9805 1558.69 420.706 1639.53 721.02 1639.43C1021.33 1639.33 1490.02 1558.17 1490.02 1558.17V15.6766C1490.02 15.6766 1435.38 76.5977 1388.55 76.5131C1324.54 76.3974 1326.52 11.4771 1262.59 8.42213C1194.64 5.17494 1189.81 49.3294 1122.14 55.8858C1043.89 63.4667 1033.74 1.58512 957.193 18.4221C884.394 34.4344 912.378 68.0971 840.231 86.4682C767.669 104.945 753.561 30.1038 678.783 37.914C628.111 43.2065 614.288 92.9384 563.321 94.434C483.444 96.7779 490.162 14.2731 410.371 18.4221C343.494 21.8996 344.499 62.6785 277.914 69.417C200.681 77.2328 189.144 16.993 111.468 18.4221Z"
          fill="#FED97C"
          stroke="white"
          strokeWidth="12"
        />
      </svg>

      <svg
        className="absolute top-0 left-0 w-full opacity-20"
        viewBox="0 0 1440 662"
        preserveAspectRatio="none"
      >
        <path
          d="M1703.6 285.149C1703.6 285.149 1268.79 -7.01892 1144.08 97.624C1066.56 162.678 1158.44 291.564 1100.21 374.343C990.824 529.857 719.016 -15.9965 660.671 164.963C630.769 257.705 747.317 316.362 715.358 408.416C655.47 580.916 352.362 171.689 255.065 326.208C218.485 384.299 239.399 432.698 219.092 498.274C180.133 624.084 -201.636 577.842 -201.636 577.842"
          stroke="#FCE29E"
          strokeWidth="150"
          fill="none"
        />
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto mb-20">
          <h2 className="font-extrabold text-5xl md:text-4xl text-goooey-blue text-stroke-white uppercase mb-12 text-left">
            THE SWEETEST WAY TO <br/> RAISE MONEY!
          </h2>

          <p className="text-3xl md:text-4xl font-bold text-[#654800] leading-tight text-left mb-16">
            Want to raise BIG money in a fun and delicious way? Say goodbye to boring
            carwashes and cookie-cutter fundraisers—Goooey Treats is here to make your
            fundraising easy, exciting, and most importantly, profitable! Perfect for
            schools, sports teams, churches, and community organizations, Goooey gives
            you a simple way to hit your fundraising goals while offering a treat everyone
            craves!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-5xl mb-4 uppercase">
                <span className="font-extrabold text-black">Why Choose <br/> Goooey for </span>
                <br/>
                <span className="font-display text-goooey-blue">Fundraising?</span>
              </h3>
            </div>

            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                <span className="font-bold">• Up to 50% Profit – </span>
                <span>Keep more money for your cause.</span>
              </p>

              <p>
                <span className="font-bold">• No Upfront Costs – </span>
                <span>Start selling with zero risk.</span>
              </p>

              <p>
                <span className="font-bold">• Super Easy to Sell – </span>
                <span>Who can say no to a delicious, ooey-gooey treat?</span>
              </p>

              <p>
                <span className="font-bold">• Fun & Interactive – </span>
                <span>Get your community excited about supporting your fundraiser!</span>
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/9836d3e08057e567ad64149ff1d6261b6c54a20c?width=830"
              alt="Fundraising treats"
              className="w-full rounded-[42px] border-goooey-cream transform rotate-6 hover:rotate-0 transition-transform"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/0c2f6b607078bf056af3525217f88b7e6a787661?width=621"
              alt="Happy fundraiser"
              className="w-2/3 ml-auto rounded-[42px]  border-goooey-cream transform -rotate-12 hover:rotate-0 transition-transform"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "sign up",
      description: "Register your school, team, or group for fundraising",
    },
    {
      number: 2,
      title: "start selling",
      description: "Use our easy online tools to promote and sell.",
    },
    {
      number: 3,
      title: "raise money fast",
      description: (
        <>
          Earn up to <span className="text-goooey-blue">50% of every sale</span> and
          hit your fundraising goals in no time!
        </>
      ),
    },
    {
      number: 4,
      title: "celebrate your success",
      description: "Earn up to 50% of every sale and hit your fundraising goals in no time!",
      hasEffects: true,
    },
  ];

  return (
    <section className="relative bg-goooey-blue py-32 overflow-hidden">
      <svg
        className="absolute top-0 left-0 w-full opacity-10"
        viewBox="0 0 1440 1120"
        preserveAspectRatio="none"
      >
        <path
          d="M1501.97 1100.88C1501.97 1100.88 1372.46 593.289 1209.75 588.212C1108.59 585.055 1091.22 742.384 992.639 765.306C807.447 808.369 968.517 220.243 804.429 316.291C720.333 365.516 768.147 486.917 682.976 534.258C523.374 622.971 570.064 115.86 394.551 166.237C328.566 185.177 311.909 235.2 253.069 270.564C140.185 338.41 -113.658 49.5329 -113.658 49.5329"
          stroke="#809FFE"
          strokeOpacity="0.16"
          strokeWidth="150"
          fill="none"
        />
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-2.5 bg-white rounded-full transform -translate-x-1/2 hidden md:block"></div>
          <div className="absolute left-1/2 top-0 h-20 w-2.5 bg-goooey-cream rounded-full transform -translate-x-1/2 hidden md:block"></div>

          <div className="grid gap-16 md:gap-24">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 flex justify-center">
                  <div className="relative">
                    <div className="w-96 h-96 rounded-full border-4 border-white bg-goooey-cream flex items-center justify-center p-16 shadow-xl">
                      <div className="text-center space-y-6">
                        <h3 className="text-3xl md:text-4xl font-extrabold text-white text-stroke-black leading-tight uppercase">
                          {step.title}
                        </h3>
                        <p className="text-base font-semibold text-black leading-tight">
                          {step.description}
                        </p>
                      </div>

                      {step.hasEffects && (
                        <div className="absolute inset-0 opacity-50 pointer-events-none">
                          <div className="absolute w-3 h-3 bg-[#FFE33F] rounded-full top-16 left-24"></div>
                          <div className="absolute w-3 h-3 bg-[#FFE33F] rounded-full top-20 left-52"></div>
                          <div className="absolute w-3 h-3 bg-[#86D520] rounded-full top-24 left-72"></div>
                          <div className="absolute w-3 h-3 bg-[#F51C61] rounded-full top-36 right-8"></div>
                          <div className="absolute w-3 h-3 bg-[#86D520] rounded-full top-28 left-36"></div>
                          <div className="absolute w-3 h-3 bg-[#86D520] rounded-full top-48 left-4"></div>
                          <div className="absolute w-3 h-3 bg-[#F51C61] rounded-full top-64 left-6"></div>
                          <div className="absolute w-3 h-3 bg-[#86D520] rounded-full bottom-16 right-8"></div>
                          <div className="absolute w-3 h-3 bg-[#F51C61] rounded-full bottom-12 right-32"></div>
                          <div className="absolute w-3 h-3 bg-[#86D520] rounded-full bottom-20 left-16"></div>

                          <svg
                            className="absolute top-0 left-8 w-10 h-12"
                            viewBox="0 0 38 43"
                            fill="none"
                          >
                            <path
                              d="M35.5317 7.08182C35.5317 7.08182 16.0382 -2.95836 10.7798 5.18617C4.97396 14.1787 30.1383 14.47 29.5517 25.1578C28.872 37.544 1.99965 40.9655 1.99965 40.9655"
                              stroke="#F51C61"
                              strokeWidth="4"
                              strokeLinecap="round"
                            />
                          </svg>

                          <svg
                            className="absolute top-32 right-8 w-8 h-12"
                            viewBox="0 0 31 50"
                            fill="none"
                          >
                            <path
                              d="M24.5934 2.00016C24.5934 2.00016 2.67589 2.65272 2.01797 12.3249C1.29155 23.0041 23.4511 11.0759 28.1123 20.7116C33.5142 31.8785 11.6577 47.8823 11.6577 47.8823"
                              stroke="#49B5FF"
                              strokeWidth="4"
                              strokeLinecap="round"
                            />
                          </svg>

                          <svg
                            className="absolute bottom-16 left-32 w-11 h-14"
                            viewBox="0 0 43 55"
                            fill="none"
                          >
                            <path
                              d="M40.8754 2.0892C40.8754 2.0892 17.4038 0.662286 12.842 9.21645C7.80521 18.6612 28.9236 23.4306 29.2292 34.13C29.5833 46.5299 2.00076 52.0497 2.00076 52.0497"
                              stroke="#49B5FF"
                              strokeWidth="4"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex justify-center md:justify-start">
                  <div className="inline-flex items-center gap-2 bg-goooey-cream border-2 border-black rounded-full px-6 py-3 shadow-sm">
                    <span className="font-semibold text-black">Step</span>
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">
                        {step.number}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-20">
          <button className="bg-[#191919] text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-6 border border-black shadow-[2px_2px_0_0_#FED97C] hover:translate-y-0.5 hover:shadow-[1px_1px_0_0_#FED97C] transition-all text-lg">
            Start Fundraising Now
            <span className="bg-goooey-blue text-white rounded-full w-8 h-8 flex items-center justify-center border border-white">
              <ArrowRight className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
