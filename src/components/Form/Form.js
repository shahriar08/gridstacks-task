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
import { Grid } from '@material-ui/core';

const Form = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <Container>
            <Grid container spacing={2} sx={{ p: 4 }}>
                <Grid item xs={6}>
                    <Typography sx={{mt:2, textAlign:'start'}}>Website</Typography>
                    <TextField id="filled-search"
                        sx={{ width: '100%' }}
                        label="Website (URL)"
                        type="search"
                        variant="filled" />
                </Grid>
                <Grid item xs={6}>
                    <Typography sx={{mt:2, textAlign:'start'}}>Industry*</Typography>
                    <FormControl variant="filled" sx={{ width: '100%' }}>
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
                            <MenuItem sx={{textAlign:'start'}} value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <Typography sx={{textAlign:'start'}}>Company Size*</Typography>
                    <TextField id="filled-search"
                    sx={{ width: '100%' }}
                        label="Employees"
                        type="search"
                        variant="filled" />
                </Grid>
                <Grid item xs={6}>
                    <Typography sx={{textAlign:'start'}}>Headquarters</Typography>
                    <TextField id="filled-search"
                    sx={{ width: '100%' }}
                        label="Enter Text"
                        type="search"
                        variant="filled" />
                </Grid>
                <Grid item xs={6}>
                    <Typography sx={{textAlign:'start'}}>Type</Typography>
                    <TextField id="filled-search"
                    sx={{ width: '100%' }}
                        label="Enter Text"
                        type="search"
                        variant="filled" />
                </Grid>
                <Grid item xs={6}>
                    <Typography sx={{textAlign:'start'}}>Founded</Typography>
                    <TextField id="filled-search"
                    sx={{ width: '100%' }}
                        label="Enter Your"
                        type="search"
                        variant="filled" />
                </Grid>

                {/* <label className="my-1 mr-2 text-dark" for="inlineFormInputName1">Your Name:</label> */}

                <Grid item xs={12}>
                    <Typography sx={{textAlign:'start'}}>Specialties</Typography>
                    <FormControl fullWidth sx={{ width: '100%'}} variant="filled">
                        <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
                        <FilledInput
                            id="filled-adornment-amount"
                        />
                    </FormControl>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Form;