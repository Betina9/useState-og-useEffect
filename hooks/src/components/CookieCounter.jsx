function CookieCounter({ count, onClick }) {
  return (
    <button onClick={onClick}>
      You have {count} cookie{count !== 1 ? "s" : ""}!
      <img
        src="./images/cookie.png"
        alt="A cookie"
        style={{ width: "20px", height: "20px" }}
      />
    </button>
  );
}

export default CookieCounter;
