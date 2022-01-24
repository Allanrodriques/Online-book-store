import React from 'react';
import { makeStyles, Container, Typography, Grid, CardActionArea, TextField, Button, Card, CardContent } from '@material-ui/core';
import useStyles from './Styles';
import { Link } from 'react-router-dom';


const Checkout = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.toolbar} />
            <Container className={classes.container} align="center">
                <Typography variant='h5' color='textPrimary' gutterBottom>Checkout</Typography>
                <Card style={{ maxWidth: 400, padding: "20px 5px", margin: "0 auto" }}>
                    <Grid container spacing={1} >
                        <Grid xs={12} sm={12} item>
                            <TextField placeholder="Enter Card Number" label="Card Number" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid xs={12} sm={12} item>
                            <Typography >Expiry date</Typography>
                        </Grid>
                        <Grid xs={12} sm={6} item>
                            <TextField placeholder="" type="number" label="DD" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField placeholder="" type="number" label="MM" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid xs={12} sm={6} item>
                            <Typography >CVV</Typography>
                        </Grid>
                        <Grid xs={12} sm={6} item>
                            <Typography >Zipcode</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField placeholder="CVV" label="CVV" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField placeholder="Zipcode" label="Zipcode" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button component={Link} to="/checkout" type="submit" variant="contained" color="primary" fullWidth>Back</Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                        </Grid>

                    </Grid>
                </Card>

            </Container>
        </>


    )
}
export default Checkout
