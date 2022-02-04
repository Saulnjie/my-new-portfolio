import styled from "styled-components";

const StyledHeader = styled.div`
width: 80%;
height: 100px;
flex: 0 0 auto;
background: blue;
margin: auto;
margin-top: var(--size-xl);
`;


export default function Header() {
  return (
    <StyledHeader>
      Text goes here....
    </StyledHeader>
  )
}
