import { motion } from "framer-motion";

export default function App() {
  return (
    <main className="exact-page">
      <section className="design-stage">
        {/* These overlays keep the design exact but add life/animation */}
        <div className="water-motion" />
        <div className="gold-sparkles" />
        <div className="product-hover" />

        {/* Clickable areas aligned to the approved design */}
        <a href="#shop" className="hero-click-shop" aria-label="Shop now" />
        <a href="#shop" className="nav-hotspot" style={{ left: "3.5%", width: "4.7%" }} aria-label="Shop" />
        <a href="#collections" className="nav-hotspot" style={{ left: "9.5%", width: "8%" }} aria-label="Collections" />
        <a href="#about" className="nav-hotspot" style={{ left: "18.3%", width: "6%" }} aria-label="About us" />
        <a href="#story" className="nav-hotspot" style={{ left: "51%", width: "7%" }} aria-label="Our story" />
        <a href="#login" className="nav-hotspot" style={{ left: "58.7%", width: "5%" }} aria-label="Login" />

        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: .7 }}
        />
      </section>
    </main>
  );
}
