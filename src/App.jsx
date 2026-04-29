import React from "react";
import { motion } from "framer-motion";
import { Leaf, FlaskConical, Flower2, ShieldCheck, ShoppingBag, Instagram, Facebook, Music2 } from "lucide-react";

const products = [
  { title: "Revitalize Renew Serum", price: "$129.00", kind: "bottle" },
  { title: "Luxe Hydration Cream", price: "$119.00", kind: "jar" },
  { title: "Glow Renew Cleanser", price: "$79.00", kind: "tube" },
  { title: "Ultimate Renewal Collection", price: "$299.00", kind: "set" },
];

const features = [
  { icon: Leaf, title: "Premium Ingredients", text: "Carefully selected for maximum performance." },
  { icon: FlaskConical, title: "Advanced Science", text: "Backed by research. Proven by results." },
  { icon: Flower2, title: "Luxury Experience", text: "Indulge in skincare that feels as good as it works." },
  { icon: ShieldCheck, title: "Clean & Conscious", text: "Non-toxic, cruelty-free and sustainably made." },
];

function Logo({ compact = false }) {
  return (
    <div className="flex flex-col items-center select-none">
      <div className={`${compact ? "h-16 w-16" : "h-20 w-20"} rounded-full border-2 border-[#c89536] flex items-center justify-center bg-black/80 shadow-[0_0_35px_rgba(200,149,54,.45)]`}>
        <div className={`${compact ? "text-3xl" : "text-4xl"} font-serif leading-none tracking-[-.18em] text-[#f4d993] pr-2`}>WM</div>
      </div>
      <div className={`${compact ? "text-2xl" : "text-3xl"} mt-3 font-serif text-[#f4d993] tracking-[.45em] pl-3`}>WEMATT</div>
      <div className="text-[11px] uppercase tracking-[.38em] text-[#c89536]">— Essentials —</div>
    </div>
  );
}

