import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Intro } from "@/components/Intro";
import { Advocate } from "@/components/Advocate";
import { Events } from "@/components/Events";
import { Issues } from "@/components/Issues";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Intro />
      <Advocate />
      <Events />
      <Issues />
    </>
  );
}

export default App;
