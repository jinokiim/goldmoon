import { Box, InputBase, InputProps } from '@mui/material';
import { ChangeEvent } from 'react';
import { isFunction } from 'lodash';
import InfoIcon from '@/src/assets/icons/info_icon';
import EmptySearchIcon from '@/src/assets/icons/empty_search_icon';
import { alpha, styled } from '@mui/system';

// ----------------------------------------------------------------------

interface SearchBarProps extends InputProps {
  placeholder: string;
  onIconClick?: () => void;
  onEmptySearchIconClick?: () => void;
  value: string;
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onPressEnter?: () => void;
  // toSearch?: boolean;
  // from?: 'advisor' | 'investment' | 'payment';
  // searchStyle?: string;
}

export function PaymentsInput(props: SearchBarProps) {
  const {
    placeholder,
    onIconClick = () => {},
    onEmptySearchIconClick = () => {},
    value,
    handleChange,
    onPressEnter = () => {},
    sx
  } = props;

  return (
    <Box sx={{ mx: 3, ...sx }}>
      <Search>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            width: '100%'
          }}
        >
          <InfoIcon onClick={onIconClick} sx={{ lineHeight: '0' }} />
          <InputBase
            placeholder={placeholder}
            onChange={handleChange}
            onKeyPress={(ev) => {
              if (ev.key === 'Enter') {
                onPressEnter();
                ev.preventDefault();
              }
            }}
            value={value}
            sx={{ ml: 1, width: '100%', fontSize: '15px' }}
          />
          {isFunction(onEmptySearchIconClick) && value !== '' && (
            <EmptySearchIcon onClick={onEmptySearchIconClick} sx={{ lineHeight: '0' }} />
          )}
        </Box>
      </Search>
    </Box>
  );
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: '8px',
  backgroundColor: '#F3F3F5',
  marginLeft: 0,
  padding: '10px 20px',
  height: '48px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto'
  },
  borderColor: `${alpha('#919EAB', 0.24)} !important`
}));
