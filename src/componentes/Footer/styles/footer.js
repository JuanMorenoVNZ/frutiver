import styled from 'styled-components';

export const Container = styled.div`
  padding: 80px 60px;
  background-image: linear-gradient(to bottom, #007299, #10779d, #1b7da1, #2482a5, #2c88a9, #368cab, #3e8fad, #4693af, #5096af, #5a99b0, #629cb0, #6b9fb1);
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  &:hover {
      color: #ff9c00;
      transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;