import { motion } from "framer-motion";
import { Beaker, Facebook, Instagram, Leaf, ShieldCheck, ShoppingBag, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0 },
};

const bestSellers = [
  ["/images/serum-card.jpg", "Revitalize Renew Serum", "$129.00"],
  ["/images/cream-card.jpg", "Luxe Hydration Cream", "$119.00"],
  ["/images/cleanser-card.jpg", "Glow Renew Cleanser", "$79.00"],
  ["/images/collection-card.jpg", "Ultimate Renewal Collection", "$299.00"],
];

function Header() {
  return (
    <header className="relative z-30 h-[150px] md:h-[170px] flex items-start justify-between px-8 lg:px-14 pt-10">
      <nav className="hidden md:flex gap-10 lg:gap-14 text-white/90 tracking-[.12em] text-sm font-semibold">
        <a href="#shop" className="hover:text-[#f4c45d] transition">SHOP</a>
        <a href="#collections" className="hover:text-[#f4c45d] transition">COLLECTIONS</a>
        <a href="#about" className="hover:text-[#f4c45d] transition">ABOUT US</a>
      </nav>

      <motion.a
        href="#home"
        className="absolute left-1/2 top-7 -translate-x-1/2 text-center logo-blend"
        initial={{ opacity: 0, scale: .9, y: -15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: .9 }}
      >
        <img src="/wematt-logo.jpg" alt="WEMATT Essentials" className="w-36 md:w-48 mx-auto opacity-70 mix-blend-screen" />
      </motion.a>

      <nav className="hidden md:flex gap-10 lg:gap-14 text-white/90 tracking-[.12em] text-sm font-semibold ml-auto">
        <a href="#story" className="hover:text-[#f4c45d] transition">OUR STORY</a>
        <a href="#login" className="hover:text-[#f4c45d] transition">LOGIN</a>
        <a href="#cart" className="flex items-center gap-2 hover:text-[#f4c45d] transition"><ShoppingBag size={17} />0</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[590px] hero-atmosphere overflow-hidden border-b panel-border">
      <div className="water-splash" />
      <div className="water-ripple" />
      <div className="spark-field" />

      <motion.div
        className="gold-ring left-[52%] top-[160px] hidden md:block"
        animate={{ rotate: 360, scale: [1, 1.025, 1] }}
        transition={{ rotate: { duration: 30, repeat: Infinity, ease: "linear" }, scale: { duration: 5, repeat: Infinity } }}
      />

      <Header />

      <div className="relative z-10 grid md:grid-cols-[1fr_1fr] gap-4 px-8 lg:px-24 pb-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: .9, delay: .15 }}
          className="pt-8 md:pt-12 text-center md:text-left"
        >
          <p className="text-[#d89a32] tracking-[.38em] text-sm md:text-base mb-5">LUXURY SKINCARE</p>
          <h1 className="font-serif uppercase text-[3.5rem] md:text-[5.6rem] lg:text-[6.4rem] leading-[.92] font-black tracking-[-.03em]">
            <span className="text-[#fff9e8]">Elevate Your</span><br />
            <span className="gold-title">Essence</span>
          </h1>
          <p className="mt-7 text-white/85 text-lg leading-8">
            Scientifically advanced. Naturally inspired.<br />
            Crafted for timeless beauty.
          </p>
          <motion.a
            href="#shop"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: .98 }}
            className="inline-flex mt-8 border border-[#c99028] text-[#f0bb53] px-10 py-4 tracking-[.15em] font-bold hover:bg-[#c99028] hover:text-black transition"
          >
            SHOP NOW
          </motion.a>
        </motion.div>

        <motion.div
          className="relative hidden md:flex justify-center items-end min-h-[420px]"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: .25 }}
        >
          <motion.div
            className="hero-product-blend"
            animate={{ y: [0, -10, 0], opacity: [.86, 1, .86] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}

function Benefit({ icon, title, text }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8 }}
      className="text-center px-4"
    >
      <div className="mx-auto mb-5 text-[#f0bb53] flex justify-center">{icon}</div>
      <h3 className="text-[#f0bb53] text-sm font-bold tracking-[.08em] uppercase">{title}</h3>
      <p className="mt-3 text-white/75 leading-6 text-sm">{text}</p>
    </motion.div>
  );
}

