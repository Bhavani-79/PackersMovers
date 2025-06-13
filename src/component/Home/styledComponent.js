import styled from "styled-components";

export const HomeMainContainer = styled.div`
 display:flex;
 flex-direction:row;
 @media screen and (max-width:786px){
 display:flex;
 flex-direction:column;

 }
`
export const HomeContainer = styled.div`
 display:flex;
 flex-direction:column;
 width:100%;
 max-width:80vw;
   margin-top:20px;

   @media screen and (max-width:786px){
    max-width:100vw;
   }
`
export const Head = styled.h1`
  color: #000000;

  font-size:20px;
  margin-left:40px;

  margin-bottom:0px;
`
export const UnorderList = styled.ul`
display:flex;
flex-direction:column;
width:100%;
margin-left:0px;
margin-top:5px;
`