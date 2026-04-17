export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 md:px-16 py-5 border-b border-border bg-background">
      <div className="flex items-center gap-2">
        <img src="../SORBO-small.png" alt="SORBO Logo" className="h-20" />
      </div>
      <div>
        <a
          href="/"
          className="text-sm font-semibold text-accent border border-accent/40 px-4 py-2 rounded-full hover:bg-accent/10 transition-colors duration-200"
        >
          Home
        </a>
        {/* <a
          href="/discovery-box"
          className="text-sm font-semibold text-accent border border-accent/40 px-4 py-2 rounded-full hover:bg-accent/10 transition-colors duration-200"
        >
          Subscribe
        </a> */}
      </div>
    </nav>
  );
}
