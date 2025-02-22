import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container, Button } from "@mui/material";
import { useState } from "react";

export default function Accordian() {
  const [myStyle, setMyStyle] = useState({
    backgroundColor: "white",
    color: "black",
  });
  const [BtnText, setBtnText] = useState("Enable Dark Mode")
  const handleClick = () => {
    if (myStyle.backgroundColor === "#03021e") {
      setMyStyle({
        backgroundColor: "white",
        color: "black",
        border:'2px solid black'
      });
      setBtnText("Enable Dark Mode")
    } else {
      setMyStyle({
        backgroundColor: "#03021e",
        color: "white",
         border:'2px solid white'
         
      });
      setBtnText("Enable Light Mode")
    }
  };
  return (
    <>
      <div style={{ width: "100%", height: "90vh", background:myStyle.backgroundColor}}>
        <Container sx={{ paddingTop: 5 }}>
          <Accordion  sx={myStyle}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
             
            >
              <Typography component="span">Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio enim nisi est doloremque, iure blanditiis neque ipsam
              dicta commodi eos numquam officia, dolore autem dolorum, ullam
              quis. Culpa autem, cupiditate molestiae recusandae quo, maxime
              dicta ducimus blanditiis rem quod placeat pariatur vero excepturi
              cum reprehenderit similique odio qui nemo. Magni quas, beatae
              veritatis molestias optio error laborum consequuntur commodi,
              quidem ullam qui. Alias aliquam in architecto iusto reprehenderit
              earum nobis amet, nam dolorum omnis eligendi! Accusamus beatae
              vero quisquam fuga.
            </AccordionDetails>
          </Accordion>
          <Accordion sx={myStyle}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography component="span">Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              voluptate, deserunt laboriosam quaerat in eius! Molestias iure
              reiciendis vel nesciunt harum voluptas, asperiores magnam illo et
              saepe explicabo impedit, animi quidem dolor delectus quaerat alias
              ipsum fugiat modi minus, sapiente unde perferendis inventore.
              Rerum mollitia perferendis aperiam sed ducimus voluptate illo
              earum reprehenderit reiciendis? Iure, id atque ratione eos quas
              quaerat perferendis sunt. Velit praesentium fuga sapiente eaque,
              ipsam eos facere magnam assumenda minus soluta placeat labore hic
              facilis est.
            </AccordionDetails>
          </Accordion>
          <Accordion sx={myStyle}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography component="span">Accordion Actions</Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem odit
              corporis inventore? Sit, tempore numquam, deserunt minus nemo
              officiis harum commodi nesciunt mollitia nobis aut facere
              reiciendis voluptatum praesentium porro, quos dolorum consectetur
              ipsa? At reiciendis rem cum recusandae suscipit fugit sapiente
              saepe ex quam aliquid iusto, illum, rerum quisquam. Velit iusto
              eligendi blanditiis odio excepturi est quibusdam soluta, odit
              praesentium iste, incidunt amet vel molestiae dignissimos culpa
              earum, neque assumenda impedit numquam laudantium quo illum eaque
              ipsam minima. Reprehenderit.
            </AccordionDetails>
          </Accordion>
          <Button
            variant="contained"
            sx={{ marginTop: 2 }}
            onClick={handleClick}
          >
            {BtnText}
          </Button>
        </Container>
      </div>
    </>
  );
}