function Benefits() {
  return (
    <motion.section
      className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 px-8 lg:px-20 py-9 bg-[#050403] border-b panel-border"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: .3 }}
      transition={{ staggerChildren: .12 }}
    >
      <Benefit icon={<Leaf size={45} strokeWidth={1.5} />} title="Premium Ingredients" text="Carefully selected for maximum performance." />
      <Benefit icon={<Beaker size={45} strokeWidth={1.5} />} title="Advanced Science" text="Backed by research. Proven by results." />
      <Benefit icon={<Sparkles size={45} strokeWidth={1.5} />} title="Luxury Experience" text="Indulge in skincare that feels as good as it works." />
      <Benefit icon={<ShieldCheck size={45} strokeWidth={1.5} />} title="Clean & Conscious" text="Non-toxic, cruelty-free and sustainably made." />
    </motion.section>
  );
}

function BestSellerCard({ image, name, price }) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.015 }}
      className="lux-card p-3 shimmer"
    >
      <div className="h-[175px] md:h-[190px] bg-black overflow-hidden photo-glow">
        <img src={image} alt={name} className="w-full h-full object-cover transition duration-700 hover:scale-110" />
      </div>
      <div className="text-center py-5">
        <h3 className="uppercase text-white/90 font-bold tracking-[.08em] text-xs leading-5">{name}</h3>
        <p className="text-[#e2a13a] font-semibold text-xs mt-3">{price}</p>
        <a className="inline-block mt-5 text-[#e7ad42] border-b border-[#e7ad42] pb-1 text-xs tracking-[.12em] font-bold">SHOP NOW</a>
      </div>
    </motion.div>
  );
}

