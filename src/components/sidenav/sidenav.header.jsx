import { MenuOutlined } from '@mui/icons-material';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import React from 'react';
import { getPaletteByMode } from '../../theme';

const SidenavHeader = ({ toggleSidebar }) => {
  const theme = useTheme();
  const colors = getPaletteByMode(theme.palette.mode);
  return (
    <Box
      display={`flex`}
      justifyContent='space-between'
      alignItems={`center`}
      p={2}
    >
      <Typography variant='h3' color={colors.gray[100]}>
        READMINI
      </Typography>
      <IconButton onClick={() => toggleSidebar()}>
        <MenuOutlined />
      </IconButton>
    </Box>
  );
};

export default SidenavHeader;
