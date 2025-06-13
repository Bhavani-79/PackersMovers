import styled from "styled-components";


export const NavBarMainContainer = styled.div`
 display:flex;
 flex-direction:column;
 width:100%;
 max-width:200px;
 padding:10px;
 @media screen and (max-width:786px){
 display:none;
 }
`
export const NavItemContaier = styled.button`
 display:flex;
 flex-direction:row;
 border:none;
 cursor:pointer;
 outline:none;
 background-color:transparent;
`
export const NavPara = styled.p`
font-size:20px;
font-family:"roboto";
color: #000000;
 @media screen and (max-width:786px){
  font-size:15px;
  margin-top:20px;
 }

`
export const NavLine = styled.hr`
 
 border: 3px solid #ef5244;
 height:30px;
 margin-right:3px;
 margin-left:0px;
 @media screen and (max-width:786px){
   display:none;
 }

`

export const NavIcon  = styled.div`
margin-top:15px;
margin-right:10px;

@media screen and (max-width:786px){
margin-right:2px;
}

`

export const NavBarSmallMainContainer =  styled.div`
 display:flex;
 flex-direction:row;
 width:100%;
 padding:10px;
 justify-content:flex-end;
 @media screen and (min-width:786px){
 display:none;
 }`