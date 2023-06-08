import React, {useState} from 'react';
import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

const categories = [
  {id: 1, name: "food", text: "부산맛집정보 서비스"},
  {id: 2, name: "walking", text: "부산도보여행 정보 서비스"},
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media scren and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled(NavLink)`
  font-size: 1.2 rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.2rem;

  &.hover {
    color: #495057;
  }

  &.active {
    font-weight: 600;
    border-bottom: 2px solid #cf2225;
    color: #22cf61;
    &:hover {
      color: #dbce3b;
    }
  }

  & + & {
    margin-left: 5rem;
  }
`;

const Categories = (props) => {
    const [language, setLanguage] = useState("KR")
    const languageChange = (event) => {
      setLanguage(event.target.value)

    }

    return (
        <CategoriesBlock>
            {categories.map((c) => (
                <Category
                key={c.id}
                className={({ isActive }) => (isActive ? "active" : undefined)}
                to={c.name === "food" ? `/${c.name}/${language}` : `/${c.name}/${language}`}>            
                  {c.text}
                  <br/>
                  <button value="KR" onClick={languageChange}>한국어</button>
                  <button value="CHN" onClick={languageChange}>중국어</button>
                </Category>
            ))}
        </CategoriesBlock>
    );
};

export default Categories;