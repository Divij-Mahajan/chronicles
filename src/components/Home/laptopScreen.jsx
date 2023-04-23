import "./home.css"
function Laptop(props) {
    return (
        <div className="laptopBody">

        <div className="laptopScreen">
            
            <img src={`${props.image}`} alt="image"></img>
        </div>
        <span className="line"></span>
        </div>
    )
}
export default Laptop;