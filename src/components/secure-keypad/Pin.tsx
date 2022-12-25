import { useEffect, useState } from 'react';

import { Grid, Box, Typography, ButtonBase, Button } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import { SxProps, Theme } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import BackspaceIcon from '@mui/icons-material/Backspace';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import useCustomKeypad from 'hooks/useCustomKeypad';
// import { nativeUtil } from 'utils';
import { shuffle } from 'lodash';
import { COLORS } from '../../theme/palette';
import { numpads, numpadButtons, Key, KeyTypes } from './consts';
import useCustomKeypad from '@/src/hooks/useCustomKeypad';
// import { useLocation } from 'react-router-dom';
// ----------------------------------------------------------------------

const Item = styled(ButtonBase)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: 'none',
  width: '100%',
  height: '62px',
  borderRadius: 0,
  color: COLORS.neutral8
}));

// ----------------------------------------------------------------------
function handleShuffle(items: Key[]) {
  return [...shuffle(items)];
}

const renderIcon = (cell: Key) => {
  const { label, type } = cell;
  switch (type) {
    case KeyTypes.Backspace:
      return <BackspaceIcon />;
    case KeyTypes.Submit:
    case KeyTypes.Reset:
      return <Typography sx={{ fontWeight: 600, fontSize: '16px' }}>{label}</Typography>;
    default:
      return <Typography sx={{ fontSize: '22px', fontWeight: 600 }}>{label}</Typography>;
  }
};

interface Props {
  onSubmit: () => void;
  maxInputSize: number;
  onReset?: () => void;
  styles?: SxProps<Theme> | undefined;
  shouldReset: boolean;
}

export default function Keypad(props: Props) {
  const { maxInputSize = 6, onSubmit, onReset, shouldReset, styles = {} } = props;
  const { password, setPassword } = useCustomKeypad();
  const [items, setItems] = useState(() => handleShuffle(numpads));
  const [prevPassword, setPrevPassword] = useState(password);
  const theme = useTheme();
  // const location = useLocation();
  // const reset = includes(location.pathname, 'reset');

  function handleClick(cell: Key) {
    const { label, type } = cell;
    switch (type) {
      case KeyTypes.Reset:
        shuffleItems();
        // setPassword([]);

        break;
      case KeyTypes.Backspace:
        if (password.length) {
          //@ts-ignore
          setPassword((prevState) => {
            prevState.pop();
            return [...prevState];
          });
        }
        break;
      case KeyTypes.Submit:
        onSubmit();
        break;
      default:
        if (password.length >= maxInputSize) return;
        //@ts-ignore
        setPassword((prevState) => {
          return [...prevState, Number(label)];
        });
    }
  }

  function shuffleItems() {
    setItems([...handleShuffle(items)]);
  }

  const itemsList = [...items, ...numpadButtons];

  useEffect(() => {
    if (password === prevPassword) return;

    if (prevPassword.length - password.length > 2) shuffleItems();
    setPrevPassword(password);
  }, [password]);

  return (
    <Box
      sx={{ flexGrow: 1, height: '100%', backgroundColor: theme.palette.common.white, ...styles }}
    >
      {shouldReset && (
        <Box
          sx={{
            // pt: 2,
            textAlign: 'center',
            backgroundColor: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Button sx={{ display: 'flex' }} onClick={onReset}>
            <Typography component="div" variant="buttonMedium" sx={{ color: COLORS.text600 }}>
              비밀번호 재설정
            </Typography>
            <ChevronRightIcon sx={{ color: COLORS.text600 }} />
          </Button>
        </Box>
      )}
      <Grid container columns={{ xs: 3 }} data-cy="secure-keypad">
        {itemsList.map((cell, index) => (
          <Grid item xs={1} key={index}>
            <Item disabled={cell.type === KeyTypes.Blank} onClick={() => handleClick(cell)}>
              {renderIcon(cell)}
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
