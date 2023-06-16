import React, { useState } from "react";
import Person from "./components/Person";

const App: React.FC = () => {
  const [country, setCountry] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };
  return (
    <div>
      <Person name={"plla2"} age={25} email={"jhbasda"} />
      <input type="text" onChange={handleChange} />
      {country}
    </div>
  );
};

export default App;
