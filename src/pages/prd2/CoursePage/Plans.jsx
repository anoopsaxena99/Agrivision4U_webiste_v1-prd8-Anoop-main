import React from "react";
import styled from "styled-components";
import { BsDot } from "react-icons/bs";
import { BiRupee } from "react-icons/bi";
import device from "../../../components/Util/MediaQuery";
import useWindowDimensions from "../../../components/Util/useWindowDimensions";
import { paymentHandler } from "../../../components/PaymentPg/PaymentHandler";
const Plans = ({ item }) => {
  const { width } = useWindowDimensions();

  const handelChange = async () => {
    // console.log("hello");
    paymentHandler(item.price, [], [], [item.packageId], 0, null);
  };

  return (
    <>
      <Box id="enroll">
        <Name>Choose how you what to learn!</Name>
        <Matter>
          Agrivision4u courses are flexible to accommodate your learrning
          preference. You can choose between the following option to crack CFTRI
          your way Agrivision4u courses are flexible to accommodate your
          learrning preference. You can choose between the following option to
          crack CFTRI your way{" "}
        </Matter>
        {width > 1200 ? (
          <Plan>
            <Column style={{ width: "15%" }}>
              <Block>
                <Div style={{ marginTop: "90px" }}>Studying concepts</Div>
                <Div>Practice questions</Div>
                <Div>Expert fjdks</Div>
              </Block>
            </Column>
            <Column>
              <Column1>
                <Name1>Basic</Name1>
                <Column2>
                  <Matter1>
                    {" "}
                    <div>
                      <BsDot /> Full study material
                    </div>
                    <div>
                      <BsDot /> Short Notes
                    </div>
                    <div>
                      <BsDot /> Study Planers
                    </div>
                  </Matter1>
                  <Matter1>
                    {" "}
                    <div>
                      <BsDot /> Full study material
                    </div>
                    <div>
                      <BsDot /> Short Notes
                    </div>
                    <div>
                      <BsDot /> Study Planers
                    </div>
                  </Matter1>
                  <Matter2 style={{ marginTop: "120px" }}>
                    <div>Price</div>
                    <Price>
                      <BiRupee />
                      {item.price}
                    </Price>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div style={{ display: "flex" }}>
                        <Button1 onClick={handelChange} >Buy now</Button1>
                        <Button2>Add to cart</Button2>
                      </div>
                    </div>
                  </Matter2>
                </Column2>
              </Column1>
            </Column>
            <Column>
              <Column1>
                <Name2>Advanced</Name2>
                <Column2>
                  <Matter1>
                    {" "}
                    <div>
                      <BsDot /> Full study material
                    </div>
                    <div>
                      <BsDot /> Short Notes
                    </div>
                    <div>
                      <BsDot /> Study Planers
                    </div>
                  </Matter1>
                  <Matter1>
                    {" "}
                    <div>
                      <BsDot /> Full study material
                    </div>
                    <div>
                      <BsDot /> Short Notes
                    </div>
                    <div>
                      <BsDot /> Study Planers
                    </div>
                  </Matter1>
                  <Matter1>
                    {" "}
                    <div>
                      <BsDot /> Full study material
                    </div>
                  </Matter1>
                  <Matter2 style={{ marginTop: "50px" }}>
                    <div>Price</div>
                    <Price>
                      <BiRupee />
                      {item.price + 2000.0}
                    </Price>
                    <div style={{ display: "flex" }}>
                      <Button1 onClick={handelChange}>Buy now</Button1>
                      <Button2>Add to cart</Button2>
                    </div>
                  </Matter2>
                </Column2>
              </Column1>
            </Column>
            <Column>
              <Column1>
                <Name3>Achiever</Name3>
                <Column2>
                  <Matter1>
                    {" "}
                    <div>
                      <BsDot /> Full study material
                    </div>
                    <div>
                      <BsDot /> Short Notes
                    </div>
                    <div>
                      <BsDot /> Study Planers
                    </div>
                  </Matter1>
                  <Matter1>
                    {" "}
                    <div>
                      <BsDot /> Full study material
                    </div>
                    <div>
                      <BsDot /> Short Notes
                    </div>
                    <div>
                      <BsDot /> Study Planers
                    </div>
                  </Matter1>
                  <Matter1>
                    {" "}
                    <div>
                      <BsDot /> Full study material
                    </div>
                    <div>
                      <BsDot /> Short Notes
                    </div>
                    <div>
                      <BsDot /> Study Planers
                    </div>
                  </Matter1>
                  <Matter2>
                    <div>Price</div>
                    <Price>
                      <BiRupee />
                      {item.price + 3000.0}
                    </Price>
                    <div style={{ display: "flex" }}>
                      <Button1 onClick={handelChange} >Buy now</Button1>
                      <Button2>Add to cart</Button2>
                    </div>
                  </Matter2>
                </Column2>
              </Column1>
            </Column>
          </Plan>
        ) : (
          <Plan>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Column style={{ width: "40%" }}>
                <Block>
                  <Div style={{ marginTop: "90px" }}>Studying concepts</Div>
                  <Div>Practice questions</Div>
                  <Div>Expert fjdks</Div>
                </Block>
              </Column>
              <Column>
                <Column1>
                  <Name1>Basic</Name1>
                  <Column2>
                    <Matter1>
                      {" "}
                      <div>
                        <BsDot /> Full study material
                      </div>
                      <div>
                        <BsDot /> Short Notes
                      </div>
                      <div>
                        <BsDot /> Study Planers
                      </div>
                    </Matter1>
                    <Matter1>
                      {" "}
                      <div>
                        <BsDot /> Full study material
                      </div>
                      <div>
                        <BsDot /> Short Notes
                      </div>
                      <div>
                        <BsDot /> Study Planers
                      </div>
                    </Matter1>
                    <Matter2 style={{ marginTop: "120px" }}>
                      <div>Price</div>
                      <Price>
                        <BiRupee />
                        2500.00
                      </Price>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Button1>But now</Button1>
                        <Button2>Add to cart</Button2>
                      </div>
                    </Matter2>
                  </Column2>
                </Column1>
              </Column>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Column style={{ width: "40%" }}>
                <Block>
                  <Div style={{ marginTop: "90px" }}>Studying concepts</Div>
                  <Div>Practice questions</Div>
                  <Div>Expert fjdks</Div>
                </Block>
              </Column>
              <Column>
                <Column1>
                  <Name2>Advanced</Name2>
                  <Column2>
                    <Matter1>
                      {" "}
                      <div>
                        <BsDot /> Full study material
                      </div>
                      <div>
                        <BsDot /> Short Notes
                      </div>
                      <div>
                        <BsDot /> Study Planers
                      </div>
                    </Matter1>
                    <Matter1>
                      {" "}
                      <div>
                        <BsDot /> Full study material
                      </div>
                      <div>
                        <BsDot /> Short Notes
                      </div>
                      <div>
                        <BsDot /> Study Planers
                      </div>
                    </Matter1>
                    <Matter1>
                      {" "}
                      <div>
                        <BsDot /> Full study material
                      </div>
                    </Matter1>
                    <Matter2 style={{ marginTop: "50px" }}>
                      <div>Price</div>
                      <Price>
                        <BiRupee />
                        2500.00
                      </Price>
                      <div style={{ display: "flex" }}>
                        <Button1>But now</Button1>
                        <Button2>Add to cart</Button2>
                      </div>
                    </Matter2>
                  </Column2>
                </Column1>
              </Column>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Column style={{ width: "40%" }}>
                <Block>
                  <Div style={{ marginTop: "90px" }}>Studying concepts</Div>
                  <Div>Practice questions</Div>
                  <Div>Expert fjdks</Div>
                </Block>
              </Column>
              <Column>
                <Column1>
                  <Name3>Achiever</Name3>
                  <Column2>
                    <Matter1>
                      {" "}
                      <div>
                        <BsDot /> Full study material
                      </div>
                      <div>
                        <BsDot /> Short Notes
                      </div>
                      <div>
                        <BsDot /> Study Planers
                      </div>
                    </Matter1>
                    <Matter1>
                      {" "}
                      <div>
                        <BsDot /> Full study material
                      </div>
                      <div>
                        <BsDot /> Short Notes
                      </div>
                      <div>
                        <BsDot /> Study Planers
                      </div>
                    </Matter1>
                    <Matter1>
                      {" "}
                      <div>
                        <BsDot /> Full study material
                      </div>
                      <div>
                        <BsDot /> Short Notes
                      </div>
                      <div>
                        <BsDot /> Study Planers
                      </div>
                    </Matter1>
                    <Matter2>
                      <div>Price</div>
                      <Price>
                        <BiRupee />
                        2500.00
                      </Price>
                      <div style={{ display: "flex" }}>
                        <Button1>But now</Button1>
                        <Button2>Add to cart</Button2>
                      </div>
                    </Matter2>
                  </Column2>
                </Column1>
              </Column>
            </div>
          </Plan>
        )}
      </Box>
    </>
  );
};
const Name = styled.h2`
  color: #0b6e4f;
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 30px;
  font-weight: 600;
  font-size: 35px;
`;
const Block = styled.div`
  //border: 1px solid red;
  width: 70%;
  margin: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Div = styled.div`
  margin-top: 40px;
  padding: 20px;
  background: #f5f5f5;
  text-align: center;
  border-radius: 12px;
