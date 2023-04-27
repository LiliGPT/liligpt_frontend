import React from 'react';
import { AppBar, Container, Icon, IconButton, Toolbar, Typography } from "@mui/material"
import { Link } from 'react-router-dom';
import BackIcon from '@mui/icons-material/ArrowBack';
import { routeMap } from '../../router';

type Props = {
  children: JSX.Element,
};

export const BaseCommandPage = ({ children }: Props): JSX.Element => {
  return (
    <Container>
      <NavbarWithBackButton />
      {children}
    </Container>
  );
};


const NavbarWithBackButton = () => {
  return (
    <AppBar position="static" className="mb-4">
      <Toolbar variant="dense" className="bg-gray-900">
        <Link to={routeMap.vscodeHome} className="mr-2">
          <BackIcon />
        </Link>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Create package.json command
        </Typography>
      </Toolbar>
    </AppBar>
  );
};