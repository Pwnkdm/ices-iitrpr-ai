import { FocusCards } from "../ui/focus-cards";
import immerImage from "../../assets/5_day_immersion.webp";
import Hours from "../../assets/300 hours.png";
import alumni from "../../assets/alumni.jpeg";
import convocation from "../../assets/Convocation.jpeg";
import faculty from "../../assets/faculty.jpeg";

import nsdc from "../../assets/NSDC.png";
import six_trade_ai from "../../assets/artificial_intelligence.png";
import courseDuration from "../../assets/aicte.jpeg";

export function FocusCardsDemo() {
  const cards = [
    {
      id: "1",
      title: "AI Technocrat-20 Credits Equivalent to AICTE Internship Policy",
      src: courseDuration,
    },
    {
      id: "2",
      title: "300 Compulsory + 300 Electives of learning",
      src: Hours,
    },
    {
      id: "3",
      title: "IIT-Ropar & Industry Expert Faculty",
      src: faculty,
    },
    {
      id: "4",
      title: "Alumni Status - IIT Ropar",
      src: alumni,
    },
    {
      id: "5",
      title: "Certified Trainers Trained by IIT-Ropar",
      src: nsdc,
    },
    {
      id: "6",
      title: "Hands-on Experience-AI concepts in six Technical Streams",
      src: six_trade_ai,
    },
    {
      id: "7",
      title: "Convocation at IIT-Ropar",
      src: convocation,
    },
    {
      id: "8",
      title: "5 Day IIT-Ropar Campus Immersion",
      src: immerImage,
    },
  ];

  return (
    <>
      <FocusCards cards={cards} />
    </>
  );
}
