import styled from "styled-components";
const DetailGrid = styled.div`
  display: grid;
  height: calc(90vh - 200px);
  margin-top: 30px;
  grid-template-columns: 1fr 5fr 3fr 1fr;
  gap: 50px;
`;
const DetailImg = styled.img`
  width: 100%;
  height: 100%;
`;
export { DetailGrid, DetailImg };
