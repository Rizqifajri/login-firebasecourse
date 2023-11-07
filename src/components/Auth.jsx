import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, googleProvider } from "../config/firebase-config";
import Google from '../assets/logoGoogle.png'

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(auth?.currentUser?.email);

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("'Error", error);
    } finally {
      alert("Yeay, anda berhasil Login");
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error", error);
    } finally {
      alert("Yeay, anda berhasil Login");
    }
  };

  const Logout = async () => {
    try {
      await signOut(auth, googleProvider);
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <>
      <h1 className="text-center text-4xl bg-blue-200 p-5 ">LoginPage.</h1>
      <div className="flex flex-col justify-center h-screen items-center gap-5 ">
        <img
          className="w-96"
          src="https://img.freepik.com/free-vector/3d-cartoon-people-concept-online-meeting-virtual-conference-video-call_40876-3763.jpg?w=1060&t=st=1699201127~exp=1699201727~hmac=3fa384ac2e884c0cc18acfdb484dd14cc3c6aad04492f6e6dbae90c74df60147"
          alt=""
        />
        <input
          className="border-4 w-72 h-10 indent-4 rounded-lg "
          placeholder="Inputyour@email"
          onChange={(q) => setEmail(q.target.value)}
        />
        <input
          className="border-4 w-72 h-10 indent-4 rounded-lg"
          placeholder="Input your Password..."
          type="password"
          onChange={(q) => setPassword(q.target.value)}
        />

        <button
          className="bg-blue-500 text-white p-2 rounded-sm w-72 hover:bg-green-500  "
          onClick={signIn}>
          Sign In
        </button>
        <button
          className="bg-blue-500 text-white p-2 rounded-sm w-72 hover:bg-green-500 flex justify-center items-center  "
          onClick={signInWithGoogle}>
          Sign In with <span><img className="w-10" src={Google} alt="LOGO" /></span>
        </button>
        <button
          className="bg-red-400 text-white p-2 rounded-sm w-72 hover:bg-red-500"
          onClick={Logout}>
          Logout
        </button>
      </div>
    </>
  );
};
