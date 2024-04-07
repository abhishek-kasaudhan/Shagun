function ProductInfo(props) {
    console.log("productInfo", props.Cart)
    return (
        <div>
            <h1>Product Info</h1>
            {props.Cart.map((item, index) => (
                <div key={index}>
                    <h2>{item.Product}</h2>
                    <p>Quantity: {item.Quantity}</p>
                    <p>Price: {item.price}</p>
                </div>
            ))}
        </div>
    )
}
export default ProductInfo;