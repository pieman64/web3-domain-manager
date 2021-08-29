import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import DHImage from './../images/dh_gallery.png';

const useStyles = makeStyles(() => ({
  footer: {
    alignItems: 'center',
    background: 'transparent',
    boxShadow: 'none'
  },
  info: {
    marginTop: 0
  }
}));


export default function Footer() {

  const classes = useStyles();

  return (
    <AppBar position='static' className={classes.footer}>
      <Typography color='textSecondary' variant='subtitle2' className={classes.info}>
        This DApp uses the Ethereum blockchain as a datasource. It does not collect any user data or analytics.  
      </Typography>
      <Typography color='textSecondary' variant='subtitle2'>
        The best way to leave feedback for this fork is to star the project or create an issue on <Link href='//github.com/pieman64/web3-domain-manager' target='_blank' rel='noopener'>GitHub</Link>.  
      </Typography>     
      <Typography color='textSecondary' variant='subtitle2' className={classes.info}>
        Click <Link href='//unstoppabledomains.com/deadhead-collection' target='_blank' rel='noopener'>here</Link> to create your own awesome DeadHeads Gallery or <Link href='//unstoppabledomains.com' target='_blank' rel='noopener'>search</Link> for additional domains.  
      </Typography>
      <Typography color='textSecondary' variant='subtitle2' className={classes.info}>
        Connect your wallet with the button top right to manage Unstoppable Domains on Ethereum.  
      </Typography>
      text: '\n'
      {/*<img src="https://cdn.unstoppabledomains.com/TVCzy2cvXpEFX9bVqFnVdi80Tqk=/images/template/deadhead-gallery-preview.png" alt="DeadHeads"></img>;*/}  
      <img src={DHImage} alt="DeadHeads" width='98%'/>;
    </AppBar>
  );
}
