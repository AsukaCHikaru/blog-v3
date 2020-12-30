import * as React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../service/reducer";

type OwnProps = {
  assetId: string;
};

export const Image: React.FC<OwnProps> = ({ assetId }) => {
  const asset = useSelector((state: RootState) => state.asset);

  return (
    <StyledImgWrapper>
      <StyledImage src={asset.data[assetId]} alt="" />
    </StyledImgWrapper>
  );
};

const StyledImgWrapper = styled.div`
  text-align: center;
`;

const StyledImage = styled.img`
  width: 80%;
  margin: 0 auto;
`;
