import { useState } from "react";
import "./styles.css";

var profit = "https://media.giphy.com/media/hof5uMY0nBwxyjY9S2/giphy.gif";
var loss = "https://media.giphy.com/media/h4OGa0npayrJX2NRPT/giphy.gif";
var purchasedPrice = 0;
var stocksQuantity = 0;
var currentPrice = 0;

export default function App() {
  const [result, setResult] = useState(["", "", ""]);
  const [amt, setAmt] = useState(["", ""]);
  const [theme, setTheme] = useState("");

  function onCheckHandler(e) {
    e.preventDefault();
    if (purchasedPrice && stocksQuantity && currentPrice > 0) {
      if (purchasedPrice === currentPrice) {
        setResult(["No returns", ""]);
        setAmt(["", ""]);
        setTheme("");
      } else {
        let diff = currentPrice - purchasedPrice;
        let percentage = ((diff / purchasedPrice) * 100).toFixed(2);

        let amount = Math.floor(diff * stocksQuantity);
        if (percentage > 0) {
          setResult(["yes !! you gained profit of ", percentage, "%"]);
          setAmt([" and total gained amount ", amount]);
          setTheme(profit);
        } else {
          setResult(["ohh you are in loss of ", Math.abs(percentage), "%"]);
          setAmt([" and total loss amount ", Math.abs(amount)]);
          setTheme(loss);
        }
      }
    } else {
      setResult(["enter valid amounts"]);
      setAmt(["", ""]);
    }
  }

  return (
    <div
      className="App"
      style={{ backgroundImage: `url("${theme}")`, backgroundSize: "cover" }}
    >
      {" "}
      <div>
        <a
          style={{ color: "black", fontSize: "xx-large" }}
          href="https://github.com/narharikale"
        >
          <i class="lni lni-github-original social-links"></i>
        </a>
      </div>
      <h1>Profit/Loss Calculator 💸</h1>
      <h3>Enter given details to know are you making money or not</h3>
      <form onSubmit={onCheckHandler}>
        <label>purchased price:</label>

        <input
          type="number"
          onChange={(e) => {
            purchasedPrice = Number(e.target.value);
          }}
        />

        <label>purchased quantity:</label>

        <input
          type="number"
          onChange={(e) => {
            stocksQuantity = Number(e.target.value);
          }}
        />

        <label>current price:</label>

        <input
          type="number"
          onChange={(e) => {
            currentPrice = Number(e.target.value);
          }}
        />

        <button type="submit">Check</button>
      </form>
      <div>
        <div className="outPut">
          {result[0]}
          <span>
            {result[1]} {result[2]}
          </span>{" "}
          <span>
            {amt[0]} {amt[1]}
          </span>
        </div>
      </div>
    </div>
  );
}
