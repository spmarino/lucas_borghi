import React from "react"
import Item from "../Item/Item"
import "../ItemListContainer/ItemListContainer"

function ItemList ({products}) {
    return(
        <div className="ItemContainer">
            {products.map((product) => (
                <Item key={product.id} product={product} />
            ))}

        </div>
    )
}

export default ItemList