import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Save the username in Firestore
      await setDoc(doc(db, "users", user.uid), {
        username,
        email,
      });

      setLoading(false);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error signing up:", error.message);
      setLoading(false);
      alert(error.message);
    }
  };

  return (
    <div className="p-5 md:px-10 py-5 max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg  shadow-md">
      <center>
        <h2 className="text-red-400 font-bold mb-4">
          Sign up for task management site{" "}
        </h2>
        <div className="h-3 bg-black w-20 mb-4"> </div>
      </center>
      <form onSubmit={handleSignUp} className="grid gap-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
          className="border p-2 rounded"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="border p-2 rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="border p-2 rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className="text-white font-bold bg-black p-2 rounded">
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
