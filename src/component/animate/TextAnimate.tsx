import { motion, MotionProps } from 'framer-motion';
// material
import { Box, BoxProps } from '@mui/material';
//
import { varFadeInUp } from './variants';

// ----------------------------------------------------------------------

type Props = BoxProps & MotionProps;

interface TextAnimateProps extends Props {
  text: string;
}

export default function TextAnimate({ text, variants, sx, children, ...other }: TextAnimateProps) {
  return (
    <Box
      component={motion.h1}
      sx={{
        typography: 'h1',
        overflow: 'hidden',
        display: 'inline-flex',
        ...sx
      }}
      {...other}
    >
      <motion.span variants={variants || varFadeInUp}>{children}</motion.span>
      {text.split('').map((letter, index) => (
        <motion.span key={index} variants={variants || varFadeInUp}>
          {letter}
        </motion.span>
      ))}
    </Box>
  );
}
