import React, { useState } from 'react';
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from 'react-pro-sidebar';
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
import { getPaletteByMode } from '../../theme';
import SidenavHeader from './sidenav.header';

const Sidenav = ({ children }) => {
  const theme = useTheme();
  const colors = getPaletteByMode(theme.palette.mode);
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();

  return (
    <Sidebar backgroundColor={colors.primary[600]} rootStyles={{}}>
      <Menu
        menuItemStyles={{
          button: ({ level, active, disabled }) => {
            if (level === 0) {
              return {
                backgroundColor: active
                  ? colors.primary[700]
                  : colors.primary[600],
                '&:hover': {
                  backgroundColor: colors.primary[400],
                },
              };
            } else {
              return {
                backgroundColor: active
                  ? colors.primary[700]
                  : colors.primary[500],
                '&:hover': {
                  backgroundColor: colors.primary[400],
                },
              };
            }
          },
        }}
      >
        <SidenavHeader toggleSidebar={toggleSidebar} />
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
