import { useContext, useEffect } from "react";
import { AuthContext } from "./auth/AuthContext";
import AuthModal from "./auth/AuthModal";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Login from "./auth/Login";
import { ColourContext } from "./ColourShifter/ColourContext";
import { ChartBuilder } from "./ChartBuilder";
import StartScreen from "./StartScreen";

function ChartFrame({ children, dispatch }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isActive } = useContext(ColourContext);
  useEffect(() => {}, [isActive]);

  const { user, viewLogin, setViewLogin } = useContext(AuthContext);
  let onClickEvent = null;
  useEffect(() => {
    if (user) {
      onClose();
    }
  }, [user]);

  function handleNotLogged(event) {
    console.log("clicked");
  }
  return (
    <div onClick={(e) => handleNotLogged(e)}>
      {viewLogin ? (
        <>
          <Modal isOpen={true} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <ModalBody></ModalBody>

              <Login />

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      ) : (
        ""
      )}

      <ChartBuilder dispatch={dispatch} oncontextmenu="return false;" />

      {children}
    </div>
  );
}

export default ChartFrame;
