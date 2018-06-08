// Import React
import React from "react";

import createTheme from "spectacle/lib/themes/default";

import { Deck } from 'spectacle';

import CodeSlide from "spectacle-code-slide";
// Require CSS
require("prismjs/themes/prism.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quarternary: "orange"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);


export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <CodeSlide
          lang="reason"
          textSize={12}
          code='let foo = "bar"'
          ranges={[{ loc: [0, 1] }]}
        />
      </Deck>
    );
  }
}

