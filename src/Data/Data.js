
const Data = prop => {
    const styleObj = {
        textDecoration: "underline",
        textAlign: "right",
        fontSize: "30px"      
    };
    return (
        <h3 style={styleObj}>Data: {prop.data}</h3>
    );
}

export default Data;