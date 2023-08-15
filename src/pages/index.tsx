import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import LoadingSpinner from "~/components/loading";
import { useState, useQuery } from "react";
import LoadingPage from "~/components/LoadingPage";

export default function Home() {
  //const { scarabs, isLoaded: scarabsLoaded } = useState(false);
  const { data, isLoading: scarabLoading } = api.items.getScarabs.useQuery();

  //if (!dataLoaded) return <div />;

  if (scarabLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      <div>hello</div>
      <ul>
        {data ? (
          data.map((item) => {
            return (
              <li key={item.name}>
                {item.name} {item.currentChaos?.numerator} /{" "}
                {item.currentChaos?.denominator}
              </li>
            );
          })
        ) : (
          <LoadingSpinner />
        )}
      </ul>
    </>
  );
}
