"use client"; // Mark as a client component

import React, { useState } from "react";
import Head from "next/head";
import { useQuery } from "@tanstack/react-query"; // Updated import
import axios from "axios";

function CryptoPriceTracker() {
  const [searchTerm, setSearchTerm] = useState("");
  const cryptoIds = [
    "bitcoin",
    "ethereum",
    "ripple",
    "litecoin",
    "cardano",
  ]

  const {
    data: cryptoData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["cryptoPrices", cryptoIds],
    queryFn: () =>
      axios
        .get(
          `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoIds.join(
            ","
          )}&vs_currencies=usd`
        )
        .then(res => res.data),
    refetchInterval: false,
  });

  const filteredCryptoIds = cryptoIds.filter(id =>
    id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen text-black bg-gray-100 p-4">
      <Head>
        <title>Crypto Price Tracker</title>
      </Head>
      <h1 className="text-3xl font-bold text-center mb-4">Crypto Price Tracker</h1>
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-md p-2 mr-2"
        />
        <button
          onClick={() => refetch()}
          className="bg-blue-500 text-white rounded-md px-4 py-2 cursor-pointer hover:bg-blue-600"
        >
          Refresh
        </button>
      </div>
      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : cryptoData ? (
        <ul className="list-disc list-inside">
          {filteredCryptoIds.map(id => (
            <li key={id} className="mb-2">
              <span className="font-semibold">{id}:</span> ${cryptoData[id]?.usd}
            </li>
          ))}
        </ul>
      ) : (
      <p className="text-center text-red-500">Error fetching data.</p>
      )}
    </div>
  );
}

export default CryptoPriceTracker;
