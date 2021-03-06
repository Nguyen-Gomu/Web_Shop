import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  footer: { 
    backgroundColor: theme.palette.action.disabled,
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(1),
    },
  },
  
}));

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
  },
  {
    title: 'Follow us',
    description: ['Facebook', 'Instagram', 'Twitter'],
  }//,
  // {
  //   title: 'Legal',
  //   description: ['Privacy policy', 'Terms of use'],
  // },
];

export default function Footer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" component="footer" className={classes.footer}>
        <Grid container justify="space-evenly" >
          {footers.map((footer) => (
            <Grid item  key={footer.title}>
              <Typography variant="h6" color="textPrimary"  gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          {/* <Copyright /> */}
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}