import React, { useEffect, useState } from "react";
function MyComponent() {
  const [pokemon, setPokemon] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const fetchData = async () => {
    console.log("api calling");
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const jsonData = await res.json();
    setPokemon(jsonData.results);
  };
  console.log("rendering My Component");
  useEffect(() => {
    fetchData();
  }, []);

  const filteredPokemon = pokemon.filter((item) =>
    item.name.includes(inputVal)
  );

  return (
    <div>
      <h1>Pokemon List</h1>
      <input type="text" onChange={(e) => setInputVal(e.target.value)} />
      {filteredPokemon?.map((poke, index) => (
        <h2 key={`${poke.name}-${index}`}>{poke.name}</h2>
      ))}
    </div>
  );
}
export default React.memo(MyComponent);
