import "./App.css";
import React, { useEffect, useState, useRef } from "react";

import Headline from "./images/HeadlineZebraFish.gif";
import IEL from "./images/IELTruck.gif";
import skrrt from "./images/skrrtFlyingFish.gif";
import Spardle from "./images/SpardleSwordfish.gif";
import Uniflow from "./images/UniflowWhale.gif";
import TutorYall from "./images/TutorYallSchoolofFish.gif";
import arcadechatroom from "./images/arcade-chatroom.gif";
import NightKnight from "./images/nightknight.gif";
import laptop from "./images/laptop.gif";

import arrow from "./images/arrow.png";
import net from "./images/net.png";
import bubble from "./images/bubble.png";
import background from "./images/background.png";
import spardle1 from "./images/spardle1.png";
import spardle2 from "./images/spardle2.png";
import spardle3 from "./images/spardle3.png";
import spardle4 from "./images/spardle4.png";
import tutoryall from "./images/tutoryall.png";
import night1 from "./images/night knight 1.png";
import night2 from "./images/night knight 2.png";
import headline from "./images/headline.png";
import uniflow1 from "./images/Uniflow 1.png";
import uniflow2 from "./images/Uniflow 2.png";

let allData = {
  Spardle: {
    fish: "(S)Word Fish",
    fishImage: Spardle,
    header: "Spardle!",
    link: "https://spardle.com/",
    description:
      "A competitive word game allowing players to engage in competitive Wordle with over 3000 players to date. Uses multiplayer synchronous logic using a socket.io framework with a logic handling React and CSS frontend.",
    images: [spardle1, spardle2, spardle3, spardle4],
  },
  TutorYall: {
    fish: "School of Cowboy Minnows",
    fishImage: TutorYall,
    header: "TutorY'all",
    link: "https://tutoryall.com/",
    description:
      "A platform aiming to expedite the learning process and flatten the learning curve. A centralized database allowing students to receive help through pointed, student-curated videos.",
    images: [tutoryall],
  },
  skrrt: {
    fish: "SKRRRRRRRRT Fish",
    fishImage: skrrt,
    header: "skrrt",
    link: "https://chrome.google.com/webstore/detail/skrrt/pcmfiacmejoglhfecoohecogigibelea",
    description:
      "An extension that centralizes commonly used apps and minimizes time on the new tab.	Features rearrangeable and customizable panels such as a to-do list, personalized news feed, notepad, top visited sites, and more.",
    images: ["https://www.loom.com/embed/7a4df7fe39954511ad5260afe4b2204d"],
  },
  arcadechatroom: {
    fish: "Cool n'Friendly Pufferfish",
    fishImage: arcadechatroom,
    header: "arcade-chatroom",
    link: "https://warm-ravine-86373.herokuapp.com/",
    description:
      "Arcade Chatroom replicates the social environment of Club Penguin. It was built with socket.io + designed on Figma. It features custom lobbies, real time-music sharing - most importantly, donut fights. I created this to stay connected with friends over quarantine.",
    images: ["https://www.loom.com/embed/45ffc35a1f654d97bc555ad3f99524b8"],
  },
  Headline: {
    fish: "Zebra Fish",
    fishImage: Headline,
    header: "Headline",
    link: "https://headline1.netlify.app/",
    description: "An online editor for making websites using Markdown text.",
    images: [headline],
  },
  NightKnight: {
    fish: "Knight Fish",
    fishImage: NightKnight,
    header: "Night Knight",
    link: "https://night--knight.glitch.me/",
    description:
      "A 2D retro-style shooter inspired by the Binding of Isaac and Enter the Gungeon. A minimalistic game using a custom made game engine.",
    images: [night1, night2],
  },
  IEL: {
    fish: "Truck Fish(?)",
    fishImage: IEL,
    header: "IEL",
    link: "",
    description:
      "I interned at IEL this past summer. I designed and implemented the frontend for an internal dashboard controlling status and other info on company sites, centralizing data. I introduced the company to Figma as a tool to expedite the frontend design process.",
    images: [],
  },
  Uniflow: {
    fish: "Rainbow Mortarboard Whale",
    fishImage: Uniflow,
    header: "Uniflow",
    link: "",
    description:
      "I interned at Uniflow, an ed-tech startup helping students take advantage of resources at their universities, as their only high school intern. I worked with the CTO to help build the core product, including an interface enabling users to create clubs with custom drag and drop. Check out some stuff I programmed on the right!",
    images: [uniflow1, uniflow2],
  },
  Laptop: {
    fish: "Laptop. Not a fish",
    fishImage: laptop,
    header: "Contact Me",
    link: "",
    description:
      "I'd love to talk anytime, and you can DM me on twitter at @kylemtan or shoot me an email at kylemacasillitan@gmail.com. Also, I'm always looking for internship offers, so I would love to hear of any availabilities you have or people I can contact. Thanks!",
    images: [uniflow1, uniflow2],
  },
};

