import React from 'react';
import { styled } from 'styled-components';

const ItemBlock = styled.div`
  display: flex;
  .thumbnail{
    margin-right: 1rem;
    img{
        display: block;
        width: 168px;
        height: 100px;
        object-fit: cover;
    }
  }
  .contents{
    h2{
        margin: 0;
        a{
            color: black;
        }
    }
    p{
        margin: 0;
        line-height: 1.5;
        margin-top: 0.5rem;
        white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

const Item = ({article}, props) => {
    var {MAIN_TITLE, MAIN_IMG_NORMAL, ITEMCNTNTS} = article;
    return (
        <ItemBlock>
            {MAIN_IMG_NORMAL && (
                <div className='thumbnail'>
                    <img src={MAIN_IMG_NORMAL} alt='thumbnail'/>
                </div>
            )}
            <div className='contents'>
                <h2>{MAIN_TITLE}</h2>
                <p>{ITEMCNTNTS}</p>
            </div>
        </ItemBlock>
    );
};

export default Item;