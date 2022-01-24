import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import useStyles from './Styles';


const CartItem = ({ item, handleUpdateCartQty, handleRemoveFromCart }) => {
    const classes = useStyles();

    return (
        <Card>
            <CardMedia image={item.image.url} alt={item.name} className={classes.media} />
            <CardContent className={classes.cardContent}>
                <Typography variant='h5'>{item.name}</Typography>
                <Typography variant='h6'>{item.price.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button type='button' size='small' onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>
                        -
                    </Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type='button' size='small' onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>
                        +
                    </Button>
                </div>
                <Button type='button' color='secondary' variant='contained' onClick={() => handleRemoveFromCart(item.id)}>
                    Remove
                </Button>
            </CardActions>

        </Card>
    )
}

export default CartItem
