import { Component } from "react";
import NavBar from '../NavBar'
import MoveItem from '../MoveItem'

import { HomeMainContainer, Head, HomeContainer, UnorderList } from './styledComponent'

class Home extends Component {
    state = {

        customerData: [],
        movesData: [],
        viewMoreData: [],
        inventorData: []
    }
    componentDidMount() {
        this.getMovesData()
    }

    getMovesData = async () => {
        const url = "https://apis2.ccbp.in/packers-and-movers/packers-and-movers-details"

        const options = {
            method: "GET"
        }

        const response = await fetch(url, options)
        const data = await response.json()
        const updatedCustomerData = data.Customer_Estimate_Flow.map((each) => ({
            distance: each.distance,
            estimateId: each.estimate_id,
            movingFrom: each.moving_from,
            movingTo: each.moving_to,
            movingOn: each.moving_on,
            propertySize: each.property_size,
            totalItems: each.total_items,
            id: each.user_id,

        }))

        this.setState({ customerData: data, movesData: updatedCustomerData })
    }

    onClickViewButton = (id) => {
        const { customerData } = this.state

        const isViewDetailsClickked = customerData.Customer_Estimate_Flow.filter((each) => (each.estimate_id === id))

        const updatedViewDetailsData = isViewDetailsClickked.map((each) => ({
            oldFloorNo: each.old_floor_no,
            newFloorNo: each.new_floor_no,
            oldElevator: each.old_elevator_availability,
            newEvelator: each.new_elevator_availability,
            oldHouseInfo: each.old_house_additional_info,
            estimateId: each.estimate_id,
            customData: each.items.customItems,

        }))



        const updatedInventoryData = isViewDetailsClickked[0].items.inventory.map((each) => ({
            category: each.category,
            displayName: each.displayName,
            id: each.id,
        }))
        this.setState({ viewMoreData: updatedViewDetailsData, inventorData: updatedInventoryData })
    }

    render() {
        const { movesData, viewMoreData, inventorData } = this.state

        return (
            <HomeMainContainer>
                <NavBar />
                <HomeContainer>
                    <Head>My Moves</Head>
                    <UnorderList>
                        {movesData.map((each) => (<MoveItem details={each} key={each.estimateId} viewMoreData={viewMoreData} inventorData={inventorData} onClickViewButton={this.onClickViewButton} />))}
                    </UnorderList>

                </HomeContainer>
            </HomeMainContainer>
        )
    }
}


export default Home