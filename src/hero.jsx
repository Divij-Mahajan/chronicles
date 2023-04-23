import Preview from "./components/Home/preview";

function Hero(props) {
    return (
        <div className="hero">
            <h1>{props.h1}</h1>
            <h2>{props.h2}</h2>
            <img className="preview-image" src={"./tree.png"} alt={"image"} />
        </div>
    )
}
export default Hero;