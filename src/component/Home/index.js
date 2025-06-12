import { Component } from "react";
import NavBar from '../NavBar'
import MoveItem from '../MoveItem'
import { HomeMainContainer, Head, HomeContainer, UnorderList } from './styledComponent'

class Home extends Component {
    state = {
        isViewClicked: false,
        customerData: [],
        movesData:[],
        viewMoreData:[],
        inventorData:[]
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

        this.setState({ customerData: data, movesData:updatedCustomerData })

    }

     onClickViewButton = (id) => {
  const {customerData} = this.state

  const filteredData = customerData.Customer_Estimate_Flow.filter((each) => (each.estimate_id === id))
       const updatedViewDetailsData = filteredData.map((each)=> ({
        oldFloorNo:each.old_floor_no,
        newFloorNo:each.new_floor_no,
        oldElevator:each.old_elevator_availability,
        newEvelator:each.new_elevator_availability,
       
        customItemName:each.items.customItems.items[0].item_name,
        customItemQuantity:each.items.customItems.items[0].item_qty,

        
     }))

     this.setState((prevSate) => ({isViewClicked:!prevSate.isViewClicked, viewMoreData:updatedViewDetailsData}))

    }
    render() {
        const { movesData } = this.state
       
        return (
            <HomeMainContainer>
                <NavBar />
                <HomeContainer>
                    <Head>My Moves</Head>
                    <UnorderList>
                        {movesData.map((each) => (<MoveItem details={each} key={each.estimateId} onClickViewButton={this.onClickViewButton}/>))}
                    </UnorderList>

                </HomeContainer>
            </HomeMainContainer>
        )
    }
}


export default Home