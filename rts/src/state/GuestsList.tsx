import { useState } from "react";

const GuestsList: React.FC = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setGuests([name, ...guests]);
    setName("");
  };

  return (
    <div>
      <h3>Guests List</h3>

      <ul>
        {guests.map((guest) => (
          <li>{guest}</li>
        ))}
      </ul>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Add guest</button>
    </div>
  );
};

export default GuestsList;
