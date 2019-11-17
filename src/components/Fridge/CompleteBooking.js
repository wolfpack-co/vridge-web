import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check';
import useAxios from 'axios-hooks';
import React from 'react';

const CompleteBooking = ({ product, refetch }) => {
    // actions the user can perform on foreign product
    const [, completeBooking] = useAxios(
        { url: `products/${product.id}/complete`, method: 'put' },
        { manual: true }
    );

    const handleCompletion = async event => {
        event.preventDefault();
        try {
            await completeBooking({ data: { }});
            refetch();
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <IconButton edge="end" aria-label="confirm" onClick={handleCompletion}>
            <CheckIcon />
        </IconButton>
    );
};

export default CompleteBooking;
