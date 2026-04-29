import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Leaf, FlaskConical, Flower2, ShieldCheck, Instagram, Facebook, Music2 } from "lucide-react";

const products = [
  { name: "Revitalize Renew Serum", price: "$129.00", type: "Serum" },
  { name: "Luxe Hydration Cream", price: "$119.00", type: "Moisturizer" },
  { name: "Glow Renew Cleanser", price: "$79.00", type: "Cleanser" },
  { name: "Ultimate Renewal Collection", price: "$299.00", type: "Set" },
];

const benefits = [
  { icon: Leaf, title: "Premium Ingredients", text: "Carefully selected for maximum performance." },
  { icon: FlaskConical, title: "Advanced Science", text: "Backed by research. Proven by results." },
  { icon: Flower2, title: "Luxury Experience", text: "Skincare that feels as good as it works." },
  { icon: ShieldCheck, title: "Clean & Conscious", text: "Non-toxic, cruelty-free and responsibly made." },
];

function Logo({ size = "large" }) {
  const isLarge = size === "large";
  return (
    <div className="flex flex-col items-center text-center">
      <div className={`${isLarge ? "h-20 w-20" : "h-12 w-12"} rounded-full border border-[#d7a84f] flex items-center justify-center bg-black shadow-[0_0_30px_rgba(215,168,79,.35)]`}>
        <div className={`${isLarge ? "text-4xl" : "text-2xl"} font-serif text-[#f3d891] tracking-tighter leading-none`}>WM</div>
      </div>
      <div className={`${isLarge ? "text-2xl tracking-[0.42em] mt-3" : "text-lg tracking-[0.3em] mt-2"} font-serif text-[#f3d891] pl-2`}>WEMATT</div>
      <div className="text-[10px] tracking-[0.38em] text-[#d7a84f] uppercase">Essentials</div>
    </div>
  );
}

