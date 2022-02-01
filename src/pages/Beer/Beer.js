import React from "react";
import { getBeerById } from "../../api";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Suspense } from "../../components/Suspense";

function Beer() {
  const { beerId } = useParams();
  const { data, loading, error } = useFetch(
    () => getBeerById(beerId),
    [beerId]
  );

  return (
    <div>
      <Suspense noData={!data && !loading} error={error} loading={loading}>
        <h2>Beer</h2>
        <p>{data?.name}</p>
      </Suspense>
    </div>
  );
}

export default Beer;
