import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/manoj-kumar-samal" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/manoj-kumar-samal-2361132a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Email", icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=manojkumarsamal2002@gmail.com" },
  ];

  return (
    <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-gray-800/50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label={link.name}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center text-gray-400 text-sm">
            <span>© {currentYear} Portfolio. Made with</span>
            <Heart className="h-4 w-4 mx-1 text-red-400" />
            <span>and lots of coffee</span>
          </div>
        </div>
      </div>
    </footer>
  );
};