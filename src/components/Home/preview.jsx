import "./home.css"
import Laptop from "./laptopScreen";
function Preview() {
    return (
        <div className="preview">
            <Laptop image="./screenshot.png" />
            <Laptop image="./screenshot.png" />
            <div className="createView">

            <h2>Create in Chrome extension </h2>
            <h2>View in Chrome Platform</h2>
            </div>
        </div>
    )
}
export default Preview;