import {AppBar,Toolbar} from'@mui/material';
import {Menu,Search,Tune,HelpOutlineOutlined,SettingsOutlined,AppsOutlined,AccountCircleOutlined} from '@mui/icons-material';
import {styled} from '@mui/system';
import { GmailLogo } from '../constants/Constant';
import {InputBase} from '@mui/material';
import Box from '@mui/system/Box';
const StyledAppBar =styled(AppBar)({
    background:'#F5F5F5',
    boxShadow:'none'

})
const StyledSearchBar=styled(Box)({
background:'#EAF1F8',
marginLeft:80,
borderRadius:5,
minWidth:690,
maxWidth:720,
height:48,
display:'flex',
alignItems:'center',
justifyContent:'space-between',
padding:'0 20px',
'& > div':{
width:'100%',
padding:'0 10px'
}

})
const OptionWrapper= styled(Box)({
    width:'100%',
    display:'flex',
    justifyContent:'end',
    '& > svg':{
        marginLeft:20
    }
})
const Header=({toggleDrawer})=>{
    return(
        
        <StyledAppBar position="static">
            <Toolbar>
                <Menu color='action' onClick={toggleDrawer}/>
                <img src={GmailLogo} alt='gmail' style={{width:110, margin:15}}/>
                <StyledSearchBar>
                    <Search color='action'/>
                    <InputBase
                            placeholder='Search Email'
                             />
                        <Tune color='action'/>
                </StyledSearchBar>
                <OptionWrapper>
                <HelpOutlineOutlined color='action'/>
                <SettingsOutlined color='action'/>
                <AppsOutlined color='action'/>
                <AccountCircleOutlined color='action'/>
                </OptionWrapper>
            </Toolbar>
        </StyledAppBar>
    )
}
export default Header;