import { Box, IconButton, InputBase, useTheme } from '@mui/material';
import React, { useContext } from 'react';
import { ColorModeContext, getPaletteByMode } from '../../theme';
import SearchIcon from '@mui/icons-material/Search';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const Toolbar = () => {
  const theme = useTheme();
  const colors = getPaletteByMode(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display='flex' justifyContent='space-between' p={2}>
      {/* SEARCH BAR */}
      <Box
        display='flex'
        backgroundColor={colors.primary[400]}
        borderRadius='3px'
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder='Search...' />
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* BUTTONS */}
      <Box display='flex' justifyContent='space-between'>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (
            <LightModeOutlinedIcon />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlineOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Toolbar;
