import { ReactElement } from 'react';
import { Box, Button, Typography, Toolbar, IconButton, Menu, MenuItem } from '@mui/material';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import {
  // ChevronLeft,
  Logout as LogoutIcon,
  Close as CloseIcon
  // MoreVert as MoreIcon,
  // Refresh
} from '@mui/icons-material';

import { isFunction } from 'lodash';
import { COLORS } from '@/palette';
import React from 'react';
import ArrowBackHeader from '../assets/icons/arrow_back_header';
import NotificationIcon from '../assets/icons/notification_icon';
import NotificationHeaderIcon from '../assets/icons/notification_header_icon';
import NotificationSettingsIcon from '../assets/icons/notification_settings_icon';
import SettingIcon from '../assets/icons/settings_icon';
import PlusIcon from '../assets/icons/plus';
import FAQButton from '../assets/icons/fn_qa_btn';
import RefreshIcon from '../assets/icons/refresh_icon_dashboard';
import MoreIconHeader from '../assets/icons/more_icon_header';

// ----------------------------------------------------------------------

interface Props {
  title?: string;
  titleAlign?: 'left' | 'center' | 'right';
  leftPos?: string | number;
  minHeight?: string | number;
  showLogo?: boolean;
  backgroundColor?: string;
  color?: string;
  subTitle?: string;
  onPrev?: () => void;
  onPrevText?: string;
  onLogout?: () => void;
  onNotify?: () => void;
  onNotifyAlt?: () => void;
  onNotifySettings?: () => void;
  onSettings?: () => void;
  onClose?: () => void;

  onRefreshText?: string;
  onRefresh?: () => void;
  isRefreshing?: boolean;

  onMore?: (...args: any[]) => void;
  onUpdate?: () => void;
  onFAQ?: () => void;
  onBookmark?: () => void;
  onDownload?: () => void;
  onManage?: () => void;
  clickText?: { text: string; onClick: () => void };
  onAdd?: () => void;

  moreOptions?: { name: string; id: string; onClick: (id: string) => void }[];
}

