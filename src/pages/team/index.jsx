import { Box, Divider, Typography, useTheme } from '@mui/material';
import React from 'react';
import { getPaletteByMode } from '../../theme';

const TeamPage = () => {
  const theme = useTheme();
  const colors = getPaletteByMode(theme.palette.mode);

  return (
    <Box>
      <Typography variant='h2' sx={{ m: 3, mb: 1 }} color={colors.gray[200]}>
        Team
      </Typography>
      <Divider />
    </Box>
  );
};

export default TeamPage;
