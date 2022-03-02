import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import { useEffect, useState } from "react";
import { AddressCard } from "./AddressCard";

export const Main = () => {
  const [addresses, setAddresses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://621f95f2ce99a7de19422461.mockapi.io/addresses"
        );
        setAddresses(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <main>
      {error && <p>{error}</p>}
      <ClipLoader
        color="darkcyan"
        loading={isLoading}
        size={10}
        speedMultiplier={2}
      />
      <div>
        {addresses.map((addressData) => {
          return <AddressCard address={addressData} key={addressData.id} />;
        })}
      </div>
    </main>
  );
};
