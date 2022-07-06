import Card from "./components/Card/Card";
import "./styles.css";
import { useEffect, useState } from "react";
import Search from "./components/Search/Search";
import { getPokemon } from "./api.js";
import Pagination from "./components/Pagination/Pagination";

export default function App() {
  let [search, setSearch] = useState("");
  let [limit, setLimit] = useState(24);
  let [offset, setOffset] = useState(0);
  //let url = `https://pokeapi.co/api/v2/pokemon/${search}`;
  let api = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;
  let defa = `https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0/def`;
  let entro = false;
  let [data, setData] = useState([]);
  let { count } = data;
  let [bicho, setBicho] = useState([]);

  //next=> url de la próxima página
  //previous=> url de la página pasada
  //results=> objeto con el nombre del pokemon junto a su url

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setData(data);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemon(pokemon.url);
      });
      const results = await Promise.all(promises);
      setBicho(results);
    })();
  }, [api]);

  console.log(data);

  return (
    <div className="App">
      <h1 className="home-title">Api Pokemon</h1>
      <Search setSearch={setSearch} />
      <Pagination
        setOffset={setOffset}
        offset={offset}
        limit={limit}
        count={count}
      />
      <div className="cards">
        {bicho &&
          bicho.map((item, index) => {
            entro = false;
            if (item.name.includes(search) || item.name === search) {
              entro = true;
              console.log("desde app " + offset);
              //api = previous;
              return <Card key={index} info={item} />;
            } // else if (!entro) {
            //  api = next;
            //}
          })}
      </div>
    </div>
  );
}
