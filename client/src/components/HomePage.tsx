import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom"; // To listen to changes in the URL
import HeroPage from "./HeroPage";
import Curriculum from "./Curriculam";
import FAQs from "./FAQs";
import ContactUs from "./ContactUs";
import Instructors from "./Instructors";
import BrochureDownload from "./BrochureDownload";
import Coordinator from "./Coordinator";
import { CardHoverEffect } from "./CardHoverEffect";

const HomePage = () => {
  // Get the current hash from the URL (used to highlight or scroll to sections)
  const { hash } = useLocation();

  // Define a function to update the URL based on the section ID
  const updateURL = (sectionId: string) => {
    window.history.pushState({}, "", `#${sectionId}`); // Updates the URL with the section ID
  };

  // Set up the Intersection Observer to track section visibility
  useEffect(() => {
    const sections = document.querySelectorAll("section"); // Get all sections

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            updateURL(sectionId); // Update the URL when the section is visible
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.5, // 50% visibility before triggering
      }
    );

    // Observe all sections
    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect(); // Cleanup observer on component unmount
    };
  }, []);

  // Scroll to section based on the current URL hash (if any)
  useEffect(() => {
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <Box
      sx={{
        minHeight: "200vh",
        padding: 0,
        paddingTop: 10,
        fontFamily: "Lexend",
      }}
    >
      {/* Hero Section */}
      <section id="overview" sx={{ marginTop: 0, padding: 0, width: "100vw" }}>
        <HeroPage />
      </section>

      {/* Why This Course Section */}
      <section
        id="why_this_course"
        sx={{ marginTop: 0, padding: 0, width: "100vw" }}
      >
        <CardHoverEffect />
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" sx={{ marginTop: 10, padding: 0 }}>
        <Curriculum />
      </section>

      {/* Instructor Section */}
      <section id="instructors" sx={{ marginTop: 10, padding: 0 }}>
        <Instructors />
      </section>

      {/* brochure Section */}
      <section id="brochure" sx={{ marginTop: 10 }}>
        <BrochureDownload />
      </section>

      {/* FAQs Section */}
      <section id="faqs" sx={{ marginTop: 10, padding: 0 }}>
        <FAQs />
        <Coordinator />
      </section>

      {/* Contact Section */}
      <section id="contact" sx={{ padding: 0 }}>
        <ContactUs />
      </section>
    </Box>
  );
};

export default HomePage;
