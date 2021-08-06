function Hamburger() {
  return (
    <div className="hamburger">
      <svg
        width="25"
        height="20"
        viewBox="0 0 75 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line y1="5" x2="75" y2="5" stroke="white" stroke-width="10" />
        <line y1="35" x2="75" y2="35" stroke="white" stroke-width="10" />
        <line y1="65" x2="75" y2="65" stroke="white" stroke-width="10" />
      </svg>
    </div>
  );
}

export default Hamburger;
