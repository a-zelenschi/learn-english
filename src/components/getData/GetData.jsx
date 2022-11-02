import React, { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../../firebase";

export function GetData() {
  const [AFI, setAFI] = useState("");
  const [letter, setLetter] = useState("");
  const [sLetter, setSLetter] = useState("");
  const gdata = async () => {
    const docRef = doc(firestore, "alphabet", `${sLetter}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const { AFI, letter } = docSnap.data();
      setAFI(AFI);
      setLetter(letter);
    } else {
      // doc.data() will be undefined in this case
      alert("No such document!");
    }
    setSLetter("");
  };

  return (
    <div>
      <label htmlFor="">Search letter:</label>
      <br />
      <input
        value={sLetter}
        type="text"
        onChange={(e) => {
          setSLetter(e.target.value);
        }}
      />
      <br />
      <br />
      <button onClick={gdata}>getData</button>
      <h4>Leter is: {letter}</h4>
      <h4>AFI is: {AFI}</h4>
    </div>
  );
}
