import { useState } from "react";
import { Text } from "./typography";
import "./accordion.css"; // Import the CSS file for animations

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ul className="accordion flex align-center flex-col space-y-2 md:space-y-6">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleItemClick(index)}
          index={index}
        />
      ))}
    </ul>
  );
};

const AccordionItem = ({ title, content, isOpen, onClick, index }) => {
  return (
    <li>
      <div
        className={`cursor-pointer custom-shell-bullet font-bold pl-[3em]`}
        onClick={onClick}
        style={{
          backgroundImage: "url('/image/backgrounds/bulletpoint.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left center",
          backgroundSize: "2.25em",
          color: index % 2 === 0 ? `#3b2a1d` : `#1a5653`,
        }}
      >
        <p className="text-md md:text-2xl mb-0 md:mb-1 font-montalt font-medium text-red-700">
          {title}
        </p>
      </div>
      <div
        className={`text-[2vw] md:text-xl text-red-600 opacity-90 ml-[3vw] md:ml-[3.2rem] content font-nunito ${
          isOpen ? "open" : ""
        }`}
      >
        <Text>{content}</Text>
      </div>
    </li>
  );
};

export default Accordion;
