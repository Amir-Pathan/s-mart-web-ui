
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { constant } from '../constant';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import BasicModal from '../lib/modal';
import Login from '../login';


let drawerWidth=250


function TopAppBar(){


  const [drawerOpen,setDrawerOpen] = useState(false)

  const [openModal,setOpenModal] = useState(false)

  let window= document.window;

  const container = window !== undefined ? () => window().document.body : undefined;

  return(
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'white',color:'black',marginLeft:{xs:'0px'}}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2,display:{md:'none'} }}
            onClick={()=>setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,marginLeft:{xs:'0px',md:'250px'} }}>
            {constant.appName}
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AddShoppingCartIcon/>
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={()=>setOpenModal(true)}
          >
            <AccountCircleIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer 
      anchor={'left'}
      variant={'temporary'}
      
            open={drawerOpen}
            
            onClose={()=>{

              setDrawerOpen(false)

            }}
             ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          >
            <Box
           sx={{ width: drawerWidth }}
            role="presentation"
           // onClick={ ()=>}
           // onKeyDown={toggleDrawer(anchor, false)}
            >

            </Box>
          </Drawer>
          <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open={true}
        >
           <Box
           sx={{ width: drawerWidth }}
            role="presentation"
           // onClick={ ()=>}
           // onKeyDown={toggleDrawer(anchor, false)}
            >

            </Box>
        </Drawer>
    </Box>
    <BasicModal 
    open={openModal}
    handleModal={(open)=>setOpenModal(open)}
    >
      <Login/>
    </BasicModal>
    </>
  )

}

export default TopAppBar