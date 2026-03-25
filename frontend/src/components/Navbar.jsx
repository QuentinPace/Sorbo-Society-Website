import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { motion } from "framer-motion";
import { cn } from "./lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Navbar({ bgOpacity = 1 }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate()
  const productsItems = [
    {
      title: "Calculators",
      href: "/products",
      description: "Advanced calculation tools for your business needs",
    },
    {
      title: "Analytics",
      href: "/products",
      description: "Real-time data insights and reporting",
    },
    {
      title: "Automation",
      href: "/products",
      description: "Streamline your workflow with smart automation",
    },
    {
      title: "Integration",
      href: "/products",
      description: "Connect with your favorite tools seamlessly",
    },
  ];

  const servicesItems = [
    {
      title: "Consulting",
      href: "/services/consulting",
      description: "Expert guidance for your strategic decisions",
    },
    {
      title: "Implementation",
      href: "/services/implementation",
      description: "Professional setup and configuration services",
    },
    {
      title: "Training",
      href: "/services/training",
      description: "Comprehensive training programs for your team",
    },
    {
      title: "Support",
      href: "/services/support",
      description: "24/7 dedicated support for your success",
    },
  ];

  const resourcesItems = [
    {
      title: "Documentation",
      href: "/resources/docs",
      description: "Detailed guides and API references",
    },
    {
      title: "Blog",
      href: "/resources/blog",
      description: "Latest insights and industry updates",
    },
    {
      title: "Case Studies",
      href: "/resources/case-studies",
      description: "Success stories from our clients",
    },
    {
      title: "FAQ",
      href: "/resources/faq",
      description: "Answers to commonly asked questions",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-full mx-auto px-2 sm:px-6 rounded-5xl mt-8">
        <header className="flex items-center justify-between px-3 sm:px-8 py-4 relative w-full">
          <div 
            className="flex items-center justify-between rounded-full px-6 sm:px-8 py-3 shadow-lg border w-full h-20 backdrop-blur-sm transition-all duration-300"
            style={{
              backgroundColor: `rgba(255, 255, 255, ${bgOpacity * 0.9})`,
              borderColor: `rgba(229, 231, 235, ${bgOpacity})`,
              boxShadow: `0 10px 15px -3px rgba(0, 0, 0, ${bgOpacity * 0.1})`
            }}
          >
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <Link href="/" className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                <span className="text-brand-primary bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  <img src="/wchem-logo.png" alt="Wchem Logo" width={150} height={50} />
                </span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <NavigationMenu>
                <NavigationMenuList className="gap-2">
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/"
                      className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 text-lg ${
                        bgOpacity === 0
                          ? "text-white hover:bg-white/20 hover:text-white focus:bg-white/20 focus:text-white"
                          : "text-gray-900 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900"
                      }`}
                    >
                      Home
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger onClick={()=>navigate('/products') } className={`bg-transparent text-lg transition-colors ${
                        bgOpacity === 0
                          ? "text-white hover:bg-white/20"
                          : "text-gray-900 hover:bg-gray-100"
                      }`}>
                      Products
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {productsItems.map((item) => (
                          <ListItem
                            key={item.title}
                            title={item.title}
                            href={item.href}
                          >
                            {item.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={`bg-transparent text-lg transition-colors ${
                        bgOpacity === 0
                          ? "text-white hover:bg-white/20"
                          : "text-gray-900 hover:bg-gray-100"
                      }`}>
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {servicesItems.map((item) => (
                          <ListItem
                            key={item.title}
                            title={item.title}
                            href={item.href}
                          >
                            {item.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={`bg-transparent text-lg transition-colors ${
                        bgOpacity === 0
                          ? "text-white hover:bg-white/20"
                          : "text-gray-900 hover:bg-gray-100"
                      }`}>
                      Resources
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {resourcesItems.map((item) => (
                          <ListItem
                            key={item.title}
                            title={item.title}
                            href={item.href}
                          >
                            {item.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/about"
                      className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 text-lg ${
                        bgOpacity === 0
                          ? "text-white hover:bg-white/20 hover:text-white focus:bg-white/20 focus:text-white"
                          : "text-gray-900 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900"
                      }`}
                    >
                      About Us
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/contact"
                      className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 text-lg ${
                        bgOpacity === 0
                          ? "text-white hover:bg-white/20 hover:text-white focus:bg-white/20 focus:text-white"
                          : "text-gray-900 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900"
                      }`}
                    >
                      Contact
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button className="rounded-full px-6 h-11 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white shadow-md transition-all duration-300 hover:shadow-lg">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </header>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 rounded-3xl bg-white shadow-lg border border-gray-100 overflow-hidden"
          >
            <div className="p-6 space-y-4">
              <Link
                href="/"
                className="block py-2 text-lg font-medium hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
              <MobileDropdown title="Products" items={productsItems} />
              <MobileDropdown title="Services" items={servicesItems} />
              <MobileDropdown title="Resources" items={resourcesItems} />
              <Link
                href="/about"
                className="block py-2 text-lg font-medium hover:text-blue-600 transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="block py-2 text-lg font-medium hover:text-blue-600 transition-colors"
              >
                Contact
              </Link>
              <Button className="w-full rounded-full h-12 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white">
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

const ListItem = ({ className, title, children, href, ...props }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-500">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

const MobileDropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-2 text-lg font-medium hover:text-blue-600 transition-colors"
      >
        {title}
        <ChevronDown
          className={cn(
            "w-4 h-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="pl-4 space-y-2 mt-2"
        >
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="block py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              <div className="font-medium">{item.title}</div>
              <div className="text-xs text-gray-500 mt-0.5">
                {item.description}
              </div>
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );
};