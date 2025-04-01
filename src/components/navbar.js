import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Text } from "./typography";

const ApplyButton = ({ isMobile }) => {
  return (
    <a href="https://lu.ma/9e1x29r4" target="_blank" rel="noopener noreferrer" className="mr-0">
      <button
        className={`text-white bg-[#C1413E] pl-8 pr-8 pt-1 pb-1 rounded-xl font-bold ${
          isMobile
            ? "flex "
            : "text-2xl pl-8 pr-8 pt-1 pb-1 rounded-xl transform transition duration-200 hover:scale-105"
        }`}
      >
        Apply
      </button>
    </a>
  );
};

const NavLink = ({ sectionId, title, externalUrl, icon }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (externalUrl) {
    return (
      <a
        href={externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-all duration-300 ease-in-out hover:bg-white hover:shadow-md rounded-md p-2 hover:scale-105 hover:-translate-y-1 flex items-center justify-center"
        aria-label={title}
      >
        {icon}
      </a>
    );
  }

  return (
    <button
      onClick={() => scrollToSection(sectionId)}
      className="transition-all duration-300 ease-in-out hover:bg-white hover:shadow-md rounded-md p-2 hover:scale-105 hover:-translate-y-1"
    >
      <Text>{title}</Text>
    </button>
  );
};

const NavLinks = ({ isMobile }) => {
  const links = [
    { sectionId: "about", title: "About" },
    { sectionId: "tracks", title: "Tracks" },
    { sectionId: "faq", title: "FAQ" },
    { sectionId: "sponsors", title: "Sponsors" },
    { 
      title: "Discord",
      externalUrl: "https://discord.gg/37jQnArEKg",
      icon: (
        <svg
          className="w-8 h-8 text-[#395C6B] hover:text-[#7289da]"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
        </svg>
      )
    },
    { 
      title: "Instagram",
      externalUrl: "https://www.instagram.com/hackabull/",
      icon: (
        <svg
          className="w-8 h-8 text-[#395C6B] hover:text-[#e1306c]"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    }
  ];

  return (
    <>
      {isMobile ? (
        <div className="flex flex-col text-lg text-start bg-white rounded-md p-4">
          {links.map((link, index) => {
            return (
              <NavLink
                key={link.sectionId || `external-${index}`}
                sectionId={link.sectionId}
                title={link.title}
                externalUrl={link.externalUrl}
                icon={link.icon}
              />
            );
          })}
          <ApplyButton isMobile />
        </div>
      ) : (
        <div className="flex items-center text-2xl gap-3">
          {links.map((link, index) => {
            return (
              <NavLink
                key={link.sectionId || `external-${index}`}
                sectionId={link.sectionId}
                title={link.title}
                externalUrl={link.externalUrl}
                icon={link.icon}
              />
            );
          })}
          <ApplyButton />
        </div>
      )}
    </>
  );
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center p-4 pr-0">
        <a href="/" className="flex-shrink-0">
          <div className="flex items-center">
            <img 
              src="/hackabull-favicon.png" 
              alt="HackaBull Logo" 
              className="h-16 w-16"
            />
            <span className="text-[#395C6B] text-xl md:text-2xl font-bold ml-2">HackaBull</span>
          </div>
        </a>

        <div className="hidden md:flex flex-grow justify-end pr-0">
          <NavLinks />
        </div>
        
        <div className="md:hidden ml-auto">
          {isOpen ? (
            <div className="flex-col">
              <div className="flex justify-end mb-2">
                <FiX
                  className="h-10 w-10 text-[#395C6B] cursor-pointer"
                  onClick={() => setIsOpen(false)}
                />
              </div>
              <NavLinks isMobile />
            </div>
          ) : (
            <FiMenu
              className="h-10 w-10 text-[#395C6B] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};
