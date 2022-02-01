import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { searchBeer } from "../../api";
import { Suspense } from "../../components/Suspense";

const Card = styled("div")`
  border: 4px solid black;
  border-radius: 20px;
  padding: 20px;
  background-color: tomato;
  margin: 10px auto;
  width: fit-content;
`;

function Beers() {
  const [query, setQuery] = React.useState("");
  const { data, loading, error } = useFetch(() => searchBeer(query), [query]);

  const handleChange = ({ target }) => setQuery(target.value);

  return (
    <div>
      <Suspense noData={!data && !loading} error={error} loading={loading}>
        <h2>Beers</h2>
        <input placeholder="search" value={query} onChange={handleChange} />
        {data?.map((beer) => (
          <Card key={beer._id}>
            <p>{beer.name}</p>
            <Link to={`/beers/${beer._id}`}>Show more</Link>
          </Card>
        ))}
      </Suspense>
    </div>
  );
}

export default Beers;
