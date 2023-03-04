
const Bio = ({name, lastName}) => {
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
        <div className="bio">
            <h2 style={styleObj}>Name: {name}, Last name: {lastName}</h2>
        </div>
    );
}

export { Bio };