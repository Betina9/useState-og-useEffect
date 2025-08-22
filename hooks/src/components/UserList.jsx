import { useState } from "react";
import "../styles/UserList.css";

const mockData = [
  { username: "Ola Normann", email: "ola.normann@norge.no" },
  { username: "Torleif", email: "torleif@kodehode.no" },
  { username: "Jan Egil", email: "jan.egil@kodehode.no" },
  { username: "Sander", email: "sander@kodehode.no" },
];

function UserList() {
  const [users, setUsers] = useState(mockData);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const addUser = () => {
    if (!username.trim() || !email.trim()) return;
    setUsers([...users, { username: username.trim(), email: email.trim() }]);
    setUsername("");
    setEmail("");
  };

  return (
    <div className="userlist">
      <h2>Brukerliste</h2>
      <ul className="list">
        {users.map((user) => (
          <li key={user.email}>
            {user.username} – {user.email}
          </li>
        ))}
      </ul>

      <h3>Legg til ny bruker</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addUser();
        }}
      >
        <label>
          Username:
          <input
            type="text"
            placeholder="Ola Nordmann"
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            placeholder="ola@norge.no"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <button type="submit" className="ListButton">
          Push
        </button>
      </form>
    </div>
  );
}

export default UserList;
