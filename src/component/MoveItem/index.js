import { FaArrowRightLong, FaCalendarDays } from "react-icons/fa6";
import { MdHome } from "react-icons/md";
import { GiPathDistance } from "react-icons/gi";
import { BiSolidError } from "react-icons/bi";
import { GrFormEdit } from "react-icons/gr";
import { FaCheckSquare, FaBoxes } from "react-icons/fa";
import { format } from 'date-fns'

import { MoveItemContainer, AddressContainer, FromAddress, FormAddressPara, FromHead, ArrowContainer, ToAddress, ToAddressPara, ToHead, RequestContainer, RequestHead, RequestPara, PropertyItemsContainer, PropertySizeContainer, IconContainer, PropertyPara, ItemContainer, ItemPara, DistanceContainer, DistancePara, CalenderContainer, CalenderPara, IsFlexiableContainer, IsFlexiablePara, ViewButton, QuoteButton, DisclaimerHead, DisclaimerContainer, DisclaimerPara } from './styledComponent'

const MoveItem = (props) => {
    const { details, onClickViewButton } = props
    const { distance,
        estimateId,
        movingFrom,
        movingTo,
        movingOn,
        propertySize,
        totalItems,
        id, } = details

    const onClickView = () => {
        onClickViewButton(estimateId)
    }
    return (
        <MoveItemContainer>
            <AddressContainer>
                <FromAddress>
                    <FromHead>From</FromHead>
                    <FormAddressPara>{movingFrom}</FormAddressPara>
                </FromAddress>
                <ArrowContainer>
                    <FaArrowRightLong color=" #f69789" size="20" margin-top="10px" />
                </ArrowContainer>
                <ToAddress>
                    <ToHead>To</ToHead>
                    <ToAddressPara>{movingTo}</ToAddressPara>
                </ToAddress>
                <RequestContainer>
                    <RequestHead>Request#</RequestHead>
                    <RequestPara>{estimateId}</RequestPara>
                </RequestContainer>
            </AddressContainer>
            <PropertyItemsContainer>
                <PropertySizeContainer>
                    <IconContainer><MdHome color=" #ed5643 " size="25" /></IconContainer>
                    <PropertyPara>{propertySize}</PropertyPara>
                </PropertySizeContainer>
                <ItemContainer>
                    <IconContainer><FaBoxes color=" #ed5643 " size="25" /></IconContainer>
                    <ItemPara>{totalItems}</ItemPara>
                </ItemContainer>
                <DistanceContainer>
                    <IconContainer><GiPathDistance color=" #ed5643 " size="25" /> </IconContainer>
                    <DistancePara>{distance}</DistancePara>
                </DistanceContainer>
                <CalenderContainer>
                    <IconContainer><FaCalendarDays color=" #ed5643 " size="25" /></IconContainer>
                    <CalenderPara>{format(new Date(movingOn), 'MMM d,yyyy hh:mm a')}</CalenderPara>
                    <IconContainer><GrFormEdit color=" #7b7b7c" size="25" /> </IconContainer>
                </CalenderContainer>
                <IsFlexiableContainer>
                    <IconContainer><FaCheckSquare color=" #ed5643 " size="18" /></IconContainer>
                    <IsFlexiablePara>is flexible</IsFlexiablePara>
                </IsFlexiableContainer>
                <ViewButton onClick={onClickView}>View more details</ViewButton>
                <QuoteButton>Quotes Awaiting</QuoteButton>
            </PropertyItemsContainer>
            <DisclaimerContainer>
                <IconContainer><BiSolidError color=" #ed5643 " size="20" /></IconContainer>
                <DisclaimerHead>Disclaimer: </DisclaimerHead>
                <DisclaimerPara>Please update your move date before two days od shifting</DisclaimerPara>
            </DisclaimerContainer>
        </MoveItemContainer>
    )
}

export default MoveItem