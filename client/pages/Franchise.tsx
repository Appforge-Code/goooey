import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import union from "/Images/Franchise/Union.png";

export default function Franchise() {
  return (
    <Layout>
      <HeroSection />
      <IntroSection />
      <FAQSection />
      <BottomCTASection />
    </Layout>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[600px] overflow-hidden pt-20">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/a88388b53b7c8637b96c385e213144a5379184d1?width=2880"
        alt="Franchise background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#D10E03]/50"></div>

      <div className="relative z-10 container mx-auto px-6 py-32 flex flex-col items-center justify-center min-h-[600px]">
        <p className="text-white font-display text-sm md:text-base mb-2 text-stroke-light text-center">
          Turn your city into a goooey destination
        </p>
        <div className="text-center max-w-2xl">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-goooey-blue text-stroke-white mb-6">
            Franchise
          </h1>
          <p className="text-white text-base md:text-lg font-semibold leading-relaxed">
            Owning a Goooey Factory means more than just selling treats—it's
            about creating a one-of-a-kind experience for your community!
            Imagine customers watching their treats being made, smelling the
            marshmallowy goodness, and leaving with fresh, warm, unforgettable
            Goooey Treats!
          </p>
        </div>
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="relative bg-[#D10E03] py-20 md:py-32 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 1061"
        preserveAspectRatio="none"
      >
        <path
          d="M111.468 18.4221C36.0628 19.8095 -47.9805 69.417 -47.9805 69.417V1048.69C-47.9805 1048.69 420.706 1054.53 721.02 1054.43C1021.33 1054.33 1490.02 1048.17 1490.02 1048.17V15.6766C1490.02 15.6766 1435.38 76.5977 1388.55 76.5131C1324.54 76.3974 1326.52 11.4771 1262.59 8.42213C1194.64 5.17494 1189.81 49.3294 1122.14 55.8858C1043.89 63.4667 1033.74 1.58512 957.193 18.4221C884.394 34.4344 912.378 68.0971 840.231 86.4682C767.669 104.945 753.561 30.1038 678.783 37.914C628.111 43.2065 614.288 92.9384 563.321 94.434C483.444 96.7779 490.162 14.2731 410.371 18.4221C343.494 21.8996 344.499 62.6785 277.914 69.417C200.681 77.2328 189.144 16.993 111.468 18.4221Z"
          fill="#FED97C"
          stroke="url(#paint0_linear)"
          strokeWidth="12"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="721.019"
            y1="8.25171"
            x2="720.998"
            y2="746.847"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <svg
        className="absolute top-0 left-0 w-full opacity-20"
        viewBox="0 0 1440 662"
        preserveAspectRatio="none"
      >
        <path
          d="M1703.59 285.149C1703.59 285.149 1268.79 -7.01892 1144.08 97.624C1066.55 162.678 1158.43 291.564 1100.2 374.343C990.817 529.857 719.008 -15.9965 660.663 164.963C630.761 257.705 747.309 316.362 715.35 408.416C655.462 580.916 352.354 171.689 255.057 326.208C218.478 384.299 239.391 432.698 219.084 498.274C180.125 624.084 -201.644 577.842 -201.644 577.842"
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
                  Why Choose Goooey for{" "}
                </span>
                <span className="font-display text-goooey-blue">
                  Franchise?
                </span>
              </h3>
            </div>

            <div className="space-y-4 text-base md:text-lg leading-relaxed">
              <p>
                <span className="font-bold">
                  • A fun, interactive dessert experience
                </span>
                <span> customers love.</span>
              </p>

              <p>
                <span className="font-bold">• High-demand product</span>
                <span> with a loyal fanbase.</span>
              </p>

              <p>
                <span className="font-bold">• Proven brand</span>
                <span> that stands out in the snack industry.</span>
              </p>

              <p className="font-bold">
                • Comprehensive training & operational guidance.
              </p>

              <p className="font-bold">
                • Marketing and brand development support.
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
            <div className="relative w-full max-w-md">
              <svg
                className="w-full h-auto"
                viewBox="0 0 453 435"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="franchisePattern"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <image
                      href={union}
                      x="0"
                      y="0"
                      width="1"
                      height="1"
                      preserveAspectRatio="xMidYMid slice"
                    />
                  </pattern>
                </defs>
                <path
                  d="M252.262 3.72473C368.473 17.9937 457.825 69.1107 451.835 117.898C450.483 128.906 444.391 138.854 434.434 147.498C442.004 158.293 445.509 169.419 444.157 180.428C442.806 191.436 436.713 201.384 426.756 210.027C434.327 220.823 437.831 231.95 436.479 242.958C435.128 253.967 429.036 263.914 419.078 272.557C426.649 283.353 430.153 294.48 428.802 305.489C427.45 316.497 421.358 326.444 411.401 335.088C418.972 345.884 422.476 357.01 421.124 368.019C415.134 416.806 316.069 444.789 199.858 430.52C83.6462 416.251 -5.70593 365.134 0.284352 316.347C1.63613 305.338 7.72746 295.39 17.6845 286.747C10.1142 275.951 6.61058 264.825 7.96212 253.816C9.3138 242.808 15.4051 232.859 25.3624 224.215C17.7924 213.42 14.2883 202.294 15.6399 191.286C16.9916 180.277 23.0829 170.328 33.0401 161.685C25.4702 150.889 21.966 139.764 23.3177 128.755C24.6693 117.747 30.7607 107.799 40.7178 99.1553C33.1476 88.3598 29.6438 77.2335 30.9954 66.225C36.9857 17.4381 136.05 -10.5443 252.262 3.72473Z"
                  fill="url(#franchisePattern)"
                />
              </svg>
            </div>
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
      question: "what does it take to become a franchisee?",
      answer:
        "We use real tropical fruits, fresh dairy, and zero artificial flavours. Every batch is handcrafted in small quantities to maintain quality.",
    },
    {
      question: "How long it take to open a goooey factory",
      answer:
        "Our minimum wholesale order is 100 units. Bulk discounts apply for larger orders.",
    },
    {
      question: "Do franchisees receive marketing support",
      answer: "Orders typically ship within 5-7 business days after approval.",
    },
    {
      question: "What type of training is included for franchise owners?",
      answer:
        "We provide comprehensive training covering operations, product preparation, customer service, and marketing strategies to ensure your success.",
    },
  ];

  return (
    <section className="relative bg-goooey-blue py-20 md:py-32 overflow-hidden">
      <svg
        className="absolute top-0 left-0 w-full"
        viewBox="0 0 1440 241"
        preserveAspectRatio="none"
      >
        <path
          d="M1497.96 9.49121L1502.4 10.2471C1502.4 10.2488 1502.39 10.2518 1502.39 10.2549C1502.39 10.2616 1502.39 10.2711 1502.39 10.2822C1502.38 10.3043 1502.38 10.335 1502.37 10.374C1502.36 10.4529 1502.34 10.5667 1502.31 10.7129C1502.26 11.0053 1502.18 11.4303 1502.07 11.9795C1501.85 13.0784 1501.52 14.6752 1501.06 16.7021C1500.14 20.7553 1498.68 26.5352 1496.55 33.501C1492.29 47.4192 1485.31 66.1438 1474.43 85.3184C1452.67 123.653 1414.99 164.259 1351.94 171.06C1311.74 175.396 1280.9 151.859 1252.19 131.289C1222.88 110.292 1195.78 92.3187 1161.1 101.438C1124.69 111.011 1105.27 132.341 1085.44 155.422C1065.63 178.48 1045.36 203.419 1007.5 217.244C974.763 229.202 950.345 224.074 930.636 210.207C911.383 196.661 896.909 174.927 883.295 154.695C869.395 134.038 856.456 115.07 840.091 104.815C832.066 99.7873 823.267 96.9073 813.105 97.04C802.888 97.1736 790.988 100.358 776.823 107.964C744.985 125.06 730.966 145.887 721.5 163.085C716.867 171.502 712.915 179.907 708.606 186.03C704.096 192.441 698.527 197.407 690.059 198.545C664.603 201.965 650.554 185.35 635.619 169.044C620.403 152.431 603.092 134.402 570.461 128.514C523.229 119.991 489.995 148.618 455.279 177.461C421.211 205.766 385.496 234.41 335.381 217.275C312.8 209.555 299.459 199.74 291.222 188.238C283.056 176.837 280.287 164.256 277.907 152.09C275.49 139.731 273.465 127.772 267.315 115.993C261.249 104.375 251.005 92.6868 231.723 81.6455C202.457 64.8875 171.372 64.5006 140.828 73.6367C110.182 82.8036 80.2739 101.518 53.8965 122.624C27.5548 143.702 4.95886 166.981 -11.0674 185.019C-19.0744 194.031 -25.4272 201.718 -29.7725 207.145C-31.9446 209.857 -33.6142 212.004 -34.7373 213.468C-35.2988 214.2 -35.7243 214.761 -36.0068 215.137C-36.1478 215.324 -36.2529 215.466 -36.3223 215.559C-36.357 215.605 -36.3829 215.64 -36.3994 215.662C-36.4074 215.673 -36.4133 215.681 -36.417 215.686C-36.4188 215.688 -36.42 215.69 -36.4209 215.691H-36.4219L-44.541 226.684V4.5H1502.46V9.86914L1502.4 10.2412L1497.96 9.49121Z"
          fill="#FED97C"
          stroke="white"
          strokeWidth="9"
        />
      </svg>
      <div className="container mt-32 mx-auto px-6 relative z-10">
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
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M13.9342 5.65723C13.9342 5.65723 15.2958 7.8103 16.6918 9.20166C18.0878 10.593 19.9434 11.6683 19.9434 11.6683C19.9434 11.6683 17.851 13.1645 16.6918 14.3239C15.5337 15.4823 14.039 17.5726 14.039 17.5726M3.40725 11.6683L19.778 11.6683" />
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

function BottomCTASection() {
  return (
    <section className="relative bg-goooey-blue py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="relative max-w-5xl mx-auto">
          <svg
            className="absolute inset-0 w-full h-full -z-10"
            viewBox="0 0 1252 478"
            preserveAspectRatio="none"
          >
            <path
              d="M1252 112.683C1252 280.135 960.447 478 628.944 478C297.441 478 0 280.135 0 112.683C0 -103.561 297.441 72.4357 628.944 72.4357C960.447 72.4357 1252 -114.744 1252 112.683Z"
              fill="#FED97C"
            />
          </svg>

          <div className="flex flex-col items-center gap-8 md:gap-12 py-16 md:py-24">
            <div className="relative -mt-20 md:-mt-32">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/9f1d978bfea6887b180f733e2f8e23b907499915?width=561"
                alt="Goooey treats"
                className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain transform -rotate-[23deg] animate-pulse"
              />
            </div>

            <div className="text-center max-w-3xl space-y-4 md:space-y-6">
              <p className="text-goooey-blue font-display text-sm md:text-base text-stroke-white">
                Turn your city into a goooey destination
              </p>

              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-goooey-blue text-stroke-white">
                Franchise
              </h2>

              <p className="text-black text-base md:text-lg font-semibold leading-relaxed px-4">
                Owning a Goooey Factory means more than just selling treats—it's
                about creating a one-of-a-kind experience for your community!
                Imagine customers watching their treats being made, smelling the
                marshmallowy goodness, and leaving with fresh, warm,
                unforgettable Goooey Treats!
              </p>
            </div>

            <button className="bg-goooey-blue text-white px-6 md:px-8 py-3 rounded-full font-semibold inline-flex items-center gap-4 md:gap-6 shadow-[2px_2px_0_0_#000] hover:translate-y-0.5 hover:shadow-[1px_1px_0_0_#000] transition-all">
              Get Notify
              <span className="bg-black text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border border-white">
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
