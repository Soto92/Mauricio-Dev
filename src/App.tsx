import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import "./App.css";
import MeDev00 from "./images/dev.jpg";
import MeDev01 from "./images/dev02.jpg";
import MeIT00 from "./images/it00.jpg";
import MeIT01 from "./images/it01.jpg";
import MeOld from "./images/meold.jpg";
import MeOld2 from "./images/meold2.jpg";
import MeTrip from "./images/trip.jpg";
// import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Stacks from "./components/Stacks";
// import Stacks from "./components/Stacks";

function App() {
  const parallax = useRef<IParallax>(null!);
  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "red" }}>
      <Parallax ref={parallax} pages={5.5}>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: "55vh",
          }}
        >
          <div style={{ width: "100%", height: "55vh" }}>
            <Header />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.2, end: 3 }}
          style={{
            paddingLeft: "10px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <div>
            <p style={{ color: "white", fontSize: 40 }}>About me</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.9}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="Body-container Content">
            <p>
              Hi there, my name is Mauricio, I was born in a beautiful country
              with good sea food and beautiful mountains called Chile &#128511;
              but I live since I was a kid in another beautiful, hot and
              tropical country called Brazil &#127758;
            </p>

            <p>
              I have a beautiful wife and a beloved son, but I dream of having
              at least 3 children (I am still trying to convince my wife
              &#128517;).
            </p>

            <p>
              I love to travel and see new places, I also love to play video
              games &#128125; especially RPG's like The Witcher.
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(3)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="Body-container Content">
            <p>
              To start in the IT area was not easy, since teenager I had to pay
              for my studies, I worked for 9 years in a metallurgical company
              making high voltage transformers, then I decided to leave
              &#128640; and start from scratch (I did it when I was 26, so it's
              never too late to start again!), everyone called me crazy, because
              my salary was high and the IT internship would earn less than a
              minimum wage.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 100,
              }}
            >
              <div>
                <img height={200} src={MeOld} alt="React Image" />
                <p>Worked since 2010 at metallurgical company</p>
              </div>
              <div>
                <img height={200} src={MeOld2} alt="React Image" />
                <p>lol</p>
              </div>
              <div>
                <img height={200} src={MeIT00} alt="React Image" />
                <p>First intern job at an IT company</p>
              </div>
              <div>
                <img height={200} src={MeIT01} alt="React Image" />
                <p>Second intern job at ilegra company {"<3"} </p>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(4)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="Body-container Content">
            <p>
              But sometimes to achieve the dreams and success we have to make
              tough choices. And I started my journey on a Help Desk internship,
              but soon after I left the company I went to another software
              development internship &#128187; at a company that I admire to
              this day called ilegra, located in Porto Alegre.
            </p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <img height={300} src={MeDev00} alt="React Image" />
                <p>Frontend Software Engineer</p>
              </div>
              <div>
                <img height={300} src={MeDev01} alt="React Image" />
                <p>Frontend Software Engineer</p>
              </div>
              <div>
                <img height={300} src={MeTrip} alt="React Image" />
                <p>Have fun in a trip with my loved family!</p>
              </div>
            </div>
            <p>
              Since 2019 I have been working on several national projects in
              Brazil and in December 2021 I realized my dream of working at a
              company in Silicon Valley remotely &#11088; thanks to a referral
              from a former leader and work friend.
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={0.1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => parallax.current.scrollTo(0)}
        >
          <div className="Body-container">
            <Stacks />

            
            <a href="https://www.linkedin.com/in/mauricio-soto-frontend/" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/Soto92" rel="noreferrer">
              GitHub
            </a>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
