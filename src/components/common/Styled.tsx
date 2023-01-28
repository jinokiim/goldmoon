import { styled } from '@mui/material/styles';
import { Button, LinearProgress, linearProgressClasses, ToggleButton } from '@mui/material';
import { ButtonProps } from '@mui/material/Button';
import { COLORS } from '../../theme/palette';

export const StyledButton = styled((props: ButtonProps) => (
  <Button fullWidth variant="contained" size="large" {...props} />
))({
  fontSize: '17px',
  lineHeight: '27px',
  letterSpacing: '-0.4px',
  backgroundColor: COLORS.secondary500
});

export const BorderLinearProgress = styled(LinearProgress)(({}) => ({
  height: 8,
  borderRadius: 2,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#E7E7EA'
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 2,
    backgroundColor: COLORS.secondary500,
    animation: 'linear-translate 1s linear',
    '@keyframes linear-translate': {
      from: {
        transform: 'translateX(-100%)'
      }
    }
  }
}));

export const CustomToggleButton = styled(ToggleButton)({
  margin: 0,
  padding: '6px 16px',
  fontSize: '15px',
  fontWeight: 500,
  letterSpacing: '-0.2px',
  color: '#858794',
  background: '#fff',
  boxShadow: 'none',
  border: '1px solid #DDE4EE',
  borderRadius: '20px !important',
  '&.Mui-selected, &.Mui-selected:hover': {
    color: 'rgba(255, 255, 255, 0.95)',
    background: COLORS.secondary500,
    border: 0
  }
});

export const TipButton = styled(Button)({
  padding: '8px 18px 8px 20px',
  justifyContent: 'space-between',
  background: '#fff',
  border: `1px solid ${COLORS.outlinedBorder}`,
  borderRadius: '8px',
  color: COLORS.text900,
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '22px',
  letterSpacing: '-0.2px'
});
