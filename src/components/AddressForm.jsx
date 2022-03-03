import { useState } from "react";

const defaultFormData = {
  name: "",
  phone: "",
  country: "",
  state: "",
  city: "",
  street: ""
};

export const AddressForm = ({ submitHandler }) => {
  const [formData, setFormData] = useState(defaultFormData);

  const changeHandler = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value
    }));
  };

  const resetForm = () => {
    setFormData(defaultFormData);
  };

  return (
    <form
      className="address-form"
      onSubmit={(e) => submitHandler(e, formData, resetForm)}
    >
      <label htmlFor="name">Name</label>
      <input
        onChange={changeHandler}
        value={formData.name}
        type="text"
        id="name"
        name="name"
        placeholder="Enter your name"
        required
      />
      <label htmlFor="phone">Phone</label>
      <input
        onChange={changeHandler}
        value={formData.phone}
        type="tel"
        name="phone"
        id="phone"
        placeholder="Enter your phone no."
        required
      />
      <label htmlFor="country">Country</label>
      <input
        onChange={changeHandler}
        value={formData.country}
        type="text"
        name="country"
        id="country"
        placeholder="Enter your country"
        required
      />
      <label htmlFor="state">State</label>
      <input
        onChange={changeHandler}
        value={formData.state}
        type="text"
        name="state"
        id="state"
        placeholder="Enter your state"
        required
      />
      <label htmlFor="city">City</label>
      <input
        onChange={changeHandler}
        value={formData.city}
        type="text"
        name="city"
        id="city"
        placeholder="Enter your city"
        required
      />
      <label htmlFor="street">Street</label>
      <input
        onChange={changeHandler}
        value={formData.street}
        type="text"
        name="street"
        id="street"
        placeholder="Enter you street"
        required
      />
      <button>Add</button>
    </form>
  );
};
