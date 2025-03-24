import React, { useState } from "react";
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
  Pagination,
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

  // Pagination State
  const [page, setPage] = useState(1);
  const faqsPerPage = 5;
  const totalPages = Math.ceil(faqsData.length / faqsPerPage);

  // Slice FAQs for the current page
  const displayedFaqs = faqsData.slice(
    (page - 1) * faqsPerPage,
    page * faqsPerPage
  );

  return (
    <Box
      sx={{
        py: 10,
        px: 2,
        minHeight: "100vh",
        pt:0
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
              background: "linear-gradient(to bottom right, #5eead4, #4338ca)",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            Frequently Asked Questions
          </Typography>

          

          <Typography variant={isMobile ? "body2" : "body1"} color="#2F4F4F">
            Find answers to common questions about the AI Technocrat Program.
          </Typography>
        </Box>

        {/* FAQs List */}
        <div className="h-[60vh] md:h-[75vh] sm:h-[75vh] p-4 overflow-y-auto">
        {displayedFaqs.length > 0 ? (
          displayedFaqs.map((faq: FaqItem, index: number) => (
            <Paper
              elevation={3}
              key={`faq-${(page - 1) * faqsPerPage + index}`}
              sx={{
                mb: 2,
                borderRadius: 3,
                overflow: "hidden",
                transition: "all 0.3s ease-in-out",
                backgroundColor: "rgba(255, 255, 255, 0.1)", // Transparent background for Paper
                "&:hover": {
                  transform: "scale(1.02)",
                  backgroundColor: "rgba(255, 255, 255, 0.15)", // Slightly darker on hover
                },
              }}
            >
              <Accordion
                defaultExpanded={isMobile ? false : index === 0}
                sx={{
                  backgroundColor: "transparent", // Transparent background for Accordion
                  boxShadow: "none",
                  "&:before": { display: "none" },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "black" }} />}
                  aria-controls={`panel-${index}-content`}
                  id={`panel-${index}-header`}
                  sx={{
                    backgroundColor: "transparent", // Transparent background for AccordionSummary
                    textTransform: "none",
                    padding: "12px 16px",
                    color: "black",
                  }}
                >
                  <Typography
                    variant={isMobile ? "body1" : "h6"}
                    sx={{ fontSize: "16px", color: "#2F4F4F" }}
                  >
                    {index + 1 + (page - 1) * faqsPerPage}. {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ p: 3, backgroundColor: "transparent" }}>
                  <Typography
                    variant={isMobile ? "body2" : "body1"}
                    sx={{ color: "#2F4F4F" }}
                  >
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
        </div>

        {/* Pagination Component */}
        {totalPages > 1 && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={(_, value) => setPage(value)}
              color="primary"
            />
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default FAQs;