function BestSellers() {
  return (
    <section id="shop" className="min-h-[375px] bg-black px-8 lg:px-10 py-8 border-b panel-border">
      <h2 className="font-serif text-[#fff0b7] text-3xl md:text-4xl text-center font-bold">OUR BEST SELLERS</h2>
      <div className="gold-line h-[2px] w-28 mx-auto mt-4 mb-7" />
      <motion.div
        className="grid grid-cols-2 xl:grid-cols-4 gap-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: .2 }}
        transition={{ staggerChildren: .1 }}
      >
        {bestSellers.map(([image, name, price]) => (
          <motion.div variants={fadeUp} key={name}>
            <BestSellerCard image={image} name={name} price={price} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function Philosophy() {
  return (
    <section id="story" className="grid md:grid-cols-2 bg-black border-b panel-border">
      <motion.div
        className="min-h-[250px] overflow-hidden photo-glow border-r panel-border"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <img src="/images/philosophy-products.jpg" alt="WEMATT luxury products" className="w-full h-full object-cover transition duration-1000 hover:scale-105" />
      </motion.div>
      <motion.div
        className="p-10 lg:p-14 flex flex-col justify-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: .3 }}
      >
        <h2 className="font-serif text-[#fff0b7] text-3xl lg:text-4xl leading-tight">THE WEMATT<br />PHILOSOPHY</h2>
        <div className="w-12 h-[2px] bg-[#c99028] mt-6 mb-7" />
        <p className="text-white/72 leading-7 text-sm max-w-sm">
          We blend the finest ingredients with cutting-edge science to deliver visible results and elevate your natural beauty.
        </p>
        <a className="mt-8 w-fit border border-[#c99028] text-[#f0bb53] px-8 py-3 text-xs font-bold tracking-[.12em] hover:bg-[#c99028] hover:text-black transition">
          LEARN MORE
        </a>
      </motion.div>
    </section>
  );
}

function Crafted() {
  return (
    <section id="collections" className="grid md:grid-cols-3 bg-black border-b panel-border">
      <div className="min-h-[300px] overflow-hidden photo-glow border-r panel-border">
        <img src="/images/dropper.jpg" alt="Gold skincare dropper" className="w-full h-full object-cover transition duration-1000 hover:scale-105" />
      </div>
      <motion.div
        className="p-10 flex flex-col justify-center items-center text-center border-r panel-border"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: .3 }}
      >
        <h2 className="font-serif text-[#fff0b7] text-3xl">CRAFTED FOR EXCELLENCE</h2>
        <div className="w-14 h-[2px] bg-[#c99028] my-7" />
        <p className="text-white/75 leading-8 max-w-sm">
          Every product is a blend of nature and innovation, designed to nourish, protect and reveal your most radiant self.
        </p>
        <a className="mt-8 border border-[#c99028] text-[#f0bb53] px-9 py-3 text-xs tracking-[.12em] font-bold hover:bg-[#c99028] hover:text-black transition">
          DISCOVER MORE
        </a>
      </motion.div>
      <div className="min-h-[300px] overflow-hidden photo-glow">
        <img src="/images/cream-large.jpg" alt="WEMATT luxury cream" className="w-full h-full object-cover transition duration-1000 hover:scale-105" />
      </div>
    </section>
  );
}

function Club() {
  return (
    <section className="grid md:grid-cols-[.9fr_1.1fr] bg-[#050403] border-b panel-border">
      <div className="p-9 flex justify-center items-center border-r panel-border">
        <img src="/wematt-logo.jpg" alt="WEMATT Essentials" className="w-64 drop-shadow-[0_0_35px_rgba(232,164,45,.3)]" />
      </div>
      <div className="p-9 lg:p-12 flex flex-col justify-center">
        <h2 className="font-serif text-[#fff0b7] text-2xl lg:text-3xl">JOIN THE WEMATT CLUB</h2>
        <p className="text-white/72 mt-4 text-sm">Be the first to discover new products, exclusive offers and skincare tips.</p>
        <div className="mt-7 flex gap-3 max-w-xl">
          <input className="flex-1 bg-black border border-[#8c621d] px-5 py-3 text-sm outline-none text-white/80" placeholder="Enter your email" />
          <button className="bg-[#d99a35] text-black px-7 py-3 text-xs font-bold tracking-[.08em] hover:bg-[#ffd274] transition">JOIN NOW</button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const columns = [
    ["SHOP", "All Products", "Serums", "Moisturizers", "Cleansers", "Collections"],
    ["COMPANY", "About Us", "Our Story", "Ingredients", "Sustainability", "FAQ"],
    ["CUSTOMER CARE", "Contact Us", "Shipping & Returns", "Terms & Conditions", "Privacy Policy"],
  ];

  return (
    <footer className="bg-black px-8 lg:px-16 py-10">
      <div className="grid md:grid-cols-[1fr_2fr_.7fr] gap-10">
        <img src="/wematt-logo.jpg" alt="WEMATT Essentials" className="w-56" />

        <div className="grid sm:grid-cols-3 gap-8">
          {columns.map(([title, ...items]) => (
            <div key={title}>
              <h4 className="text-[#e1a13a] font-bold text-xs mb-4">{title}</h4>
              {items.map((item) => (
                <p key={item} className="text-white/65 text-xs mb-3">{item}</p>
              ))}
            </div>
          ))}
        </div>

        <div>
          <h4 className="text-[#e1a13a] font-bold text-xs mb-5">FOLLOW US</h4>
          <div className="flex gap-5 text-[#e1a13a]">
            <Instagram size={18} />
            <Facebook size={18} />
            <span className="font-bold text-lg">♪</span>
          </div>
        </div>
      </div>
      <p className="text-center text-[#9e7226] text-xs mt-10">© 2024 WEMATT ESSENTIALS. ALL RIGHTS RESERVED.</p>
    </footer>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-black">
      <div className="grid lg:grid-cols-[1.58fr_1fr] border-x panel-border max-w-[1536px] mx-auto">
        <div className="border-r panel-border">
          <div className="h-7 border-y panel-border text-[#e1a13a] text-xs tracking-[.18em] flex items-center justify-center font-bold">
            FREE SHIPPING ON ORDERS OVER $150
          </div>
          <Hero />
          <Benefits />
          <Crafted />
        </div>

        <aside className="border-y panel-border">
          <BestSellers />
          <Philosophy />
          <Club />
          <Footer />
        </aside>
      </div>
    </main>
  );
}
