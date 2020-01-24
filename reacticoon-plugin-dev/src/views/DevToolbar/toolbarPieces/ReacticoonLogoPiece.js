import React from "react";

import ReacticoonLogo from "../../../components/svg/ReacticoonLogo";
import Piece from "../../../components/Piece";

const ReacticoonLogoPiece = ({ onClick }) => (
  <Piece
    name="ReacticoonLogo"
    onClick={onClick}
    headerStyle={{ paddingLeft: 16, paddingRight: 16 }}
  >
    <Piece.Header>
      <ReacticoonLogo height={24} />
    </Piece.Header>
  </Piece>
);

export default ReacticoonLogoPiece;
