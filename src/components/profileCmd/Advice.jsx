import React from "react";
import axios from "axios";
import { refresh } from "../../assets";

class Advice extends React.Component {
  state = {
    advice: "",
  };
  componentDidMount() {
    this.fetchAdvice();
  }
  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;

        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({ isShaking: true });

    // Reset the shaking animation after a short delay
    setTimeout(() => {
      this.setState({ isShaking: false });
    }, 400);
  };
  render() {
    return (
      <div className="center-card bg-white dark:bg-black">
        <div
          className="bg-white dark:bg-black"
          style={{
            width: "fit-content",
            textAlign: "center",
            margin: "auto",
            padding: "25px",
          }}
        >
          <h1 className="heading text-black dark:text-white">
            {this.state.advice}
          </h1>
          <button
            className={`button ${
              this.state.isShaking ? "shake-animation" : ""
            }`}
            onClick={this.fetchAdvice}
          >
            <span>
              <img src={refresh} alt="Refresh" />
            </span>
          </button>
        </div>
      </div>
    );
  }
}

export default Advice;
