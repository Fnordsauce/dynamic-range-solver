import {
  Box,
  Center,
  FormControl,
  FormLabel,
  Input,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Box display="flex" justifyContent="center" alignItems="center" mb={4}>
        <img src="img\final_logo.png" alt="Image" width="100" height="100" />
      </Box>
      <FormControl mb={4} pl={4} pr={4}>
        <FormLabel textAlign="center">Email address</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl mb={4} pl={4} pr={4}>
        <FormLabel textAlign="center">Password</FormLabel>
        <Input type="password" />
      </FormControl>
      {/* Add the signup link */}
      <Box display="flex" justifyContent="center" alignItems="center">
        <Link to="/signup">Need an Account? Signup</Link>
      </Box>
    </div>
  );
}

export default Login;
