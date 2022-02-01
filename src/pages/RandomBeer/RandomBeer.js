import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { getRandomBeer } from "../../api";
import { Suspense } from "../../components/Suspense";

function RandomBeer() {
  const { data, loading, error } = useFetch(getRandomBeer);

  return (
    <Suspense noData={!data && !loading} loading={loading} error={error}>
      <h2>Random Beer</h2>
      <p>{data?.name}</p>
    </Suspense>
  );
}

export default RandomBeer;
