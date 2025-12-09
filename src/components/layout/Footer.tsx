import { Link } from "react-router-dom";
import { Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/lovable-uploads/261cb841-1550-43b8-927d-f30d8e8fb3c7.png"
                alt="Webisdom AI Solutions"
                className="h-20 sm:h-20 w-56 brightness-0 invert"
              />
              {/* <span className="text-lg font-bold">Webisdom AI</span> */}
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Building domain-specific AI solutions that deliver measurable
              impact across Hospitality, Fintech, and Healthcare.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/webisdom"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Webisdom LinkedIn"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/Webisdom"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Webisdom Twitter"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@webisdom.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/industries"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Industries
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://ai-chieftain.webisdomtech.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  AI Chieftain
                </a>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  AI Audit Service
                </Link>
              </li>
              <li>
               <Link
                  to="/services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                 Fintech
                </Link>
              </li>
              <li>
                 <Link
                  to="/industries?section=hospitality"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                 Hospitality solutions
                </Link>
              </li>
              <li>
                 <Link
                  to="/industries?section=revenue"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                 Renenue solutions
                </Link>
              </li>
              <li>
                 <Link
                  to="/industries?section=healthcare"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                 Healthcare solutions
                </Link>
              </li>
              <li>
                 <Link
                  to="/industries?section=fintech"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                Fintech solutions
                </Link>
              </li>
              <li>
                 <Link
                  to="/industries?section=coworking"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                 Coworking solutions
                </Link>
              </li>
              
            
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start space-x-2">
                <Mail size={16} className="mt-0.5 text-primary-foreground/80" />
                <div className="flex flex-col gap-1">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@webisdom.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    contact@webisdom.ai
                  </a>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=atharv.kumar@webisdom.ai
"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    atharv.kumar@webisdom.ai
                  </a>
                   <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=Atharv.kumar@webisdom.com
"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                   Atharv.kumar@webisdom.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Phone
                  size={16}
                  className="mt-0.5 text-primary-foreground/80"
                />
                <span className="text-primary-foreground/80 text-sm">
                  Phone: +91 9569394675
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin
                  size={30}
                  className="mt-0.5 text-primary-foreground/80"
                />
                <span className="text-primary-foreground/80">
                  First Floor, 8/78, Dentedge, Janpath, Connaught Place, New
                  Delhi, Delhi, 110001
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80 text-sm">
            © 2024 Webisdom AI Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
