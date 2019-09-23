import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ListContainer = styled.ul`
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: row;
`;

const List = styled.li`
  display: inline-block;
  list-style: none;
  padding-right: 2rem;
`;

const Title = styled.p`
--mainColor: #535393
  background: linear-gradient(to bottom, var(--mainColor) 0%, var(--mainColor) 100%);
  font-size: 1.8rem;
  padding: 0px 8px;
  background-position: 0 100%;
  background-repeat: repeat-x;
  background-size: 1px 1px;
  transition: background-size 0.2s;
  &:hover {
    background-size: 1px 26px;
    color: rgb(231, 231, 231);
  }
`;

const Breadcrumb = ({ sections }) => {
  return (
    <div>
      <ListContainer>
        {sections.map(section => {
          return (
            <List key={section.id}>
              <NavLink
                className="inactive"
                activeClassName="active"
                to={`/avdelning/${section.title}`}
              >
                <Title>{section.mainsection.title}</Title>
              </NavLink>
            </List>
          );
        })}
      </ListContainer>
    </div>
  );
};

export default Breadcrumb;