function Bottle({ size = "large" }) {
  const small = size === "small";
  return (
    <div className={`${small ? "h-48 w-24" : "h-[420px] w-[175px]"} relative mx-auto drop-shadow-[0_30px_45px_rgba(0,0,0,.9)]`}>
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[18%] w-[58%] rounded-t-2xl bg-gradient-to-r from-[#5b3109] via-[#f7dc91] to-[#653909] border border-[#f4d993]/70" />
      <div className="absolute left-1/2 top-[14%] -translate-x-1/2 h-[8%] w-[70%] rounded-md bg-gradient-to-r from-[#452707] via-[#f8df9a] to-[#4d2b07]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[82%] w-full rounded-t-3xl rounded-b-xl border border-[#c89536]/70 bg-gradient-to-b from-[#17120b] via-[#050505] to-[#15100a] overflow-hidden shadow-[0_0_70px_rgba(200,149,54,.28)]">
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-r from-[#5b3109] via-[#f7dc91] to-[#653909] opacity-95" />
        <div className="absolute inset-x-4 top-[30%] flex flex-col items-center text-center">
          <div className={`${small ? "h-10 w-10 text-xl" : "h-20 w-20 text-4xl"} rounded-full border border-[#c89536] text-[#f4d993] font-serif flex items-center justify-center tracking-[-.18em] pr-1`}>WM</div>
          <div className={`${small ? "text-[9px]" : "text-xl"} mt-4 font-serif tracking-[.28em] text-[#f4d993] pl-1`}>WEMATT</div>
          <div className="text-[8px] tracking-[.28em] text-[#c89536] uppercase">Essentials</div>
          {!small && <div className="mt-10 text-[12px] uppercase tracking-[.16em] leading-relaxed text-[#f4d993]">Revitalize<br />Renew Serum</div>}
          {!small && <div className="mt-8 text-[10px] text-[#f4d993]/80">30ml e 1.0 fl.oz</div>}
        </div>
      </div>
    </div>
  );
}

function Jar() {
  return (
    <div className="relative h-36 w-44 mx-auto">
      <div className="absolute top-2 left-5 right-5 h-10 rounded-t-2xl bg-gradient-to-r from-[#573207] via-[#f4d993] to-[#573207] border border-[#f4d993]/60" />
      <div className="absolute bottom-0 inset-x-0 h-24 rounded-b-2xl rounded-t-md bg-gradient-to-b from-[#15110b] via-[#050505] to-[#15110b] border border-[#c89536]/60 flex items-center justify-center">
        <div className="h-14 w-14 rounded-full border border-[#c89536] text-[#f4d993] font-serif text-2xl flex items-center justify-center tracking-[-.16em] pr-1">WM</div>
      </div>
    </div>
  );
}

function Tube() {
  return (
    <div className="relative h-44 w-28 mx-auto">
      <div className="absolute inset-x-0 top-0 h-36 rounded-t-2xl bg-gradient-to-b from-[#17120b] to-[#050505] border border-[#c89536]/60 flex items-center justify-center">
        <div className="h-12 w-12 rounded-full border border-[#c89536] text-[#f4d993] font-serif text-2xl flex items-center justify-center tracking-[-.16em] pr-1">WM</div>
      </div>
      <div className="absolute bottom-0 inset-x-2 h-8 bg-gradient-to-r from-[#5b3109] via-[#f7dc91] to-[#653909] rounded-b-md" />
    </div>
  );
}

function ProductVisual({ kind }) {
  if (kind === "jar") return <Jar />;
  if (kind === "tube") return <Tube />;
  if (kind === "set") return <div className="flex items-end justify-center gap-2"><Bottle size="small"/><div className="scale-75 origin-bottom"><Bottle size="small"/></div><div className="scale-60 origin-bottom"><Bottle size="small"/></div></div>;
  return <Bottle size="small" />;
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#030201] text-white font-sans selection:bg-[#c89536] selection:text-black">
      <div className="mx-auto max-w-[1800px] border-x border-[#5b3a12] bg-[#030201] shadow-[0_0_120px_rgba(0,0,0,.8)]">
        <div className="h-8 border-y border-[#5b3a12] text-center text-[11px] uppercase tracking-[.32em] text-[#c89536] flex items-center justify-center">Free shipping on orders over $150</div>
        <div className="grid xl:grid-cols-[1.58fr_1fr]">
          <section className="border-r border-[#5b3a12]">
            <header className="relative z-20 grid grid-cols-3 items-start px-8 lg:px-16 pt-10 pb-4">
              <nav className="hidden md:flex gap-12 text-xs uppercase tracking-[.18em] text-white/75 pt-8">
                <a href="#shop" className="hover:text-[#f4d993]">Shop</a>
                <a href="#collections" className="hover:text-[#f4d993]">Collections</a>
                <a href="#about" className="hover:text-[#f4d993]">About Us</a>
              </nav>
              <div className="flex justify-center col-span-2 md:col-span-1"><Logo /></div>
              <nav className="hidden md:flex justify-end gap-12 text-xs uppercase tracking-[.18em] text-white/75 pt-8">
                <a href="#story" className="hover:text-[#f4d993]">Our Story</a>
                <a href="#" className="hover:text-[#f4d993]">Login</a>
                <a href="#" className="hover:text-[#f4d993] flex items-center gap-2"><ShoppingBag size={15}/>0</a>
              </nav>
            </header>
            <section className="relative min-h-[600px] lg:min-h-[710px] overflow-hidden bg-[radial-gradient(circle_at_70%_52%,rgba(200,149,54,.26),transparent_20%),radial-gradient(circle_at_62%_90%,rgba(200,149,54,.16),transparent_30%),linear-gradient(100deg,#020202_0%,#050302_52%,#110804_100%)]">
              <div className="absolute right-[17%] top-[13%] h-[600px] w-[600px] rounded-full border border-[#c89536]/25 shadow-[0_0_80px_rgba(200,149,54,.16)]" />
              <div className="absolute right-[24%] top-[24%] h-[430px] w-[430px] rounded-full border border-[#c89536]/20" />
              <div className="absolute right-[22%] bottom-[5%] h-36 w-[430px] rounded-full bg-[#c89536]/20 blur-3xl" />
              <div className="absolute right-[27%] bottom-[14%] h-10 w-[390px] rounded-full bg-[#f4d993]/25 blur-xl" />
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_65%_65%,rgba(244,217,147,.35),transparent_1px)] [background-size:18px_18px]" />
              <div className="relative z-10 grid lg:grid-cols-[1fr_.8fr] gap-8 items-center px-8 lg:px-24 pb-16 pt-14">
                <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="text-center lg:text-left">
                  <p className="uppercase text-[#c89536] tracking-[.38em] text-sm mb-8">Luxury Skincare</p>
                  <h1 className="font-serif uppercase leading-[.95] tracking-[.02em] text-5xl md:text-7xl xl:text-[86px]">
                    <span className="block text-[#f7f0df]">Elevate Your</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#a96518] via-[#f4d993] to-[#b8751f]">Essence</span>
                  </h1>
                  <p className="mt-8 text-white/75 text-lg leading-9 max-w-xl mx-auto lg:mx-0">Scientifically advanced. Naturally inspired.<br/>Crafted for timeless beauty.</p>
                  <button className="mt-10 border border-[#c89536] text-[#f4d993] uppercase tracking-[.22em] px-12 py-4 hover:bg-[#c89536] hover:text-black transition">Shop Now</button>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }} className="relative">
                  <Bottle />
                  <div className="mx-auto mt-[-12px] h-16 w-80 rounded-full bg-black/70 blur-md" />
                </motion.div>
              </div>
            </section>
            <section id="collections" className="grid md:grid-cols-4 border-y border-[#5b3a12] bg-[#050402]">
              {features.map(({ icon: Icon, title, text }) => (
                <div key={title} className="min-h-44 flex flex-col items-center justify-center text-center px-8 border-r last:border-r-0 border-[#5b3a12]">
                  <Icon size={44} className="text-[#c89536] mb-5" strokeWidth={1.4}/>
                  <h3 className="uppercase text-[#c89536] text-sm tracking-[.16em] font-semibold mb-3">{title}</h3>
                  <p className="text-white/75 text-sm leading-6 max-w-[210px]">{text}</p>
                </div>
              ))}
            </section>
            <section id="about" className="grid md:grid-cols-3 border-b border-[#5b3a12]">
              <div className="min-h-[340px] border-r border-[#5b3a12] bg-[radial-gradient(circle_at_30%_20%,rgba(244,217,147,.35),transparent_18%),linear-gradient(135deg,#160a03,#020101)] flex items-center justify-center overflow-hidden">
                <div className="h-56 w-40 rounded-full border border-[#c89536]/60 bg-gradient-to-b from-[#f4d993]/70 via-[#bd7b1f]/30 to-black blur-[1px] rotate-[-28deg] translate-x-[-25px]" />
              </div>
              <div className="min-h-[340px] border-r border-[#5b3a12] bg-[#050402] flex flex-col items-center justify-center text-center px-8">
                <h2 className="font-serif uppercase text-[#f4d993] text-3xl xl:text-4xl tracking-wide">Crafted For Excellence</h2>
                <div className="my-6 h-px w-24 bg-[#c89536]" />
                <p className="text-white/75 leading-8 max-w-md">Every product is a blend of nature and innovation, designed to nourish, protect and reveal your most radiant self.</p>
                <button className="mt-8 border border-[#c89536] px-10 py-3 text-[#f4d993] uppercase tracking-[.18em] text-sm hover:bg-[#c89536] hover:text-black transition">Discover More</button>
              </div>
              <div className="min-h-[340px] bg-[radial-gradient(circle_at_55%_22%,rgba(255,255,255,.15),transparent_18%),radial-gradient(circle_at_50%_60%,rgba(200,149,54,.2),transparent_35%),#090704] flex items-center justify-center">
                <div className="h-40 w-64 rounded-t-full rounded-b-3xl border border-[#c89536]/60 bg-gradient-to-b from-[#f7e9bd] via-[#fffaf0] to-[#080604] shadow-[0_0_55px_rgba(200,149,54,.28)]" />
              </div>
            </section>
          </section>
          <aside className="bg-[#050402]">
            <section id="shop" className="p-8 lg:p-12 border-b border-[#5b3a12]">
              <h2 className="font-serif text-[#f4d993] uppercase text-3xl text-center tracking-wide">Our Best Sellers</h2>
              <div className="h-px w-24 mx-auto bg-[#c89536] mt-4 mb-10" />
              <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
                {products.map((p) => (
                  <div key={p.title} className="border border-[#5b3a12] bg-[#060402] p-4 text-center hover:border-[#c89536] transition">
                    <div className="h-56 flex items-end justify-center bg-[radial-gradient(circle_at_center,rgba(200,149,54,.18),transparent_55%),#090604] border border-[#2e1e0a] mb-5 overflow-hidden">
                      <ProductVisual kind={p.kind}/>
                    </div>
                    <h3 className="text-[#f4d993] uppercase tracking-[.12em] text-[12px] min-h-[38px] leading-5">{p.title}</h3>
                    <p className="text-[#c89536] text-xs mt-2">{p.price}</p>
                    <button className="mt-5 uppercase text-[#c89536] text-xs tracking-[.16em] border-b border-[#c89536] pb-1 hover:text-[#f4d993]">Shop Now</button>
                  </div>
                ))}
              </div>
            </section>
            <section id="story" className="grid md:grid-cols-[1.2fr_.9fr] border-b border-[#5b3a12]">
              <div className="min-h-[300px] border-r border-[#5b3a12] bg-[radial-gradient(circle_at_40%_35%,rgba(200,149,54,.18),transparent_35%),#060402] flex items-center justify-center">
                <div className="flex items-end gap-3"><Jar/><Bottle size="small"/><div className="scale-75 origin-bottom"><Bottle size="small"/></div></div>
              </div>
              <div className="p-10 flex flex-col justify-center bg-[#050402]">
                <h2 className="font-serif uppercase text-[#f4d993] text-3xl leading-tight">The WEMATT Philosophy</h2>
                <div className="h-px w-20 bg-[#c89536] my-6" />
                <p className="text-white/70 leading-7 text-sm">We blend the finest ingredients with cutting-edge science to deliver visible results and elevate your natural beauty.</p>
                <button className="mt-8 w-fit border border-[#c89536] px-9 py-3 uppercase tracking-[.16em] text-xs text-[#f4d993] hover:bg-[#c89536] hover:text-black transition">Learn More</button>
              </div>
            </section>
            <section className="grid md:grid-cols-[.75fr_1.25fr] border-b border-[#5b3a12] bg-[#050402]">
              <div className="p-9 border-r border-[#5b3a12] flex items-center justify-center"><Logo compact/></div>
              <div className="p-9 flex flex-col justify-center">
                <h2 className="font-serif uppercase text-[#f4d993] text-2xl">Join The WEMATT Club</h2>
                <p className="text-white/60 text-sm mt-3 mb-6">Be the first to discover new products, exclusive offers and skincare tips.</p>
                <div className="flex gap-4"><input className="bg-black border border-[#5b3a12] px-5 py-3 flex-1 text-sm outline-none focus:border-[#c89536]" placeholder="Enter your email"/><button className="bg-[#c89536] text-black px-8 uppercase tracking-[.14em] text-xs font-bold">Join Now</button></div>
              </div>
            </section>
            <footer className="p-10 xl:p-14 bg-[#030201]">
              <div className="grid md:grid-cols-[1.1fr_2fr_.7fr] gap-10">
                <Logo compact/>
                <div className="grid grid-cols-3 gap-8 text-xs">
                  <div><h4 className="uppercase text-[#c89536] tracking-[.17em] mb-4">Shop</h4><p className="text-white/55 leading-7">All Products<br/>Serums<br/>Moisturizers<br/>Cleansers<br/>Collections</p></div>
                  <div><h4 className="uppercase text-[#c89536] tracking-[.17em] mb-4">Company</h4><p className="text-white/55 leading-7">About Us<br/>Our Story<br/>Ingredients<br/>Sustainability<br/>FAQ</p></div>
                  <div><h4 className="uppercase text-[#c89536] tracking-[.17em] mb-4">Customer Care</h4><p className="text-white/55 leading-7">Contact Us<br/>Shipping & Returns<br/>Terms & Conditions<br/>Privacy Policy</p></div>
                </div>
                <div><h4 className="uppercase text-[#c89536] tracking-[.17em] mb-4 text-xs">Follow Us</h4><div className="flex gap-5 text-[#c89536]"><Instagram size={19}/><Facebook size={19}/><Music2 size={19}/></div></div>
              </div>
              <p className="text-center text-[10px] uppercase tracking-[.18em] text-[#7e5a1d] mt-12">© 2026 WEMATT Essentials. All rights reserved.</p>
            </footer>
          </aside>
        </div>
      </div>
    </div>
  );
}
