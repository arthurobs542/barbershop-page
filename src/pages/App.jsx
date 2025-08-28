import AgendeHorario from "./AgendeHorario";
import Contato from "./Contato";
import Depoimentos from "./Depoimentos";
import Escolha from "./Escolha";
import Experiencia from "./Experiencias";
import Header from "./Header";
import Servicos from "./Servicos";
import Tratamento from "./Tratamento";
import Footer from "./Footer";
import ScrollToTop from "../components/ScrollToTop";

function App() {
  return (
    <section className="bg-[#f8f5ef]">
      <Header />
      <Contato />
      <Experiencia />
      <Servicos />
      <Tratamento />
      <Escolha />
      <Depoimentos />
      <AgendeHorario />
      <Footer />
      <ScrollToTop></ScrollToTop>
    </section>
  );
}

export default App;
