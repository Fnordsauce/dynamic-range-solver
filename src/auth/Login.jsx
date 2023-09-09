import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;

    signInWithEmailAndPassword(email, password);
  }

  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
        <img src="img\final_logo.png" alt="Image" width="100" height="100" />
        <h1
          style={{ textAlign: "center", fontSize: "24px", fontWeight: "bold" }}
        >
          Log In
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
      {/* Add the signup link */}
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
