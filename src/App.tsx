import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Staff from "./pages/Staff";
import Roster from "./pages/Roster";
import Schedule from "./pages/Schedule";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Media from "./pages/Media";
import Sponsors from "./pages/Sponsors";
import Contact from "./pages/Contact";

function AppShell() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-graysWhite via-white to-graysMuted/60 text-graysDark">
      <Navbar />
      <main className={`flex-1 ${isHome ? "" : "pt-6 md:pt-8"}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/roster" element={<Roster />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:slug" element={<NewsDetail />} />
          <Route path="/media" element={<Media />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
