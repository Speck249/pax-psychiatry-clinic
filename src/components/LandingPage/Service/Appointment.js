import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


const Appointment = () =>{
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const labelStyle = {
    fontSize: "0.85rem", 
    fontWeight: "700", 
    textAlign: "left", 
    width: "100%", 
    marginTop: "1rem",
    marginBottom: "0.5rem"
  }

  const textFieldStyle = {
    fontSize: '14px',
    fontWeight: "400",
    fontFamily: "'Sora', sans-serif",
    marginBottom: "1rem"
  }

  const menuItemStyle = {
    fontFamily: "'Sora', sans-serif", 
    fontSize: "14px"
  }

  return (
    <>
      <Button
        style={{  
          fontFamily: "'Sora', sans-serif",
          fontSize: "0.95rem",
          fontWeight: "400",
          textDecoration: "",
          textTransform: "none",
          color: "#fff",
          padding: "0.75rem 1.5rem",
          border: "none",
          borderRadius: "4px",
          backgroundColor: "#09798C",
          cursor: "pointer"
        }} onClick={handleClickOpen}>Book Appointment</Button>
      
      <Dialog
        style={{ color: "yellow"}}
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
        >
        <DialogTitle style={{ 
          fontFamily: "'Sora', sans-serif", 
          fontWeight: "700",
          color: "#09798C", 
          textAlign: "center",
          margin: "1rem 0"
        }}>Book Your First Free Appointment</DialogTitle>
        <DialogContent style={{ 
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "center", 
          alignItems: "center", 
          width: "550px", 
          maxWidth: "100%" }}>
          <label style={labelStyle}>Full Name</label>
          <TextField
            id="fullName"
            type="text"
            required
            fullWidth
            sx={{
              '& .MuiInputBase-input': {
              fontSize: '14px',
              fontWeight: "400",
              fontFamily: "'Sora', sans-serif",
              backgroundColor: "#fff"
            },
          }}
          />
          <label style={labelStyle}>Email Address</label>
          <TextField
            id="email"
            type="email"
            required
            fullWidth
            sx={{
              '& .MuiInputBase-input': {
              fontSize: '14px',
              fontWeight: "400",
              fontFamily: "'Sora', sans-serif",
              backgroundColor: "#fff"
            },
          }}
          />
          <label style={labelStyle}>Appointment Date & Time</label>
          <TextField
            id="date"
            type="date"
            fullWidth
            required
            sx={{
              '& .MuiInputBase-input': {
              fontSize: '14px',
              fontWeight: "400",
              fontFamily: "'Sora', sans-serif",
            },
          }}
          />
          <TextField
            id="time"
            type="time"
            fullWidth
            required
            sx={{
              '& .MuiInputBase-input': {
              fontSize: '14px',
              fontWeight: "400",
              fontFamily: "'Sora', sans-serif",
            },
          }}
          style={{ marginTop: "0.5rem" }}
          />
          <label style={labelStyle}>Our Medical Services</label>
          <Select
            id="services"
            name="services"
            fullWidth
            required
            sx={textFieldStyle}
           >
            <MenuItem value="Adolescent Therapy" sx={menuItemStyle}>Adolescent Therapy</MenuItem>
            <MenuItem value="Couples Therapy" sx={menuItemStyle}>Couples Therapy</MenuItem>
            <MenuItem value="Marriage Counselling" sx={menuItemStyle}>Marriage Counselling</MenuItem>
            <MenuItem value="Family Counselling" sx={menuItemStyle}>Family Counselling</MenuItem>
            <MenuItem value="Psychiatry" sx={menuItemStyle}>Psychiatry</MenuItem>
            <MenuItem value="Corporate Counselling" sx={menuItemStyle}>Corporate Counselling</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions style={{ display: "flex", justifyContent: "space-around", marginBottom: "1rem" }}>
          <Button style={{ color: "#09798C" }} type="submit">Book</Button>
          <Button style={{ color: "#09798C" }} onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Appointment;