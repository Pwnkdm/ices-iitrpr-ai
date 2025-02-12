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
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { faqsData } from "../data/Faqs";

// Define the TypeScript interface for FAQ items
interface FaqItem {
  question: string;
  answer: string;
}

const FAQs: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        py: 10,
        px: 2,
        background: "linear-gradient(to right, #121212, #1e1e1e)", // Dark gradient
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">
        {/* Title Section */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant={isMobile ? "h5" : "h4"} // Adjust text size for responsiveness
            sx={{
              fontWeight: "bold",
              color: theme.palette.primary.main,
              mb: 2,
            }}
          >
            Frequently Asked Questions
          </Typography>
          <Typography variant={isMobile ? "body2" : "body1"} color="#ffffff">
            Find answers to common questions about the AI Technocrat Program.
          </Typography>
        </Box>

        {/* FAQs List */}
        {faqsData?.length > 0 ? (
          faqsData.map((faq: FaqItem, index: number) => (
            <Paper
              elevation={3}
              key={`faq-${index}`}
              sx={{
                mb: 2,
                borderRadius: 3,
                overflow: "hidden",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            >
              <Accordion
                defaultExpanded={isMobile ? false : index === 0}
                sx={{
                  backgroundColor: "#fff",
                  boxShadow: "none",
                  "&:before": { display: "none" },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel-${index}-content`}
                  id={`panel-${index}-header`}
                  sx={{
                    backgroundColor: "#f5f5f5",
                    fontWeight: "bold",
                    padding: "12px 16px",
                  }}
                >
                  <Typography
                    variant={isMobile ? "body1" : "h6"}
                    sx={{ fontWeight: "bold" }}
                  >
                    {index + 1}. {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ p: 3, backgroundColor: "#ffffff" }}>
                  <Typography variant={isMobile ? "body2" : "body1"}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Paper>
          ))
        ) : (
          <Typography
            variant={isMobile ? "body2" : "body1"}
            color="text.secondary"
            textAlign="center"
          >
            No FAQs available at the moment.
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default FAQs;