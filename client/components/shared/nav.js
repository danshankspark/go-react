import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const LeNavBar = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <AppBar
      title="Title"
      iconElementLeft={<IconButton><NavigationClose /></IconButton>}
      iconElementRight={
        <IconMenu
          iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
          }
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem primaryText="Refresh" />
          <MenuItem primaryText="Help" />
          <MenuItem primaryText="Sign out" />
        </IconMenu>
      }
    />
  </MuiThemeProvider>
);

export default LeNavBar;
