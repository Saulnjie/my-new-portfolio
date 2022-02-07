import styled from "styled-components";

const StyledButton = styled.button`
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-black);
  margin-top: var(--size);
  /* margin-right: 10%; */
  margin-left: auto;
  margin-bottom: var(--size);
  color: var(--color-white);
  font-size: var(--font-size);
  border-radius: 8px;
  border: none;
`;

export default function VisitButton({ children }) {
  return <StyledButton>{children}</StyledButton>;
}
