
const Data = ({data}) => {
    const styleObj = {
        textDecoration: "underline",
        textAlign: "right",
        fontSize: "30px"      
    };
    return (
        <h3 style={styleObj}>Data: {data}</h3>
    );
}

export { Data };