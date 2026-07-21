"use client";

export function Footer() {
  const WHATSAPP_NUMBER = "+917400722247";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = (message: string) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <footer
      id="contact"
      className="relative bg-white dark:bg-blue-950 border-t border-amber-500/30 py-8 sm:py-12 md:py-16"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Logo */}
          <div>
            <h3 className="text-amber-500 font-bold mb-4 text-lg">
              BIG DADDY BOOK
            </h3>

            <p className="text-gray-400 text-sm">
              India&apos;s Premier Cricket & Casino Platform
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h4 className="text-white font-bold mb-4 text-lg">
              Quick Links
            </h4>

            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="hover:text-amber-400 transition"
                >
                  Home
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-amber-400 transition"
                >
                  About
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("how")}
                  className="hover:text-amber-400 transition"
                >
                  How It Works
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}

          <div>
            <h4 className="text-white font-bold mb-4 text-lg">
              Support
            </h4>

            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <button
                  onClick={() =>
                    openWhatsApp(
                      "Hello! I would like to contact Big Daddy Book support."
                    )
                  }
                  className="hover:text-amber-400 transition"
                >
                  Contact Us
                </button>
              </li>

              <li>
                <button
                  onClick={() =>
                    openWhatsApp(
                      "Hi! I have a few questions regarding your platform. Could you please help me?"
                    )
                  }
                  className="hover:text-amber-400 transition"
                >
                  FAQ
                </button>
              </li>

              <li>
                <button
                  onClick={() =>
                    openWhatsApp(
                      "Hello! I need assistance with my account. Please help me."
                    )
                  }
                  className="hover:text-amber-400 transition"
                >
                  Help Center
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h4 className="text-white font-bold mb-4 text-lg">
              Contact
            </h4>

            <button
              onClick={() =>
                openWhatsApp(
                  "Hello! I want to get my Big Daddy Book ID."
                )
              }
              className="text-gray-400 text-sm hover:text-green-400 transition"
            >
              WhatsApp: Available 24/7
            </button>
          </div>
        </div>

        <div className="border-t border-amber-500/30 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © 2026 BIG DADDY BOOK. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}