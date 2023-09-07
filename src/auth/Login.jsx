import { FormControl, FormLabel, Input } from "@chakra-ui/react";

function Login() {
  return (
    <div>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input type="Password" />
      </FormControl>
    </div>
  );
}

export default Login;
