import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CheckBox } from "@mui/icons-material";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
export default function OurAccordion({ category }: { category: any }) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <FormGroup>
              <FormControlLabel
                //     required
                control={<Checkbox />}
                label={category.department}
              />
            </FormGroup>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="border px-10 rounded-2xl shadow-sm">
            {category.sub_departments.map((data, index) => (
              <Typography key={index}>
                <FormGroup>
                  <FormControlLabel
                    //     required
                    control={<Checkbox />}
                    label={category.department}
                  />
                </FormGroup>
              </Typography>
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
