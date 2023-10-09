import Dialog from "@mui/material/Dialog";
import Add from "./Add";
import Delete from "./Delete";
import Spend from "./Spend";
import Edit from "./Edit";
import DeleteAll from "./DeleteAll";
import ResetAll from "./ResetAll";
import { useGlobalContext } from "../../context";

const ModalType = (props) => {
  const type = props.type;

  if (type === "Add") return <Add />;
  else if (type === "Remove") return <Delete />;
  else if (type === "Spend") return <Spend />;
  else if (type === "Edit") return <Edit />;
  else if (type === "ClearAll") return <DeleteAll />;
  else if (type === "Reset") return <ResetAll />;
};

const Modal = () => {
  const { isModalOpen, closeModal, modalType } = useGlobalContext();

  return (
    <Dialog open={isModalOpen} onClose={closeModal}>
      <ModalType type={modalType} />
    </Dialog>
  );
};

export default Modal;
