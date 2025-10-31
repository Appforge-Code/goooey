import Layout from "@/components/Layout";
import { useState } from "react";
import { MapPin, Mail, Phone, Share2 } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <ContactHeroSection />
      <ContactInfoCards />
    </Layout>
  );
}

function ContactHeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="relative bg-goooey-blue min-h-screen py-32 overflow-hidden pt-40">
      <svg
        className="absolute top-0 left-0 w-full opacity-10"
        viewBox="0 0 1440 666"
        preserveAspectRatio="none"
      >
        <path
          d="M-141.999 249.746C-141.999 249.746 281.368 -18.1381 367.56 109.31C424.256 193.144 307.097 279.882 356.471 368.227C449.227 534.199 775.912 19.3076 815.272 205.321C835.444 300.654 713.465 346.972 735.755 441.832C777.522 619.591 1121.24 243.826 1202.07 407.56C1232.46 469.116 1154.1 563.537 1220.1 582.42C1259.17 593.599 1474.87 589.379 1474.87 589.379"
          stroke="rgba(128, 159, 254, 0.16)"
          strokeWidth="150"
          fill="none"
        />
      </svg>

      <svg
        className="absolute bottom-0 left-0 w-full opacity-10"
        viewBox="0 0 1440 666"
        preserveAspectRatio="none"
      >
        <path
          d="M-141.999 415.414C-141.999 415.414 281.368 683.298 367.56 555.85C424.256 472.015 307.097 385.278 356.471 296.932C449.227 130.961 775.912 645.852 815.272 459.838C835.444 364.506 713.465 318.188 735.755 223.328C777.522 45.5687 1121.24 421.334 1202.07 257.6C1232.46 196.044 1154.1 101.623 1220.1 82.7396C1259.17 71.561 1474.87 75.7811 1474.87 75.7811"
          stroke="rgba(128, 159, 254, 0.16)"
          strokeWidth="150"
          fill="none"
        />
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h1 className="font-display text-5xl md:text-6xl text-goooey-cream text-stroke-light mb-4">
            Contact Us
          </h1>
          <p className="text-white text-base leading-relaxed">
            Have a question? Want to bring Goooey Treats to your store, event,
            or just want to tell us how much you love our treats? We'd love to
            hear from you!
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-goooey-cream rounded-[42px] p-8 shadow-[2px_4px_0_0_#000]">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block font-bold text-black text-base"
              >
                Enter Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full h-14 px-8 rounded-full border-2 border-black bg-gray-100 focus:outline-none focus:ring-2 focus:ring-goooey-blue text-black"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block font-bold text-black text-base"
              >
                Enter Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full h-14 px-8 rounded-full border-2 border-black bg-gray-100 focus:outline-none focus:ring-2 focus:ring-goooey-blue text-black"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="block font-bold text-black text-base"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full h-14 px-8 rounded-full border-2 border-black bg-gray-100 focus:outline-none focus:ring-2 focus:ring-goooey-blue text-black"
                placeholder="What's this about?"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block font-bold text-black text-base"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-8 py-4 rounded-[26px] border-2 border-black bg-gray-100 focus:outline-none focus:ring-2 focus:ring-goooey-blue text-black resize-none"
                placeholder="Tell us what's on your mind..."
              />
            </div>

            <button
              type="submit"
              className="w-full h-14 bg-goooey-blue text-white font-bold uppercase rounded-full shadow-[2px_4px_0_0_#000] hover:translate-y-0.5 hover:shadow-[1px_2px_0_0_#000] transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactInfoCards() {
  const contactMethods = [
    {
      icon: MapPin,
      title: "Visit us",
      description: "Stop by and grab your favorite Goooey Treat in person!",
    },
    {
      icon: Mail,
      title: "Send us a email",
      description: "Need help with an order or have an inquiry? Let's chat!",
    },
    {
      icon: Phone,
      title: "Call us",
      description: "Drop us a message, and we'll get back to you ASAP.",
    },
    {
      icon: Share2,
      title: "Follow Us",
      description: "Stay updated on new flavors, deals, and all things Goooey!",
    },
  ];

  return (
    <section className="relative bg-goooey-blue pb-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-goooey-cream rounded-[42px] p-10 shadow-[2px_4px_0_0_#000] hover:scale-105 transition-transform"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <method.icon className="w-5 h-5" />
                  <h3 className="font-bold text-lg text-black">
                    {method.title}
                  </h3>
                </div>
                <p className="text-black text-sm leading-relaxed">
                  {method.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}