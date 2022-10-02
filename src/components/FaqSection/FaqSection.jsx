import "./faqSection.scss";
import { dataFAQ } from "../../data";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FaqSection = () => {
  return (
    <div className="faqSection" id="faqSection">
      <div className="faq-container">
        <div className="faq-left">
          <h1>Frequently Asked Question</h1>
          <p>Masih ragu sama Binar Car Rental? yuk cek disini untuk menghilangkan keraguanmu!</p>
        </div>
        <div className="faq-right">
          {dataFAQ.map((d) => (
            <Accordion key={d.id}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography>{d.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{d.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
