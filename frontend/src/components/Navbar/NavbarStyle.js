import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
// colors
import { grey } from 'material-ui-colors';

const useStyles = makeStyles((theme) => ({

  test:{
    position: 'relative',
    display: 'flex',
    justifyContent:'space-between',
    backgroundColor:grey[200],
    color:grey[800],
    [theme.breakpoints.up('sm')]: {
      position: 'relative',
      display: 'flex',
      justifyContent:'space-between',
    },
  },
  menuButton: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(2),
      display:'none',
    },
  },


  title: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  navIcons:{
    display: 'flex',
    justifyContent: 'flex-end',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    display: 'none',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

  list: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
        display: 'block',
        marginBottom: "0",
        padding: "0",
        marginTop: "0",    
    },
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto",
    
  },
  block: {
    color: "inherit",
    padding: "2px",
    marginLeft:"50px",
    textTransform: "uppercase",
    textDecoration: "none",
    position: "relative",
    display: "block",
    fontWeight: "700",
    fontSize: "12px",
    '&:hover': {
        color: "red",
    },
  }
}));


