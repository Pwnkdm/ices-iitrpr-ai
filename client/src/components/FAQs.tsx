import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { faqsData } from "../data/Faqs.js";

const faqs = [
  {
    question:
      "Is there a two-way communication between student & lecturer during the program?",
    answer: "Yes, two-way communication is there.",
  },
  {
    question:
      "How do the 20 credits earned in the AI Technocrat Program benefit participants?",
    answer:
      "Earning 20 credits in the AI Technocrat Program provides participants with recognized academic validation, which can be used for future academic pursuits, internships, or job applications, enhancing their overall professional profile.",
  },
  {
    question:
      "What is the role of the Academic Bank of Credits (ABC) in the AI Technocrat Program?",
    answer:
      "The Academic Bank of Credits (ABC) stores and manages the credits earned by participants in the AI Technocrat Program, ensuring that their academic achievements are recognized and easily accessible for future reference or transfer.",
  },
  {
    question:
      "What are the benefits of receiving dual certification, one from NCVET-ICES and from IIT Ropar, in the AI-Technocrat Program?",
    answer:
      "Dual certification from NCVET- ICES and IIT- Ropar enhances credibility, improves job prospects, and provides recognition from both industry and academia.",
  },
  {
    question:
      "How does receiving alumni status from IIT- Ropar benefit participants of the AI-Technocrat Program?",
    answer:
      "Receiving alumni status from IIT- Ropar provides participants with access to a prestigious network, career resources, and ongoing opportunities for professional growth.",
  },
  {
    question:
      "What is the significance of the convocation at IIT-Ropar for participants of the AI-Technocrat Program?",
    answer:
      "The convocation at IIT- Ropar offers participants a prestigious successfully completion ceremony.",
  },
  {
    question:
      "What is the significance of the 5-day campus visit to IIT Ropar for selected participants?",
    answer:
      "Selected participants will have the opportunity to stay at IIT Ropar for 5 days, work on mini-projects under the guidance of IIT faculty, and gain hands-on experience while engaging with a world-class academic environment.",
  },
  {
    question:
      "Will I get a chance to visit IIT- Ropar campus under this program?",
    answer:
      "Yes, everyone will get a chance to visit the campus during the graduation ceremony.",
  },
];

const FAQs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Frequently Asked Questions
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Find answers to common questions about the AI Technocrat Program.
        </Typography>
      </Box>

      {faqsData?.length > 0 ? (
        faqsData.map((faq, index) => (
          <Accordion
            key={`faq-${index}`} // Unique key to avoid React warnings
            defaultExpanded={isMobile ? false : index === 0}
            sx={{
              mb: 1,
              boxShadow: "none",
              border: `1px solid ${theme.palette.divider}`,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel-${index}-content`}
              id={`panel-${index}-header`} // Ensuring valid ID
              sx={{ backgroundColor: theme.palette.background.paper }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{ p: 3, backgroundColor: theme.palette.background.paper }}
            >
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))
      ) : (
        <Typography variant="body1" color="text.secondary">
          No FAQs available at the moment.
        </Typography>
      )}
    </Container>
  );
};

export default FAQs;
