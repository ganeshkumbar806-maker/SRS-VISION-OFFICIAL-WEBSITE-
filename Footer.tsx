import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Instagram, Linkedin, Github } from "./Icons";
export default function Footer(){return <footer className="footer"><div className="container"><div className="footer-top">
  <div className="footer-brand"><div className="footer-logo"><Image src="/images/srs-vision-logo.jpg" alt="SRS Vision logo" width={64} height={64}/><strong>SRS <span>VISION</span></strong></div><p>Creative ideas, thoughtful design and technology that turn your vision into reality.</p><div className="socials"><a href="#" aria-label="Instagram"><Instagram/></a><a href="#" aria-label="LinkedIn"><Linkedin/></a><a href="#" aria-label="GitHub"><Github/></a></div></div>
  <div><h4>Explore</h4><Link href="/#about">About us</Link><Link href="/#services">Our services</Link><Link href="/#work">Our work</Link><Link href="/dashboard">Team dashboard</Link></div>
  <div><h4>Services</h4><Link href="/services">Web development</Link><Link href="/services">UI/UX design</Link><Link href="/services">Brand design</Link><Link href="/services">Social media</Link></div>
  <div><h4>Start a project</h4><p>Have an idea? Let&apos;s make something meaningful together.</p><Link className="footer-link" href="/#contact">Contact SRS Vision <ArrowUpRight size={16}/></Link></div>
</div><div className="footer-bottom"><span>© {new Date().getFullYear()} SRS Vision. All rights reserved.</span><span>Learn together. Create together. Build together. Grow together.</span></div></div></footer>}