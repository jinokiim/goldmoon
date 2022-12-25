// import { NextPage } from 'next';
import { useRouter } from 'next/router';

// import Button from '@mui/material/Button';
import Layout from '@/src/layouts/main';
import { Box, Typography } from '@mui/material';
// import useSettings from '@/src/hooks/useSettings';
import { SxProps, Theme } from '@mui/system';
import PinMask from '@/src/components/auth/PinMask';
import useCustomKeypad from '@/src/hooks/useCustomKeypad';
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { COLORS } from '../../theme/palette';
import { SecureKeypad } from '@/src/components/secure-keypad';
import AppHeader from '@/src/components/Header';

// ----------------------------------------------------------------------

const maxInputSize = 6;
const defaultPinHint = 'PIN 암호를 입력해주세요';
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
  const [
    isErrorMsg
    // setIsErrorMsg
  ] = useState<boolean>(false);

  const {
    password
    //  setPassword,
    //  getPassword,
    // setIsKeypadOpen
  } = useCustomKeypad();

  const pass = password as number[];
  // const isReset = type === 'reset';
  // const isRegister = type === 'register';
  // const shouldResetPin = useMemo(() => {
  //   return isRegister ? false : true;
  // }, []);

  function onReset() {
    // setPinHint(defaultPinHint);
    // dispatch(setTempUserInfo(null));
    // navigate(PATH_AUTH.verifyUser + '/reset', { state: location.state });
    console.log('reset@@@@@@@');
  }

  async function onSubmit() {
    // try {
    //   if (!ci) {
    //     openErrorDialog();
    //     return;
    //   }

    //   dispatch(setLoader({ isLoading: true }));
    //   const isSuccess = await login(getPassword());

    //   dispatch(setLoader({ isLoading: false }));
    //   if (isSuccess) {
    //     dispatch(setOnboardingDone(true));
    //     // Sentry.captureMessage('pin dlink ' + initialDynamicLink);
    //     if (initialDynamicLink && initialDynamicLink.includes('portfolio_sequence_no')) {
    //       navigate(PATH_DASHBOARD.menu.settings.root);
    //     } else {
    //       const existDynamicLink = handleDynamicLink(initialDynamicLink);

    //       if (!existDynamicLink) {
    //         const requestedLocation = get(location, 'state.from', PATH_DASHBOARD.root);

    //         logger.debug('Enter Pin requestedLocation >>> ', requestedLocation);
    //         navigate(requestedLocation);
    //       }
    //     }
    //   } else if (!isSuccess) {
    //     setIsErrorMsg(true);
    //     const { pin_no_err_cnt } = await getPinErrCount(encodeURIComponent(ci));
    //     logger.debug('@@@ pin_no_err_cnt @@@ ', pin_no_err_cnt);
    //     const errCnt = Number(pin_no_err_cnt);
    //     let message = '';
    //     if (isNaN(errCnt)) {
    //       message = `암호가 올바르지 않습니다. 다시 입력해주세요`;
    //     } else {
    //       message = `암호가 올바르지 않습니다. 다시 입력해주세요. \n (${errCnt}/5)`;
    //       setPinErrorNum(errCnt as number);
    //     }
    //     setLoginHint(message);
    //     logger.debug('onSubmit isSuccess >>> ', isSuccess);
    //     setPassword([]);
    //   }
    // } catch (error) {
    //   setIsErrorMsg(true);
    //   const errMsg = get(error, 'response.data.message', '');
    //   logger.error('LOGIN SUBMIT ', error);
    //   if (errMsg === AUTH_ERRORS.NOT_FOUND_USER_CI_ERR.msg) {
    //     openErrorDialog();
    //   }
    // }
    console.log('@@@@@@@@@ 전송');
  }

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <Layout
        header={
          <>
            <AppHeader onPrev={() => router.push('/')} />
            {/* {type === 'login' && (
            <Box sx={{ textAlign: 'right', mx: 2, my: 1.5 }}>
              <Button
                variant="text"
                onClick={() => {
                  dispatch(setTempUserInfo(null));
                  navigate(PATH_AUTH.verifyUser + '/verify', { state: location.state });
                }}
              >
                본인인증
              </Button>
            </Box>
          )} */}
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
                비밀번호를 입력해주세요
              </Typography>

              <PinMask
                password={pass}
                maxInputSize={maxInputSize}
                errorMessage={defaultPinHint}
                errorMessageStyles={{
                  // color: errorMessage === defaultPinHint ? '#33374D' : theme.palette.error.main
                  color: isErrorMsg ? theme.palette.error.main : COLORS.primary500
                }}
                sx={{}}
              />
              <SecureKeypad
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
