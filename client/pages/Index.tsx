import Layout from "@/components/Layout";
import { ArrowRight, MoveLeft, MoveRight, Sparkles } from "lucide-react";
import ReactPlayer from "react-player";
import eyes from "/Images/Home/eyes.svg";
import treat1 from "/Images/Home/treat1.png";
import treat2 from "/Images/Home/treat2.png";
import treat3 from "/Images/Home/treat3.png";
import treat4 from "/Images/Home/treat4.png";
import packs from "/Images/Home/packs.png";
import item from "/Images/Home/Item.png";
import dripBottom from "/Images/Home/drip-bottom.png";
import gridImage from "/Images/Home/gridImage.png";

export default function Index() {
  return (
    <Layout>
      <HeroSection />
      <FeaturedSection />
      <ProductsSection />
      <PacksSection />
      <MomentSharedSection />
      <ReviewsSection />
    </Layout>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-goooey-blue min-h-screen flex items-center justify-center overflow-hidden py-24">
      {/* Background Gooey Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
        <h1 className="font-display  text-[18rem] font-bold text-transparent text-outline-gooey select-none leading-none">
          Goooey
        </h1>
        <h1 className="font-display  text-[18rem] font-bold text-transparent text-outline-gooey select-none leading-none">
          Goooey
        </h1>
      </div>

      <div className="container mx-auto mt-10 relative z-10 text-center max-w-3xl">
        {/* Floating Treat Images */}
        <div>
          <img
            src={treat1}
            width={360}
            height={360}
            alt="Treat Left"
            className="absolute -left-20 top-80 hidden md:block drop-shadow-xl"
          />
          <img
            src={treat2}
            width={320}
            height={320}
            alt="Green Treat Right"
            className="absolute -right-40 top-50 hidden md:block drop-shadow-xl"
          />
          <img
            src={treat4}
            width={90}
            height={90}
            alt="Tiny Treat"
            className="absolute left-[5%] top-50 hidden md:block drop-shadow-lg"
          />
          <img
            src={treat3}
            width={150}
            height={150}
            alt="Tiny Treat"
            className="absolute right-[0%] bottom-0 hidden md:block drop-shadow-lg"
          />
        </div>

        {/* Heading */}
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
          <span className="text-white block">Rice Crispy</span>
          <span className="text-goooey-yellow block">Treats That Stick</span>
          <span className="text-white block">with You</span>
        </h1>

        {/* Description */}
        <p className="text-white text-lg leading-relaxed max-w-xl mx-auto mb-10">
          Elevate your snack game with our handcrafted rice crispy treats. Made
          fresh with real ingredients and a dash of whimsy, every bite is an
          adventure in gooey goodness.
        </p>

        

        {/* CTA Button */}
        <button className="bg-black text-white px-8 py-4 rounded-full font-bold inline-flex items-center gap-6 shadow-offset-white hover:translate-y-0.5 hover:shadow-[1px_1px_0_0_#fff] transition-all">
          Order Now
          <span className="bg-white text-goooey-blue rounded-full w-8 h-8 flex items-center justify-center border-2 border-goooey-yellow">
            <ArrowRight className="w-4 h-4" />
          </span>
        </button>
      </div>
    </section>
  );
}

function FeaturedSection() {
  return (
    <section className="relative  py-32 overflow-hidden">
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
                  <h3 className="font-display text-2xl font-semibold text-gray-900 mb-4">
                    {product.name}
                  </h3>
                  <button className="bg-[#FFD800] text-black px-2 py-2 rounded-full font-bold inline-flex items-center gap-6 shadow-offset hover:translate-y-0.5 hover:shadow-[1px_1px_0_0_#000] transition-all">
                    Order Now
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
    </section>
  );
}

