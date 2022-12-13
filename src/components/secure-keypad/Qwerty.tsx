import React, { useState } from 'react';
import { Grid, Box, Typography, ButtonBase } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import { capitalize } from 'lodash';
import BackspaceIcon from '@mui/icons-material/Backspace';
import { KeyTypes, Key, nums, keys, buttons } from './consts';
import { useTheme } from '@mui/material/styles';
import { COLORS } from '@/palette';
import ShiftKeyIcon from '@/src/assets/icons/shift_key';
import useCustomKeypad from '@/src/hooks/useCustomKeypad';
// import { logger } from 'utils';
// import { ButtonAnimate } from 'components/animate';

// ----------------------------------------------------------------------

const Item = styled(ButtonBase)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: 'none',
  width: '100%',
  height: '62px',
  borderRadius: 0,
  color: theme.palette.text.primary
}));

function getRandIndex(from: number, to: number): number {
  return Math.random() * to + from;
}

function handleShuffle() {
  // shuffle blank(s) for nums
  const newNums = [...nums];
  const filteredNums = newNums.filter((n) => n.type !== KeyTypes.Blank);
  const filteredNumBlanks = newNums.filter((n) => n.type === KeyTypes.Blank);
  while (filteredNumBlanks.length) {
    const randIndex = getRandIndex(0, nums.length);
    const blankItem = filteredNumBlanks.pop();
    if (blankItem) {
      filteredNums.splice(randIndex, 0, blankItem);
    }
  }

  // shuffle blank(s) for keys
  const newKeys = [...keys];
  const [backSpaceKey] = newKeys.splice(newKeys.length - 1, 1);
  const [shiftKey] = newKeys.splice(22, 1);
  const filteredKeys = newKeys.filter((k) => k.type !== KeyTypes.Blank);
  const filteredKeyBlanks = newKeys.filter((k) => k.type === KeyTypes.Blank);
  while (filteredKeyBlanks.length) {
    const randIndex = getRandIndex(0, filteredKeys.length - filteredKeyBlanks.length);
    const blankItem = filteredKeyBlanks.pop();
    if (blankItem) {
      filteredKeys.splice(randIndex, 0, blankItem);
    }
  }
  filteredKeys.splice(22, 0, shiftKey);

  return [...filteredNums, ...filteredKeys, backSpaceKey];
}

interface Props {
  onSubmit: () => void;
}

export default function QwertyKeypad(props: Props) {
  const { onSubmit } = props;
  const { password, setPassword } = useCustomKeypad();
  const [items, setItems] = useState([...nums, ...keys]);
  const theme = useTheme();
  const [shiftEnabled, setShiftEnabled] = useState<boolean>(false);
  const [showSymbols, setShowSymbols] = useState<boolean>(false);

  const renderKey = (key: Key) => {
    const { type, label, symbol, hangul } = key;
    const keyLabel = showSymbols ? symbol : label;
    switch (type) {
      case KeyTypes.Reset:
      case KeyTypes.Symbols:
      case KeyTypes.Space:
      case KeyTypes.Submit:
        return <Typography sx={{ fontSize: '16px', fontWeight: 600 }}>{label}</Typography>;
      case KeyTypes.Backspace:
        return <BackspaceIcon />;
      case KeyTypes.Shift:
        return <ShiftKeyIcon isActive={shiftEnabled} />;

      case KeyTypes.Char:
        return (
          <Box
            sx={{
              ...(hangul && {
                display: 'flex',
                flexDirection: 'column'
              })
            }}
          >
            <Typography variant="subtitle1" sx={{ fontSize: shiftEnabled ? '20px' : '22px' }}>
              {shiftEnabled ? capitalize(keyLabel) : keyLabel}
            </Typography>
            {hangul && !showSymbols && (
              <Typography sx={{ color: '#526880', fontSize: '13px' }}>{hangul}</Typography>
            )}
          </Box>
        );
      case KeyTypes.Numeric:
        return (
          <Typography
            sx={{
              ...(!showSymbols && { color: '#44576b', fontSize: '20px !important' }),
              fontSize: '22px',
              fontWeight: 600
            }}
            variant="subtitle1"
          >
            {shiftEnabled ? capitalize(keyLabel) : keyLabel}
          </Typography>
        );
      default:
        return <Typography>{label}</Typography>;
    }
  };

  function handleClick(key: Key) {
    const { type, label, symbol } = key;
    const pass = password as string[];

    switch (type) {
      case KeyTypes.Reset:
        shuffleItems();
        // setPassword([]);
        break;
      case KeyTypes.Shift:
        setShiftEnabled(!shiftEnabled);
        break;
      case KeyTypes.Backspace:
        if (password.length) {
          pass.pop();
          setPassword([...pass]);
        }
        break;
      case KeyTypes.Symbols:
        setShowSymbols(!showSymbols);
        break;
      case KeyTypes.Submit:
        onSubmit();
        break;
      default:
        const value = (showSymbols ? symbol : shiftEnabled ? capitalize(label) : label) as string;
        setPassword([...pass, value]);
    }
  }

  function shuffleItems() {
    setItems([...handleShuffle()]);
  }

  const itemsList = [...items, ...buttons];

  return (
    <Box sx={{ flexGrow: 1, height: '100%', mx: 0, backgroundColor: theme.palette.common.white }}>
      <Box
        sx={{
          backgroundColor: theme.palette.info.main,
          height: '29px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography
          sx={{
            color: COLORS.secondary600,
            fontSize: '14px',
            fontWeight: 500
          }}
        >
          보안키패드 작동중
        </Typography>
      </Box>
      <Grid container columns={{ xs: 11 }}>
        {itemsList.map((key, index) => {
          return (
            <Grid item xs={key.cols} key={index}>
              <Item disabled={key.type === KeyTypes.Blank} onClick={() => handleClick(key)}>
                {renderKey(key)}
              </Item>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
