import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import { useEffect, useState } from "react";
import { AddressCard } from "./AddressCard";
import { AddressForm } from "./AddressForm";

const defaultFormData = {
  name: "",
  phone: "",
  country: "",
  state: "",
  city: "",
  street: ""
};

export const Main = () => {
  const [addresses, setAddresses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState(defaultFormData);
  const [isEditStateActive, setIsEditStateActive] = useState(false);

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

  const submitHandler = async (e, formData) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { data, status } = await axios.post(
        "https://621f95f2ce99a7de19422461.mockapi.io/addresses",
        formData
      );
      if (status === 201) {
        setAddresses((prevAddresses) => [...prevAddresses, data]);
        resetForm();
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteHandler = async (id) => {
    setIsLoading(true);
    try {
      const { status } = await axios.delete(
        `https://621f95f2ce99a7de19422461.mockapi.io/addresses/${id}`
      );
      if (status === 200) {
        setAddresses((prevAddresses) =>
          prevAddresses.filter(({ id: uid }) => uid !== id)
        );
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const updateHandler = async () => {
    setIsLoading(true);
    try {
      const { status, data } = await axios.put(
        `https://621f95f2ce99a7de19422461.mockapi.io/addresses/${formData.id}`,
        formData
      );
      if (status === 200) {
        setFormData(defaultFormData);
        setIsEditStateActive(false);
        setAddresses((prevAddresses) =>
          prevAddresses.map((address) =>
            address.id === data.id ? data : address
          )
        );
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const editHandler = (address) => {
    setFormData(address);
    setIsEditStateActive(true);
  };

  const resetForm = () => {
    setFormData(defaultFormData);
    setIsEditStateActive(false);
  };

  return (
    <main>
      <AddressForm
        submitHandler={submitHandler}
        handleUpdate={updateHandler}
        formData={formData}
        setFormData={setFormData}
        handleReset={resetForm}
        editState={isEditStateActive}
      />
      <ClipLoader
        color="darkcyan"
        loading={isLoading}
        size={10}
        speedMultiplier={2}
      />
      {error && <p>{error}</p>}
      <div>
        {addresses.map((addressData) => {
          return (
            <AddressCard
              address={addressData}
              handleDelete={deleteHandler}
              handleEdit={editHandler}
              key={addressData.id}
            />
          );
        })}
      </div>
    </main>
  );
};
