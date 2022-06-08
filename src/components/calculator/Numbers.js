const Numbers = ({ handleClick }) => {
    const buttons = [
      "C",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
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