import ModulesImg from "../images/androidios.png";
import DetoxImg from "../images/detox.png";
import JenkinsImg from "../images/jenkins.png";
import JestImg from "../images/jest.png";
import JSImg from "../images/js.png";
import ReactImg from "../images/react.png";
import RNImg from "../images/rn.png";
import SassImg from "../images/sass.png";
import TLImg from "../images/tl.png";
import TSImg from "../images/ts.png";
import Card from "./Card";
import "./Stacks.css";

const Stacks = () => {
  const myTechs = [
    {
      title: "Javascript",
      img: JSImg,
    },
    {
      title: "Sass",
      img: SassImg,
    },
    {
      title: "React",
      img: ReactImg,
    },
    {
      title: "React Native",
      img: RNImg,
    },
    {
      title: "Native mobile modules",
      img: ModulesImg,
    },
    {
      title: "Typescript",
      img: TSImg,
    },
    {
      title: "Testing Library",
      img: TLImg,
    },
    {
      title: "Jest Unit Tests",
      img: JestImg,
    },
    {
      title: "Detox e2e tests",
      img: DetoxImg,
    },
    {
      title: "Jenkins pipeline",
      img: JenkinsImg,
    },
  ];
  return (
    <div className="Container-Stacks">
      <h2>Tech Experiences</h2>
      <div className="Cards">
        {myTechs.map((item) => (
          <Card {...item} />
        ))}
      </div>
    </div>
  );
};

export default Stacks;
