import { Drawer } from "@mui/material";
import SideBarContent from "./SideBarContent";
const Sidebar=({opendrawer})=>{
    return(
        <Drawer
        anchor='left'
        open={opendrawer}
        hideBackdrop={true}
        ModalProps={
            {
                keepMounted:true
            }
        }
        variant="persistent"
        sx={
            {
                '& .MuiDrawer-paper':{
                    marginTop:'64px',
                    width:250,
                    background:'#f5f5f5',
                    borderRight:'none',
                    height:'Calc(100vh-64px)'
                }
            }
        }
        >
            <SideBarContent/>
        </Drawer>
    )
}
export default Sidebar;