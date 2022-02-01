import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Container } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));
const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function AddBenefitsModal() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Container>
            <Button variant="outlined" sx={{ borderRadius: 80 ,display: 'flex',justifyContent: 'flex-end', alignItems: "flex-end" }} onClick={handleClickOpen}>
                Add Benefits
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                fullWidth
                maxWidth="md"
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Add Benefits
                </BootstrapDialogTitle>

                <DialogContent dividers sx={{ backgroundColor: "#EAEAEC" }}>
                    <Typography gutterBottom>
                        Choose Benefits to add.
                    </Typography>
                    <Typography gutterBottom>

                        <Button variant="outlined" endIcon={<AddCircleOutlineIcon sx={{ color: '#f15a29' }} />} sx={{ borderRadius: 80, color: 'text.primary', border: "1px gray solid" }} onClick={handleClickOpen}>
                            Excellent Health Care
                        </Button>
                        <Button variant="outlined" endIcon={<AddCircleOutlineIcon sx={{ color: '#f15a29' }} />} sx={{ borderRadius: 80, color: 'text.primary', border: "1px gray solid" }} onClick={handleClickOpen}>
                            Daily Snacks
                        </Button>
                        <Button variant="outlined" endIcon={<AddCircleOutlineIcon sx={{ color: '#f15a29' }} />} sx={{ borderRadius: 80, color: 'text.primary', border: "1px gray solid" }} onClick={handleClickOpen}>
                            Group Activities
                        </Button>

                        <Button variant="outlined" endIcon={<AddCircleOutlineIcon sx={{ color: '#f15a29' }} />} sx={{ borderRadius: 80, color: 'text.primary', border: "1px gray solid" }} onClick={handleClickOpen}>
                            Volunteer Opportunities
                        </Button>
                        <Button variant="outlined" endIcon={<AddCircleOutlineIcon sx={{ color: '#f15a29' }} />} sx={{ borderRadius: 80, color: 'text.primary', border: "1px gray solid" }} onClick={handleClickOpen}>
                            Stack Options
                        </Button>
                        <Button variant="outlined" endIcon={<AddCircleOutlineIcon sx={{ color: '#f15a29' }} />} sx={{ borderRadius: 80, color: 'text.primary', border: "1px gray solid" }} onClick={handleClickOpen}>
                            Wellness Programs
                        </Button>
                        <Button variant="outlined" endIcon={<AddCircleOutlineIcon sx={{ color: '#f15a29' }} />} sx={{ borderRadius: 80, color: 'text.primary', border: "1px gray solid" }} onClick={handleClickOpen}>
                            Paid Time Off
                        </Button>

                        <Button variant="outlined" endIcon={<AddCircleOutlineIcon sx={{ color: '#f15a29' }} />} sx={{ borderRadius: 80, color: 'text.primary', border: "1px gray solid" }} onClick={handleClickOpen}>
                            Life Insurance
                        </Button>
                        <Button variant="outlined" endIcon={<AddCircleOutlineIcon sx={{ color: '#f15a29' }} />} sx={{ borderRadius: 80, color: 'text.primary', border: "1px gray solid" }} onClick={handleClickOpen}>
                            Unlimited PTO
                        </Button>
                        <Button variant="outlined" endIcon={<AddCircleOutlineIcon sx={{ color: '#f15a29' }} />} sx={{ borderRadius: 80, color: 'text.primary', border: "1px gray solid" }} onClick={handleClickOpen}>
                            Tuition Reimbursement
                        </Button>
                        <Button variant="outlined" endIcon={<AddCircleOutlineIcon sx={{ color: '#f15a29' }} />} sx={{ borderRadius: 80, color: 'text.primary', border: "1px gray solid" }} onClick={handleClickOpen}>
                            Family and Medical Leave (FMLA)
                        </Button>
                        <Button variant="outlined" endIcon={<AddCircleOutlineIcon sx={{ color: '#f15a29' }} />} sx={{ borderRadius: 80, color: 'text.primary', border: "1px gray solid" }} onClick={handleClickOpen}>
                            Disability Insurance
                        </Button>
                        <Button variant="outlined" endIcon={<AddCircleOutlineIcon sx={{ color: '#f15a29' }} />} sx={{ borderRadius: 80, color: 'text.primary', border: "1px gray solid" }} onClick={handleClickOpen}>
                            Commuter Benefits
                        </Button>
                        <Button variant="outlined" endIcon={<AddCircleOutlineIcon sx={{ color: '#f15a29' }} />} sx={{ borderRadius: 80, color: 'text.primary', border: "1px gray solid" }} onClick={handleClickOpen}>
                            Retirement Savings
                        </Button>
                        <Button variant="outlined" endIcon={<AddCircleOutlineIcon sx={{ color: '#f15a29' }} />} sx={{ borderRadius: 80, color: 'text.primary', border: "1px gray solid" }} onClick={handleClickOpen}>
                            Overtime Pay
                        </Button>
                        <Button variant="outlined" endIcon={<AddCircleOutlineIcon sx={{ color: '#f15a29' }} />} sx={{ borderRadius: 80, color: 'text.primary', border: "1px gray solid" }} onClick={handleClickOpen}>
                            Student Loan Repayment
                        </Button>
                        <Button variant="outlined" endIcon={<AddCircleOutlineIcon sx={{ color: '#f15a29' }} />} sx={{ borderRadius: 80, color: 'text.primary', border: "1px gray solid" }} onClick={handleClickOpen}>
                            Relocation and Housing
                        </Button>
                        <Button variant="outlined" endIcon={<AddCircleOutlineIcon sx={{ color: '#f15a29' }} />} sx={{ borderRadius: 80, color: 'text.primary', border: "1px gray solid" }} onClick={handleClickOpen}>
                            Remote Working
                        </Button>
                        <Button variant="outlined" endIcon={<AddCircleOutlineIcon sx={{ color: '#f15a29' }} />} sx={{ borderRadius: 80, color: 'text.primary', border: "1px gray solid" }} onClick={handleClickOpen}>
                            Telecommuting
                        </Button>
                        <Button variant="outlined" endIcon={<AddCircleOutlineIcon sx={{ color: '#f15a29' }} />} sx={{ borderRadius: 80, color: 'text.primary', border: "1px gray solid" }} onClick={handleClickOpen}>
                            Work form Home
                        </Button>
                        <Button variant="outlined" endIcon={<AddCircleOutlineIcon sx={{ color: '#f15a29' }} />} sx={{ borderRadius: 80, color: 'text.primary', border: "1px gray solid" }} onClick={handleClickOpen}>
                            Other
                        </Button>
                    </Typography>
                </DialogContent>

                <DialogContent>
                    <Typography gutterBottom sx={{ color: '#f15a29' }}>
                        Benefits
                    </Typography>
                </DialogContent>

                <DialogActions>
                    <Button autoFocus onClick={handleClose} sx={{ borderRadius: 80, color: 'text.primary', border: "1px gray solid" }}>
                        Save
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </Container>
    );
};
