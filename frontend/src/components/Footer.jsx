import { FaInstagram, FaTiktok, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background relative overflow-hidden">
      {/* subtle glow */}
      <div className="absolute inset-0 pointer-events-none" />

      <div className="px-6 md:px-16 py-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/SORBO-small.png" alt="SORBO Logo" className="h-16" />
          {/* <span className="text-white font-semibold tracking-tight">
            SORBO SOCIETY
          </span> */}
        </div>

        {/* Socials */}
        <div className="flex items-center gap-5 text-white/40 text-lg">
          <a
            href="#"
            className="hover:text-accent transition-colors duration-200"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="hover:text-accent transition-colors duration-200"
          >
            <FaTiktok />
          </a>
          <a
            href="#"
            className="hover:text-accent transition-colors duration-200"
          >
            <FaYoutube />
          </a>
          <a
            href="#"
            className="hover:text-accent transition-colors duration-200"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-white/30 text-xs text-center md:text-right">
          © {new Date().getFullYear()} SORBO SOCIETY. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
