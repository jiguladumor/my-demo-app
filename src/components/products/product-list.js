import React, {useState} from 'react';

function ProductList() {
    const [cart, setCart] = useState([])
    const [products, setProducts] = useState(items)

    const addToCart = (product) => {
        // add to cart
        const array3 = [...cart, ...[product]];
        setCart(array3);

        //remove from product list
        setProducts(products.filter((f) => f.id !== product.id));
    }

    const removeFromCart = (cartProduct) => {
        // add to product list
        const array3 = [...products, ...[cartProduct]];
        setProducts(array3);

        // remove from cart
        setCart(cart.filter((f) => f.id !== cartProduct.id));
    }

    const displayProduct = (product) => {
        return (
            <div key={product.id} className="card" style={{"width": "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">${product.price}</li>
                </ul>
                <div className="card-body">
                    <button className="btn btn-success me-5" type="button" onClick={() => addToCart(product)}>Add To
                        Cart
                    </button>
                </div>
            </div>
        )
    }

    const displayCart = (cartProduct) => {
        return (
            <div key={cartProduct.id} className="card" style={{"width": "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{cartProduct.name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">${cartProduct.price}</li>
                </ul>
                <div className="card-body">
                    <button className="btn btn-danger" type="button"
                            onClick={() => removeFromCart(cartProduct)}>Remove
                    </button>
                </div>
            </div>
        )
    }

    const displayProductList = () => {
        return (
            products.map((product) => {
                return displayProduct(product)
            })
        )
    }

    const displayCartProductList = () => {
        return (
            cart.map((product) => {
                return displayCart(product)
            })
        )
    }

    return (
        <>
            {displayProductList()}
            <hr/>
            {displayCartProductList()}
        </>
    );
}

export default ProductList;

const items = [
    {
        id: '1',
        name: 'clock',
        price: 1400,
    },
    {
        id: '2',
        name: 'i-phone',
        price: 150000,

    },
    {
        id: '3',
        name: 'cable',
        price: 1400,

    },
    {
        id: '4',
        name: 'cover',
        price: 200,
    }
]
