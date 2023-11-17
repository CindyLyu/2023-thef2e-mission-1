import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Intro } from "@/components/Intro";
import { Advocate } from "@/components/Advocate";
import { Events } from "@/components/Events";
import { Issues } from "@/components/Issues";
import { Service } from "@/components/Service";
import { Footer } from "@/components/Footer";

function App() {
  const navigationItem = [
    {
      name: "候選人主張",
      id: "advocate",
      icon: new URL("/src/assets/navigation/candidate.svg", import.meta.url)
        .href,
    },
    {
      name: "最新活動",
      id: "events",
      icon: new URL("/src/assets/navigation/news.svg", import.meta.url).href,
    },
    {
      name: "政策議題",
      id: "issues",
      icon: new URL("/src/assets/navigation/issue.svg", import.meta.url).href,
    },
    {
      name: "小額捐款",
      id: "service",
      icon: new URL("/src/assets/navigation/donate.svg", import.meta.url).href,
    },
    {
      name: "服務信箱",
      alias: "民眾服務信箱",
      id: "service",
      icon: new URL("/src/assets/navigation/email.svg", import.meta.url).href,
    },
  ];

  return (
    <>
      <Header item={navigationItem} />
      <Navigation item={navigationItem} />
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
