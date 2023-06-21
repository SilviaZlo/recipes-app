const Pic = ({altText, imageSource}) => {

    console.log('Picture is rendering!');

    return (
        <li className="photoContainer">
            <img src={imageSource} alt={altText} />
        </li>
    )
}

export default Pic