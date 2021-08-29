import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import DHImage from './../images/dh_gallery.png';

const useStyles = makeStyles(() => ({
  footer: {
    alignItems: 'center',
    background: 'transparent',
    boxShadow: 'none'
  },
  info: {
    marginTop: 20
  }
}));
/*
var win = window,
  doc = document,
  docElem = doc.documentElement,
  body = doc.getElementsByTagName('body')[0],
  x = win.innerWidth || docElem.clientWidth || body.clientWidth,
  y = win.innerHeight|| docElem.clientHeight|| body.clientHeight;

//alert(x + ' × ' + y);
if (x > 720) {
  alert('Large screen of ' + x + ' pixels wide'); 
  //<img src={DHImage} alt="DeadHeads"/>
} else {
  alert('Small screen of ' + x + ' pixels wide'); 
  //<img src={DHImage} alt="DeadHeads"/>   
}
*/


export default function Footer() {

  const classes = useStyles();

  return (
    <AppBar position='static' className={classes.footer}>
      <Typography color='textSecondary' variant='subtitle2' className={classes.info}>
        This open source project uses the Ethereum blockchain as a datasource. It does not collect any user data or analytics.
      </Typography>
      <Typography color='textSecondary' variant='subtitle2'>
        The best way to leave feedback for this fork is to star the project or create an issue on <Link href='//github.com/pieman64/web3-domain-manager' target='_blank' rel='noopener'>GitHub</Link>.
      </Typography>
        text: '\n'
      {/*
      <Toolbar>
        <Link href='//github.com/pieman64/web3-domain-manager' target='_blank' rel='noopener'>
          <IconButton color='default' aria-label='GitHub repo' component='span'>
            <GitHubIcon fontSize='default' />
          </IconButton>
        </Link>
      </Toolbar>
      */}
      <img src={DHImage} alt="DeadHeads"/>;
      <Typography color='textSecondary' variant='subtitle2' className={classes.info}>
        Click <Link href='//unstoppabledomains.com/deadhead-collection' target='_blank' rel='noopener'>here</Link> to create your own awesome DeadHeads Gallery.
      </Typography>
      <Typography color='textSecondary' variant='subtitle2' className={classes.info}>
        Search for <Link href='//unstoppabledomains.com' target='_blank' rel='noopener'>additional domains</Link> with your favorite TLD
      </Typography>
      <Typography color='textSecondary' variant='subtitle2' className={classes.info}>
        Connect your wallet with the button top right to manage an Unstoppable Domain on Ethereum.
      </Typography>
    </AppBar>
  );
}