`;
const Column2 = styled.div`
  display: flex;
  flex-direction: column;
`;
const Price = styled.div`
  font-size: 28px;
  font-weight: 500;
  padding: 5px;
`;
const Button1 = styled.button`
  display: block;
  color: white;
  background: #13ae7e;
  border-radius: 8px;
  padding: 8px 24px;
  width: 44%;
  margin: 5px;
  font-size: 13px;
  line-height: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 0.9;
  }
`;
const Button2 = styled.button`
  display: block;
  color: #474a50;
  background: white;
  border-radius: 8px;
  border: 1px solid black;
  padding: 8px 24px;
  width: 46%;
  margin: 5px;
  font-size: 13px;
  line-height: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 0.9;
  }
`;
const Matter1 = styled.h2`
  color: #474a50;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  margin-top: 20px;
  padding: 10px;
  letter-spacing: 0.2px;
  //border: 2px solid green;
`;
const Matter2 = styled.h2`
  color: #474a50;
  display: block;
  //z-index: 100000;
  font-weight: 400;
  font-size: 17px;
  line-height: 30px;
  //bottom: 0;
  padding: 10px;
  text-align: center;
  letter-spacing: 0.2px;
  //border: 1px solid green;
`;
const Name1 = styled.h2`
  background: #34c698;
  border-radius: 12.7446px;
  color: white;
  padding: 16px;
  width: 100%;
  text-align: center;
  font-size: 30px;
  margin: 0 auto;
  font-weight: 450;
  font-size: 28px;
