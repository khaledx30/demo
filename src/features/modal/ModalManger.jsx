import React from "react";
import { useSelector } from "react-redux";
import SandBox from "../sandbox/SandBox";

export default function ModalManger() {
  const modalLoockup = { SandBox };
  const curruntModal = useSelector((state) => state.modals);
  let renderModal;
  if (curruntModal) {
    const { modalType, modalProps } = curruntModal;
    const ModalComponent = modalLoockup[modalType];
    renderModal = <ModalComponent {...modalProps} />;
  }
  return <span>{renderModal}</span>;
}