function ProductBottle({ small = false }) {
  return (
    <div className={`${small ? "h-40 w-20" : "h-80 w-36"} relative mx-auto`}>
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[18%] w-[58%] rounded-t-2xl bg-gradient-to-r from-[#7d4d16] via-[#f6d47b] to-[#7d4d16] border border-[#f5d17a]/50" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[84%] w-full rounded-t-3xl rounded-b-xl bg-gradient-to-b from-[#191919] via-[#050505] to-[#111] border border-[#d7a84f]/45 shadow-[0_0_50px_rgba(215,168,79,.28)] overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-r from-[#5d350c] via-[#f3d891] to-[#5d350c] opacity-90" />
        <div className="absolute inset-x-0 top-[28%] flex flex-col items-center">
          <div className={`${small ? "h-10 w-10" : "h-16 w-16"} rounded-full border border-[#d7a84f] flex items-center justify-center text-[#f3d891] font-serif ${small ? "text-lg" : "text-3xl"}`}>WM</div>
          <div className={`${small ? "text-[9px]" : "text-sm"} mt-3 tracking-[0.25em] text-[#f3d891] font-serif`}>WEMATT</div>
          <div className="text-[8px] tracking-[0.22em] text-[#d7a84f]">ESSENTIALS</div>
          {!small && <div className="mt-8 text-center text-[11px] tracking-[0.14em] text-[#f3d891] uppercase">Revitalize<br />Renew Serum</div>}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#030201] text-white overflow-hidden selection:bg-[#d7a84f] selection:text-black">
      <div className="h-8 border-b border-[#8c641f]/50 bg-black text-[#d7a84f] text-xs tracking-[0.25em] flex items-center justify-center uppercase">
        Free shipping on orders over $150
      </div>

      <header className="relative z-20 border-b border-[#8c641f]/35 bg-black/90 backdrop-blur px-6 md:px-14 py-6">
        <div className="grid grid-cols-3 items-center">
          <nav className="hidden md:flex items-center gap-10 text-sm tracking-[0.16em] uppercase text-white/80">
            <a href="#shop" className="hover:text-[#f3d891]">Shop</a>
            <a href="#collections" className="hover:text-[#f3d891]">Collections</a>
            <a href="#about" className="hover:text-[#f3d891]">About Us</a>
          </nav>
          <div className="col-span-2 md:col-span-1 flex justify-start md:justify-center"><Logo /></div>
          <nav className="flex items-center justify-end gap-8 text-sm tracking-[0.16em] uppercase text-white/80">
            <a href="#story" className="hidden md:inline hover:text-[#f3d891]">Our Story</a>
            <a href="#" className="hidden md:inline hover:text-[#f3d891]">Login</a>
            <a href="#" className="flex items-center gap-2 hover:text-[#f3d891]"><ShoppingBag size={18} /> 0</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative min-h-[760px] border-b border-[#8c641f]/45 bg-[radial-gradient(circle_at_58%_52%,rgba(215,168,79,.28),transparent_22%),radial-gradient(circle_at_50%_100%,rgba(215,168,79,.2),transparent_35%),linear-gradient(120deg,#020202,#080502_55%,#120604)]">
          <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_60%_55%,transparent_0,transparent_18%,rgba(215,168,79,.35)_18.2%,transparent_18.7%,transparent_28%,rgba(215,168,79,.18)_28.2%,transparent_28.6%)]" />
          <div className="absolute left-1/2 top-[18%] h-[560px] w-[560px] -translate-x-1/2 rounded-full border border-[#d7a84f]/25 blur-[1px]" />
          <div className="absolute left-[46%] bottom-24 h-32 w-96 rounded-full bg-[#d7a84f]/25 blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center px-6 md:px-20 pt-20 pb-16">
            <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
              <div className="text-[#d7a84f] tracking-[0.42em] uppercase text-sm mb-6">Luxury Skincare</div>
              <h1 className="font-serif text-6xl md:text-8xl leading-[0.95] tracking-tight">
                Elevate Your <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#b77924] via-[#f6dda0] to-[#b77924]">Essence</span>
              </h1>
              <p className="mt-8 text-lg md:text-xl text-white/75 leading-relaxed max-w-lg">
                Scientifically advanced. Naturally inspired. Crafted for timeless beauty.
              </p>
              <button className="mt-10 border border-[#d7a84f] px-12 py-4 text-[#f3d891] tracking-[0.2em] uppercase hover:bg-[#d7a84f] hover:text-black transition">
                Shop Now
              </button>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.15 }} className="relative pt-6">
              <div className="absolute left-1/2 top-4 -translate-x-1/2 h-[420px] w-[420px] rounded-full bg-[#d7a84f]/10 blur-3xl" />
              <ProductBottle />
              <div className="mx-auto mt-0 h-12 w-72 rounded-full bg-[#d7a84f]/25 blur-2xl" />
            </motion.div>
          </div>
        </section>

        <section id="collections" className="grid md:grid-cols-4 border-b border-[#8c641f]/45 bg-[#050402]">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div key={title} className="border-r border-[#8c641f]/35 last:border-r-0 px-8 py-10 text-center">
              <Icon className="mx-auto text-[#d7a84f] mb-4" size={38} />
              <h3 className="text-[#f3d891] uppercase tracking-[0.15em] text-sm mb-3">{title}</h3>
              <p className="text-white/65 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </section>

        <section id="shop" className="grid lg:grid-cols-[1.7fr_1fr] border-b border-[#8c641f]/45">
          <div className="px-6 md:px-16 py-16 border-r border-[#8c641f]/45">
            <h2 className="font-serif text-4xl text-[#f3d891] text-center uppercase tracking-wide">Our Best Sellers</h2>
            <div className="mx-auto mt-4 mb-10 h-px w-24 bg-[#d7a84f]" />
            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
              {products.map((p) => (
                <div key={p.name} className="border border-[#8c641f]/50 bg-[#050402] p-5 text-center hover:border-[#d7a84f] transition group">
                  <div className="h-56 border border-[#8c641f]/30 bg-[radial-gradient(circle_at_center,rgba(215,168,79,.16),transparent_55%),#080604] flex items-end justify-center pb-5 overflow-hidden">
                    <ProductBottle small />
                  </div>
                  <div className="mt-5 text-[#f3d891] uppercase tracking-[0.12em] text-sm">{p.name}</div>
                  <div className="mt-2 text-[#d7a84f] text-sm">{p.price}</div>
                  <button className="mt-5 text-[#d7a84f] border-b border-[#d7a84f] uppercase tracking-[0.15em] text-xs pb-1 group-hover:text-[#f3d891]">
                    Shop Now
                  </button>
                </div>
              ))}
            </div>
          </div>

          <aside id="story" className="grid grid-rows-2">
            <div className="border-b border-[#8c641f]/45 bg-[radial-gradient(circle_at_30%_30%,rgba(215,168,79,.18),transparent_35%),#050402] p-10 flex items-center justify-center">
              <div className="flex gap-4 items-end">
                <ProductBottle small />
                <ProductBottle small />
                <ProductBottle small />
              </div>
            </div>
            <div className="p-10 bg-[#030201] flex flex-col justify-center">
              <h2 className="font-serif text-4xl text-[#f3d891] uppercase leading-tight">The WEMATT Philosophy</h2>
              <div className="mt-5 h-px w-20 bg-[#d7a84f]" />
              <p className="mt-8 text-white/65 leading-relaxed">
                We blend the finest ingredients with advanced skincare science to deliver visible results and elevate your natural beauty.
              </p>
              <button className="mt-8 w-fit border border-[#d7a84f] px-8 py-3 text-[#f3d891] uppercase tracking-[0.16em] text-sm hover:bg-[#d7a84f] hover:text-black transition">Learn More</button>
            </div>
          </aside>
        </section>

        <section id="about" className="grid md:grid-cols-3 border-b border-[#8c641f]/45">
          <div className="min-h-[330px] bg-[radial-gradient(circle_at_40%_30%,rgba(215,168,79,.25),transparent_30%),linear-gradient(135deg,#050402,#130b03)] border-r border-[#8c641f]/45 flex items-center justify-center">
            <div className="h-32 w-32 rounded-full border border-[#d7a84f] flex items-center justify-center text-[#f3d891] font-serif text-5xl shadow-[0_0_45px_rgba(215,168,79,.35)]">WM</div>
          </div>
          <div className="min-h-[330px] p-10 flex flex-col items-center justify-center text-center border-r border-[#8c641f]/45 bg-[#050402]">
            <h2 className="font-serif text-3xl md:text-4xl text-[#f3d891] uppercase">Crafted For Excellence</h2>
            <div className="my-6 h-px w-20 bg-[#d7a84f]" />
            <p className="text-white/65 leading-relaxed max-w-md">
              Every product is a blend of nature and innovation, designed to nourish, protect, and reveal your most radiant self.
            </p>
            <button className="mt-8 border border-[#d7a84f] px-8 py-3 text-[#f3d891] uppercase tracking-[0.16em] text-sm hover:bg-[#d7a84f] hover:text-black transition">Discover More</button>
          </div>
          <div className="min-h-[330px] bg-[radial-gradient(circle_at_55%_35%,rgba(255,255,255,.18),transparent_20%),radial-gradient(circle_at_55%_60%,rgba(215,168,79,.18),transparent_35%),#090704] flex items-center justify-center">
            <div className="h-40 w-56 rounded-t-full rounded-b-3xl border border-[#d7a84f]/60 bg-gradient-to-b from-[#f7e4b4] via-[#f0efe8] to-[#0a0805] shadow-[0_0_40px_rgba(215,168,79,.25)]" />
          </div>
        </section>

        <section className="grid md:grid-cols-[1fr_1.3fr] border-b border-[#8c641f]/45 bg-[#050402]">
          <div className="p-10 border-r border-[#8c641f]/45 flex items-center justify-center"><Logo /></div>
          <div className="p-10 flex flex-col md:flex-row gap-8 md:items-center md:justify-between">
            <div>
              <h2 className="font-serif text-3xl text-[#f3d891] uppercase">Join The WEMATT Club</h2>
              <p className="mt-3 text-white/60">Be the first to discover new products, exclusive offers, and skincare tips.</p>
            </div>
            <div className="flex w-full md:w-auto gap-3">
              <input placeholder="Enter your email" className="bg-black border border-[#8c641f]/70 px-5 py-3 min-w-0 md:w-72 text-sm outline-none focus:border-[#d7a84f]" />
              <button className="bg-[#d7a84f] text-black px-7 py-3 uppercase tracking-[0.12em] text-xs font-semibold">Join Now</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-6 md:px-16 py-12 bg-[#030201]">
        <div className="grid md:grid-cols-[1.2fr_2fr_.8fr] gap-10">
          <Logo size="small" />
          <div className="grid grid-cols-3 gap-8 text-sm">
            <div><h4 className="text-[#d7a84f] uppercase tracking-[0.15em] mb-4">Shop</h4><p className="text-white/55 leading-7">All Products<br />Serums<br />Moisturizers<br />Cleansers<br />Collections</p></div>
            <div><h4 className="text-[#d7a84f] uppercase tracking-[0.15em] mb-4">Company</h4><p className="text-white/55 leading-7">About Us<br />Our Story<br />Ingredients<br />Sustainability<br />FAQ</p></div>
            <div><h4 className="text-[#d7a84f] uppercase tracking-[0.15em] mb-4">Care</h4><p className="text-white/55 leading-7">Contact Us<br />Shipping & Returns<br />Terms<br />Privacy Policy</p></div>
          </div>
          <div><h4 className="text-[#d7a84f] uppercase tracking-[0.15em] mb-4">Follow Us</h4><div className="flex gap-4 text-[#d7a84f]"><Instagram /><Facebook /><Music2 /></div></div>
        </div>
        <div className="mt-12 text-center text-xs text-[#8c641f] uppercase tracking-[0.18em]">© 2026 WEMATT Essentials. All rights reserved.</div>
      </footer>
    </div>
  );
}
