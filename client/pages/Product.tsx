import Layout from "@/components/Layout";
import { useState } from "react";
import item from "/Images/Home/Item.png";

export default function Product() {
  return (
    <Layout>
      <ProductHeroSection />
      <WhyGoooeySection />
      <FAQSection />
    </Layout>
  );
}

function ProductHeroSection() {
  const products = [
    {
      name: "The OG original",
      image: item,
      price: "55",
    },
    {
      name: "Cookie Butter",
      image: item,
      price: "55",
    },
    {
      name: "Cookie Monster",
      image: item,
      price: "55",
    },
    {
      name: "Strawberry Shortcake",
      image: item,
      price: "55",
    },
    {
      name: "Cookie Monster",
      image: item,
      price: "55",
    },
    {
      name: "Creamy Banana Crunch",
      image: item,
      price: "55",
    },
  ];
  return (
    <section className="relative bg-goooey-blue py-20 pt-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
            <span className="text-white block">
              {" "}
              Explore <span className="text-goooey-yellow ">Our</span>
            </span>
            <span className="text-goooey-yellow block">
              Favourite <span className="text-white">Taste</span>
            </span>
          </h1>

          {/* Description */}
          <p className="text-white text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Explore our mouthwatering menu filled with flavourful options to
            satisfy every craving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-6 ">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex justify-center items-center relative h-[505px] rounded-[42px]  mx-8 text-center space-y-6 overflow-hidden 
                 transition-transform duration-300 hover:scale-105 group"
            >
              {/* Hover White Background from Bottom */}
              <div
                className="absolute z-10 bottom-0 left-0 w-full h-0 bg-white rounded-t-full flex flex-col justify-center items-center transition-all duration-500 ease-out 
                   group-hover:h-1/2"
              >
                <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="font-display text-2xl font-semibold text-gray-900 mb-4">
                    {product.name}
                  </h3>
                  <button className="bg-[#FFD800] text-black px-2 py-2 rounded-full font-bold inline-flex items-center gap-6 shadow-offset hover:translate-y-0.5 hover:shadow-[1px_1px_0_0_#000] transition-all">
                    Order Now
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-1 ">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {/* Price Tag */}
                <div className="absolute top-4 left-4 bg-white text-gray-900 text-lg font-semibold px-4 py-1 rounded-full shadow-md">
                  ${product.price}.00
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyGoooeySection() {
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
        viewBox="0 0 1440 496"
        preserveAspectRatio="none"
      >
        <path
          d="M1772.26 390.699C1772.26 390.699 1389.45 33.1031 1249.69 116.582C1162.8 168.479 1233.02 310.337 1162.37 382.803C1029.64 518.942 848.096 -63.1893 761.716 106.189C717.446 192.995 823.183 269.441 776.992 355.241C690.434 516.022 456.261 63.7997 335.63 200.879C290.278 252.415 303.229 303.523 272.752 365.036C214.281 483.049 -155.276 376.685 -155.276 376.685"
          stroke="#FCE29E"
          strokeWidth="150"
          fill="none"
        />
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h2 className="font-extrabold text-5xl text-black uppercase mb-2">
                why
              </h2>
              <h3 className="font-display text-5xl text-goooey-blue text-stroke">
                Goooey
              </h3>
            </div>

            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                <span className="font-bold">Handcrafted with Love </span>
                <span>
                  – Each treat is made with high-quality ingredients and a{" "}
                </span>
                <span className="font-bold">
                  perfect balance of crispy and gooey.
                </span>
              </p>

              <p>
                <span className="font-bold">One-of-a-Kind Flavours – </span>
                <span>We take the classic marshmallow treat and </span>
                <span className="font-bold">push the boundaries</span>
                <span> </span>
                <span className="font-bold">of flavour innovation.</span>
              </p>

              <p>
                <span className="font-bold">Community First –</span>
                <span>
                  {" "}
                  We believe in giving back, supporting local initiatives, and
                  making every moment sweeter.
                </span>
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/57778ce5da0c38d2b44d6239d22ff3a0b9768971?width=848"
              alt="Goooey treats variety"
              className="w-full rounded-[42px] transform rotate-6 hover:rotate-0 transition-transform"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/c0ab3f49ec44afe514e012a94cae89b2570bd5c9?width=764"
              alt="Making treats"
              className="w-3/4 ml-auto rounded-[42px]  transform -rotate-6 hover:rotate-0 transition-transform"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do you ship?",
      answer:
        "We use real tropical fruits, fresh dairy, and zero artificial flavours. Every batch is handcrafted in small quantities to maintain quality.",
    },
    {
      question: "Do you offer exclusive product bundles for wholesale?",
      answer:
        "Yes! We provide custom product bundles tailored to your store's needs",
    },
    {
      question: "Can i buy in bulk for events or to sell at my location?",
      answer:
        "Yes! We offer bulk and wholesale orders. Just reach out through our wholesale page to get started.",
    },
    {
      question: "Can i get marketing materials to help promote goooey treats?",
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
                className="w-full flex items-center justify-between bg-goooey-blue text-white rounded-full px-6 py-4 shadow-[0_3px_0_0_#191919]"
              >
                <span className="font-display text-lg text-left">
                  {faq.question}
                </span>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-[0_1.5px_0_0_#000] flex items-center justify-center flex-shrink-0">
                  <svg
                    className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 ${openFAQ === index ? "rotate-90" : ""}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
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