export default function AppHeader(props: Props): ReactElement {
  const {
    title,
    titleAlign = 'center',
    leftPos = '0',
    minHeight = '44px',
    showLogo = false,
    onPrev,
    onPrevText,
    onLogout,
    onNotify,
    onNotifyAlt,
    onNotifySettings,
    onSettings,
    onClose,
    onManage,
    onFAQ,
    onBookmark,
    onDownload,
    onMore,
    onAdd,
    moreOptions,
    onUpdate,
    onRefreshText,
    onRefresh,
    isRefreshing = false,
    backgroundColor = COLORS.white,
    color = COLORS.black,
    subTitle,
    clickText
  } = props;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Toolbar sx={{ backgroundColor: backgroundColor, color: color, minHeight: minHeight }}>
      {isFunction(onPrev) && (
        <IconButton
          onClick={onPrev}
          edge="start"
          color="inherit"
          sx={{ ml: '-6px', zIndex: 100, ':hover': { backgroundColor: 'transparent' } }}
          data-cy="back-btn"
        >
          <ArrowBackHeader />
        </IconButton>
      )}
      {/* {isFunction(onRefresh) && (
        <IconButton
          onClick={onRefresh}
          edge="start"
          color="inherit"
          sx={{ mr: 'auto', zIndex: 100 }}
        >
          <Refresh />
        </IconButton>
      )} */}

      {onPrevText && (
        <Box
          sx={{
            position: 'absolute',
            left: 50,
            right: 0
          }}
        >
          <Typography variant="h6">{onPrevText}</Typography>
        </Box>
      )}

      <Box
        sx={{
          position: 'absolute',
          left: leftPos,
          right: 0,
          textAlign: titleAlign,
          px: 3
        }}
      >
        {title && (
          <Typography variant="h6" sx={{ mx: 3 }}>
            {title}
          </Typography>
        )}
        {subTitle && <Typography variant="subtitle2">{subTitle}</Typography>}
      </Box>
      <Box sx={{ ml: 'auto' }} />

      {isFunction(onNotify) && (
        <IconButton sx={{ ml: 1, zIndex: 100 }} edge="start" color="inherit" onClick={onNotify}>
          <NotificationIcon />
          {/* <NotificationsActive /> */}
        </IconButton>
      )}
      {isFunction(onNotifyAlt) && (
        <IconButton sx={{ ml: 1, zIndex: 100 }} edge="start" color="inherit" onClick={onNotifyAlt}>
          <NotificationHeaderIcon />
        </IconButton>
      )}
      {isFunction(onNotifySettings) && (
        <IconButton
          sx={{ ml: 1, zIndex: 100 }}
          edge="start"
          color="inherit"
          onClick={onNotifySettings}
        >
          <NotificationSettingsIcon />
        </IconButton>
      )}
      {isFunction(onSettings) && (
        <IconButton sx={{ ml: 1, zIndex: 100 }} edge="start" color="inherit" onClick={onSettings}>
          <SettingIcon />
        </IconButton>
      )}
      {isFunction(onLogout) && (
        <IconButton sx={{ ml: 1, zIndex: 100 }} edge="start" color="inherit" onClick={onLogout}>
          <LogoutIcon />
        </IconButton>
      )}
      {isFunction(onClose) && (
        <IconButton
          sx={{
            ml: 1,
            zIndex: 100,
            '&:hover': {
              backgroundColor: 'transparent'
            }
          }}
          edge="start"
          color="inherit"
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      )}
      {isFunction(onAdd) && (
        <IconButton
          sx={{ ml: 1, mr: -1.5, zIndex: 100 }}
          edge="start"
          color="inherit"
          onClick={onAdd}
        >
          <PlusIcon />
        </IconButton>
      )}
      {isFunction(onFAQ) && (
        <IconButton
          sx={{
            ml: 1,
            zIndex: 100,
            '&:hover': {
              backgroundColor: 'transparent'
            }
          }}
          edge="start"
          color="inherit"
          onClick={onFAQ}
        >
          <FAQButton />
        </IconButton>
      )}
      {isFunction(onBookmark) && (
        <IconButton
          sx={{
            ml: 1,
            zIndex: 100,
            '&:hover': {
              backgroundColor: 'transparent'
            }
          }}
          edge="start"
          color="inherit"
          onClick={onBookmark}
        >
          <BookmarksOutlinedIcon />
        </IconButton>
      )}
      {isFunction(onManage) && (
        <Button
          sx={{
            ml: 1,
            zIndex: 100,
            color: COLORS.primary500,
            ':hover': { backgroundColor: 'transparent' }
          }}
          variant="text"
          onClick={onManage}
        >
          관리
        </Button>
      )}
      {isFunction(onUpdate) && (
        <Button sx={{ ml: 1, zIndex: 100 }} color="primary" variant="text" onClick={onUpdate}>
          수정
        </Button>
      )}
      {isFunction(clickText?.onClick) && clickText?.text && (
        <Button
          sx={{ mr: -2, zIndex: 100 }}
          color="primary"
          variant="text"
          onClick={clickText.onClick}
        >
          {clickText.text}
        </Button>
      )}
      {isFunction(onRefresh) && (
        <>
          {onRefreshText && (
            <Typography
              sx={{ width: '100%', textAlign: 'right', fontSize: '13px', fontWeight: '400' }}
            >
              {onRefreshText}
            </Typography>
          )}
          <IconButton
            onClick={onRefresh}
            edge="start"
            color="inherit"
            sx={{ p: 0, ml: 1, zIndex: 1200 }}
          >
            {/* <Refresh /> */}
            <RefreshIcon isRefreshing={isRefreshing} />
          </IconButton>
        </>
      )}
      {(isFunction(onMore) || moreOptions) && (
        <IconButton
          sx={{
            ml: 1,
            zIndex: 100,
            '&:hover': {
              backgroundColor: 'transparent'
            }
          }}
          edge="start"
          color="inherit"
          onClick={moreOptions ? handleClick : onMore}
        >
          {/* <MoreIcon /> */}
          <MoreIconHeader />
        </IconButton>
      )}

      {moreOptions && (
        <Menu
          MenuListProps={{
            'aria-labelledby': 'long-button'
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          sx={{ borderRadius: '4px' }}
        >
          {moreOptions.map((option) => (
            <MenuItem
              sx={{
                '&.MuiMenuItem-root': {
                  px: 2,
                  height: '36px',
                  '&:active': {
                    color: 'inherit',
                    backgroundColor: COLORS.neutral2
                  },
                  '&:hover': {
                    color: 'inherit',
                    backgroundColor: COLORS.neutral2
                  }
                }
              }}
              key={option.id}
              onClick={() => option.onClick(option.id)}
            >
              {option.name}
            </MenuItem>
          ))}
        </Menu>
      )}
    </Toolbar>
  );
}
