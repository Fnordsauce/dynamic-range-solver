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
import React, { useContext, useEffect, useState } from "react";

import Login from "./Login";
import Signup from "./Signup";
import { auth } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { AuthContext } from "./AuthContext";

function SignUpModal({ dispatch }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [user, loading, error] = useAuthState(auth);
  const { userStatus } = useContext(AuthContext);

  useEffect(() => {
    if (userStatus === true) {
      onClose();
    }
  }, [userStatus]);
  //   const [modalState, setModalState] = useRecoilState(authModalState);
  return (
    <>
      <Button onClick={onOpen}>Sign Up</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody></ModalBody>

          <Signup />

          <ModalFooter>
            <Button colorScheme="blue" mr={250} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SignUpModal;
