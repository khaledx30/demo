import React from "react";
import ModalWrapper from "../modal/ModalWrapper";
function SandBox({ data }) {
  return (
    <ModalWrapper size="mini" header="test modal">
      <div> the data is {data}</div>
    </ModalWrapper>
  );
}
export default SandBox;
