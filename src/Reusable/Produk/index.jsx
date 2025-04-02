import React from "react";
import styled from "styled-components";
import Counter from "../Counter";
import Bar from "../Bar";

const imgProduct = [
  "/gambar1.jpg",
  "/gambar2.jpg",
  "/gambar3.jpg"
];

const CardContainer = styled.div`
  box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: Arial, sans-serif;
  border-radius: 10px;
  overflow: hidden;
  background: white;
  padding: 20px;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

const Heading = styled.h1`
  font-size: 18px;
  margin: 10px 0;
`;

const Price = styled.p`
  color: grey;
  font-size: 22px;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: small;
  color: #555;
  padding: 10px;
`;

export default class Product extends React.Component {

  state = { itemCounts: Array(imgProduct.length).fill(0) };

  handleUpdateCount = (index, newCount) => {
    const newCounts = [...this.state.itemCounts];
    newCounts[index] = newCount;
    this.setState({ itemCounts: newCounts });
  };

  render() {
    return (
      <div style={{display: "flex"}}>
        {imgProduct.map((img, index) => (
          <CardContainer key={index}>
            <Bar count={this.state.itemCounts[index]} />
            <Image src={img} alt={`Product ${index + 1}`} />
            <Heading>Title Card {index + 1}</Heading>
            <Price>$19.99</Price>
            <Description>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Ut enim ad minim veniam, quis nostrud exercitation."
            </Description>
            <Counter onUpdateCount={(newCount) => this.handleUpdateCount(index, newCount)} />
          </CardContainer>
        ))}
      </div>
    );
  }
}
