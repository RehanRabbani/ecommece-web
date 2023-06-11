import styled from "@emotion/styled";

export const Heading = styled.div`
  height: 200px;
  font-size: 40px;
  color: red;
  background: #e2e2ea;
  width: 100%;
`;

export const Container = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
`;

export const ProductContainer = styled.div`
  display: flex;
  max-width: 600px;
  margin: 0 auto;
  justify-content: space-between;
`;

export const Input = styled.input`
  width: 350px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ResultsList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 200px;
  padding: 0;
  margin: 0;
  list-style: none;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  overflow-y: auto;
`;

export const ResultItem = styled.li`
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const NavbarContainer = styled.nav`
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const NavLogo = styled.a`
  font-size: 20px;
  color: #fff;
  text-decoration: none;
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    top: 50px;
    right: 0;
    background-color: #333;
    width: 100%;
    padding: 10px;
    display: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? "flex" : "none")};
  }
`;

export const NavMenuItem = styled.li`
  margin-left: 10px;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

export const NavMenuLink = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const NavToggle = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

export const NavIcon = styled.span`
  display: block;
  width: 25px;
  height: 3px;
  background-color: #fff;
  margin-bottom: 5px;
`;

export const FilterButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

export const Drawer = styled.div<{ isOpen: boolean }>`
  width: 300px;
  height: 100vh;
  background-color: #ffffff;
  border: 1px solid;

  position: fixed;
  left: ${({ isOpen }) => (isOpen ? "0" : "-300px")};
  top: 0;
  transition: left 0.3s ease-in-out;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
`;

export const FilterSelect = styled.select`
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 5px;
  padding: 8px;
  margin-right: 10px;
`;

export const FilterInput = styled.input`
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 5px;
  padding: 8px;
  margin-right: 10px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  width: 90%;
  margin-left: 5px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

export const Card = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  margin: 10px;

  @media (max-width: 768px) {
    width: 70%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 250px;
  border-radius: 4px;
`;

export const Name = styled.h3`
  font-size: 16px;
  margin: 5px 0;
`;

export const Price = styled.p`
  font-size: 14px;
  color: #888;
`;

export const ProductListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    display: block;
    margin-left: 4rem;
  }
`;
export const SortContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  margin-right: 10px;
`;

export const Select = styled.select`
  padding: 5px;
  font-size: 16px;
`;
