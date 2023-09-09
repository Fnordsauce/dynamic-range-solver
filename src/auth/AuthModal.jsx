import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Link,
} from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";

import Login from "./Login";
import { AuthContext } from "./AuthContext";

function AuthModal({ dispatch }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { userStatus } = useContext(AuthContext);

  useEffect(() => {
    if (userStatus === true) {
      onClose();
    }
  }, [userStatus]);
  //   const [modalState, setModalState] = useRecoilState(authModalState);
  return (
    <>
      <Button onClick={onOpen}>Log In</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
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
  );
}

export default AuthModal;
