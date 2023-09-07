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
import React from "react";

import Login from "./Login";

function AuthModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  //   const [modalState, setModalState] = useRecoilState(authModalState);
  return (
    <>
      <Button onClick={onOpen}>LOGIN</Button>

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
