import Header from "../../components/Header";
import Produtos from "./Components/Produtos";
import Feedbacks from "./Components/Feedbacks";
import Solutions from "./Components/Solutions";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import ButtonWithArrow from "../../components/ButtonWithArrow";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-scroll";

import "./style.css";

const InitialPage = () => {
  return (
    <>
      <div className="div--mainBox">
        <div className="div--mainGradient">
          <Header />
          <section className="about--content">
            <span className="subtitle">Potencializando o seu tempo</span>
            <span className="header--title">Locação de máquinas</span>
            <span className="about--onhome">
              Utilize de equipamentos da mais alta qualidade, com preços justos
              e serviços de suporte 24/7 a sua disposição!
              
            </span>
            <div className="down--arrow">
              <Link to="solutions--container" smooth={true} duration={1000}>
                <ExpandMoreIcon
                  style={{ color: "white", fontSize: 100, cursor: "pointer" }}
                />{" "}
              </Link>
            </div>
          </section>
        </div>
      </div>
      <section className="solutions">
        <Solutions />
      </section>
      <section>
        <Produtos />
      </section>
      <section>
        <Feedbacks />
      </section>
      <section>
        <ContactUs />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default InitialPage;
