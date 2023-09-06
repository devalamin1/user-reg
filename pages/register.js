import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import sendVerificationEmail from '../utils/token';

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const verificationToken = uuidv4();
    // Store user data and verification token in your database (e.g., MongoDB)
    // Send verification email using Nodemailer

    console.log(`User registered with email: ${email}`);
    console.log(`Verification Token: ${verificationToken}`);
    await sendVerificationEmail(email, verificationToken);
  };

  return (
    <div>
      <h1>Register</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
