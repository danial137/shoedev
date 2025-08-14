import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const linkSections = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },
        { name: "Contact", href: "/contact" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
      ],
    },
    {
      title: "Categories",
      links: [
        { name: "Horror", href: "/category/horror" },
        { name: "Crime", href: "/category/crime" },
        { name: "History", href: "/category/history" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "FAQ", href: "/faq" },
        { name: "Help Center", href: "/help" },
        { name: "Report an Issue", href: "/report" },
      ],
    },
  ];

  return (
    <footer className="mt-16 bg-gray-800 p-8 rounded-lg">
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-4">

        {/* Logo + Copyright */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Trend Persia"
              width={36}
              height={36}
              className="w-8 h-8 md:w-9 md:h-9"
            />
            <p className="hidden md:block text-md font-medium tracking-wider text-white">
              TRENDPERSIA
            </p>
          </Link>
          <p className="text-sm text-gray-400">© 2025 Persian Store</p>
          <p className="text-sm text-gray-400">All Rights Reserved</p>
        </div>

        {/* Links */}
        {linkSections.map((section, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-2 text-center md:text-left"
          >
            <p className="text-sm font-semibold text-amber-50">
              {section.title}
            </p>
            {section.links.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="text-sm text-gray-400 hover:text-amber-200 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
