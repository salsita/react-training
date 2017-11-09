import Link from "modules/routing/components/link";

import styled from "styled-components";

export const black = "#222222";
export const blue = "#00bcd4";
export const lightgrey = "#e0e0e0";
export const white = "#ffffff";

export const colors = {
  black,
  blue,
  lightgrey,
  white
};

export const fontSize = ["14px", "24px"];

export const space = ["12px", "16px", "24px", "36px", "48px"];

export const Title = styled.h1`
  font-size: ${fontSize[1]};
  margin-bottom: ${space[2]};
`;

export const StyledLink = styled(Link)`
  color: ${colors.blue};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #00daf6;
  }
`;

export const Button = styled.button`
  background-color: ${colors.blue};
  border: none;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  box-sizing: border-box;
  color: ${colors.white};
  cursor: pointer;
  display: inline-block;
  font-weight: 500;
  height: ${space[3]};
  line-height: ${space[3]};
  margin: ${space[0]} 0;
  outline: none;
  padding: 0 ${space[1]};
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #00daf6;
  }
`;

export const Table = styled.table`
  border: none;
  border-collapse: collapse;
  margin-bottom: ${space[2]};
  width: 100%;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid ${colors.lightgrey};
  height: ${space[4]};
`;

export const TableData = styled.td`
  height: ${space[4]};
  padding-left: ${space[2]};
  padding-right: ${space[2]};
  width: ${space[2]};
`;

export const TableHead = TableData.extend`
  border-bottom: 1px solid ${colors.lightgrey};
  font-weight: bold;
  height: ${space[4]};
`;

export const MessageError = styled.div`
  margin: ${space[0]} 0;
  position: relative;
  bottom: 2px;
  font-family: Arial, "sans-serif";
  font-size: 12px;
  line-height: 12px;
  color: #f44336;
  transition: all 0.3s ease-in-out;
`;

export const MessageWarning = MessageError.extend`
  color: yellow;
`;

const styles = {
  colors,
  fontSize,
  space
};

export default styles;
