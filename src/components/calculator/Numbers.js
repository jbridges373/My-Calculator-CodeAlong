const Numbers = ({ handleClick }) => {
    const buttons = [
      "7",
      "8",
      "9",
      "",
      "4",
      "5",
      "6",
      "",
      "1",
      "2",
      "3",
      "",
      "C",
      ".",
      "0",
      "=",
    ];
    return (
      <div className="calculator-keys">
        {buttons.map((button) => (
          <button onClick={handleClick} key={button}>
            {button}
          </button>
        ))}
      </div>
    );
  };
  
  export default Numbers;