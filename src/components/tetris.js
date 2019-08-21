import React from "react";

import { createStage } from "../gameHelpers";
import { StyledTetris, StyledTetrisWrapper } from "./styles/StyledTetris";

import Stage from "./stage";
import Display from "./display";
import StartButton from "./startButton";

const Tetris = () => {
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()} />

        <aside>
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
