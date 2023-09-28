import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { app, auth, db } from "../firebase/firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { doc, setDoc } from "firebase/firestore";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [username, setUsername] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  // Helper function to handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      switch (e.target.id) {
        case "email":
          document.getElementById("username").focus();
          break;
        case "username":
          document.getElementById("password").focus();
          break;
        case "password":
          document.getElementById("conPassword").focus();
          break;
        case "conPassword":
          handleSubmit(e); // Submit the form when Enter is pressed in the last input field
          break;
        default:
          break;
      }
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (conPassword !== password) {
      setPasswordsMatch(false);
      return;
    }
    if (!email || !password) return;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        email,
        password
      );

      // The user object is now available in userCredential.user
      const userDocRef = doc(db, "Users", username);
      const userData = {
        username,
        email,
        userID: userCredential.user.uid,
      };
      console.log("checked in", userDocRef, userData);
      await setDoc(userDocRef, userData);

      // Reset password match state on successful submit
      setPasswordsMatch(true);
    } catch (error) {
      // Handle any errors here
      console.error("Error creating user:", error);
    }
  }

  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
        <img src="img\final_logo.png" alt="Image" width="100" height="100" />
        <h1
          style={{ textAlign: "center", fontSize: "24px", fontWeight: "bold" }}
        >
          Sign up
        </h1>
      </Box>
      <FormControl mb={4} pl={4} pr={4}>
        <FormLabel textAlign="center">Email address:</FormLabel>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyPress={handleKeyPress} // Add onKeyPress event handler
        />
      </FormControl>
      <FormControl mb={4} pl={4} pr={4}>
        <FormLabel textAlign="center">Username:</FormLabel>
        <Input
          type="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyPress={handleKeyPress} // Add onKeyPress event handler
        />
      </FormControl>
      <FormControl mb={4} pl={4} pr={4}>
        <FormLabel textAlign="center">Password:</FormLabel>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={handleKeyPress} // Add onKeyPress event handler
        />
      </FormControl>
      <FormControl mb={4} pl={4} pr={4}>
        <FormLabel textAlign="center">Confirm Password:</FormLabel>
        <Input
          type="password"
          id="conPassword"
          value={conPassword}
          onChange={(e) => setConPassword(e.target.value)}
          onKeyPress={handleKeyPress} // Add onKeyPress event handler
        />
      </FormControl>
      {!passwordsMatch && (
        <Text color="red" textAlign="center" mb={4}>
          Passwords don't match. Please try again.
        </Text>
      )}

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
