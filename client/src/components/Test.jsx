import React from 'react';
import './menuItemStyle.css';


import { QUERY_MENUITEMS } from '../utils/queries';
import { useMutation } from '@apollo/client';
import { DELETE_MENUITEM } from '../utils/mutations'

const MenuItemCard = ({ id, name, description, price, imageUrl, addToCart }) => {

    const [deleteMenuItem] = useMutation(DELETE_MENUITEM, {
        refetchQueries: [
            QUERY_MENUITEMS,
            'GetMenuItems'
        ],
    })
    const handleAddToCart = () => {
        addToCart({ name, price });
    };

    const handleDelete = async () => {
        const response = await deleteMenuItem({ variables: { id: id } });
        return response;
    };

    return (
        <div className="card" style={{ width: '180px' }}>
            <img id="foodPicture" src={imageUrl} alt={name}/>
            <div style={{ height: '140px', overflow: 'hidden' }}>
                <div className="card-content">
                    <h5>{name}</h5>
                    <p>{description}</p>
                    <p>${price}</p>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* DELETE BUTTON */}
                <button className="delete-button" onClick={() => handleDelete(id)}>
                    Delete
                </button>
                <button onClick={handleAddToCart}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default MenuItemCard;