function PacksSection() {
  return (
    <section className="relative bg-goooey-cream py-32 overflow-hidden">
      {/* Floating Treats */}
      <img
        src={treat4}
        alt="Treat Left Top"
        width={210}
        height={210}
        className="absolute left-6 top-24 rotate-[-10deg] drop-shadow-xl"
      />

      <img
        src={treat3}
        alt="Treat Right Top"
        width={210}
        height={210}
        className="absolute right-6 top-24 rotate-[10deg] drop-shadow-xl"
      />

      <img
        src={treat2}
        alt="Treat Left Bottom"
        width={220}
        height={220}
        className="absolute left-10 bottom-32 rotate-[5deg] drop-shadow-xl"
      />

      <img
        src={treat2}
        alt="Treat Right Bottom"
        width={200}
        height={200}
        className="absolute right-10 bottom-36 rotate-[-5deg] drop-shadow-xl"
      />

      {/* Background Gooey Outline */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.08] pointer-events-none">
        <h1 className="font-display text-[20rem] text-transparent text-outline-gooey select-none leading-none">
          GOOEY
        </h1>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
        {/* Heading */}
        <h2 className="font-display text-5xl md:text-6xl mb-4 font-bold">
          <span className="text-black">BUY PACKS!</span>
        </h2>

        <h3 className="font-display text-4xl md:text-5xl text-goooey-blue font-bold mb-6">
          STARTING AT $55
        </h3>

        {/* Description */}
        <p className="text-black text-lg leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
          Whether you're throwing a party, surprising the office, or just really
          love treats (we get it), our Goooey packages let you save big while
          getting your fix. The more you buy, the more you save—so go ahead,
          treat yourself (and a few lucky others).
        </p>

        {/* CTA */}
        <button className="bg-black text-white px-10 py-4 rounded-full font-bold inline-flex items-center gap-4 shadow-[0_3px_0_0_#FFD800] hover:translate-y-0.5 hover:shadow-[0_1px_0_0_#FFD800] transition-all">
          Order Now
          <span className="bg-white text-goooey-blue rounded-full w-9 h-9 flex items-center justify-center border-2 border-goooey-yellow">
            <ArrowRight className="w-4 h-4" />
          </span>
        </button>

        {/* Packaging Image */}
        <div className="relative mt-20">
          <img
            src={packs}
            alt="Goooey Packs"
            width={1100}
            height={700}
            className="mx-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

function MomentSharedSection() {
  const cards = [
    {
      header: "Sweetest Bite",
      img: gridImage,
      username: "@foodielife",
      caption:
        "Who’s craving that OG Goooey?! 🫶 Watch the magic happen—made fresh daily inside Topanga Social at Westfield Topanga Mall!",
    },
    {
      header: "Sweetest Bite",
      img: gridImage,
      username: "@jackielong",
      caption: "10/10 Rice Krispy Treats at @goooeytreats",
    },
    {
      header: "Sweetest Bite",
      img: gridImage,
      username: "@morganchomps",
      caption:
        "Just dropped her B’day Cake Goooey and it’s a straight-up party in your mouth! 🎉",
    },
  ];
  return (
    <section className="relative bg-goooey-cream pb-32 pt-20 overflow-hidden">
      {/* Top Banner Wave */}
      <div className="w-full overflow-hidden">
        <div className="bg-goooey-blue text-white py-4 text-center font-display text-xl font-bold tracking-wider whitespace-nowrap animate-slide">
          BUY PACKS & SAVE $$$ • BUY PACKS & SAVE $$$ • BUY PACKS & SAVE $$$ •
        </div>
      </div>

      {/* Heading */}
      <div className="relative z-10 text-center mt-16 mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-black text-black">
          CATCH THE SWEET
        </h2>
        <p className="font-display text-3xl md:text-4xl text-goooey-blue">
          moments shared
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {cards.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-[28px] shadow-2xl border border-gray-200 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-goooey-blue text-white text-center py-4 font-display text-lg rounded-t-[28px]">
              {item.header}
            </div>

            {/* Image */}
            <div className="w-full h-[340px] px-12 py-4 overflow-hidden flex items-center justify-center">
              <img
                src={item.img}
                alt="Moment"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Username */}
            <p className="text-center mt-3 font-bold text-goooey-blue">
              {item.username}
            </p>

            {/* Caption */}
            <p className="text-center text-black px-6 py-4 text-sm leading-relaxed">
              {item.caption}
            </p>
          </div>
        ))}
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
        {/* Bottom Drip */}
      <div className="absolute top-0 left-0 w-full pointer-events-none">
        <img
          src={dripBottom}
          alt="Drip Deco"
          width={2000}
          height={400}
          className="w-full"
        />
      </div>
      <div className="container mx-auto px-6 pt-10 mt-14">
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
