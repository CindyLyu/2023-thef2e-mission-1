import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Intro } from "@/components/Intro";
import { Advocate } from "@/components/Advocate";
import { Events } from "@/components/Events";
import { Issues } from "@/components/Issues";
import { Service } from "@/components/Service";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Intro />
      <Advocate />
      <Events />
      <Issues />
      <Service />
      <Footer />
    </>
  );
}

export default App;
