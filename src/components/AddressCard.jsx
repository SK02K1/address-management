export const AddressCard = ({ handleDelete, handleEdit, address }) => {
  const { id, name, phone, country, state, city, street } = address;
  return (
    <div className="address-card">
      <div>
        <span className="text-highlight">name</span>: {name}
      </div>
      <div>
        <span className="text-highlight">phone</span>: {phone}
      </div>
      <div>
        <span className="text-highlight">country</span>: {country}
      </div>
      <div>
        <span className="text-highlight">state</span>: {state}
      </div>
      <div>
        <span className="text-highlight">city</span>: {city}
      </div>
      <div>
        <span className="text-highlight">street</span>: {street}
      </div>
      <button onClick={() => handleDelete(id)}>Delete</button>
      <button onClick={() => handleEdit(address)}>edit</button>
    </div>
  );
};
