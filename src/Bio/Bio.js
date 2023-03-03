// import Header from './Header/'

import { hover } from "@testing-library/user-event/dist/hover";

const Bio = props => {
    const styleObj = {
       fontSize : "50px",
       margin : "0",
       color: "green",
    //    transition: "color 0.3s",
    //    ":hover": {
    //         color: "blue",
    //         cursor: "pointer",
    //    },     
    };
    return (
        <h2 style={styleObj}>Name: {props.name}, Last name: {props.lastName}</h2>
    );
}

export default Bio;