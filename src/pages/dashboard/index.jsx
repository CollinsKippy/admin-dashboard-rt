import { Box, Divider, Typography, useTheme } from '@mui/material';
import React from 'react';
import { getPaletteByMode } from '../../theme';

const DashboardPage = () => {
  const theme = useTheme();
  const colors = getPaletteByMode(theme.palette.mode);

  return (
    <Box>
      <Typography variant='h2' sx={{ m: 2 }} color={colors.gray[200]}>
        Dashboard Page
      </Typography>
      <Divider />
    </Box>
  );
};

export default DashboardPage;
