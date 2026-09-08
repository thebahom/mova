"use client";

import { useState } from "react";
import { ArrowDown, ArrowRight, Menu, MoveUpRight } from "lucide-react";
import Link from "next/link";
import { MotionVisual } from "@/components/motion-visual";
import { Reveal } from "@/components/reveal";

const destinations = ["United Kingdom", "United States", "Canada", "Australia", "Germany", "France", "Ireland", "Netherlands", "UAE", "Spain", "Portugal"];
const origins = ["Nigeria", "Ghana", "India", "Pakistan", "Brazil", "Ukraine", "South Africa", "Kenya"];
const purposes = ["Work", "Study", "Family", "Business", "Protection", "Other"];
const scenes = [
  { eyebrow: "01 — Discover", title: "Turn uncertainty into a route.", copy: "Understand the options, the costs and the sequence before you start filling forms." },
  { eyebrow: "02 — Prepare", title: "Know what is still missing.", copy: "Documents, evidence, finances and deadlines become one clear working list." },
  { eyebrow: "03 — Arrive", title: "Land with a plan.", copy: "Arrival mode shifts the focus from immigration paperwork to your first 24 hours, week and month." },
];

export default function Home() {
  const [origin, setOrigin] = useState("Nigeria");
  const [destination, setDestination] = useState("United Kingdom");
  const [purpose, setPurpose] = useState("Work");
  const href = `/onboarding?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&purpose=${encodeURIComponent(purpose)}`;

  return <div className="immersive-shell">
    <header className="immersive-nav">
      <Link href="/" className="wordmark">MOVAARA<span>®</span></Link>
      <nav className="nav-center"><a href="#journey">Journey</a><a href="#platform">Platform</a><a href="#cities">Cities</a></nav>
      <div className="nav-right"><Link className="pill dark" href={href}>START MY JOURNEY <ArrowRight size={14}/></Link><button className="icon-pill" aria-label="Open menu"><Menu size={18}/></button></div>
    </header>

    <main>
      <section className="hero-immersive">
        <div className="hero-inner">
          <div className="hero-copy-block"><Reveal><div className="micro-label">MOVE / ARRIVE / BELONG</div><h1>Make moving<br/><em>feel clear.</em></h1><p>One calm, intelligent journey for the people building a life in another country.</p><div className="hero-actions"><Link className="pill dark large" href={href}>PLAN MY MOVE <ArrowRight size={15}/></Link><a className="text-action" href="#journey">SCROLL TO EXPLORE <ArrowDown size={14}/></a></div></Reveal></div>
          <Reveal className="hero-visual-wrap" delay={120}><MotionVisual /></Reveal>
        </div><div className="hero-gridline hero-gridline-left"/><div className="hero-gridline hero-gridline-right"/>
      </section>

      <section className="route-builder" id="journey"><Reveal><div className="section-index">01 / YOUR ROUTE</div><div className="route-heading-row"><h2>From <span>{origin}</span><br/>to <span>{destination}</span>.</h2><p>Tell MOVAARA where you are, where you’re going, and why. We’ll shape the first version of your journey.</p></div></Reveal><Reveal delay={80}><div className="route-console"><div className="route-console-top"><div className="console-tag">LIVE JOURNEY BUILDER</div><div className="console-status"><span className="status-dot"/> Ready to build</div></div><div className="route-fields"><label><span>I’M MOVING FROM</span><select value={origin} onChange={(e) => setOrigin(e.target.value)}>{origins.map(item => <option key={item}>{item}</option>)}</select></label><div className="route-arrow"><ArrowRight size={20}/></div><label><span>I’M MOVING TO</span><select value={destination} onChange={(e) => setDestination(e.target.value)}>{destinations.map(item => <option key={item}>{item}</option>)}</select></label><label><span>I’M MOVING FOR</span><select value={purpose} onChange={(e) => setPurpose(e.target.value)}>{purposes.map(item => <option key={item}>{item}</option>)}</select></label><Link className="console-cta" href={href}>BUILD MY JOURNEY <MoveUpRight size={16}/></Link></div></div></Reveal></section>

      <section className="statement-section" id="platform"><Reveal><div className="section-index">02 / THE IDEA</div><div className="statement-wrap"><p className="statement-top">Hundreds of websites.<br/>One moving life.</p><h2>We turn the<br/><span>noise</span> into<br/><span className="outline">next steps.</span></h2></div></Reveal></section>

      <section className="scrollytelling">{scenes.map((scene,index) => <div className="scene-row" key={scene.eyebrow}><Reveal delay={index*40} className="scene-copy"><div className="section-index">{scene.eyebrow}</div><h3>{scene.title}</h3><p>{scene.copy}</p><div className="scene-line"><span>{String(index+1).padStart(2,"0")}</span><div/></div></Reveal><Reveal delay={100+index*60} className="scene-frame"><div className={`scene-art art-${index}`}><div className="scene-grid"/><div className="scene-orb"/><div className="scene-word">MOVAARA</div><div className="scene-code">JOURNEY GRAPH / {String(index+1).padStart(2,"0")}</div></div></Reveal></div>)}</section>

      <section className="cities-section" id="cities"><Reveal><div className="section-index">03 / CITY MODE</div><div className="cities-head"><h2>Your city is<br/><span>part of the journey.</span></h2><p>From route decisions to rent, transport, healthcare and your first week, city-level context lives inside the same journey.</p></div></Reveal><Reveal delay={80}><div className="city-strip">{[["LONDON","01","FAST / DENSE / GLOBAL"],["MANCHESTER","02","CONNECTED / CREATIVE / LIVABLE"],["BIRMINGHAM","03","CENTRAL / PRACTICAL / GROWING"],["LIVERPOOL","04","COMPACT / SOCIAL / COASTAL"]].map(([name,number,meta]) => <div className="city-card" key={name}><div className="city-number">{number}</div><div className="city-name">{name}</div><div className="city-meta">{meta}</div><ArrowRight className="city-arrow" size={20}/></div>)}</div></Reveal></section>

      <section className="final-cta"><Reveal><div className="section-index">04 / START HERE</div><h2>Wherever you’re going,<br/><em>start with what’s next.</em></h2><Link className="pill light large" href={href}>BUILD MY JOURNEY <ArrowRight size={15}/></Link></Reveal></section>
    </main>
    <footer className="immersive-footer"><div>MOVAARA®</div><div>Move. Arrive. Belong.</div><div>UK MVP / 2026</div></footer>
  </div>;
}
