import { FaTruckArrowRight } from "react-icons/fa6";
import { BiSolidLogOutCircle } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { IoIosListBox } from "react-icons/io";

import { NavBarMainContainer, NavItemContaier, NavPara, NavLine, NavIcon, NavBarSmallMainContainer } from './styledComponent'


const NavBar = () => (
    <>
        <NavBarMainContainer>
            <NavItemContaier>
                <NavLine />
                <NavIcon>
                    <FaTruckArrowRight size="30" />
                </NavIcon>

                <NavPara>MY MOVES</NavPara>

            </NavItemContaier>
            <NavItemContaier>
                <NavIcon><FaUser color="#6c6c6c" size="30" />
                </NavIcon>

                <NavPara>MY PROFILE</NavPara>

            </NavItemContaier>
            <NavItemContaier>
                <NavIcon> <IoIosListBox color="#6c6c6c" size="30" /></NavIcon>

                <NavPara>GET QUOTE</NavPara>

            </NavItemContaier>
            <NavItemContaier>
                <NavIcon>
                    <BiSolidLogOutCircle color="#6c6c6c" size="30" />
                </NavIcon>
                <NavPara>LOGOUT</NavPara>

            </NavItemContaier>
        </NavBarMainContainer>
        <NavBarSmallMainContainer>
            <NavItemContaier>
                <NavLine />
                <NavIcon>
                    <FaTruckArrowRight size="30" />
                </NavIcon>

                <NavPara>MY MOVES</NavPara>

            </NavItemContaier>
            <NavItemContaier>
                <NavIcon><FaUser color="#6c6c6c" size="30" />
                </NavIcon>

                <NavPara>MY PROFILE</NavPara>

            </NavItemContaier>
            <NavItemContaier>
                <NavIcon> <IoIosListBox color="#6c6c6c" size="30" /></NavIcon>

                <NavPara>GET QUOTE</NavPara>

            </NavItemContaier>
            <NavItemContaier>
                <NavIcon>
                    <BiSolidLogOutCircle color="#6c6c6c" size="30" />
                </NavIcon>
                <NavPara>LOGOUT</NavPara>

            </NavItemContaier>
        </NavBarSmallMainContainer>

    </>
)

export default NavBar