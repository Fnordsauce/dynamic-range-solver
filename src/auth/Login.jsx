import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Link,
} from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null); // Create a ref for the password input

  useEffect(() => {
    emailInputRef.current.focus();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    if (!email) {
      // If the email input is empty, focus on it and return
      emailInputRef.current.focus();
      return;
    }

    if (!password) {
      // If the password input is empty, focus on it and return
      passwordInputRef.current.focus();
      return;
    }

    signInWithEmailAndPassword(email, password);
  }

  function handleEmailKeyDown(e) {
    if (e.key === "Enter") {
      // When Enter is pressed in the email input, focus on the password input
      passwordInputRef.current.focus();
    }
  }

  function handlePasswordKeyDown(e) {
    if (e.key === "Enter") {
      // When Enter is pressed in the password input, submit the form
      handleSubmit(e);
    }
  }

  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
        <img src="img\final_logo.png" alt="Image" width="100" height="100" />
        <h1
          style={{ textAlign: "center", fontSize: "24px", fontWeight: "bold" }}
        >
          Log In
        </h1>
      </Box>
      <FormControl mb={4} pl={4} pr={4}>
        <FormLabel textAlign="center">Email address:</FormLabel>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleEmailKeyDown}
          ref={emailInputRef}
          autoFocus
        />
      </FormControl>
      <FormControl mb={4} pl={4} pr={4}>
        <FormLabel textAlign="center">Password:</FormLabel>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handlePasswordKeyDown}
          ref={passwordInputRef} // Set the ref here
        />
      </FormControl>
      {error && (
        <Box color="red" textAlign="center" mb={4}>
          {error.message}
        </Box>
      )}
      <Box display="flex" justifyContent="center" alignItems="center">
        <Link to="/Signup">Need an Account? Sign Up</Link>
      </Box>
      <Button colorScheme="purple" ml={340} onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}

export default Login;
