 "use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "./Icons";

const links = [{label:"Home",href:"/"},{label:"Services",href:"/#services"},{label:"Work",href:"/#work"},{label:"About",href:"/#about"},{label:"Contact",href:"/#contact"}];

export default function Header() {
  const [open,setOpen] = useState(false);
  return <header className="site-header"><div className="container nav-wrap">
    <Link href="/" className="brand" aria-label="SRS Vision home"><Image src="/images/srs-vision-logo.jpg" alt="SRS Vision – Your Vision Our Creation" width={190} height={190} priority/><span>SRS <b>VISION</b></span></Link>
    <nav className={open ? "main-nav open" : "main-nav"}>{links.map(l=><Link key={l.href} href={l.href} onClick={()=>setOpen(false)}>{l.label}</Link>)}<Link className="nav-mobile-cta" href="/#contact">Let&apos;s talk <ArrowUpRight size={16}/></Link></nav>
    <Link className="button button-small nav-cta" href="/#contact">Let&apos;s talk <ArrowUpRight size={16}/></Link>
    <button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button>
  </div></header>;
}