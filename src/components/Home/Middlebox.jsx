import styled, { css } from "styled-components";
import { Container } from "../global/Global";
import { Button } from "../global/Global";
import device from "../Util/MediaQuery";
const CardData = [
  {
    img: "/images/learning_girl.svg",
    heading: "Learning"
  },
  {
    img: "/images/practice_girl.svg",
    heading: "Practice and Testing"
  },
  {
    img: "/images/lecture_boy.svg",
    heading: "Expert Lectures"
  },
];

const Middlebox = () => {
  return (
<StyledCards>
        
        {CardData.map((item, index) => (
          <Card key={index} item={item} />
        ))}
        
      </StyledCards>
      )
    }
    const Card = ({ item }) => {
        return (
          <StyledCard>
            <img src={item.img} alt="" />
            <>
              <CardHeader>{item.heading}</CardHeader>
            </>
          </StyledCard>
        );
      };

    const StyledCards = styled.div`
    border-radius:15px;
      min-height: 25rem;
      color: black;
      margin-top: 64px;
      margin-bottom:45px;
      margin-left:55px;
      margin-right:55px;
      display: flex;
      flex-wrap: wrap;
      box-shadow:2px 2px 8px 10px rgb(240,239,239);
      align-items: center;
      justify-content: center;
      gap: 55px;
    `
      const StyledCard = styled.div`
  width: 420px;
  img {
    width: 21rem;
    height: 18.5rem;
    object-fit: cover;
  }
`

const CardHeader = styled.h2`
  font-weight: 500;
  font-size: 20px;
  margin-top: 28px;
  text-align: center;
`
export default Middlebox;