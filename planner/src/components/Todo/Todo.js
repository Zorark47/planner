import React from "react";
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Todo(props) {
    return (
      <li>
        <div>
        <FormGroup>
            <FormControlLabel control={<Checkbox/>} label={props.text}/>
        </FormGroup>
        <h6>Due {props.date}</h6>
        </div>
        <div>
          <Button onClick={() => props.deleteTask(props.id)}>
            Delete {props.text}
          </Button>
        </div>
      </li>
    );
  }
  