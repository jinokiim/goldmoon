// import { NextPage } from 'next';
import { useRouter } from 'next/router';

// import Button from '@mui/material/Button';
import Layout from '@/src/layouts/main';
import { Box, Typography } from '@mui/material';
// import useSettings from '@/src/hooks/useSettings';
import { SxProps, Theme } from '@mui/system';
import PinMask from '@/src/components/auth/PinMask';
// import useCustomKeypad from '@/src/hooks/useCustomKeypad';
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { COLORS } from '../../theme/palette';
import { SecureKeypad } from '@/src/components/secure-keypad';
import AppHeader from '@/src/components/Header';
import _ from 'lodash';

import { useRecoilState } from 'recoil';
import { authState } from '@/src/recoil/atom';
// ----------------------------------------------------------------------

const CODE = [1, 1, 0, 2];
const maxInputSize = 4;
let defaultPinHint = '골드문 입장코드를 입력해주세요';
const errMsgStyles = {
  mb: 7,
  px: 2,
  textAlign: 'center',
  wordBreak: 'keep-all'
} as SxProps<Theme>;

const IndexPage = function () {
  const theme = useTheme();
  const router = useRouter();

  // const { headerHeight } = useSettings();
  const [authCheck, setAuthCheck] = useRecoilState(authState);

  const [isErrorMsg, setIsErrorMsg] = useState<boolean>(false);

  const [password, setPassword] = useState<number[] | string[]>([]);

  const pass = password as number[];
  // const isReset = type === 'reset';
  // const isRegister = type === 'register';
  // const shouldResetPin = useMemo(() => {
  //   return isRegister ? false : true;
  // }, []);

  const userCheckOk = () => {
    setAuthCheck(true);
  };

  const setPasswordFunc = (password: number[] | string[]) => {
    setPassword(password);
  };

  function onReset() {
    // setPinHint(defaultPinHint);
    // dispatch(setTempUserInfo(null));
    // navigate(PATH_AUTH.verifyUser + '/reset', { state: location.state });
  }

  function onSubmit(password: number[] | string[]) {
    const isEqual = _.isEqual(password, CODE);
    // let message = '';
    if (isEqual) {
      userCheckOk();
      router.push('/main');
    } else {
      setIsErrorMsg(true);
      defaultPinHint = `암호가 올바르지 않습니다. 다시 입력해주세요`;
      setPassword([]);
    }
  }

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    console.log(authCheck);
    setMounted(true);
  }, []);

  return (
    mounted && (
      <Layout
        header={
          <>
            <AppHeader onPrev={() => router.push('/')} />
          </>
        }
        content={
          <Box
            sx={{
              pt: 7,
              px: 2,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <Box sx={{ height: '100%' }}>
              <Typography variant="h3" sx={{ ...errMsgStyles }}>
                코드를 입력해주세요
              </Typography>

              <PinMask
                password={pass}
                maxInputSize={maxInputSize}
                errorMessage={defaultPinHint}
                errorMessageStyles={{
                  // color: errorMessage === defaultPinHint ? '#33374D' : theme.palette.error.main
                  color: isErrorMsg ? theme.palette.error.main : COLORS.secondary500
                }}
                sx={{}}
              />
              <SecureKeypad
                password={password}
                setPasswordFunc={setPasswordFunc}
                pinStyles={{ backgroundColor: '#FFF' }}
                shouldReset={true}
                type="pin"
                maxInputSize={maxInputSize}
                onReset={onReset}
                onSubmit={onSubmit}
              />
            </Box>
          </Box>
        }
      />
    )
  );
};

export default IndexPage;
