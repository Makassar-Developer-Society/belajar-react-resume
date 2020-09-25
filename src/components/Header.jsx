import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
    spacing: {
        marginBottom: theme.spacing(6)
    },
    description: {
        lineHeight: 2.3
    },
    title: {
        fontWeight: 'bold',
        marginBottom: theme.spacing(3)
    }
}));

export default function Album() {
    const classes = useStyles();

    return (
        <div className={classes.heroContent}>
            <Container maxWidth="md">
                <div className={classes.spacing}>
                    <Avatar alt="Remy Sharp" src={require("../assets/img/me.jpeg")} className={classes.large} />
                </div>
                <Typography variant="h3" align="left" className={classes.title} gutterBottom>
                    Hi, I'm SESAR
                </Typography>
                <Typography variant="h6" align="left" className={classes.description}>
                    I'm a <b>WEBSITE</b> and <b>MOBILE DEVELOPER</b> from <b>MAKASSAR</b>, Indonesia.
                    Passionate about what I do and always learning something new. <b>BIG MOTIVATION</b> and <b>HARD WORKING</b> is the key that I always believe it once I handle a project.
                </Typography>
            </Container>
        </div>
    );
}