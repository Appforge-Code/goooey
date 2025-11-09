import Layout from "@/components/Layout";
import { useState } from "react";
import { Minus, Plus, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import CurvedLoop from "@/components/ui/CurvedLoop";
import SendShape from "@/components/ui/SandShape";

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
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("single");
  const [expandedSections, setExpandedSections] = useState({
    nutritional: false,
    storage: true,
    delivery: true,
    refund: true,
  });

  const productImages = [
    "https://api.builder.io/api/v1/image/assets/TEMP/5f943fcaa9e9431a499a67e57c1b033f9d72bb9b?width=186",
    "https://api.builder.io/api/v1/image/assets/TEMP/4df91203444f63a2439e0ae2fa081bb403a6e099?width=186",
    "https://api.builder.io/api/v1/image/assets/TEMP/362369a462bf63980a9d533cee479aea9e0bd057?width=186",
    "https://api.builder.io/api/v1/image/assets/TEMP/b33e1f0adcba46fffabeb85f32f63e28d918df5f?width=186",
    "https://api.builder.io/api/v1/image/assets/TEMP/d1e511bb9f54ab8c4ce26475817df221f7b73ef2?width=188",
    "https://api.builder.io/api/v1/image/assets/TEMP/027ba6e6adefda581b74d75d3d5c2eac9b996fc1?width=188",
    "https://api.builder.io/api/v1/image/assets/TEMP/734141312bd97f1e71926fc6d8a1c34c2c091f13?width=188",
    "https://api.builder.io/api/v1/image/assets/TEMP/7789cf12646d741c86c1333d55ae3d10adeeb9e8?width=186",
    "https://api.builder.io/api/v1/image/assets/TEMP/dbc3c93e4b51e1792db2e1219aa660ae4d4d1be6?width=186",
    "https://api.builder.io/api/v1/image/assets/TEMP/f0532f6d020cf63ac63c543764e861616c4a38e1?width=186",
    "https://api.builder.io/api/v1/image/assets/TEMP/7696ad5bf7caf546f56cc02b02f64058aab7b9e8?width=186",
    "https://api.builder.io/api/v1/image/assets/TEMP/9ca58f48c0b1e396aaaa09fb3709a867e8c4647d?width=186",
  ];

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <section className="relative bg-[#CCE7FF] bg-goooey-pale-blue py-20 pt-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="rounded-[42px] border border-black/20 p-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="space-y-8 overflow-y-auto max-h-[600px] pr-4">
              <div>
                <h1 className="text-4xl font-extrabold text-black capitalize mb-4">
                  Cookie Butter
                </h1>
                <div className="flex items-center gap-4 mb-6">
                  <p className="text-2xl font-bold text-black">$ 7.00</p>
                  <p className="text-sm text-black/60">
                    (4.9 stars) • 20 reviews
                  </p>
                </div>
              </div>

              <p className="text-base leading-relaxed text-black">
                The classic that started it all! A perfectly gooey blend of
                marshmallow and crispy rice, giving you that warm, nostalgic hug
                in every bite. "I'm a OG, it's only one me."
              </p>

              <div className="space-y-2">
                <p className="text-base leading-relaxed text-black whitespace-pre-line">
                  {`Marshmallows
Butter
Rice Krispy Cereal
Vanilla Extract
Sea Salt`}
                </p>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => toggleSection("nutritional")}
                  className="w-full flex items-center justify-between py-4 border-b border-black/20"
                >
                  <h3 className="text-lg font-extrabold text-black uppercase">
                    NUTRITIONAL FACTS
                  </h3>
                  {expandedSections.nutritional ? (
                    <Minus className="w-7 h-7 bg-white border-2 border-black border-full rounded-full" />
                  ) : (
                    <Plus className="w-7 h-7 bg-white border-2 border-black border-full rounded-full" />
                  )}
                </button>
                {expandedSections.nutritional && (
                  <p className="text-sm text-black/60 leading-relaxed">
                    Calories: 240 | Total Fat: 8g | Saturated Fat: 4.5g |
                    Cholesterol: 17mg | Sodium:94mg | Total Carbohydrates: 41.5g
                    | Sugars: 24g | Protein: 1g
                  </p>
                )}

                <button
                  onClick={() => toggleSection("storage")}
                  className="w-full flex items-center justify-between py-4 border-b border-black/20"
                >
                  <h3 className="text-lg font-extrabold text-black uppercase">
                    Storage Instructions
                  </h3>
                  {expandedSections.storage ? (
                    <Minus className="w-7 h-7 bg-white border-2 border-black border-full rounded-full" />
                  ) : (
                    <Plus className="w-7 h-7 bg-white border-2 border-black border-full rounded-full" />
                  )}
                </button>
                {expandedSections.storage && (
                  <p className="text-sm text-black/60 leading-relaxed whitespace-pre-line">
                    {`- Store in a cool, dry place.
- Best consumed within 7 days of opening.
- Keep frozen for up to 2 months for longer-lasting freshness.
- Thaw out for soft, gooey goodness.`}
                  </p>
                )}

                <button
                  onClick={() => toggleSection("delivery")}
                  className="w-full flex items-center justify-between py-4 border-b border-black/20"
                >
                  <h3 className="text-lg font-extrabold text-black uppercase">
                    Delivery information
                  </h3>
                  {expandedSections.delivery ? (
                    <Minus className="w-7 h-7 bg-white border-2 border-black border-full rounded-full" />
                  ) : (
                    <Plus className="w-7 h-7 bg-white border-2 border-black border-full rounded-full" />
                  )}
                </button>
                {expandedSections.delivery && (
                  <div className="text-sm text-black leading-relaxed space-y-2">
                    <p className="font-bold">
                      Gooey Treats – Made Fresh, Delivered Fast!
                    </p>
                    <p>
                      Craving freshly made, ultra-gooey treats? We've got you
                      covered! Whether you're ordering for nationwide shipping
                      or using DoorDash for instant local delivery, we make sure
                      your treats arrive fresh, fast, and gooeylicious!
                    </p>
                    <p className="font-bold">Nationwide Shipping</p>
                    <p>
                      📦{" "}
                      <span className="font-bold">Order before 2 PM PST –</span>{" "}
                      Your treats will be made fresh and shipped the same day.
                    </p>
                    <p>
                      📦{" "}
                      <span className="font-bold">Order after 2 PM PST –</span>{" "}
                      Your treats will be made fresh the next morning and
                      shipped that day before 5 PM PST.
                    </p>
                  </div>
                )}

                <button
                  onClick={() => toggleSection("refund")}
                  className="w-full flex items-center justify-between py-4"
                >
                  <h3 className="text-lg font-extrabold text-black uppercase">
                    Refund
                  </h3>
                  {expandedSections.refund ? (
                    <Minus className="w-7 h-7 bg-white border-2 border-black border-full rounded-full" />
                  ) : (
                    <Plus className="w-7 h-7 bg-white border-2 border-black border-full rounded-full" />
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/cf0f5c1b68650af3a16bebce81691a685780c1cd?width=800"
                  alt="Cookie Butter product"
                  className="w-full max-w-md mx-auto rounded-[42px]  shadow-2xl"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-2 bg-white rounded-full p-1.5 w-fit">
                <button
                  onClick={() => setActiveTab("single")}
                  className={`px-6 py-3 rounded-full text-base font-semibold transition-all ${
                    activeTab === "single"
                      ? "bg-goooey-blue text-white shadow-[1px_1px_0_0_#000]"
                      : "text-black/40"
                  }`}
                >
                  Single Product
                </button>
                <button
                  onClick={() => setActiveTab("packs")}
                  className={`px-6 py-3 rounded-full text-base font-semibold transition-all ${
                    activeTab === "packs"
                      ? "bg-goooey-blue text-white shadow-[1px_1px_0_0_#000]"
                      : "text-black/40"
                  }`}
                >
                  Product Packs
                </button>
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-4 gap-3">
                  {productImages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Product view ${index + 1}`}
                      className={`w-full aspect-square object-cover  ${
                        index === 0 ? "border-3 border-goooey-blue" : ""
                      }`}
                    />
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex items-center justify-between bg-black rounded-full p-1.5 flex-1">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-white text-2xl font-medium">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <button className="flex-1 bg-black text-white py-3 px-8 rounded-full font-semibold">
                      Add to Cart
                    </button>
                  </div>

                  <button className="w-full bg-goooey-blue text-white py-3 px-8 rounded-full font-bold uppercase shadow-[2px_4px_0_0_#FFF] hover:translate-y-0.5 hover:shadow-[1px_2px_0_0_#FFF] transition-all">
                    buy now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <CurvedLoop marqueeText="Be ✦ Creative ✦ With ✦ React ✦ Bits ✦" className="bg-black" /> */}
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
