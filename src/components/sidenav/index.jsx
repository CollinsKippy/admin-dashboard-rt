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
import { Typography, useTheme } from '@mui/material';
import { getPaletteByMode } from '../../theme';
import SidenavHeader from './sidenav.header';
import { Link } from 'react-router-dom';

const Sidenav = ({ children }) => {
  const theme = useTheme();
  const colors = getPaletteByMode(theme.palette.mode);
  const { collapseSidebar, collapsed } = useProSidebar();

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
        {/* SIDENAV */}
        <SidenavHeader
          collapseSidebar={() => collapseSidebar()}
          collapsed={collapsed}
        />

        {/* MENU ITEMS */}
        <MenuItem icon={<HomeOutlinedIcon/>} component={<Link to='/' />}>
          <Typography>Dashboard</Typography>
        </MenuItem>
        <MenuItem icon={<PeopleOutlinedIcon/>} component={<Link to='/team' />}>
          <Typography>Team</Typography>
        </MenuItem>
        <SubMenu label='Charts'>
          <MenuItem> Pie chart </MenuItem>
          <MenuItem> Line chart </MenuItem>
          <MenuItem> Bar chart </MenuItem>
        </SubMenu>
        <MenuItem> Invoices </MenuItem>
        <MenuItem> Calendar </MenuItem>
        <MenuItem> Form </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default Sidenav;
