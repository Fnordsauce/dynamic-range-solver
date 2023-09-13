import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text, // Import Text component for error message
} from "@chakra-ui/react";
import { useState } from "react";
import { auth } from "../firebase/firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [passwordsMatch, setPasswordsMatch] = useState(true); // State to track password match

  function handleSubmit(e) {
    e.preventDefault();

    if (conPassword !== password) {
      // Passwords don't match
      setPasswordsMatch(false);
      return;
    }
    if (!email || !password) return;

    // Reset password match state on successful submit
    setPasswordsMatch(true);

    createUserWithEmailAndPassword(email, password);
  }

  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
        <img src="img\final_logo.png" alt="Image" width="100" height="100" />
        <h1
          style={{ textAlign: "center", fontSize: "24px", fontWeight: "bold" }}
        >
          Sign up
        </h1>{" "}
        {/* Add the title */}
      </Box>
      <FormControl mb={4} pl={4} pr={4}>
        <FormLabel textAlign="center">Email address:</FormLabel>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl mb={4} pl={4} pr={4}>
        <FormLabel textAlign="center">Password:</FormLabel>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <FormControl mb={4} pl={4} pr={4}>
        <FormLabel textAlign="center">Confirm Password:</FormLabel>
        <Input
          type="password"
          id="conPassword"
          value={conPassword}
          onChange={(e) => setConPassword(e.target.value)}
        />
      </FormControl>
      {/* Display error message if passwords don't match */}
      {!passwordsMatch && (
        <Text color="red" textAlign="center" mb={4}>
          Passwords don't match. Please try again.
        </Text>
      )}
      {/* Add the login link */}
      <Box display="flex" justifyContent="center" alignItems="center">
        <Link to="/Login">Already have an Account? Log In</Link>
      </Box>
      <Button colorScheme="purple" ml={340} onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}

export default Signup;
