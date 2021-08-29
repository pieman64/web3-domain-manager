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
    marginTop: 20
  }
}));


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
        {/*<img src="https://cdn.unstoppabledomains.com/TVCzy2cvXpEFX9bVqFnVdi80Tqk=/images/template/deadhead-gallery-preview.png" alt="DeadHeads"></img>;*/}
      <img src={DHImage} alt="DeadHeads" width='70%'/>;
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
