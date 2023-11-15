import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Intro } from "@/components/Intro";
import { Advocate } from "@/components/Advocate";
import { Events } from "@/components/Events";
import { Issues } from "@/components/Issues";
import { Service } from "@/components/Service";

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
    </>
  );
}

export default App;
