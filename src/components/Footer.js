import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';

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
        This is open source project. It uses Ethereum blockchain as a datasource. It does not collect any user's data nor analytics.
      </Typography>
      <Typography color='textSecondary' variant='subtitle2'>
        The best ways to leave a feedback are star the project or create an issue on <Link href='//github/pieman64/web3-domain-manager' target='_blank' rel='noopener'>GitHub</Link>.
      </Typography>
      <Toolbar>
        <Link href='//github/pieman64/web3-domain-manager' target='_blank' rel='noopener'>
          <IconButton color='default' aria-label='GitHub repo' component='span'>
            <GitHubIcon fontSize='default' />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
