import React, { useEffect } from "react";
import { Controller, Scene } from "react-scrollmagic";
import { gsap } from "gsap";
import CustomSlider from './CustomSlider'
import "./App.css";

function App() {
  const words =
    "llDolore consectetur proident officia proident quis est. Nisi commodo minim laborum irure sint consequat eiusmod culpa cillum. In amet deserunt sunt deserunt voluptate dolor duis ea. Duis qui minim tempor consequat esse velit in elit ipsum incididunt. Laboris veniam est laborum laboris elit nostrud in cupidatat. Cillum anim fugiat enim excepteur magna tempor eu. Fugiat laboris esse esse dolore ad exercitation ipsum enim ea magna adipisicing reprehenderit Veniam Lorem irure commodo irure eiusmod consequat anim sunt. Pariatur consectetur duis amet laborum. Reprehenderit ut amet nostrud tempor consectetur tempor elit dolor sunt.Duis minim mollit laboris labore labore do sit commodo consequat. Nulla quis dolore laboris mollit non laboris laboris sit consectetur pariatur esse. Laborum id ad tempor veniam tempor nisi ut aliquip adipisicing do duis reprehenderit dolore ad. Dolor cupidatat et nulla nisi non id elit nostrud. Laborum labore sit ullamco eu sunt. Sunt ad aliquip fugiat excepteur pariatur eu veniam aute aliquip mollit".split(
      " "
    );



  return (
    // <div className="container">
    //   <Controller>
    //     <p id="scroll-paragraph">
    //       {words.map((word, index) => {
    //         console.log(word, "word");
    //         return (
    //           <Scene
    //             key={index}
    //             duration= {10000}

    //             // classToggle="white"
    //             triggerElement={`#word-${index}`}
    //             triggerHook={0.2}
    //             offset={1}
    //           >
    //             {(progress) => {
    //               console.log(progress,word,index, "progress");
    //               return (
    //                 <span
    //                   id={`word-${index}`}
    //                   style={{
    //                     transition: "color 0.3s ease",
    //                     color: progress ? "white" : "gray",
    //                   }}
    //                 >
    //                   {word}{" "}
    //                 </span>
    //               );
    //             }}
    //           </Scene>
    //         );
    //       })}
    //     </p>
    //   </Controller>
    // </div>
    <CustomSlider/>
    test1
  );
}

export default App;
