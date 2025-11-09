import Layout from "@/components/Layout";
import { useState } from "react";
import { ChevronDown, ChevronUp, ArrowRight, ArrowDown } from "lucide-react";

export default function Audition() {
  return (
    <Layout>
      <HeroSection />
      <BeTheFaceSection />
      <HowItWorksSection />
      <WhyAuditionSection />
      <FAQSection />
    </Layout>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden ">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/bbe598a51bc7e82aef0d216739ae0871f9c1551f?width=2880"
        alt="Audition background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-goooey-blue/60"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-32 flex items-center justify-center min-h-[600px]">
        <h1 className="font-display text-6xl md:text-7xl text-goooey-blue text-stroke-white uppercase text-center">
          Audition
        </h1>
      </div>
      
    </section>
  );
}

function BeTheFaceSection() {
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
          d="M1703.61 285.149C1703.61 285.149 1268.81 -7.01892 1144.1 97.624C1066.57 162.678 1158.45 291.564 1100.23 374.343C990.84 529.857 719.031 -15.9965 660.686 164.963C630.784 257.705 747.333 316.362 715.374 408.416C655.486 580.916 352.377 171.689 255.08 326.208C218.501 384.299 239.415 432.698 219.108 498.274C180.149 624.084 -201.621 577.842 -201.621 577.842"
          stroke="#FCE29E"
          strokeWidth="150"
          fill="none"
        />
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-4xl font-bold text-[#654800] leading-tight text-left">
            We're looking for fun, energetic, and charismatic personalities to be
            featured in our Goooey Treats commercials! Whether you're a natural in
            front of the camera or just love making people smile, this is your
            chance to shine!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h2 className="font-extrabold text-4xl text-goooey-blue text-stroke-white uppercase mb-4">
                what we are <br/> looking for
              </h2>
            </div>

            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                <span className="font-bold">• Kids, teens, and adults</span>
                <span> with big personalities and a love for sweet treats!</span>
              </p>

              <p>
                <span className="font-bold">• Energetic and expressive individuals</span>
                <span> who can bring the Goooey experience to life</span>
              </p>

              <p>
                <span className="font-bold">• No acting experience required—</span>
                <span>just be yourself and have fun!</span>
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/27af0216772cf170bb9e0a13ede3461c71fcb5d2?width=1103"
              alt="Group photo"
              className="w-full rounded-[42px] transform rotate-6 hover:rotate-0 transition-transform"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/30ec4db9877bbe1db369942cb764cd550b1da28e?width=621"
              alt="Person with treats"
              className="w-2/3 ml-auto rounded-[42px] transform -rotate-12 hover:rotate-0 transition-transform"
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
      title: "Submit Your Application",
      description: "Fill out the form and send us your info.",
    },
    {
      number: 2,
      title: "Audition Online or In-Person",
      description: "Show us your best Goooey enthusiasm!",
    },
    {
      number: 3,
      title: "Get Selected & Shine!",
      description: "If chosen, you'll be part of our next commercial!",
    },
    {
      number: 4,
      title: "Enjoy the Goooey Goodness!",
      description: "",
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
          d="M1502.01 1100.88C1502.01 1100.88 1372.5 593.289 1209.78 588.212C1108.62 585.055 1091.25 742.384 992.672 765.306C807.48 808.369 968.55 220.243 804.462 316.291C720.366 365.516 768.18 486.917 683.009 534.258C523.407 622.971 570.097 115.86 394.584 166.237C328.599 185.177 311.942 235.2 253.103 270.564C140.218 338.41 -113.625 49.5329 -113.625 49.5329"
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
                        <h3 className="text-3xl md:text-4xl font-extrabold text-white text-stroke-black leading-tight capitalize">
                          {step.title}
                        </h3>
                        {step.description && (
                          <p className="text-base font-semibold text-black leading-tight">
                            {step.description}
                          </p>
                        )}
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
      </div>
    </section>
  );
}

