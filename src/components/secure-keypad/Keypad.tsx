import { SxProps, Theme } from '@mui/system';
import PinKeypad from './Pin';
import QwertyKeypad from './Qwerty';
import Drawer from '../Drawer';
import useCustomKeypad from '@/src/hooks/useCustomKeypad';

// ----------------------------------------------------------------------

interface Props {
  type: 'pin' | 'qwerty';
  onSubmit: () => void;
  maxInputSize?: number;
  onReset?: () => void;
  pinStyles?: SxProps<Theme> | undefined;
  shouldReset?: boolean;
}

export default function SecureKeypad(props: Props) {
  const { isKeypadOpen, onHideKeypad } = useCustomKeypad();
  const { type, onSubmit, onReset, maxInputSize = 6, shouldReset = true, pinStyles = {} } = props;

  return (
    <Drawer
      variant="persistent"
      sx={{
        pb: 0
      }}
      hideBackdrop
      open={isKeypadOpen}
      setOpen={onHideKeypad}
    >
      <>
        {type === 'qwerty' && <QwertyKeypad onSubmit={onSubmit} />}
        {type === 'pin' && (
          <PinKeypad
            styles={pinStyles}
            shouldReset={shouldReset}
            onSubmit={onSubmit}
            onReset={onReset}
            maxInputSize={maxInputSize}
          />
        )}
      </>
    </Drawer>
  );
}
