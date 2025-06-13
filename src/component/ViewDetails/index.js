import CategoryItem from '../CategoryItem'
import { MainContainer, AdditionalContainer, AdditionalMainContainer, AdditionalHead, AditionalButton, AdditionalPara, ExistingHouseHead, HouseMainContainer, HouseContainer, HouseButton, HouseHead, HouseDetailsContainer, HouseDetailsInnerContainer, FromContainer, FromHead, FromPara, ElevatorContainer, ElevatorHead, ElevatorPara, DistanceContainer, DistanceHead, DistancePara, InventoryButton, InventoryMainContainer, InventryContainer, InventoryHead, UnorderCategoryList } from './styledComponent'

const ViewDetails = (props) => {

    const { details, inventorData } = props
    const { oldFloorNo,
        newFloorNo,
        oldElevator,
        newEvelator,
        oldHouseInfo,
    } = details[0]



    return (
        <MainContainer>
            <AdditionalMainContainer>
                <AdditionalContainer>
                    <AdditionalHead>Additional Information</AdditionalHead>
                    <AditionalButton>Edit Additional Info</AditionalButton>
                </AdditionalContainer>
                <AdditionalPara>{oldHouseInfo}</AdditionalPara>
            </AdditionalMainContainer>
            <HouseMainContainer>
                <HouseContainer>
                    <HouseHead>House Details</HouseHead>
                    <HouseButton>Edit House Details</HouseButton>

                </HouseContainer>
                <HouseDetailsContainer>
                    <ExistingHouseHead>Existing House Details</ExistingHouseHead>
                    <HouseDetailsInnerContainer>
                        <FromContainer>
                            <FromHead>Floor No.</FromHead>
                            <FromPara>{oldFloorNo}</FromPara>
                        </FromContainer>
                        <ElevatorContainer>
                            <ElevatorHead>
                                Elevator Available.
                            </ElevatorHead>
                            <ElevatorPara>{oldElevator}</ElevatorPara>
                        </ElevatorContainer>
                        <DistanceContainer>
                            <DistanceHead>
                                Distance from Elevator / Staircase to truck
                            </DistanceHead>
                            <DistancePara></DistancePara>
                        </DistanceContainer>
                    </HouseDetailsInnerContainer>
                </HouseDetailsContainer>
                <HouseDetailsContainer>
                    <ExistingHouseHead>New House Details</ExistingHouseHead>
                    <HouseDetailsInnerContainer>
                        <FromContainer>
                            <FromHead>Floor No.</FromHead>
                            <FromPara>{newFloorNo}</FromPara>
                        </FromContainer>
                        <ElevatorContainer>
                            <ElevatorHead>
                                Elevator Available.
                            </ElevatorHead>
                            <ElevatorPara>{newEvelator}</ElevatorPara>
                        </ElevatorContainer>
                        <DistanceContainer>
                            <DistanceHead>
                                Distance from Elevator / Staircase to truck
                            </DistanceHead>
                            <DistancePara></DistancePara>
                        </DistanceContainer>
                    </HouseDetailsInnerContainer>
                </HouseDetailsContainer>
            </HouseMainContainer>
            <InventoryMainContainer>
                <InventryContainer>
                    <InventoryHead>Inventory Details</InventoryHead>
                    <InventoryButton>Edit Inventory</InventoryButton>
                </InventryContainer>
                <UnorderCategoryList>

                    {inventorData.map((each) => (

                        <CategoryItem key={each.id} details={each} />
                    ))}



                </UnorderCategoryList>

            </InventoryMainContainer>
        </MainContainer>
    )

}

export default ViewDetails