import { useState } from "react";
import { TextField, Button, Alert } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const InputForm = () => {
  const [alertVisible, setAlertVisible] = useState(false);

  const handleClick = () => {
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 3000);
  };

  return (
    <>
      {alertVisible && (
        <Alert variant="filled" severity="success" sx={{ marginBottom: 2 }}>
          Form Submission Successful
        </Alert>
      )}

      <div className="rowOne">
        <TextField
          id="your-name"
          label="Your name"
          variant="outlined"
          margin="dense"
          fullWidth
        />
        <TextField
          id="your-email"
          label="Your email"
          variant="outlined"
          margin="dense"
          fullWidth
        />
      </div>
      <TextField
        id="your-number"
        label="Your number"
        variant="outlined"
        margin="dense"
        fullWidth
      />
      <TextField
        id="message"
        label="Message"
        multiline
        rows={5}
        variant="outlined"
        margin="dense"
        fullWidth
      />
      <TextField
        id="feedback"
        label="Feedback"
        multiline
        rows={1}
        variant="outlined"
        margin="dense"
        fullWidth
      />
      <br />
      <br />
      <Button
        size="small"
        sx={{ backgroundColor: "#1d5282", color: "white" }}
        onClick={handleClick}
        variant="contained"
        endIcon={<SendIcon />}
        fullWidth
      >
        Send
      </Button>
    </>
  );
};

export default InputForm;
