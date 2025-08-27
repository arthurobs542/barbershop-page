import AgendeHorario from "./AgendeHorario";
import Contato from "./contato";
import Depoimentos from "./Depoimentos";
import Escolha from "./Escolha";
import Experiencia from "./Experiencias";
import Header from "./Header";
import Servicos from "./Servicos";
import Tratamento from "./Tratamento";
import Footer from "./Footer";

function App() {
  return (
    <div className="bg-[#f8f5ef]">
      <Header />
      <Contato />
      <Experiencia />
      <Servicos />
      <Tratamento />
      <Escolha />
      <Depoimentos />
      <AgendeHorario />
      <Footer />
    </div>
  );
}

export default App;
