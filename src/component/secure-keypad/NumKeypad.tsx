import { Grid, Typography, ButtonBase } from '@mui/material';
import { KeyTypes, inputNums, Key as IInputNum } from './consts';
import { experimentalStyled as styled } from '@mui/material/styles';
import { toString, toNumber } from 'lodash';
// import { nativeUtil } from 'utils';
import BackspaceIcon from '@mui/icons-material/Backspace';

// ----------------------------------------------------------------------

const NumPadItem = styled(ButtonBase)(({ theme }) => ({
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

// ----------------------------------------------------------------------

interface Props {
  currentNum: number;
  onHandleClick: (num: number) => void;
}

export default function NumKeypad({ onHandleClick, currentNum }: Props) {
  function renderNumPadItem(num: IInputNum) {
    const { type, label } = num;
    switch (type) {
      case KeyTypes.Backspace:
        return <BackspaceIcon />;
      case KeyTypes.Numeric:
        return <Typography sx={{ fontSize: '24px', fontWeight: 600 }}>{label}</Typography>;
    }
  }

  function onClickNum(num: IInputNum) {
    if (num.type === KeyTypes.Backspace) {
      if (currentNum === 0) {
        onHandleClick(currentNum);
        return;
      }
      const curNumToArrStr = toString(currentNum).split('');
      curNumToArrStr.pop();
      const result = toNumber(curNumToArrStr.join(''));
      onHandleClick(result);
    } else {
      const curNumToArrStr = toString(currentNum).split('');
      let concatRes: string;
      if (num.label === '000' || num.label === '0') {
        concatRes = [...curNumToArrStr, num.label].join('');
      } else {
        concatRes =
          currentNum === 0 ? [num.label].join('') : [...curNumToArrStr, num.label].join('');
      }

      if (concatRes.length > 17) {
        alert('숫자 정도가 너무 큽니다');
        return;
      }

      const result = toNumber(concatRes);
      if (isFinite(result)) {
        onHandleClick(result);
      } else {
        alert('숫자 정도가 너무 큽니다');
        return;
      }
    }
  }

  return (
    <Grid container columns={{ xs: 3 }}>
      {inputNums.map((num, index) => {
        return (
          <Grid item xs={num.cols} key={index}>
            <NumPadItem onClick={() => onClickNum(num)}>{renderNumPadItem(num)}</NumPadItem>
          </Grid>
        );
      })}
    </Grid>
  );
}
