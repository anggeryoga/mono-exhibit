import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Blog from "@/pages/Blog";
import Contacts from "@/pages/Contacts";
import Privacy from "@/pages/Privacy";
import Ranking from "@/pages/Ranking";
import Store from "@/pages/Store";
import ExhibitionDetail from "@/pages/ExhibitionDetail";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <Link to="/" className="mt-6 inline-block border-b border-foreground pb-1 text-sm uppercase tracking-[0.2em]">
          Go home
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/store" element={<Store />} />
        <Route path="/exhibition/:slug" element={<ExhibitionDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
