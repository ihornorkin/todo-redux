import React from 'react';
import ColorPicker from 'material-ui-color-picker';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

const TaskForm = (props) => {
    const { handleSubmit, handlePick, startTime, handleClose, handleType } = props;

    return (
        <div>
            <form onSubmit={handleSubmit} className="form-submit">
                <TextField
                    autoFocus
                    id="name"
                    label="Name"
                    type="text"
                    onChange={(e) => handleType(e, "name")}
                    fullWidth
                    required
                />
                <TextField
                    id="startTime"
                    label="Start clock"
                    type="time"
                    defaultValue={startTime}
                    fullWidth
                    onChange={(e) => handleType(e, "startTime")}
                    inputProps={{
                        step: 3600,
                    }}
                />
                <TextField
                    id="endTime"
                    label="Finish clock"
                    type="time"
                    defaultValue="00:00"
                    fullWidth
                    onChange={(e) => handleType(e, "endTime")}
                    inputProps={{
                        step: 3600,
                    }}
                />
                <ColorPicker
                    name="color"
                    defaultValue="#000"
                    onChange={handlePick}
                />
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                    <Button color="primary" type="submit">Submit</Button>
                </DialogActions>
            </form>
        </div>
    )
}

export default TaskForm;