import React from "react";
import { Digit } from "./Digit.jsx";
import '@fortawesome/fontawesome-free/css/all.min.css';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      timer: 0,
    };
    this.timerRef = null; 
  }

 
  incrementTimer = () => {
    this.setState({ timer: this.state.timer + 1 });
  };


  componentDidMount() {
    this.timerRef = setInterval(this.incrementTimer, 1000); 
  }

  
  componentWillUnmount() {
    clearInterval(this.timerRef); 
  }

  render() {
    const { timer } = this.state;

    return (
      <main className="text-center">
        <section className="contador-caja">
          <Digit number={<span className="fa-solid fa-clock"></span>} />
          <Digit number={Math.floor(timer / 10000) % 10} />
          <Digit number={Math.floor(timer / 1000) % 10} />
          <Digit number={Math.floor(timer / 100) % 10} />
          <Digit number={Math.floor(timer / 10) % 10} />
          <Digit number={Math.floor(timer % 10)} />
        </section>
      </main>
    );
  }
}

export default Home;
