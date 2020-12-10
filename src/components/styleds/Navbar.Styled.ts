import styled from "styled-components";

export const NavBar = styled.div`
  background-color: #282525;
  width: 100%;
  height: max-content;
  position: fixed;
  display: flex;
  justify-content: space-between;
  padding: 10px 90px;
  z-index: 10;

  #Logo {
    width: 150px;
  }
`;

export const OptionsNavbar = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;

  li {
    margin-left: 20px;
    font-size: 17px;
    font-weight: bold;
  }
  a {
    text-decoration: none;
    color: white;
    transition: 0.3s;
  }
  a:hover {
    color: #ff5555;
  }
`;