import {Box,Button,styled,List,ListItem} from '@mui/material';
import { CreateOutlined} from '@mui/icons-material';
import { SideBar_Data } from '../config/SideBar.config';
import ComposeMail from './ComposeMail';
import { useState } from 'react';
const SideBarContent=()=>{
    const [openDialog,setOpenDialog]=useState(false);
    const oncomposemail=()=>{
        setOpenDialog(true);
    }
     const ComposeButton=styled(Button)({
        background:'#c2e7ff',
        color:'#001d35',
        padding:15,
        borderRadius:16,
        minWidth:140,
        textTransform:'none'
     })
     const Container=styled(Box)({
        padding:8,
        '&> ul':{
            padding:'10px 0 0 5px',
            fontSize:14,
            fontWeight:500,
            cursor:'pointer'
        },
        '& > ul > li> svg':{
            marginRight:20
        }
     })
return(
   <Container>
    <ComposeButton onClick={()=>oncomposemail()}>
        <CreateOutlined/>
        Compose
    </ComposeButton>
    <List>
        {
        SideBar_Data.map(data=>(
            <ListItem  >
             <data.icon fontSize='small'/>   {data.title}
            </ListItem>
        ))
    }
    </List>
    <ComposeMail openDialog={openDialog} setopenDialog={setOpenDialog}/>
   </Container> 
)
}
export default SideBarContent;