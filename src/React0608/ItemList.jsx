import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import axios from "axios";
import Item from './Item';

const ItemListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const ItemList = ({category, language}) => {
    console.log("ItemList: "+category+','+language)
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fecthData = async () => {
            setLoading(true);
            try{
                const query = category === "food" ? "food" : `${category}`;
                const language2 = language === "KR" ? "KR" : `${language}`;
                console.log(language2);
                var response;
                switch (query) {
                    case "food":
                        if(language2 === "KR"){
                        response = await axios.get(
                            "https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=cXgLGxZlC%2BV%2F06%2B8LDomc9m8TAR6VHymyLNbeFGuwGCIJcUfxAkVDHaPa3HQx5HeT0kWSkyFnh0JdmOV8rTiRg%3D%3D&pageNo=1&numOfRows=100&resultType=JSON"
                            );
                            setArticles(response.data.getFoodKr.item)
                            } else if(language2 === "CHN"){
                            response = await axios.get(
                                "https://apis.data.go.kr/6260000/FoodService/getFoodZhs?serviceKey=cXgLGxZlC%2BV%2F06%2B8LDomc9m8TAR6VHymyLNbeFGuwGCIJcUfxAkVDHaPa3HQx5HeT0kWSkyFnh0JdmOV8rTiRg%3D%3D&pageNo=1&numOfRows=100&resultType=JSON"
                            );  
                            setArticles(response.data.getFoodZhs.item)
                            }
                        break;
                    case "walking":
                        if(language2 === "KR"){
                        response = await axios.get(
                            "https://apis.data.go.kr/6260000/WalkingService/getWalkingKr?serviceKey=cXgLGxZlC%2BV%2F06%2B8LDomc9m8TAR6VHymyLNbeFGuwGCIJcUfxAkVDHaPa3HQx5HeT0kWSkyFnh0JdmOV8rTiRg%3D%3D&pageNo=1&numOfRows=100&resultType=JSON"
                        );
                        setArticles(response.data.getWalkingKr.item)
                        } else if(language2 === "CHN"){
                            response = await axios.get(
                                "https://apis.data.go.kr/6260000/WalkingService/getWalkingZhs?serviceKey=cXgLGxZlC%2BV%2F06%2B8LDomc9m8TAR6VHymyLNbeFGuwGCIJcUfxAkVDHaPa3HQx5HeT0kWSkyFnh0JdmOV8rTiRg%3D%3D&pageNo=1&numOfRows=100&resultType=JSON"
                            )
                        }
                        setArticles(response.data.getWalkingZhs.item)
                        break;
                    default:
                        alert("카테고리를 선택 해주세요");
                }
            } catch(e){
                console.log(e);
            }
            setLoading(false);
        };
        fecthData();
    }, [category,language]);

    if(loading){
        return <ItemListBlock>현재 로딩중.....잠시만 기다려주세요</ItemListBlock>
    }
    if(!articles){
        console.log("articles 응답이 없습니다.");
        return null;
    }

    return (
        <ItemListBlock>
        {articles.map((article) => (
            <Item key={article.MAIN_TITLE} article={article} />
        ))}
        </ItemListBlock>
    );
};

export default ItemList;