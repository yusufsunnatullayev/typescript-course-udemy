import { useEffect, useRef, useState } from "react";

interface User {
  name: string;
  age: number;
}

const users: User[] = [
  {
    name: "Sarah",
    age: 20,
  },
  {
    name: "Alex",
    age: 20,
  },
  {
    name: "Michael",
    age: 20,
  },
];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");
  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const onClick = () => {
    const foundUser = users.find((user) => user.name === name);
    setUser(foundUser);
  };

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Find</button>

      {user && (
        <div>
          <h1>User name: {user.name}</h1>
          <h2>User age: {user.age}</h2>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