function App() {
  const [timer, _setTimer] = useState(0);
  const timerRef = React.useRef(timer);
  const setTimer = (data) => {
    timerRef.current = data;
    _setTimer(data);
  };
  const [bubbleTimer, _setBubbleTimer] = useState([
    0, 20, 40, 60, 80, 100, 120, 140, 160, 180,
  ]);
  const bubbleTimerRef = React.useRef(bubbleTimer);
  const setBubbleTimer = (data) => {
    bubbleTimerRef.current = data;
    _setBubbleTimer(data);
  };
  const [imageCounter, setImageCounter] = useState(0);
  const [image, setImage] = useState("");
  const [animationEnded, setAnimationEnded] = useState(true);
  const [data, setData] = useState({
    fish: "(S)Word Fish",
    header: "Spardle!",
    link: "https://spardle.com/",
    description:
      "A competitive word game allowing players to engage in competitive Wordle with over 3000 players to date. Uses multiplayer synchronous logic using a socket.io framework with a logic handling React and CSS frontend.",
    images: [spardle1, spardle2, spardle3, spardle4],
  });
  const [fishStates, setFishStates] = useState({
    Headline: {
      status: "idle",
      x: -10,
      y: -10,
      xto: 50,
      yto: 50,
      duration: "",
      start: 0,
    },
    IEL: {
      status: "idle",
      x: -10,
      y: -10,
      xto: 50,
      yto: 50,
      duration: "",
      start: 0,
    },
    skrrt: {
      status: "idle",
      x: -10,
      y: -10,
      xto: 50,
      yto: 50,
      duration: "",
      start: 0,
    },
    Spardle: {
      status: "idle",
      x: -10,
      y: -10,
      xto: 50,
      yto: 50,
      duration: "",
      start: 0,
    },
    arcadechatroom: {
      status: "idle",
      x: -10,
      y: -10,
      xto: 50,
      yto: 50,
      duration: "",
      start: 0,
    },
    TutorYall: {
      status: "idle",
      x: -10,
      y: -10,
      xto: 50,
      yto: 50,
      duration: "",
      start: 0,
    },
    Uniflow: {
      status: "idle",
      x: -10,
      y: -10,
      xto: 50,
      yto: 50,
      duration: "",
      start: 0,
    },
    NightKnight: {
      status: "idle",
      x: -10,
      y: -10,
      xto: 50,
      yto: 50,
      duration: "",
      start: 0,
    },
    Laptop: {
      status: "idle",
      x: -10,
      y: -10,
      xto: 50,
      yto: 50,
      duration: "",
      start: 0,
    },
  });

  function updateImage(direction) {
    if (!animationEnded) {
      return;
    }
    setAnimationEnded(false);
    setTimeout(() => {
      setAnimationEnded(true);
    }, 1000);
    if (direction === "right" && imageCounter < data.images.length - 1) {
      document.getElementById("image-container").classList.remove("fadeIn");
      document.getElementById("image-container").classList.add("fadeOut");
      setTimeout(() => {
        let i = imageCounter + 1;
        setImageCounter(i);
        setImage(data.images[i]);
        document.getElementById("image-container").classList.remove("fadeOut");
        document.getElementById("image-container").classList.add("fadeIn");
      }, 500);
    } else if (direction === "left" && imageCounter > 0) {
      document.getElementById("image-container").classList.remove("fadeIn");
      document.getElementById("image-container").classList.add("fadeOut");
      setTimeout(() => {
        let i = imageCounter - 1;
        setImageCounter(i);
        setImage(data.images[i]);
        document.getElementById("image-container").classList.remove("fadeOut");
        document.getElementById("image-container").classList.add("fadeIn");
      }, 500);
    }
  }

  function showInfo(fishName) {
    setData(allData[fishName]);
    if (allData[fishName].image !== []) {
      setImage(allData[fishName].images[0]);
    }
    setData(allData[fishName]);
    document.getElementById("modal-dark").classList.add("showModal");
    document.getElementById("modal-dark").classList.remove("fadeModal");
    document.getElementById("modal-dark").style.display = "flex";
    setTimeout(() => {
      document.getElementById("modal-dark").style.opacity = 1;
    }, 1000);
  }

  useEffect(() => {
    let timeout;
    window.addEventListener("mousemove", (e) => {
      window.clearTimeout(timeout);
      if (
        parseInt(document.getElementById("net-cursor").style.left) > e.clientX
      ) {
        document.getElementById("net-cursor").style.transform =
          "translateX(-50%) translateY(-50%) scaleX(1)";
      } else {
        document.getElementById("net-cursor").style.transform =
          "translateX(-50%) translateY(-50%) scaleX(-1)";
      }
      document.getElementById("net-cursor").style.left = e.clientX + "px";
      document.getElementById("net-cursor").style.top = e.clientY + "px";
      for (let i = 0; i < 10; i++) {
        let currentBubble = i + 1;
        document.getElementById("bubble" + currentBubble).style.display =
          "block";
      }
      timeout = setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          let currentBubble = i + 1;
          document.getElementById("bubble" + currentBubble).style.display =
            "none";
        }
        console.log(0);
      }, 1000);
    });

    let Headline = document.getElementById("Headline");
    let newStates = fishStates;
    newStates.Headline.x = 30;
    newStates.Headline.y = 30;
    Headline.style.left = "30vw";
    Headline.style.top = "30vh";

    let IEL = document.getElementById("IEL");
    newStates.IEL.x = 60;
    newStates.IEL.y = 60;
    IEL.style.left = "60vw";
    IEL.style.top = "60vh";

    let skrrt = document.getElementById("skrrt");
    newStates.skrrt.x = 80;
    newStates.skrrt.y = 20;
    skrrt.style.left = "80vw";
    skrrt.style.top = "50vh";

    let Spardle = document.getElementById("Spardle");
    newStates.Spardle.x = 20;
    newStates.Spardle.y = 70;
    Spardle.style.left = "20vw";
    Spardle.style.top = "70vh";
    setFishStates(newStates);

    let Uniflow = document.getElementById("Uniflow");
    newStates.Uniflow.x = 80;
    newStates.Uniflow.y = 60;
    Uniflow.style.left = "80vw";
    Uniflow.style.top = "60vh";
    setFishStates(newStates);

    let arcadechatroom = document.getElementById("arcadechatroom");
    newStates.arcadechatroom.x = 50;
    newStates.arcadechatroom.y = 20;
    arcadechatroom.style.left = "50vw";
    arcadechatroom.style.top = "20vh";
    setFishStates(newStates);

    let TutorYall = document.getElementById("TutorYall");
    newStates.TutorYall.x = 10;
    newStates.TutorYall.y = 20;
    TutorYall.style.left = "10vw";
    TutorYall.style.top = "20vh";
    setFishStates(newStates);

    let NightKnight = document.getElementById("NightKnight");
    newStates.NightKnight.x = 0;
    newStates.NightKnight.y = 70;
    NightKnight.style.left = "0vw";
    NightKnight.style.top = "70vh";
    setFishStates(newStates);

    let Laptop = document.getElementById("Laptop");
    newStates.Laptop.x = 70;
    newStates.Laptop.y = 10;
    Laptop.style.left = "70vw";
    Laptop.style.top = "10vh";
    setFishStates(newStates);
  }, []);

  function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
  }

  useEffect(() => {
    var interval = setInterval(function () {
      let newStates = fishStates;

      for (let i = 0; i < 10; i++) {
        let currentBubble = i + 1;
        if (timerRef.current > bubbleTimerRef.current[i]) {
          document.getElementById("bubble" + currentBubble).style.left =
            document.getElementById("net-cursor").style.left;
          document.getElementById("bubble" + currentBubble).style.top =
            document.getElementById("net-cursor").style.top;
          let tempBubble = bubbleTimerRef.current;
          tempBubble[i] = timerRef.current + 30;
          setBubbleTimer(tempBubble);
        }
      }

      //Headline fish control
      if (
        newStates.Headline.status === "moving" &&
        newStates.Headline.duration + newStates.Headline.start + 5 <= timer
      ) {
        newStates.Headline.status = "idle";
        newStates.Headline.xorigin = newStates.Headline.x;
        newStates.Headline.yorigin = newStates.Headline.y;
      } else if (
        newStates.Headline.status === "idle" &&
        Math.random() < 0.005
      ) {
        newStates.Headline.status = "moving";
        newStates.Headline.start = timer;
        newStates.Headline.xorigin = newStates.Headline.x;
        newStates.Headline.yorigin = newStates.Headline.y;
        if (Math.random() < 0.5) {
          newStates.Headline.xto = randomBetween(0, newStates.Headline.x);
          document.getElementById("Headline").style.transform = "scaleX(1)";
        } else {
          newStates.Headline.xto = randomBetween(newStates.Headline.x, 85);
          document.getElementById("Headline").style.transform = "scaleX(-1)";
        }
        if (Math.random() < 0.5) {
          newStates.Headline.yto = randomBetween(20, newStates.Headline.y);
        } else {
          newStates.Headline.yto = randomBetween(newStates.Headline.y, 75);
        }
        newStates.Headline.duration = randomBetween(180, 360);
      } else if (newStates.Headline.status === "moving") {
        let percentage =
          1 -
          (newStates.Headline.duration + newStates.Headline.start - timer) /
            newStates.Headline.duration;
        if (newStates.Headline.xto > newStates.Headline.xorigin) {
          newStates.Headline.x =
            newStates.Headline.xorigin +
            (newStates.Headline.xto - newStates.Headline.xorigin) * percentage;
        } else {
          newStates.Headline.x =
            newStates.Headline.xorigin -
            (newStates.Headline.xorigin - newStates.Headline.xto) * percentage;
        }
        if (newStates.Headline.yto > newStates.Headline.yorigin) {
          newStates.Headline.y =
            newStates.Headline.yorigin +
            (newStates.Headline.yto - newStates.Headline.yorigin) * percentage;
        } else {
          newStates.Headline.y =
            newStates.Headline.yorigin -
            (newStates.Headline.yorigin - newStates.Headline.yto) * percentage;
        }
      } else {
      }

      //IEL fish control
      if (
        newStates.IEL.status === "moving" &&
        newStates.IEL.duration + newStates.IEL.start + 5 <= timer
      ) {
        newStates.IEL.status = "idle";
        newStates.IEL.xorigin = newStates.IEL.x;
        newStates.IEL.yorigin = newStates.IEL.y;
      } else if (newStates.IEL.status === "idle" && Math.random() < 0.005) {
        newStates.IEL.status = "moving";
        newStates.IEL.start = timer;
        newStates.IEL.xorigin = newStates.IEL.x;
        newStates.IEL.yorigin = newStates.IEL.y;
        if (Math.random() < 0.5) {
          newStates.IEL.xto = randomBetween(0, newStates.IEL.x);
          document.getElementById("IEL").style.transform = "scaleX(1)";
        } else {
          newStates.IEL.xto = randomBetween(newStates.IEL.x, 70);
          document.getElementById("IEL").style.transform = "scaleX(-1)";
        }
        if (Math.random() < 0.5) {
          newStates.IEL.yto = randomBetween(20, newStates.IEL.y);
        } else {
          newStates.IEL.yto = randomBetween(newStates.IEL.y, 50);
        }
        newStates.IEL.duration = randomBetween(180, 360);
      } else if (newStates.IEL.status === "moving") {
        let percentage =
          1 -
          (newStates.IEL.duration + newStates.IEL.start - timer) /
            newStates.IEL.duration;
        if (newStates.IEL.xto > newStates.IEL.xorigin) {
          newStates.IEL.x =
            newStates.IEL.xorigin +
            (newStates.IEL.xto - newStates.IEL.xorigin) * percentage;
        } else {
          newStates.IEL.x =
            newStates.IEL.xorigin -
            (newStates.IEL.xorigin - newStates.IEL.xto) * percentage;
        }
        if (newStates.IEL.yto > newStates.IEL.yorigin) {
          newStates.IEL.y =
            newStates.IEL.yorigin +
            (newStates.IEL.yto - newStates.IEL.yorigin) * percentage;
        } else {
          newStates.IEL.y =
            newStates.IEL.yorigin -
            (newStates.IEL.yorigin - newStates.IEL.yto) * percentage;
        }
      } else {
      }

      //skrrt fish control
      if (
        newStates.skrrt.status === "moving" &&
        newStates.skrrt.duration + newStates.skrrt.start + 5 <= timer
      ) {
        newStates.skrrt.status = "idle";
        newStates.skrrt.xorigin = newStates.skrrt.x;
        newStates.skrrt.yorigin = newStates.skrrt.y;
      } else if (newStates.skrrt.status === "idle" && Math.random() < 0.005) {
        newStates.skrrt.status = "moving";
        newStates.skrrt.start = timer;
        newStates.skrrt.xorigin = newStates.skrrt.x;
        newStates.skrrt.yorigin = newStates.skrrt.y;
        if (Math.random() < 0.5) {
          newStates.skrrt.xto = randomBetween(0, newStates.skrrt.x);
          document.getElementById("skrrt").style.transform = "scaleX(1)";
        } else {
          newStates.skrrt.xto = randomBetween(newStates.skrrt.x, 85);
          document.getElementById("skrrt").style.transform = "scaleX(-1)";
        }
        if (Math.random() < 0.5) {
          newStates.skrrt.yto = randomBetween(20, newStates.skrrt.y);
        } else {
          newStates.skrrt.yto = randomBetween(newStates.skrrt.y, 75);
        }
        newStates.skrrt.duration = randomBetween(180, 360);
      } else if (newStates.skrrt.status === "moving") {
        let percentage =
          1 -
          (newStates.skrrt.duration + newStates.skrrt.start - timer) /
            newStates.skrrt.duration;
        if (newStates.skrrt.xto > newStates.skrrt.xorigin) {
          newStates.skrrt.x =
            newStates.skrrt.xorigin +
            (newStates.skrrt.xto - newStates.skrrt.xorigin) * percentage;
        } else {
          newStates.skrrt.x =
            newStates.skrrt.xorigin -
            (newStates.skrrt.xorigin - newStates.skrrt.xto) * percentage;
        }
        if (newStates.skrrt.yto > newStates.skrrt.yorigin) {
          newStates.skrrt.y =
            newStates.skrrt.yorigin +
            (newStates.skrrt.yto - newStates.skrrt.yorigin) * percentage;
        } else {
          newStates.skrrt.y =
            newStates.skrrt.yorigin -
            (newStates.skrrt.yorigin - newStates.skrrt.yto) * percentage;
        }
      } else {
      }

      //Spardle fish control
      if (
        newStates.Spardle.status === "moving" &&
        newStates.Spardle.duration + newStates.Spardle.start + 5 <= timer
      ) {
        newStates.Spardle.status = "idle";
        newStates.Spardle.xorigin = newStates.Spardle.x;
        newStates.Spardle.yorigin = newStates.Spardle.y;
      } else if (newStates.Spardle.status === "idle" && Math.random() < 0.005) {
        newStates.Spardle.status = "moving";
        newStates.Spardle.start = timer;
        newStates.Spardle.xorigin = newStates.Spardle.x;
        newStates.Spardle.yorigin = newStates.Spardle.y;
        if (Math.random() < 0.5) {
          newStates.Spardle.xto = randomBetween(0, newStates.Spardle.x);
          document.getElementById("Spardle").style.transform = "scaleX(1)";
        } else {
          newStates.Spardle.xto = randomBetween(newStates.Spardle.x, 70);
          document.getElementById("Spardle").style.transform = "scaleX(-1)";
        }
        if (Math.random() < 0.5) {
          newStates.Spardle.yto = randomBetween(20, newStates.Spardle.y);
        } else {
          newStates.Spardle.yto = randomBetween(newStates.Spardle.y, 50);
        }
        newStates.Spardle.duration = randomBetween(180, 360);
      } else if (newStates.Spardle.status === "moving") {
        let percentage =
          1 -
          (newStates.Spardle.duration + newStates.Spardle.start - timer) /
            newStates.Spardle.duration;
        if (newStates.Spardle.xto > newStates.Spardle.xorigin) {
          newStates.Spardle.x =
            newStates.Spardle.xorigin +
            (newStates.Spardle.xto - newStates.Spardle.xorigin) * percentage;
        } else {
          newStates.Spardle.x =
            newStates.Spardle.xorigin -
            (newStates.Spardle.xorigin - newStates.Spardle.xto) * percentage;
        }
        if (newStates.Spardle.yto > newStates.Spardle.yorigin) {
          newStates.Spardle.y =
            newStates.Spardle.yorigin +
            (newStates.Spardle.yto - newStates.Spardle.yorigin) * percentage;
        } else {
          newStates.Spardle.y =
            newStates.Spardle.yorigin -
            (newStates.Spardle.yorigin - newStates.Spardle.yto) * percentage;
        }
      } else {
      }

      //Uniflow fish control
      if (
        newStates.Uniflow.status === "moving" &&
        newStates.Uniflow.duration + newStates.Uniflow.start + 5 <= timer
      ) {
        newStates.Uniflow.status = "idle";
        newStates.Uniflow.xorigin = newStates.Uniflow.x;
        newStates.Uniflow.yorigin = newStates.Uniflow.y;
      } else if (newStates.Uniflow.status === "idle" && Math.random() < 0.005) {
        newStates.Uniflow.status = "moving";
        newStates.Uniflow.start = timer;
        newStates.Uniflow.xorigin = newStates.Uniflow.x;
        newStates.Uniflow.yorigin = newStates.Uniflow.y;
        if (Math.random() < 0.5) {
          newStates.Uniflow.xto = randomBetween(0, newStates.Uniflow.x);
          document.getElementById("Uniflow").style.transform = "scaleX(1)";
        } else {
          newStates.Uniflow.xto = randomBetween(newStates.Uniflow.x, 70);
          document.getElementById("Uniflow").style.transform = "scaleX(-1)";
        }
        if (Math.random() < 0.5) {
          newStates.Uniflow.yto = randomBetween(20, newStates.Uniflow.y);
        } else {
          newStates.Uniflow.yto = randomBetween(newStates.Uniflow.y, 50);
        }
        newStates.Uniflow.duration = randomBetween(180, 360);
      } else if (newStates.Uniflow.status === "moving") {
        let percentage =
          1 -
          (newStates.Uniflow.duration + newStates.Uniflow.start - timer) /
            newStates.Uniflow.duration;
        if (newStates.Uniflow.xto > newStates.Uniflow.xorigin) {
          newStates.Uniflow.x =
            newStates.Uniflow.xorigin +
            (newStates.Uniflow.xto - newStates.Uniflow.xorigin) * percentage;
        } else {
          newStates.Uniflow.x =
            newStates.Uniflow.xorigin -
            (newStates.Uniflow.xorigin - newStates.Uniflow.xto) * percentage;
        }
        if (newStates.Uniflow.yto > newStates.Uniflow.yorigin) {
          newStates.Uniflow.y =
            newStates.Uniflow.yorigin +
            (newStates.Uniflow.yto - newStates.Uniflow.yorigin) * percentage;
        } else {
          newStates.Uniflow.y =
            newStates.Uniflow.yorigin -
            (newStates.Uniflow.yorigin - newStates.Spardle.yto) * percentage;
        }
      } else {
      }

      //TutorYall fish control
      if (
        newStates.TutorYall.status === "moving" &&
        newStates.TutorYall.duration + newStates.TutorYall.start + 5 <= timer
      ) {
        newStates.TutorYall.status = "idle";
        newStates.TutorYall.xorigin = newStates.TutorYall.x;
        newStates.TutorYall.yorigin = newStates.TutorYall.y;
      } else if (
        newStates.TutorYall.status === "idle" &&
        Math.random() < 0.005
      ) {
        newStates.TutorYall.status = "moving";
        newStates.TutorYall.start = timer;
        newStates.TutorYall.xorigin = newStates.TutorYall.x;
        newStates.TutorYall.yorigin = newStates.TutorYall.y;
        if (Math.random() < 0.5) {
          newStates.TutorYall.xto = randomBetween(0, newStates.TutorYall.x);
          document.getElementById("TutorYall").style.transform = "scaleX(1)";
        } else {
          newStates.TutorYall.xto = randomBetween(newStates.TutorYall.x, 85);
          document.getElementById("TutorYall").style.transform = "scaleX(-1)";
        }
        if (Math.random() < 0.5) {
          newStates.TutorYall.yto = randomBetween(20, newStates.TutorYall.y);
        } else {
          newStates.TutorYall.yto = randomBetween(newStates.TutorYall.y, 75);
        }
        newStates.TutorYall.duration = randomBetween(180, 360);
      } else if (newStates.TutorYall.status === "moving") {
        let percentage =
          1 -
          (newStates.TutorYall.duration + newStates.TutorYall.start - timer) /
            newStates.TutorYall.duration;
        if (newStates.TutorYall.xto > newStates.TutorYall.xorigin) {
          newStates.TutorYall.x =
            newStates.TutorYall.xorigin +
            (newStates.TutorYall.xto - newStates.TutorYall.xorigin) *
              percentage;
        } else {
          newStates.TutorYall.x =
            newStates.TutorYall.xorigin -
            (newStates.TutorYall.xorigin - newStates.TutorYall.xto) *
              percentage;
        }
        if (newStates.TutorYall.yto > newStates.TutorYall.yorigin) {
          newStates.TutorYall.y =
            newStates.TutorYall.yorigin +
            (newStates.TutorYall.yto - newStates.TutorYall.yorigin) *
              percentage;
        } else {
          newStates.TutorYall.y =
            newStates.TutorYall.yorigin -
            (newStates.TutorYall.yorigin - newStates.Spardle.yto) * percentage;
        }
      } else {
      }

      //arcadechatroom fish control
      if (
        newStates.arcadechatroom.status === "moving" &&
        newStates.arcadechatroom.duration +
          newStates.arcadechatroom.start +
          5 <=
          timer
      ) {
        newStates.arcadechatroom.status = "idle";
        newStates.arcadechatroom.xorigin = newStates.arcadechatroom.x;
        newStates.arcadechatroom.yorigin = newStates.arcadechatroom.y;
      } else if (
        newStates.arcadechatroom.status === "idle" &&
        Math.random() < 0.005
      ) {
        newStates.arcadechatroom.status = "moving";
        newStates.arcadechatroom.start = timer;
        newStates.arcadechatroom.xorigin = newStates.arcadechatroom.x;
        newStates.arcadechatroom.yorigin = newStates.arcadechatroom.y;
        if (Math.random() < 0.5) {
          newStates.arcadechatroom.xto = randomBetween(
            0,
            newStates.arcadechatroom.x
          );
          document.getElementById("arcadechatroom").style.transform =
            "scaleX(1)";
        } else {
          newStates.arcadechatroom.xto = randomBetween(
            newStates.arcadechatroom.x,
            85
          );
          document.getElementById("arcadechatroom").style.transform =
            "scaleX(-1)";
        }
        if (Math.random() < 0.5) {
          newStates.arcadechatroom.yto = randomBetween(
            20,
            newStates.arcadechatroom.y
          );
        } else {
          newStates.arcadechatroom.yto = randomBetween(
            newStates.arcadechatroom.y,
            75
          );
        }
        newStates.arcadechatroom.duration = randomBetween(180, 360);
      } else if (newStates.arcadechatroom.status === "moving") {
        let percentage =
          1 -
          (newStates.arcadechatroom.duration +
            newStates.arcadechatroom.start -
            timer) /
            newStates.arcadechatroom.duration;
        if (newStates.arcadechatroom.xto > newStates.arcadechatroom.xorigin) {
          newStates.arcadechatroom.x =
            newStates.arcadechatroom.xorigin +
            (newStates.arcadechatroom.xto - newStates.arcadechatroom.xorigin) *
              percentage;
        } else {
          newStates.arcadechatroom.x =
            newStates.arcadechatroom.xorigin -
            (newStates.arcadechatroom.xorigin - newStates.arcadechatroom.xto) *
              percentage;
        }
        if (newStates.arcadechatroom.yto > newStates.arcadechatroom.yorigin) {
          newStates.arcadechatroom.y =
            newStates.arcadechatroom.yorigin +
            (newStates.arcadechatroom.yto - newStates.arcadechatroom.yorigin) *
              percentage;
        } else {
          newStates.arcadechatroom.y =
            newStates.arcadechatroom.yorigin -
            (newStates.arcadechatroom.yorigin - newStates.Spardle.yto) *
              percentage;
        }
      } else {
      }

      //NightKnight fish control
      if (
        newStates.NightKnight.status === "moving" &&
        newStates.NightKnight.duration + newStates.NightKnight.start + 5 <=
          timer
      ) {
        newStates.NightKnight.status = "idle";
        newStates.NightKnight.xorigin = newStates.NightKnight.x;
        newStates.NightKnight.yorigin = newStates.NightKnight.y;
      } else if (
        newStates.NightKnight.status === "idle" &&
        Math.random() < 0.005
      ) {
        newStates.NightKnight.status = "moving";
        newStates.NightKnight.start = timer;
        newStates.NightKnight.xorigin = newStates.NightKnight.x;
        newStates.NightKnight.yorigin = newStates.NightKnight.y;
        if (Math.random() < 0.5) {
          newStates.NightKnight.xto = randomBetween(0, newStates.NightKnight.x);
          document.getElementById("NightKnight").style.transform = "scaleX(1)";
        } else {
          newStates.NightKnight.xto = randomBetween(
            newStates.NightKnight.x,
            85
          );
          document.getElementById("NightKnight").style.transform = "scaleX(-1)";
        }
        if (Math.random() < 0.5) {
          newStates.NightKnight.yto = randomBetween(
            20,
            newStates.NightKnight.y
          );
        } else {
          newStates.NightKnight.yto = randomBetween(
            newStates.NightKnight.y,
            75
          );
        }
        newStates.NightKnight.duration = randomBetween(180, 360);
      } else if (newStates.NightKnight.status === "moving") {
        let percentage =
          1 -
          (newStates.NightKnight.duration +
            newStates.NightKnight.start -
            timer) /
            newStates.NightKnight.duration;
        if (newStates.NightKnight.xto > newStates.NightKnight.xorigin) {
          newStates.NightKnight.x =
            newStates.NightKnight.xorigin +
            (newStates.NightKnight.xto - newStates.NightKnight.xorigin) *
              percentage;
        } else {
          newStates.NightKnight.x =
            newStates.NightKnight.xorigin -
            (newStates.NightKnight.xorigin - newStates.NightKnight.xto) *
              percentage;
        }
        if (newStates.NightKnight.yto > newStates.NightKnight.yorigin) {
          newStates.NightKnight.y =
            newStates.NightKnight.yorigin +
            (newStates.NightKnight.yto - newStates.NightKnight.yorigin) *
              percentage;
        } else {
          newStates.NightKnight.y =
            newStates.NightKnight.yorigin -
            (newStates.NightKnight.yorigin - newStates.Spardle.yto) *
              percentage;
        }
      } else {
      }

      //Laptop fish control
      if (
        newStates.Laptop.status === "moving" &&
        newStates.Laptop.duration + newStates.Laptop.start + 5 <= timer
      ) {
        newStates.Laptop.status = "idle";
        newStates.Laptop.xorigin = newStates.Laptop.x;
        newStates.Laptop.yorigin = newStates.Laptop.y;
      } else if (newStates.Laptop.status === "idle" && Math.random() < 0.005) {
        newStates.Laptop.status = "moving";
        newStates.Laptop.start = timer;
        newStates.Laptop.xorigin = newStates.Laptop.x;
        newStates.Laptop.yorigin = newStates.Laptop.y;
        if (Math.random() < 0.5) {
          newStates.Laptop.xto = randomBetween(0, newStates.Laptop.x);
          document.getElementById("Laptop").style.transform = "scaleX(1)";
        } else {
          newStates.Laptop.xto = randomBetween(newStates.Laptop.x, 85);
          document.getElementById("Laptop").style.transform = "scaleX(-1)";
        }
        if (Math.random() < 0.5) {
          newStates.Laptop.yto = randomBetween(20, newStates.Laptop.y);
        } else {
          newStates.Laptop.yto = randomBetween(newStates.Laptop.y, 75);
        }
        newStates.Laptop.duration = randomBetween(180, 360);
      } else if (newStates.Laptop.status === "moving") {
        let percentage =
          1 -
          (newStates.Laptop.duration + newStates.Laptop.start - timer) /
            newStates.Laptop.duration;
        if (newStates.Laptop.xto > newStates.Laptop.xorigin) {
          newStates.Laptop.x =
            newStates.Laptop.xorigin +
            (newStates.Laptop.xto - newStates.Laptop.xorigin) * percentage;
        } else {
          newStates.Laptop.x =
            newStates.Laptop.xorigin -
            (newStates.Laptop.xorigin - newStates.Laptop.xto) * percentage;
        }
        if (newStates.Laptop.yto > newStates.Laptop.yorigin) {
          newStates.Laptop.y =
            newStates.Laptop.yorigin +
            (newStates.Laptop.yto - newStates.Laptop.yorigin) * percentage;
        } else {
          newStates.Laptop.y =
            newStates.Laptop.yorigin -
            (newStates.Laptop.yorigin - newStates.Spardle.yto) * percentage;
        }
      } else {
      }

      setFishStates(newStates);

      // displays

      let Headline = document.getElementById("Headline");
      Headline.style.left = newStates.Headline.x + "vw";
      Headline.style.top = newStates.Headline.y + "vh";

      let IEL = document.getElementById("IEL");
      IEL.style.left = newStates.IEL.x + "vw";
      IEL.style.top = newStates.IEL.y + "vh";

      let skrrt = document.getElementById("skrrt");
      skrrt.style.left = newStates.skrrt.x + "vw";
      skrrt.style.top = newStates.skrrt.y + "vh";

      let Spardle = document.getElementById("Spardle");
      Spardle.style.left = newStates.Spardle.x + "vw";
      Spardle.style.top = newStates.Spardle.y + "vh";

      let Uniflow = document.getElementById("Uniflow");
      Uniflow.style.left = newStates.Uniflow.x + "vw";
      Uniflow.style.top = newStates.Uniflow.y + "vh";

      let TutorYall = document.getElementById("TutorYall");
      TutorYall.style.left = newStates.TutorYall.x + "vw";
      TutorYall.style.top = newStates.TutorYall.y + "vh";

      let arcadechatroom = document.getElementById("arcadechatroom");
      arcadechatroom.style.left = newStates.arcadechatroom.x + "vw";
      arcadechatroom.style.top = newStates.arcadechatroom.y + "vh";

      let NightKnight = document.getElementById("NightKnight");
      NightKnight.style.left = newStates.NightKnight.x + "vw";
      NightKnight.style.top = newStates.NightKnight.y + "vh";

      let Laptop = document.getElementById("Laptop");
      Laptop.style.left = newStates.Laptop.x + "vw";
      Laptop.style.top = newStates.Laptop.y + "vh";
      setTimer(timer + 1);
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [fishStates, timer]);

  return (
    <div className="container">
      <img className="tank" src={background} />
      <div className="tank-dark"></div>
      <img
        className="fish"
        onClick={(e) => {
          showInfo("Headline");
          e.target.style.backgroundImage = "none";
        }}
        id="Headline"
        src={Headline}
      />
      <img
        className="fish-big"
        onClick={(e) => {
          showInfo("IEL");
          e.target.style.backgroundImage = "none";
        }}
        id="IEL"
        src={IEL}
      />
      <img
        className="fish"
        onClick={(e) => {
          showInfo("skrrt");
          e.target.style.backgroundImage = "none";
        }}
        id="skrrt"
        src={skrrt}
      />
      <img
        className="fish-big"
        onClick={(e) => {
          showInfo("Spardle");
          e.target.style.backgroundImage = "none";
        }}
        id="Spardle"
        src={Spardle}
      />
      <img
        className="fish-big"
        onClick={(e) => {
          showInfo("Uniflow");
          e.target.style.backgroundImage = "none";
        }}
        id="Uniflow"
        src={Uniflow}
      />
      <img
        className="fish-big"
        onClick={(e) => {
          showInfo("TutorYall");
          e.target.style.backgroundImage = "none";
        }}
        id="TutorYall"
        src={TutorYall}
      />
      <img
        className="fish"
        onClick={(e) => {
          showInfo("arcadechatroom");
          e.target.style.backgroundImage = "none";
        }}
        id="arcadechatroom"
        src={arcadechatroom}
      />

      <img
        className="fish-big"
        onClick={(e) => {
          showInfo("NightKnight");
          e.target.style.backgroundImage = "none";
        }}
        id="NightKnight"
        src={NightKnight}
      />

      <img
        className="fish"
        onClick={(e) => {
          showInfo("Laptop");
          e.target.style.backgroundImage = "none";
        }}
        id="Laptop"
        src={laptop}
      />

      <img id="net-cursor" className="net-cursor" src={net} />
      <img className="bubble" id="bubble1" src={bubble} />
      <img className="bubble" id="bubble2" src={bubble} />
      <img className="bubble" id="bubble3" src={bubble} />
      <img className="bubble" id="bubble4" src={bubble} />
      <img className="bubble" id="bubble5" src={bubble} />
      <img className="bubble" id="bubble6" src={bubble} />
      <img className="bubble" id="bubble7" src={bubble} />
      <img className="bubble" id="bubble8" src={bubble} />
      <img className="bubble" id="bubble9" src={bubble} />
      <img className="bubble" id="bubble10" src={bubble} />

      <div className="modal-dark" id="modal-dark">
        <div className="modal">
          <div className="text-container" id="text-container">
            <h1>You caught the {data.fish}!</h1>
            <img className="fish-takes-space" src={data.fishImage} />
            <h1>{data.header}</h1>
            <p>{data.description}</p>
            {data.link ? (
              <a href={data.link} target="_blank">
                Check out {data.header}
              </a>
            ) : null}
            <div
              className="close-modal"
              onClick={() => {
                document
                  .getElementById("modal-dark")
                  .classList.add("fadeModal");
                document
                  .getElementById("modal-dark")
                  .classList.remove("showModal");
                setTimeout(() => {
                  document.getElementById("modal-dark").style.display = "none";
                }, 1000);
              }}
            >
              Click here to return to fishing.
            </div>
          </div>
          {image ? (
            <div className="image-container" id="image-container">
              {image.includes("embed") ? (
                <iframe
                  className="project-image"
                  src={image}
                  frameBorder="0"
                  allowFullScreen
                  style={{ position: "absolute", left: 0, width: "100%" }}
                ></iframe>
              ) : (
                <img src={image} className="project-image" />
              )}
              {data.images.length > 1 ? (
                <React.Fragment>
                  <img
                    onClick={() => {
                      updateImage("left");
                    }}
                    src={arrow}
                    className="left-controls"
                  />
                  <img
                    onClick={() => {
                      updateImage("right");
                    }}
                    src={arrow}
                    className="right-controls"
                  />
                </React.Fragment>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
