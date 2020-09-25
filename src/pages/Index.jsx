import React from 'react';
import Header from '../components/Header';
import CssBaseline from '@material-ui/core/CssBaseline';
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Project from '../components/Project';
import Resume from '../components/Resume';
import Footer from '../components/Footer';

// const useStyles = makeStyles((theme) => ({
//     projectSpacing: {
//         paddingTop: theme.spacing(5),
//     },
//     projectDescriptionSpacing: {
//         paddingBottom: theme.spacing(5),
//     },
//     containerPadding: {
//         paddingTop: 30
//     }
// }));

export default function Album() {
    // const classes = useStyles();

    return (
        <div>
            <CssBaseline />
            <main>
                <Header />
                <Container maxWidth="md">
                    <Project />
                    <Resume />
                </Container>
            </main>
            <Footer />
        </div>
    );
}