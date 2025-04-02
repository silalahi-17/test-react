import React, { Component } from "react";
import styled from "styled-components";

const BarContainer = styled.div`
  background: linear-gradient(135deg, #007bff, #00d4ff);
  padding: 10px;
  text-align: center;
  border-radius: 8px 8px 0 0;
  color: white;
  font-weight: bold;
  font-size: 18px;
`;

export default class Bar extends Component {
  render() {
    return <BarContainer>Jumlah: {this.props.count}</BarContainer>;
  }
}
