import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from './Styles';


// const products = [
//     { id: 1, name: 'Ikigai', description: 'The Japanese Secret to a Long and Happy Life', price: '$5', image: 'https://images-na.ssl-images-amazon.com/images/I/41SG4SO4T9L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg' },
//     { id: 2, name: 'Limitless', description: 'Upgrade your brain, learn anything', price: '$5', image: 'https://images-na.ssl-images-amazon.com/images/I/41ceuviXeWL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg' }

// ]

const Products = ({ products, onAddtoCart }) => {
    const classes = useStyles();
    if (!products.length) return <p>Loading...</p>;

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddtoCart={onAddtoCart} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )


}

export default Products;