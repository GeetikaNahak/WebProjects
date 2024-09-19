import { Dialog, Typography, styled, Box, InputBase, TextField, Button } from "@mui/material";
import { Close, DeleteOutline } from "@mui/icons-material";
import { useState } from "react";
const dialogStyle = {
    height: '90%',
    width: '80%',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: '10px 10px 0 0',
    boxShadow: 'none'
};

const Header = styled(Box)({
    display: 'flex',
    background: '#f2f6fc',
    justifyContent: 'space-between',
    padding: '10px 15px',
    '& > p': {
        fontSize: 14,
        fontWeight: 600
    }
});

const RecipientWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    padding: '0 15px',
    '& > input': {
        fontSize: 14,
        borderBottom: '1px solid #f5f5f5',
        marginTop: 10
    }
});

const Footer = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 15px ',
});

const SendButton = styled(Button)({
    background: '#0b57d0',
    color: '#fff',
    width: '100px',
    borderRadius: '18px',
    textTransform: 'none',
    textAlign: 'center'
});
const ComposeMail = ({ openDialog, setopenDialog }) => {
    const [data,setData]=useState({});
    const config = {
        Host: "smtp.elasticemail.com",
        Username: process.env.REACT_APP_USERNAME,
        Password: process.env.REACT_APP_PASSWORD,
        port: 2525,
    };

    const closeComposeMail = () => {
        setopenDialog(false);
    }

    const sendMail = () => {
        if (window.Email) {
            window.Email.send({
                ...config,
                To: data.to,
                From: "geetikanahak@gmail.com",
                Subject: data.subject,
                Body: data.body
            }).then(
                message => alert(message)
            );
        }
        setopenDialog(false);
    }


    

const customOnChange = (e) => {
  const newChar = e.target.value; // Get the last entered character
 
  setData({ ...data, [e.target.name]:newChar }); // Update state after a condition (e.g., if (currentChar.length === 10))
};

      
    return (
        <Dialog
            open={openDialog}
            PaperProps={{ sx: dialogStyle }}
        >
            <Header>
                <Typography>New Message</Typography>
                <Close fontSize="small" onClick={closeComposeMail} />
            </Header>
            <RecipientWrapper>
                <InputBase
                    placeholder="Recipients"
                    name="to"
                    value={data.to || ""}
                    onChange={(e)=>customOnChange(e)}
                    inputMode="text"
                />
                <InputBase
                    placeholder="Subject"
                    name="subject"
                    value={data.subject || ""}
                    onChange={(e)=>customOnChange(e)}
                    inputMode="text"
                />
            </RecipientWrapper>
            <TextField
                multiline
                rows={18}
                sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }}
                name="body"
                onChange={(e)=>customOnChange(e)}
            />
            <Footer>
                <SendButton onClick={sendMail}>Send</SendButton>
                <DeleteOutline onClick={closeComposeMail} />
            </Footer>
        </Dialog>
    );
}
export default ComposeMail;