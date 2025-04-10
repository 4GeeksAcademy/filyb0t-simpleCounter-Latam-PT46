import React from "react";

class Digit extends React.Component {
  render() {
    return (
      <div className="digit">
        {this.props.number}
      </div>
    );
  }
}

export { Digit };
