// Sidebar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

interface SidebarProps {
  menus: { name: string, path: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ menus }) => {
  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        {menus.map((menu) => (
          <ListItem button key={menu.name} component={NavLink} to={menu.path}>
            <ListItemText primary={menu.name} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
