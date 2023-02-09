import { MenuOutlined } from '@mui/icons-material';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import React from 'react';
import { getPaletteByMode } from '../../theme';
import Divider from '@mui/material/Divider';

const SidenavHeader = ({ collapsed, collapseSidebar }) => {
  const theme = useTheme();
  const colors = getPaletteByMode(theme.palette.mode);
  return (
    <Box>
      {/* APP NAME AND MENU BTN */}
      <Box
        display={`flex`}
        justifyContent='space-between'
        alignItems={`center`}
        p={2}
      >
        {!collapsed && (
          <Typography variant='h3' color={colors.gray[100]}>
            READMINI
          </Typography>
        )}

        <IconButton onClick={() => collapseSidebar()}>
          <MenuOutlined />
        </IconButton>
      </Box>

      {/* PROFILE IMAGE AND NAME */}
      {!collapsed && (
        <Box
          mb={1}
          p={2}
          display='flex'
          flexDirection={`column`}
          justifyContent='center'
        >
          <Box px={2} pb={1}>
            <img
              src='https://randomuser.me/api/portraits/men/91.jpg'
              width={80}
              height={80}
              style={{ cursor: 'pointer', borderRadius: 40 }}
              alt='Person Profile'
            />
          </Box>

          <Box px={2} pb={2}>
            <Typography
              variant='h5'
              fontWeight={'500'}
              color={colors.gray[200]}
            >
              Morris Kirry
            </Typography>
            <Typography variant='h6' color={colors.gray[400]}>
              Team Leader
            </Typography>
          </Box>
          <Divider />
        </Box>
      )}
    </Box>
  );
};

export default SidenavHeader;
