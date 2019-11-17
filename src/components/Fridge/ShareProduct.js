import IconButton from '@material-ui/core/IconButton';
import UndoIcon from '@material-ui/icons/Undo';
import ShareIcon from '@material-ui/icons/Share';
import useAxios from 'axios-hooks';
import React from 'react';

const ShareProduct = ({ product, refetch }) => {
    // actions the user can perform on foreign product
    const [, toggleSharing] = useAxios(
        { url: `products/${product.id}/${!product.shared}`, method: 'put' },
        { manual: true }
    );

    const handleShareToggling = async event => {
        event.preventDefault();
        try {
            await toggleSharing({ data: {} });
            refetch();
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <IconButton edge="end" aria-label="confirm" onClick={handleShareToggling}>
            {product.shared ? <UndoIcon /> : <ShareIcon />}
        </IconButton>
    );
};

export default ShareProduct;
