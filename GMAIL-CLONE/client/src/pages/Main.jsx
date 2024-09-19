import Header from "../components/Header";
import {useState} from 'react';
import Sidebar from "../components/Sidebar";
const Main=()=>{
    const [opendrawer,setopendrawer]= useState(true);
    const toggleDrawer=()=>{
        setopendrawer(prevstate=>!prevstate);
    }
    return(
        <div><Header toggleDrawer={toggleDrawer}/>
        <Sidebar opendrawer={opendrawer}/>
        </div>
    )
}
export default Main;