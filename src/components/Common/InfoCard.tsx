import { useContext } from "react";
import mockData from "../../api/MockDataAPI"
import { AppContext } from "../../ValueProvider";

export default function InfoCard() {
    const {car} = useContext(AppContext)
    const carDetails = mockData.find(carObj => carObj.vehicleName === car);
    return(
        <div className="info">
            <span className="inline"><h2 className="marginAdjest">vehicle Name:</h2> <b>{car}</b></span>
            <span className="inline"><h3 className="marginAdjest">Dealer Name:</h3> <b>{carDetails.dealerName}</b></span>
            <span className="inline"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg><a href={`tel:${carDetails.dealerPhoneNumber}`} className="link"><h3 className="marginAdjest">{carDetails.dealerPhoneNumber}</h3></a></span>
        </div>
    )
}
