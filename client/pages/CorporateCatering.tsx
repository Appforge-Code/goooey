import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function CorporateCatering() {
  return (
    <Layout>
      <HeroSection />
      <IntroSection />
      <HowItWorksSection />
      <FAQSection />
    </Layout>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/4d332e433516ea5dfa446fe5068e9cf55b1b0425?width=2880"
        alt="Corporate catering background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-goooey-blue/60"></div>

      <div className="relative z-10 container mx-auto px-6 py-32 flex flex-col items-center justify-center min-h-[600px]">
        <p className="text-white font-display text-base md:text-lg mb-2">
          make your event
        </p>
        <div className="text-center">
          <h1 className="font-extrabold text-5xl md:text-6xl lg:text-5xl text-white text-stroke-black uppercase leading-tight">
            extra sweet
            <br />
            with{" "}
            <span className="font-display text-5xl md:text-6xl lg:text-5xl text-goooey-cream text-stroke-black">
              Goooey
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="relative bg-goooey-blue py-20 md:py-32 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 1516"
        preserveAspectRatio="none"
      >
        <path
          d="M111.47 18.4221C36.0648 19.8095 -47.9785 69.417 -47.9785 69.417V1428.69C-47.9785 1428.69 420.708 1509.53 721.021 1509.43C1021.33 1509.33 1490.02 1428.17 1490.02 1428.17V15.6766C1490.02 15.6766 1435.38 76.5977 1388.55 76.5131C1324.54 76.3974 1326.53 11.4771 1262.6 8.42213C1194.64 5.17494 1189.81 49.3294 1122.14 55.8858C1043.89 63.4667 1033.74 1.58512 957.195 18.4221C884.396 34.4344 912.38 68.0971 840.233 86.4682C767.671 104.945 753.562 30.1038 678.785 37.914C628.113 43.2065 614.29 92.9384 563.323 94.434C483.446 96.7779 490.164 14.2731 410.372 18.4221C343.496 21.8996 344.501 62.6785 277.916 69.417C200.683 77.2328 189.146 16.993 111.47 18.4221Z"
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
          d="M1703.58 285.149C1703.58 285.149 1268.78 -7.01892 1144.07 97.624C1066.54 162.678 1158.42 291.564 1100.2 374.343C990.807 529.857 718.998 -15.9965 660.653 164.963C630.751 257.705 747.299 316.362 715.341 408.416C655.453 580.916 352.344 171.689 255.047 326.208C218.468 384.299 239.382 432.698 219.075 498.274C180.116 624.084 -201.654 577.842 -201.654 577.842"
          stroke="#FCE29E"
          strokeWidth="150"
          fill="none"
        />
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto mb-16 md:mb-24">
          <p className="text-2xl md:text-3xl font-bold text-[#654800] leading-tight text-left">
            Goooey Treats aren't just snacks—they're the highlight of any event!
            Whether you're hosting a corporate retreat, movie premieres, team
            celebration, or VIP event, our fresh, ooey-gooey treats make every
            occasion sweeter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          <div className="space-y-8 order-2 md:order-1">
            <div>
              <h3 className="text-4xl md:text-5xl mb-6 leading-tight">
                <span className="font-extrabold text-black">
                  Why Choose <br /> Goooey for{" "}
                </span>
                <br />
                <span className="font-display text-goooey-blue">Catering?</span>
              </h3>
            </div>

            <div className="space-y-4 text-base md:text-lg leading-relaxed">
              <p>
                <span className="font-bold">• Made Fresh to Order – </span>
                <span>Handcrafted and packed with love</span>
              </p>

              <p>
                <span className="font-bold">• Mix & Match Flavors – </span>
                <span>Create a variety box for every taste bud.</span>
              </p>

              <p>
                <span className="font-bold">• Perfect for Any Occasion – </span>
                <span>Office parties, conferences, and special events.</span>
              </p>

              <p>
                <span className="font-bold">• Hassle-Free – </span>
                <span>
                  We handle the sweet stuff, so you can enjoy the event!
                </span>
              </p>
            </div>

            <div>
              <button className="bg-goooey-blue text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold inline-flex items-center gap-4 md:gap-6 shadow-[2px_2px_0_0_#000] hover:translate-y-0.5 hover:shadow-[1px_1px_0_0_#000] transition-all">
                Our Flavours
                <span className="bg-black text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border border-white">
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </span>
              </button>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/c2fcafacc833f76a65fa8fb603f9c7585765a8d6?width=848"
              alt="Delicious Goooey treats"
              className="w-full max-w-md rounded-[42px]  transform -rotate-6 hover:rotate-0 transition-transform"
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
      title: "Pick Your Flavors",
      description: "Choose from our delicious lineup.",
    },
    {
      number: 2,
      title: "Secure Your Order",
      description: "A 50% deposit is required.",
    },
    {
      number: 3,
      title: "Plan Ahead",
      description:
        "We need a minimum 5-day notice to prepare your order fresh.",
    },
    {
      number: 4,
      title: "Enjoy the Goooey Goodness!",
      description: "",
      hasEffects: true,
    },
  ];

  return (
    <section className="relative bg-goooey-blue py-20 md:py-32 overflow-hidden">
      <svg
        className="absolute top-0 left-0 w-full opacity-10"
        viewBox="0 0 1440 1120"
        preserveAspectRatio="none"
      >
        <path
          d="M1501.92 1100.88C1501.92 1100.88 1372.41 593.289 1209.69 588.212C1108.53 585.055 1091.16 742.384 992.582 765.306C807.39 808.369 968.461 220.243 804.372 316.291C720.276 365.516 768.09 486.917 682.92 534.258C523.318 622.971 570.007 115.86 394.494 166.237C328.509 185.177 311.852 235.2 253.013 270.564C140.128 338.41 -113.715 49.5329 -113.715 49.5329"
          stroke="#809FFE"
          strokeOpacity="0.16"
          strokeWidth="150"
          fill="none"
        />
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl mb-2">
            <span className="font-extrabold text-white">how it</span>
          </h2>
          <h3 className="font-display text-4xl md:text-5xl text-goooey-cream">
            Works?
          </h3>
        </div>

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
                    <div className="w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-white bg-goooey-cream flex items-center justify-center p-12 md:p-16 shadow-xl">
                      <div className="text-center space-y-4 md:space-y-6">
                        <h3 className="text-3xl md:text-4xl font-extrabold text-white text-stroke-black leading-tight uppercase">
                          {step.title}
                        </h3>
                        {step.description && (
                          <p className="text-sm md:text-base font-semibold text-black leading-tight">
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
                  <div className="inline-flex items-center gap-2 bg-goooey-cream border-2 border-black rounded-full px-5 md:px-6 py-2 md:py-3 shadow-sm">
                    <span className="font-semibold text-black text-sm md:text-base">
                      Step
                    </span>
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm md:text-base">
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

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Can you customise order with company branding?",
      answer:
        "We use real tropical fruits, fresh dairy, and zero artificial flavours. Every batch is handcrafted in small quantities to maintain quality.",
    },
    {
      question: "What are the delivery options for large orders?",
      answer:
        "Our minimum wholesale order is 100 units. Bulk discounts apply for larger orders.",
    },
    {
      question: "How far in advance Should I place my catering orders?",
      answer: "Orders typically ship within 5-7 business days after approval.",
    },
    {
      question: "What's the minimum order for corporate catering?",
      answer:
        "Our minimum catering order starts at 50 units, perfect for small to large corporate events.",
    },
  ];

  return (
    <section className="relative bg-goooey-blue py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase mb-2">
            common
          </h2>
          <h3 className="font-display text-4xl md:text-5xl text-goooey-cream text-stroke-small">
            Questions
          </h3>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-goooey-cream rounded-3xl p-6 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full"
              >
                <div className="bg-goooey-blue text-white rounded-full px-6 py-4 flex items-center justify-between gap-4 shadow-[0_2px_30px_0_rgba(0,0,0,0.3),0_3px_0_0_#191919] hover:shadow-[0_1px_20px_0_rgba(0,0,0,0.3),0_2px_0_0_#191919] transition-all">
                  <span className="font-display text-left text-base md:text-lg leading-snug flex-1">
                    {faq.question}
                  </span>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_1.5px_0_0_#000]">
                    <svg
                      className={`w-6 h-6 transition-transform ${
                        openIndex === index ? "rotate-90" : ""
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 mt-6" : "max-h-0"
                }`}
              >
                <p className="text-[#191919] text-center font-medium text-base md:text-lg leading-relaxed px-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
