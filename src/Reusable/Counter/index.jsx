import React from "react";
import styled from "styled-components";

const Qty = styled.p`
  font-size: 22px;
  width: 60px;
  text-align: center;
  margin: 0 10px;
  font-weight: bold;
  color: #007bff;
`;

const Button = styled.button`
  background: linear-gradient(135deg, #007bff, #00d4ff);
  color: white;
  font-size: 20px;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 5px 15px rgba(0, 123, 255, 0.3);

  &:hover {
    background: linear-gradient(135deg, #0056b3, #00a2d4);
    transform: scale(1.1);
    box-shadow: 0px 8px 20px rgba(0, 123, 255, 0.5);
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0px 3px 10px rgba(0, 123, 255, 0.2);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

export default class Counter extends React.Component {
  state = { count: 0 };

  increase = () => {
    this.setState({ count: this.state.count + 1 }, () => {
      this.props.onUpdateCount(this.state.count);
    });
  };

  decrease = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 }, () => {
        this.props.onUpdateCount(this.state.count);
      });
    }
  };

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10px" }}>
        <Button onClick={this.decrease} disabled={this.state.count === 0}>-</Button>
        <Qty>{this.state.count}</Qty>
        <Button onClick={this.increase}>+</Button>
      </div>
    );
  }
}
