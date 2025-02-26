import logoImage from "@/assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
const footerLinks = [
  { href: "#", label: "Contact" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
          <div>
            <Image src={logoImage} alt="layers logo" />
          </div>
          <div>
            <nav className="flex gap-6 ">
              {footerLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.label}
                  className="text-white/50 text-sm hover:text-lime-400 transition-colors duration-500"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
