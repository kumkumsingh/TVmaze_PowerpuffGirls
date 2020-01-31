import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// defining styles when Material UI is used
const useStyles = makeStyles(theme => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '54.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
}));

// renders the list of shows in a Grid Format
export default function ShowListPage(props){
    const classes = useStyles();
    return(
        <React.Fragment>
            <Container className={classes.cardGrid} maxWidth='md'>
                <Grid container spacing={4}>
                    {props.shows && props.shows.map(show => (
                    <Grid item key={show.show.id} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            {show.show.image &&  <CardMedia
                                                   className={classes.cardMedia}
                                                   image={show.show.image.medium}
                                                   title='Show'
                            />}
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant='h6' component='h6'>
                                    Name : {show.show.name}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Link to={`/show/${show.show.id}`} variant='body2'>
                                    {'Watch Now'}
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
            </Container>
        </React.Fragment>
    )
}
