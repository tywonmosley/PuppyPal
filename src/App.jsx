import { useState } from "react";
import { puppyList } from "./data.js";


function App() {
  const [state, setState] = useState(0);
  const [puppies, setPuppies] = useState(puppyList);

  console.log(puppyList);

  return (
    <>
      <div>
        {puppies.map((puppy) => {
          return <p key={puppy.id}> {puppy.name} </p>;
        })}
      </div>
    </>
  );
}

export default App;
