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
                <Typography variant='h5' color='textPrimary' gutterBottom> Shipping Form</Typography>
                <Card style={{ maxWidth: 600, padding: "20px 5px", margin: "0 auto" }}>
                    <Grid container spacing={1} >
                        <Grid xs={12} sm={6} item>
                            <TextField placeholder="Enter first name" label="First Name" variant="standard" fullWidth required />
                        </Grid>
                        <Grid xs={12} sm={6} item>
                            <TextField placeholder="Enter last name" label="Last Name" variant="standard" fullWidth required />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField type="email" placeholder="Enter email" label="Email" variant="standard" fullWidth required />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField type="number" placeholder="Enter Address" label="Address" variant="standard" fullWidth required />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField type="number" placeholder="Enter Country" label="Country" variant="standard" fullWidth required />
                        </Grid>
                        <Grid xs={12} sm={4} item>
                            <TextField placeholder="Zip" label="Zipcode" variant="standard" fullWidth required />
                        </Grid>
                        <Grid xs={12} sm={4} item>
                            <TextField placeholder="City" label="City" variant="standard" fullWidth required />
                        </Grid>
                        <Grid xs={12} sm={4} item>
                            <TextField placeholder="State" label="State" variant="standard" fullWidth required />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button component={Link} to="/cart" variant="contained" color="primary" fullWidth>Back</Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button component={Link} to="/Payment" type="submit" variant="contained" color="primary" fullWidth>Continue</Button>
                        </Grid>


                    </Grid>
                </Card>

            </Container>
        </>

    )
}
export default Checkout