function WhyAuditionSection() {
  return (
    <section className="relative bg-goooey-cream py-32 overflow-hidden">
      <svg
        className="absolute bottom-0 left-0 w-full opacity-10"
        viewBox="0 0 311 580"
        preserveAspectRatio="none"
      >
        <path
          d="M159.378 353.537C196.087 304.434 261.304 325.013 294.384 273.395C364.586 163.851 187.95 -61.0832 82.8557 15.6266C19.7387 61.6964 95.7871 175.321 24.3439 206.998C-48.5991 239.341 -78.9441 110.278 -158.577 115.658C-302.935 125.411 -402.089 383.643 -282.22 464.785C-198.302 521.59 -121.984 394.595 -25.7405 426.272C57.8067 453.771 62.9315 609.341 143.715 574.683C223.268 540.552 107.555 422.858 159.378 353.537Z"
          fill="#809FFE"
          fillOpacity="0.16"
        />
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="relative">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/4149ef58a3be0a8bedee3015682b75e15b297d7e?width=830"
              alt="Person enjoying treats"
              className="w-full max-w-md rounded-[42px]transform -rotate-6 hover:rotate-0 transition-transform"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="font-extrabold text-5xl text-black uppercase mb-2">
                Why
              </h2>
              <h3 className="font-display text-4xl text-goooey-blue text-stroke uppercase">
                audition?
              </h3>
            </div>

            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                • Get featured in G<span className="font-bold">oooey Treats commercials and social media campaigns.</span>
              </p>
              <p>
                <span className="font-bold">• Show off your personality</span> in a fun, exciting environment.
              </p>
              <p>
                <span className="font-bold">• Be part of the Goooey brand</span> and make snack-time history!
              </p>
              <p className="font-bold mt-6">
                Think you've got what it takes? Apply now and become the face of Goooey!
              </p>
            </div>

            <button className="bg-goooey-blue text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-6 border border-black shadow-offset hover:translate-y-0.5 hover:shadow-[1px_1px_0_0_#000] transition-all text-lg">
              Apply Now
              <span className="bg-goooey-blue text-white rounded-full w-8 h-8 flex items-center justify-center border border-white">
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>

        <div className="mt-20 flex justify-center">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/a301d9f0a6a4410e7eda5522a1d7d367df7794dd?width=621"
            alt="Happy person"
            className="w-64 rounded-[42px] transform rotate-12 hover:rotate-0 transition-transform"
          />
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "How can actors selected for the commercials?",
      answer:
        "We use real tropical fruits, fresh dairy, and zero artificial flavours. Every batch is handcrafted in small quantities to maintain quality.",
    },
    {
      question: "Are auditions open to all locations?",
      answer:
        "Our minimum wholesale order is 100 units. Bulk discounts apply for larger orders.",
    },
    {
      question: "Do I need prior acting experience to audition?",
      answer:
        "Orders typically ship within 5-7 business days after approval.",
    },
    {
      question: "How often does goooey hold auditions?",
      answer: "",
    },
  ];

  return (
    <section className="relative bg-goooey-blue py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-bold text-5xl text-white uppercase mb-2">
            COMMON
          </h2>
          <h3 className="font-display text-5xl text-goooey-cream text-stroke-light">
            Questions
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-goooey-cream rounded-[32px] p-6 transition-all"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full flex items-center justify-between bg-goooey-blue text-white rounded-full px-6 py-4 shadow-[0_3px_0_0_#191919] gap-2"
              >
                <span className="font-display text-lg text-left flex-1">
                  {faq.question}
                </span>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_2px_0_0_#000] flex-shrink-0">
                  {openFAQ === index ? (
                    <ArrowDown className="w-5 h-5 text-black" />
                  ) : (
                    <ArrowRight className="w-5 h-5 text-black" />
                  )}
                </div>
              </button>
              {openFAQ === index && faq.answer && (
                <div className="mt-4 px-6">
                  <p className="text-center text-black text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}