function Preview(props) {
    return (
        <div className="preview-div">
            {props.video ? (
                <video className="preview-video" src={video} controls />
            ) : (
                <img className="preview-image" src={"./tree.png"} alt={"image"} />
            )}
        </div>
    )
}
export default Preview;