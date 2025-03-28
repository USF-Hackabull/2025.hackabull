import "./App.css";
import { Navbar } from "./components/navbar";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Tracks } from "./components/tracks";
import { FAQ } from "./components/faq";
import { Sponsors } from "./components/sponsors";
import { Speaker } from "./components/speaker";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black overflow-hidden">
      {/* MLH Trust Badge */}
      <a
        id="mlh-trust-badge"
        style={{
          display: "block",
          maxWidth: "100px",
          minWidth: "60px",
          position: "absolute",
          left: "10px",
          top: "0",
          width: "10%",
          zIndex: 10000,
        }}
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=white"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg"
          alt="Major League Hacking 2025 Hackathon Season"
          style={{ width: "100%" }}
        />
      </a>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Home />

        {/* About Section */}
        <section id="about">
          <About />
        </section>

        {/* Tracks Section */}
        <section id="tracks">
          <Tracks />
        </section>

        {/* Speaker Section */}
        <section id="speaker">
          <Speaker />
        </section>

        {/* FAQ Section */}
        <section id="faq">
          <FAQ />
        </section>

        {/* Sponsors Section */}
        <section id="sponsors">
          <Sponsors />
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white text-center">
        <div className="py-4 border-t border-green-700/30">
          <p className="text-sm md:text-base">
            Special thanks to HackDuke for providing the template! ❤️
          </p>
        </div>
        <div className="bg-black py-2 text-xs">
          <p>© 2025 Hackabull</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
