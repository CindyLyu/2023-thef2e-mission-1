import { Title } from "@/components/Title";
import { Label } from "@/components/Label";

import { Wrapper, TopBlock, IssueBlock, IssueItem, IssueTitle } from "./styles";

const data = [
  {
    title: "為毛孩子謀福利！<br/>推動寵物醫療保障方案",
    image: new URL("/src/assets/issues/issue.png", import.meta.url).href,
  },
  {
    title: "打造休閒天堂！<br/>推廣寵物休閒與娛樂場所",
    image: new URL("/src/assets/issues/issue2.png", import.meta.url).href,
  },
  {
    title: "推廣寵物飼養教育，讓愛更加專業",
    image: new URL("/src/assets/issues/issue3.png", import.meta.url).href,
  },
];

const Issues = () => {
  return (
    <Wrapper id="issues">
      <TopBlock>
        <Label>POLICY ISSUES</Label>
        <Title>政策議題</Title>
      </TopBlock>
      <IssueBlock>
        {data.map((item, index) => (
          <IssueItem key={index}>
            <IssueTitle dangerouslySetInnerHTML={{ __html: item.title }} />
            <img src={item.image} alt={item.title} />
          </IssueItem>
        ))}
      </IssueBlock>
    </Wrapper>
  );
};

export { Issues };
