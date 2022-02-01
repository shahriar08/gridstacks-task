import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';
import FilledInput from '@mui/material/FilledInput';
import { Typography } from '@mui/material';

const Form = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <Container fixed>

            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '63ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField id="filled-search"
                        label="Website (URL)"
                        type="search"
                        variant="filled" />
                    <FormControl variant="filled" sx={{ m: 1, width: '63ch' }}>
                        <InputLabel id="demo-simple-select-filled-label">Select Industry</InputLabel>
                        <Select
                            labelId="Select Industry"
                            id="demo-simple-select-filled"
                            value={age}
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField id="filled-search"
                        label="Employees"
                        type="search"
                        variant="filled" />
                    <TextField id="filled-search"
                        label="Search field"
                        type="search"
                        variant="filled" />
                    <TextField id="filled-search"
                        label="Enter Text"
                        type="search"
                        variant="filled" />
                    {/* <label className="my-1 mr-2 text-dark" for="inlineFormInputName1">Your Name:</label> */}
                    <TextField id="filled-search"
                        label="Search field"
                        type="search"
                        variant="filled" />
                    <FormControl fullWidth sx={{ m: 1, width: '129ch' }} variant="filled">
                        <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
                        <FilledInput
                            id="filled-adornment-amount"
                        />
                    </FormControl>
                </div>

            </Box>
        </Container>
    );
};

export default Form;