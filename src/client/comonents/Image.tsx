import * as React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../service/reducer";

type OwnProps = {
  assetId: string;
};

export const Image: React.FC<OwnProps> = ({ assetId }) => {
  const asset = useSelector((state: RootState) => state.asset);

  if (!asset.data || !asset.data[assetId]) {
    return null;
  }

  return (
    <StyledImgWrapper>
      <StyledImage
        src={asset.data[assetId].uri}
        alt={asset.data[assetId].description || ""}
      />
      {asset.data[assetId].description && (
        <StyledImageDescription>
          {asset.data[assetId].description}
        </StyledImageDescription>
      )}
    </StyledImgWrapper>
  );
};

const StyledImgWrapper = styled.div`
  text-align: center;
  margin-bottom: 27px;
`;

const StyledImage = styled.img`
  width: 80%;
  margin: 0 auto 14px;

  @media (max-width: 400px) {
    width: 100%;
  }
`;

const StyledImageDescription = styled.p`
  color: #7a7a7a;
  font-size: 14px;
`;
