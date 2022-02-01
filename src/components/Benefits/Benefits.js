import { Container, Typography } from '@mui/material';
import React from 'react';
import AddBenefitsModal from '../AddBenefitsModal/AddBenefitsModal'

const Benefits = () => {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => setOpen(false);
    return (
        <Container>
            
            <AddBenefitsModal
                open={open}
                handleClose={handleClose}>
            </AddBenefitsModal>

            <Typography sx={{ color: '#f15a29' }}>
                Benefits
            </Typography>
        </Container>
    );
};

export default Benefits;