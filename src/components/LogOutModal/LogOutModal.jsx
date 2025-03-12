import Modal from "../Modal/Modal.jsx";
import s from "./LogOutModal.module.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { logOut } from "../../redux/auth/operations/logOutThunk";

const LogOutModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    toast.promise(
      dispatch(logOut()),
      {
        loading: "Logging out...",
        success: "You have successfully logged out!",
        error: "Logout failed. Please try again."
      }
    )
      .then(() => {
        navigate("/signin");
      })
      .finally(() => {
        onClose();
      });
  };

  return (
    <Modal onClose={onClose}>
      <div className={s.container}>
        <h2 className={s.title}>Log out</h2>
        <p className={s.text}>Do you really want to leave?</p>
        <div className={s.buttons_container}>
          <button className={s.logout} onClick={handleLogOut}>
            Log Out
          </button>
          <button className={s.cancel} onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default LogOutModal;
