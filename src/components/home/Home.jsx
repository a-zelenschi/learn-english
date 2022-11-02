import React, { useState } from "react";
import { firestore } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";

export default function Home() {
  const [AFI, setAFI] = useState("");
  const [letter, setLetter] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await setDoc(doc(firestore, "alphabet", letter), {
        letter,
        AFI,
      });
      console.log("A new letter has been added !");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setLetter("");
    setAFI("");
  };
  return (
    <div>
      <form>
        <label htmlFor="">letter</label>
        <br />
        <input
          value={letter}
          type="text"
          onChange={(e) => {
            setLetter(e.target.value);
          }}
        />
        <br />
        <label htmlFor="">AFI</label>
        <br />
        <input
          value={AFI}
          type="text"
          onChange={(e) => {
            setAFI(e.target.value);
          }}
        />
        <br />
        <br />
        <button type="submit" onClick={handleSubmit}>
          submit
        </button>
      </form>
      <h1>{letter}</h1>
      <h2>{AFI}</h2>
    </div>
  );
}
