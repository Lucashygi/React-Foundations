import React from 'react';
import products from '../../data/Products';
import './ProductsTable.css';

const ProductsTable = () => {
    const productsList = products.map((product, i) => {
        return (
            <tr key={product.id} className={i % 2 === 0 ? 'even' : 'odd'}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        );
    });
    return (
        <div>
            <table className="TableProducts">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{productsList}</tbody>
            </table>
        </div>
    );
};

export default ProductsTable;
