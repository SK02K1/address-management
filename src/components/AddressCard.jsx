export const AddressCard = ({
  handleDelete,
  address: { id, name, phone, country, state, city, street }
}) => {
  return (
    <div className="address-card">
      <div>name: {name}</div>
      <div>phone: {phone}</div>
      <div>country: {country}</div>
      <div>state: {state}</div>
      <div>city: {city}</div>
      <div>street {street}</div>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};
