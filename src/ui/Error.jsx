import styled from "styled-components";
import GlobalStyle from "../assets/styles/GlobalStyles";
const StyledError = styled.main`
  height: 100vh;
background-color:#f8fafc;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const ErrorBox = styled.div`
  
    background-color: #fff;
    border: 1px solid #030712;
    border-radius: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 1.6rem;
    font-size: 2.4rem;
    font-weight: 700;
    color : #030712;
  }

  & p {
    font-family: "Sono";
    margin-bottom: 3.2rem;
    color: #030712;
  }
`;
const Button = styled.button`
    background-color: #030712;
    border: 1px solid #030712;
    border-radius: 0.6rem;
    color : #f8f8f8;
    padding :1.2rem 2.4rem;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.5;
    text-align: center;
    cursor: pointer;
`
function Error({ error , resetErrorBoundary }) {

  return (
    <>
    <GlobalStyle/>
      <StyledError>
        <ErrorBox>
          <h1>Something went wrong</h1>
          <p>{error.message}</p>
          <Button  onClick={resetErrorBoundary} aria-label="Try again">
            Try again
          </Button>
        </ErrorBox>
      </StyledError>
    </>
  );
}

export default Error;