`;
const Name2 = styled.h2`
  background: #13ae7e;
  border-radius: 12.7446px;
  color: white;
  padding: 16px;
  width: 100%;
  text-align: center;
  font-size: 30px;
  margin: 0 auto;
  font-weight: 450;
  font-size: 28px;
`;
const Name3 = styled.h2`
  background: #10966c;
  border-radius: 12.7446px;
  color: white;
  padding: 16px;
  width: 100%;
  text-align: center;
  font-size: 30px;
  margin: 0 auto;
  font-weight: 450;
  font-size: 28px;
`;
const Box = styled.div`
  width: 90%;
  margin: auto;
  padding: 20px;
`;
const Column = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  //border: 2px solid yellow;
  border-radius: 12.7446px;
  ${device.laptopL} {
    width: 60%;
    align-items: center;
    justify-content: center;
  }
`;
const Column1 = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.13);
  margin: auto;
  border-radius: 12.7446px;
  ${device.laptopL} {
    width: 100%;
  }
`;

const Plan = styled.div`
  height: 640px;
  //border: 2px solid red;
  display: flex;
  padding: 20px;
  ${device.laptopL} {
    flex-direction: column;
    gap: 100px;
    height: 100%;
  }
`;
const Matter = styled.h2`
  color: #5f5f5f;
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 50px;
  line-height: 38px;
  letter-spacing: 0.2px;
`;
export default Plans;
