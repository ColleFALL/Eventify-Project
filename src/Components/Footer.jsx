import React from "react";

const Footer = () => {
  const footerLinks = [
    {
      title: "Use Eventbrite",
      links: ["Create Events", "Pricing", "Event Marketing", "FAQs", "Sitemap"],
    },
    {
      title: "Plan Events",
      links: ["Sell Tickets", "Payment System", "Virtual Events", "QR Check-in"],
    },
    {
      title: "Find Events",
      links: ["Dakar Events", "New York", "London", "Paris", "Berlin"],
    },
    {
      title: "Connect With Us",
      links: ["Support", "Facebook", "LinkedIn", "Instagram", "TikTok"],
    },
  ];

  return (
    <footer className="mt-16 bg-purple-900 text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-purple-700 pb-8">
          {footerLinks.map((col, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-semibold mb-3">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-300 hover:text-white text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 mt-8 text-sm">
          <p>© 2025 Eventbrite. All rights reserved.</p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            {["Terms", "Privacy", "Cookies"].map((item) => (
              <a key={item} href="#" className="hover:text-white">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
