import { PropsWithChildren } from "react";
import styled from "styled-components";

type PropsType = {
  name: string;
};

export const Card = (props: PropsWithChildren<PropsType>) => {
  const { children, name } = props;

  return (
    <CardBlock>
      <Name>{name}</Name>
      {children}
    </CardBlock>
  );
};

const CardBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 15px;
  border: 2px solid #facaff;
  box-shadow: 0 2px 3px 1px #731f5c;
  border-radius: 5px;
  
  h4 {
    margin: 0;
    padding: 3px 6px;
  }
`;

const Name = styled.h2`
  border-bottom: 2px solid #831a65;
  text-align: center;
  text-transform: uppercase;
`;
