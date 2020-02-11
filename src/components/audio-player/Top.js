import React from "react";
import styled from "styled-components";
import PropsTypes from "prop-types";
import { Audio } from "./Audio";

export function Top(props) {
  const Container = styled.div`
    border-radius: 5px 5px 0 0;
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
    color: #27117c;
    box-sizing: border-box;
    background-image: linear-gradient(
      to bottom,
      #ebe6f8,
      #ece5f6,
      #ede4f5,
      #eee4f3,
      #efe3f1
    );
  `;

  const Controls = styled.div`
    flex-basis: 100%;
    margin-top: 1.5rem;
  `;

  return (
    <Container>
      <Controls>
        <Audio url={props.track.url} />
      </Controls>
    </Container>
  );
}

Top.propTypes = {
  track: PropsTypes.object
};
