import Layout from "@/components/Layout";
import { ArrowRight, MoveLeft, MoveRight, Sparkles } from "lucide-react";
import ReactPlayer from "react-player";
import eyes from "/Images/Home/eyes.svg";
import hero from "/Images/Home/hero.png";
import item from "/Images/Home/Item.png";
import gridImage from "/Images/Home/gridImage.png";

export default function Index() {
  return (
    <Layout>
      <HeroSection />
      <FeaturedSection />
      <ProductsSection />
      <PacksSection />
      <GallerySection />
      <ReviewsSection />
    </Layout>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-goooey-blue min-h-screen flex items-center overflow-hidden pt-32 pb-20">
      <svg
        className="absolute left-0 top-80 w-full h-auto opacity-10 pointer-events-none"
        viewBox="0 0 1440 496"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M1772.26 390.699C1772.26 390.699 1389.45 33.1031 1249.69 116.582C1162.8 168.479 1233.02 310.337 1162.37 382.803C1029.64 518.942 848.096 -63.1893 761.716 106.189C717.446 192.995 823.183 269.441 776.992 355.241C690.434 516.022 456.261 63.7997 335.63 200.879C290.278 252.415 303.229 303.523 272.752 365.036C214.281 483.049 -155.276 376.685 -155.276 376.685"
          stroke="#FCE29E"
          strokeWidth="150"
        />
      </svg>
      <svg
        className="absolute bottom-0 left-0 w-full opacity-10"
        viewBox="0 0 1440 384"
        preserveAspectRatio="none"
      >
        <path
          d="M-118 543.259C-118 543.259 153.145 121.973 285 201.259C371.733 253.413 302.008 381.429 384 440.759C538.035 552.22 617.451 -52.3701 731.5 99.759C789.95 177.726 698.829 271.112 759 347.759C871.755 491.387 1025.22 5.80524 1167.5 120.259C1220.99 163.288 1189.69 281.932 1257.5 271.259C1297.64 264.941 1491.5 170.259 1491.5 170.259"
          stroke="rgba(128, 159, 254, 0.16)"
          strokeWidth="150"
          fill="none"
        />
      </svg>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <Sparkles
          className="absolute -top-0 -left-4 w-6 h-6 hidden sm:block"
          fill="white"
        />
        <Sparkles
          className="absolute -bottom-0 -right-4 w-6 h-6 hidden sm:block"
          fill="white"
        />
        <div className="space-y-6 max-w-2xl">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
            Rice Crispy Treats Stick with You
          </h1>
          <p className="text-white text-lg leading-relaxed max-w-lg">
            Elevate your snack game with our handcrafted rice crispy treats.
            Made fresh with real ingredients and a dash of whimsy, every bite is
            an adventure in gooey goodness.
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-full font-bold inline-flex items-center gap-6 shadow-offset-white hover:translate-y-0.5 hover:shadow-[1px_1px_0_0_#fff] transition-all">
            See All Product
            <span className="bg-white text-goooey-blue rounded-full w-8 h-8 flex items-center justify-center border-2 border-goooey-yellow">
              <ArrowRight className="w-4 h-4" />
            </span>
          </button>

          <svg
            className="mt-8"
            width="274"
            height="82"
            viewBox="0 0 274 82"
            fill="none"
          >
            <path
              d="M0.450369 79.2183C-0.0110821 79.5217 -0.139167 80.1418 0.164282 80.6033C0.467731 81.0647 1.08781 81.1928 1.54926 80.8894L0.999813 80.0538L0.450369 79.2183Z"
              fill="#FFEB7A"
            />
          </svg>
        </div>

        <div className="relative h-[500px] hidden md:block">
          <div className="relative flex justify-center items-center h-[500px] overflow-hidden">
            {/* Background blurred card */}
            <div className="absolute w-[350px] h-[467px] rounded-[40px] overflow-hidden scale-95 translate-x-10 rotate-45 translate-y-5 blur-sm opacity-70">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/b9930d324c2136b09df124d544a53a70a6b6ad5c?width=700"
                alt="Background Treat"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Foreground card */}
            <div className="relative w-[350px] h-[467px] rounded-[40px] overflow-hidden transition-transform duration-300 hover:rotate-2 hover:scale-105">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/b9930d324c2136b09df124d544a53a70a6b6ad5c?width=700"
                alt="Rice Crispy Treat"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="absolute -bottom-12 right-12 flex gap-4">
            <button className="text-4xl bg-white/70 border border-goooey-yellow rounded-full w-14 h-14 flex items-center justify-center hover:bg-white transition-colors">
              <MoveLeft />
            </button>
            <button className="text-4xl bg-white border border-goooey-yellow rounded-full w-14 h-14 flex items-center justify-center hover:bg-white/90 transition-colors">
              <MoveRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedSection() {
  return (
    <section className="relative bg-goooey-cream py-32 overflow-hidden">
      <div className="container mx-auto px-6 max-sm:px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div className="flex justify-center items-center w-full md:hidden">
            <img src={eyes} alt="Eyes Graphic" className="object-fit center" />
          </div>
          <div>
            <h2 className="font-display text-4xl md:text-5xl max-sm:text-center">
              <span className="text-black">Goooey </span>
              <span className="text-goooey-blue">
                Featured <br /> on
              </span>
              <span className="text-black"> KTLA 5's</span>
            </h2>
          </div>

          <img
            src={eyes}
            alt="Eyes Graphic"
            className="object-fit max-sm:hidden"
          />
          <p className="text-black text-right font-semibold max-w-md leading-relaxed max-sm:text-center">
            On the May 27 episode of Off the Clock on KTLA 5, Goooey founders
            Mich sat down with anchors Chris Schauble, Megan Henderson, and Kirk
            Hawkins to share the sweet story behind their viral rice crispy
            treat brand.
          </p>
        </div>

        <div className="relative flex justify-center items-center aspect-video overflow-hidden">
          <VimeoPlayer />
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
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
    <section className="relative bg-goooey-blue py-32 overflow-hidden">
      <svg
        className="absolute top-0 left-0 w-full opacity-10"
        viewBox="0 0 1440 795"
        preserveAspectRatio="none"
      >
        <path
          d="M-65.6601 764.058C-65.6601 764.058 135.204 305.086 277.969 362.447C371.879 400.178 323.349 537.636 413.717 583.204C583.486 668.812 565.965 59.2802 702.708 191.386C772.789 259.091 697.639 365.753 769.21 431.881C903.326 555.799 977.8 52.0174 1136.44 142.446C1196.08 176.443 1200.99 228.439 1249.26 277.252C1333.5 362.447 1588 47.1244 1588 47.1244"
          stroke="rgba(128, 159, 254, 0.16)"
          strokeWidth="150"
          fill="none"
        />
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-white max-sm:text-center">
            <span>Explore </span>
            <span className="text-goooey-yellow">
              Our <br /> Favourite{" "}
            </span>
            <span>Taste</span>
          </h2>
          <p className="text-white text-right max-w-xs leading-relaxed max-sm:text-center">
            Explore our mouthwatering menu filled with flavourful options to
            satisfy every craving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex justify-center items-center relative h-[505px] rounded-[42px] mx-8 text-center space-y-6 overflow-hidden 
                 transition-transform duration-300 hover:scale-105 group"
            >
              {/* Hover White Background from Bottom */}
              <div
                className="absolute z-10 bottom-0 left-0 w-full h-0 bg-white rounded-t-full flex flex-col justify-center items-center transition-all duration-500 ease-out 
                   group-hover:h-1/2"
              >
                <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {product.name}
                  </h3>
                  <button className="bg-[#FFD800] text-black px-2 py-2 rounded-full font-bold inline-flex items-center gap-6 shadow-offset hover:translate-y-0.5 hover:shadow-[1px_1px_0_0_#000] transition-all">
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-1">
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

        <div className="text-center">
          <button className="bg-goooey-cream text-black px-8 py-4 rounded-full font-bold inline-flex items-center gap-6 shadow-offset hover:translate-y-0.5 hover:shadow-[1px_1px_0_0_#000] transition-all">
            Show All Product
            <span className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center border-2 border-goooey-yellow">
              <ArrowRight className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>
      <div
        className="absolute top-0 left-0 right-0 h-32 bg-goooey-cream"
        style={{ clipPath: "ellipse(70% 100% at 50% 0%)" }}
      />
    </section>
  );
}

function PacksSection() {
  const packs = [
    {
      size: "10",
      price: "$55",
      description: "2 OF EACH FLAVOR (10 TOTAL)\n$5.50 PER TREAT",
    },
    {
      size: "20",
      price: "$100",
      description: "2 OF EACH FLAVOR (20 TOTAL)\n$5.00 PER TREAT - SAVE $10",
    },
    {
      size: "30",
      price: "$135",
      description: "3 OF EACH FLAVOR (30 TOTAL)\n$4.50 PER TREAT - SAVE $30",
    },
    {
      size: "50",
      price: "$200",
      description: "5 OF EACH FLAVOR (50 TOTAL)\n$4.00 PER TREAT - SAVE $75",
    },
    {
      size: "100",
      price: "$350",
      description: "10 OF EACH FLAVOR (100 TOTAL)\n$3.50 PER TREAT - SAVE $200",
    },
    {
      size: "200",
      price: "$650",
      description: "20 OF EACH FLAVOR (200 TOTAL)\n$3.25 PER TREAT - SAVE $450",
    },
  ];

  return (
    <section className="relative bg-goooey-cream py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-stroke-white text-4xl md:text-5xl mb-6">
            <span className="text-black ">Buy </span>
            <span className="text-goooey-blue">Packs</span>
          </h2>
          <p className="text-black leading-relaxed font-semibold">
            Whether you're throwing a party, surprising the office, or just
            really love treats (we get it), our Goooey packages let you save big
            while getting your fix. The more you buy, the more you save—so go
            ahead, treat yourself (and a few lucky others).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packs.map((pack, index) => (
            <div
              key={index}
              className="flex justify-center items-center relative bg-goooey-blue h-[505px] rounded-[42px] p-8 text-center space-y-6 overflow-hidden 
                 transition-transform duration-300 hover:scale-105 group"
            >
              {/* Hover White Background from Bottom */}
              <div
                className="absolute z-10 bottom-0 left-0 w-full h-0 bg-white rounded-t-full transition-all duration-500 ease-out 
                   group-hover:h-1/2"
              >
                {/* hover details */}
                <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-black font-bold text-2xl uppercase">
                    Price
                  </p>
                  <p className="font-display text-5xl text-goooey-yellow text-stroke-light">
                    {pack.price}
                  </p>
                  <p className="text-black font-bold text-sm leading-relaxed whitespace-pre-line uppercase">
                    {pack.description}
                  </p>
                  <button
                    className="bg-black text-white px-8 py-3 rounded-full font-bold shadow-[0_2px_0_0_#FFD800] 
                             hover:translate-y-0.5 hover:shadow-[0_1px_0_0_#FFD800] transition-all"
                  >
                    Order Now
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-1">
                <h3 className="font-display text-6xl md:text-7xl text-goooey-yellow text-stroke-black">
                  {pack.size} <br /> PACK
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const images = [
    {
      src: gridImage,
      alt: "Man holding gooey treat",
      aspect: "aspect-[3/4]",
      className: "lg:mt-16",
    },
    {
      src: item,
      alt: "Rice krispy treat in pan",
      aspect: "aspect-square",
      className: "",
    },
    {
      src: item,
      alt: "Woman in store",
      aspect: "aspect-[3/4]",
      className: "lg:mt-16",
    },
    {
      src: item,
      alt: "Three bowls of treats",
      aspect: "aspect-[4/3]",
      className: "",
    },
    {
      src: item,
      alt: "Gooey logo",
      aspect: "aspect-[3/4]",
      className: "lg:mt-[-4rem]", // Negative margin to pull it up
    },
    {
      src: item,
      alt: "Treat with sprinkles",
      aspect: "aspect-square",
      className: "",
    },
  ];
  return (
    <section className="relative bg-goooey-cream py-32 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-display text-stroke-white text-4xl md:text-5xl mb-4">
          <span className="font-bold text-black">Get stuck </span>
          <br />
          <span className="text-goooey-blue">on goooey</span>
        </h2>
        <svg
          className="absolute left-0 top-60 w-full h-auto opacity-40 pointer-events-none z-1"
          viewBox="0 0 1440 496"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M1772.26 390.699C1772.26 390.699 1389.45 33.1031 1249.69 116.582C1162.8 168.479 1233.02 310.337 1162.37 382.803C1029.64 518.942 848.096 -63.1893 761.716 106.189C717.446 192.995 823.183 269.441 776.992 355.241C690.434 516.022 456.261 63.7997 335.63 200.879C290.278 252.415 303.229 303.523 272.752 365.036C214.281 483.049 -155.276 376.685 -155.276 376.685"
            stroke="#FCE29E"
            strokeWidth="150"
          />
        </svg>

        {/* Main Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {images.map((image, index) => (
              <ImageCard
                key={index}
                src={image.src}
                alt={image.alt}
                aspect={image.aspect}
                className={image.className}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  const reviews = [
    {
      name: "Jenny S.",
      role: "Food Vlogger",
      review:
        "Goooey's strawberry explosion is my new obsession! Every bite bursts with flavor, and I love how they're so soft and chewy. My kids keep stealing them, so I'm ordering more!",
      bg: "bg-white",
      textColor: "text-black",
      rotate: "rotate-6",
    },
    {
      name: "Mark T.",
      role: "Office Manager",
      review:
        "Ordered these for our team meeting and they were a huge hit! Everyone loved them and kept asking where I got them. Will definitely order again!",
      bg: "bg-black",
      textColor: "text-white",
      rotate: "-rotate-3",
    },
    {
      name: "Sarah L.",
      role: "Mom of 3",
      review:
        "These treats are amazing! My kids absolutely love them and I feel good knowing they're made with quality ingredients. The cookie butter flavor is our favorite!",
      bg: "bg-goooey-yellow",
      textColor: "text-black",
      rotate: "rotate-12",
    },
    {
      name: "David K.",
      role: "Event Planner",
      review:
        "Perfect for parties and events! They look great, taste amazing, and guests always ask about them. The packaging is also super cute!",
      bg: "bg-blue-400",
      textColor: "text-white",
      rotate: "-rotate-6",
    },
  ];

  return (
    <section className="relative bg-goooey-blue py-32 overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-32 bg-goooey-cream"
        style={{ clipPath: "ellipse(70% 100% at 50% 0%)" }}
      />
      <div className="container mx-auto px-6 pt-10">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl text-white mb-2">
            Sticky Sweet Love
          </h2>
          <p className="font-display text-4xl md:text-5xl text-goooey-cream text-stroke-light">
            From our fans
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`${review.bg} ${review.textColor} rounded-[42px] border-4 border-white p-8 shadow-[-27px_22px_60px_0_rgba(0,0,0,0.16)] ${review.rotate} hover:rotate-0 transition-transform`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-300"></div>
                <div>
                  <h3 className="font-bold text-xl">{review.name}</h3>
                  <p className={`text-sm ${review.textColor} opacity-60`}>
                    {review.role}
                  </p>
                </div>
              </div>
              <p className="text-6xl mb-4">"</p>
              <p className="leading-relaxed">{review.review}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-12">
          <button className="bg-white/70 border border-goooey-yellow rounded-full w-14 h-14 flex items-center justify-center text-4xl hover:bg-white transition-colors">
            <MoveLeft />
          </button>
          <button className="bg-white border border-goooey-yellow rounded-full w-14 h-14 flex items-center justify-center text-4xl hover:bg-white/90 transition-colors">
            <MoveRight />
          </button>
        </div>
      </div>
    </section>
  );
}

const ImageCard = ({ src, alt, aspect, className = "" }) => {
  return (
    <div className={`w-full  ${className}`}>
      <div className="bg-white p-1.5 rounded-[3rem] shadow-lg transition-transform duration-300 hover:scale-105 hover:rotate-[-2deg]">
        <div className=" rounded-[2.8rem]">
          <img
            src={src}
            alt={alt}
            className={`w-full h-full object-cover rounded-[2.5rem] ${aspect}`}
          />
        </div>
      </div>
    </div>
  );
};

function VimeoPlayer() {
  return (
    <div className="w-full h-full md:w-[80%] md:h-[80%] rounded-2xl overflow-hidden border-4 border-white">
      <ReactPlayer
        src="https://vimeo.com/1088544333"
        playing
        controls
        width="100%"
        height="100%"
      />
    </div>
  );
}
