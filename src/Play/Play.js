import React, { useState } from 'react';
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { IconButton, TextField } from "@mui/material";

function App() {
  const [textBoxes, setTextBoxes] = useState([]);

  const handleAddTextBox = () => {
    if (textBoxes.length < 4) {
      setTextBoxes([...textBoxes, <div>
              <table style={{ width: "600px" }}>

              <tr>
                <td style={{ width: "48%", padding: "2px" }}>
                  <TextField
                    
                    // size="10"
                    className="bulk-input"
                    placeholder="Hint: Hi # How are you # howdy"
                    multiline
                    rows={2}
                  />
                </td>
                <td style={{ width: "48%" }}>
                  <TextField
  
                    // size="30"
                    className="bulk-input"
                    style={{ marginLeft: "5%" }}
                    placeholder="Hint: Hello # I’m doing well, how are you # Hey"
                    multiline
                    rows={2}
                  />
                </td>
                <td style={{ width: "20%" }}>
                  <div style={{ marginLeft: "100%" }}>
                    <IconButton>
                      <RemoveCircleOutlineIcon
                        onClick={handleRemoveTextBox}
                        sx={{ fontSize: "30px", color: "red" }}
                      />
                    </IconButton>
                  </div>
                </td>
              </tr>
          
          
        </table>
      </div>])
    }
  };

  const handleRemoveTextBox = () => {
    setTextBoxes(textBoxes.slice(0, -1))
  };

  return (
    <div>
          <table style={{ width: "600px" }}>
          <th>User's Request(s)</th>
          <th>Robot's Response(s)</th>
              <tr>
                <td style={{ width: "48%", padding: "2px" }}>
                  <TextField
                    
                    // size="10"
                    className="bulk-input"
                    placeholder="Hint: Hi # How are you # howdy"
                    multiline
                    rows={2}
                  />
                </td>
                <td style={{ width: "48%" }}>
                  <TextField
  
                    // size="30"
                    className="bulk-input"
                    style={{ marginLeft: "5%" }}
                    placeholder="Hint: Hello # I’m doing well, how are you # Hey"
                    multiline
                    rows={2}
                  />
                </td>
                <td style={{ width: "20%" }}>
                  <div style={{ marginLeft: "100%" }}>
                    <IconButton>
                      <RemoveCircleOutlineIcon
                        onClick={handleRemoveTextBox}
                        sx={{ fontSize: "30px", color: "red" }}
                      />
                    </IconButton>
                  </div>
                </td>
              </tr>
          
          
        </table>
        <IconButton style={{ marginLeft: "57%", marginTop: "5%" }}>
        <AddCircleOutlineIcon
          onClick={handleAddTextBox}
          sx={{ fontSize: "30px", color: "green" }}
        />
      </IconButton>
      {textBoxes}

      <div className="switch-button">
        <label className="switch">
          <input type="checkbox"  />
          <span className="slider round">
            <div className="exe">Execute Training</div>
          </span>
        </label>
      </div>
    </div>
  );
}

export default App;
