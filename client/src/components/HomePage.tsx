import { useEffect, lazy, Suspense } from "react";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { CardHoverEffect } from "./CardHoverEffect";
import BarLoader from "react-spinners/BarLoader";

// Lazy-loaded components
const HeroPage = lazy(() => import("./HeroPage"));
const Curriculum = lazy(() => import("./Curriculam"));
const FAQs = lazy(() => import("./FAQs"));
const ContactUs = lazy(() => import("./ContactUs"));
const Instructors = lazy(() => import("./Instructors"));
const BrochureDownload = lazy(() => import("./BrochureDownload"));
const Coordinator = lazy(() => import("./Coordinator"));

const HomePage = () => {
  const { hash } = useLocation();

  const updateURL = (sectionId: string) => {
    window.history.pushState({}, "", `#${sectionId}`);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateURL(entry.target.id);
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  const Fallback = () => (
    <div className="text-center text-black py-10 text-xl font-bold flex justify-center items-center h-screen">
      <BarLoader />
    </div>
  );

  return (
    <Box sx={{ minHeight: "200vh", pt: 10, fontFamily: "Lexend" }}>
      <Helmet>
        <title>AI Technocrat Programme - ICES, ICE & IIT Ropar</title>
        <meta
          name="description"
          content="Register as a student or teacher for the AI Technocrat Programme conducted by ICES, ICE, and IIT Ropar."
        />
        <meta
          name="keywords"
          content="AI, Technocrat, ICES, IIT Ropar, Student Registration, Teacher Registration"
        />
      </Helmet>

      <Suspense fallback={<Fallback />}>
        <section id="overview">
          <HeroPage />
        </section>

        <section id="why_this_course">
          <CardHoverEffect />
        </section>

        <section id="curriculum">
          <Curriculum />
        </section>

        <section id="instructors">
          <Instructors />
        </section>

        <section id="brochure">
          <BrochureDownload />
        </section>

        <section id="faqs">
          <FAQs />
          <Coordinator />
        </section>

        <section id="contact">
          <ContactUs />
        </section>
      </Suspense>
    </Box>
  );
};

export default HomePage;
