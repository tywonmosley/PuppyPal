import { useState } from "react";
import { puppyList } from "./data.js";


function App() {
  const [state, setState] = useState(0);
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null)

  console.log(puppyList);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  // Handle click on a puppy
  const handleClick = (id) => {
    setFeatPupId(id); // Update featPupId with the ID of the clicked puppy
    console.log("Clicked puppy ID: ", id); // Log the ID of the clicked puppy
  };

  return (
    <>
      <div>
        {puppies.map((puppy) => {
          return  <p
          onClick={() => handleClick(puppy.id)}
          key={puppy.id}
        >
          {puppy.name}
        </p>
        })}

     {/* Display the featured puppy's details if available */}
     {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      </div>
    </>
  );
}

export default App;
