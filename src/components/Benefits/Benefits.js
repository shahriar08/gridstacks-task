import { Container, Typography } from '@mui/material';
import React from 'react';
import AddBenefitsModal from '../AddBenefitsModal/AddBenefitsModal'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import CleanHandsOutlinedIcon from '@mui/icons-material/CleanHandsOutlined';
const Benefits = () => {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => setOpen(false);
    return (
        <Container>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Typography sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: "flex-start" }}>
                        <Button sx={{ color: 'text.primary', }}>
                            Benefits
                        </Button>
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <AddBenefitsModal
                        open={open}
                        handleClose={handleClose}>
                    </AddBenefitsModal>
                </Grid>

            </Grid>


            <Box sx={{ flexGrow: 1 }}>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ pt: 5 }}>
                    <Grid item xs={4}>
                        <Button variant="outlined" startIcon={<HealthAndSafetyOutlinedIcon />} endIcon={<CircleOutlinedIcon />} sx={{ backgroundColor: '#F77631', borderRadius: 80, color: 'text.primary', border: "1px gray solid", mx: 2, my: 1 }} >
                            Excellent Health Care
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="outlined" startIcon={<HomeOutlinedIcon />} endIcon={<CircleOutlinedIcon />} sx={{ borderRadius: 80, color: 'text.primary', border: "1px gray solid", mx: 2, my: 1 }}>
                            Volunteer Opportunities
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="outlined" startIcon={<LeaderboardOutlinedIcon />} endIcon={<CircleOutlinedIcon />} sx={{ borderRadius: 80, color: 'text.primary', border: "1px gray solid", mx: 2, my: 1 }}>
                            Tuition Reimbursement
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="outlined" startIcon={<SettingsOutlinedIcon />} endIcon={<CircleOutlinedIcon />} sx={{ borderRadius: 80, color: 'text.primary', border: "1px gray solid", mx: 2, my: 1 }} >
                            Disability Insurance
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="outlined" startIcon={<EmojiObjectsOutlinedIcon />} endIcon={<CircleOutlinedIcon />} sx={{ borderRadius: 80, color: 'text.primary', border: "1px gray solid", mx: 2, my: 1 }} >
                            Student Loan Repayment
                        </Button>
                    </Grid>

                    <Grid item xs={4}>
                        <Button variant="outlined" startIcon={<CleanHandsOutlinedIcon />} endIcon={<CircleOutlinedIcon />} sx={{ borderRadius: 80, color: 'text.primary', border: "1px gray solid", mx: 2, my: 1 }}>
                            Relocation and Housing
                        </Button>
                    </Grid>


                </Grid>

            </Box>
            <Typography variant="outlined" sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: "flex-end" }}>
                <Button variant="outlined" sx={{ mt: 2, px: 4, mx: 1, py: 1, borderRadius: 80, color: 'text.primary', border: "1px gray solid", }}>
                    Skip
                </Button>
                <Button variant="outlined" sx={{ mt: 2, px: 4, mx: 1, py: 1, borderRadius: 80, backgroundColor: '#2D3E8B', color: '#fff', border: "1px gray solid", }}>
                    Save
                </Button>
            </Typography>
        </Container>
    );
};

export default Benefits;