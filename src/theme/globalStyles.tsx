// material
import { useTheme } from '@mui/material/styles';
import { GlobalStyles as GlobalThemeStyles } from '@mui/material';
import { useLocation } from 'react-router';
// import { has } from 'lodash';

// ----------------------------------------------------------------------

export default function GlobalStyles() {
  const theme = useTheme();
  const location = useLocation();

  return (
    <GlobalThemeStyles
      styles={{
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          '-webkit-tap-highlight-color': 'transparent'
        },
        html: {
          width: '100%',
          height: '100%',
          WebkitOverflowScrolling: 'touch',
          background:
            location.pathname === '/dashboard/market'
              ? 'linear-gradient(to bottom, #2E9BFF, #2E9BFF 50%, white 50%)'
              : '#ffffff'
        },
        body: {
          width: '100%',
          height: '100%',
          background:
            location.pathname === '/dashboard/market'
              ? 'linear-gradient(to bottom, #2E9BFF, #2E9BFF 50%, white 50%)'
              : '#ffffff',
          position: location.pathname === '/dashboard/market' ? 'fixed' : 'relative',
          overflow: location.pathname === '/dashboard/market' ? 'hidden' : 'unset'
        },
        '#root': {
          width: '100%',
          height: '100%',
          overflowY: location.pathname === '/dashboard/market' ? 'scroll' : 'unset'
        },

        // div: {
        //   lineHeight: 0
        // },
        input: {
          '&[type=number]': {
            MozAppearance: 'textfield',
            '&::-webkit-outer-spin-button': {
              margin: 0,
              WebkitAppearance: 'none'
            },
            '&::-webkit-inner-spin-button': {
              margin: 0,
              WebkitAppearance: 'none'
            }
          }
        },
        textarea: {
          '&::-webkit-input-placeholder': {
            color: theme.palette.text.disabled
          },
          '&::-moz-placeholder': {
            opacity: 1,
            color: theme.palette.text.disabled
          },
          '&:-ms-input-placeholder': {
            color: theme.palette.text.disabled
          },
          '&::placeholder': {
            color: theme.palette.text.disabled
          }
        },

        img: { display: 'block', maxWidth: '100%' },

        // Lazy Load Img
        '.blur-up': {
          WebkitFilter: 'blur(5px)',
          filter: 'blur(5px)',
          transition: 'filter 400ms, -webkit-filter 400ms'
        },
        '.blur-up.lazyloaded ': {
          WebkitFilter: 'blur(0)',
          filter: 'blur(0)'
        }
      }}
    />
  );
}
