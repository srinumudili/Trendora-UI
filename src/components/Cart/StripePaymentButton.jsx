import { Button, Box, Typography, Stack } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const StripePaymentButton = ({ amount }) => {
  const handlePayment = () => {
    alert(`✅ Payment of $${amount.toFixed(2)} successful`);
  };

  return (
    <Box>
      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
        <CreditCardIcon color="primary" />
        <Typography fontWeight={700}>Secure Payment</Typography>
      </Stack>

      <Button
        variant="contained"
        size="large"
        fullWidth
        sx={{ py: 1.5 }}
        onClick={handlePayment}
      >
        Pay ${amount.toFixed(2)}
      </Button>
    </Box>
  );
};

export default StripePaymentButton;
