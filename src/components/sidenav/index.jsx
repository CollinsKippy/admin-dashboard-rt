import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import { useTheme } from '@mui/material';
import { getPaletteTokensByMode } from '../../theme';

const Sidenav = ({ children }) => {
  const theme = useTheme();
  const colors = getPaletteTokensByMode(theme.palette.mode);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [menuSelected, setMenuSelected] = useState('Dashboard');

  return (
    <Sidebar
      backgroundColor={colors.primary[500]}
      rootStyles={{
        backgroundColor: colors.primary[500],
      }}
    >
      <Menu
        menuItemStyles={{
          button: ({ level, active, disabled }) => {
            return {
              // color: disabled ? colors.primary[100] : colors.redAccent[100],
              '&:hover': {
                backgroundColor: colors.primary[700],
              },
              backgroundColor: active
                ? colors.primary[700]
                : colors.primary[500],
            };

            // if (level === 1) {
            //   return {
            //     // color: disabled ? colors.primary[100] : colors.redAccent[100],
            //     '&:hover': {
            //       backgroundColor: colors.primary[700],
            //     },
            //     backgroundColor: active
            //       ? colors.secondary[200]
            //       : colors.secondary[400],
            //   };
            // }
          },
        }}
      >
        <MenuItem> Dashboard </MenuItem>
        <MenuItem> Team </MenuItem>
        <SubMenu label='Charts'>
          <MenuItem> Pie charts </MenuItem>
          <MenuItem> Line charts </MenuItem>
        </SubMenu>
        <MenuItem> Invoices </MenuItem>
        <MenuItem> Form </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default Sidenav;
