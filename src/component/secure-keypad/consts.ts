import { GridSize } from '@mui/material';

// ----------------------------------------------------------------------

export enum KeyTypes {
  Reset = 'RESET',
  Shift = 'SHIFT',
  Backspace = 'BACKSPACE',
  Symbols = 'SYMBOLS',
  Space = 'SPACE',
  Submit = 'SUBMIT',
  Blank = 'BLANK',
  Numeric = 'NUMERIC',
  Char = 'CHAR'
}

export interface Key {
  label: string;
  cols: GridSize;
  type: KeyTypes;
  symbol?: string;
  hangul?: string;
}

// ----------------------------------------------------------------------

export const nums: Key[] = [
  { label: '1', symbol: '!', cols: 1, type: KeyTypes.Numeric },
  { label: '2', symbol: '@', cols: 1, type: KeyTypes.Numeric },
  { label: '3', symbol: '#', cols: 1, type: KeyTypes.Numeric },
  { label: '4', symbol: '$', cols: 1, type: KeyTypes.Numeric },
  { label: '5', symbol: '%', cols: 1, type: KeyTypes.Numeric },
  { label: '', cols: 1, type: KeyTypes.Blank },
  { label: '6', symbol: '^', cols: 1, type: KeyTypes.Numeric },
  { label: '7', symbol: '&', cols: 1, type: KeyTypes.Numeric },
  { label: '8', symbol: '*', cols: 1, type: KeyTypes.Numeric },
  { label: '9', symbol: '(', cols: 1, type: KeyTypes.Numeric },
  { label: '0', symbol: ')', cols: 1, type: KeyTypes.Numeric }
];

export const keys: Key[] = [
  { label: 'q', symbol: '`', hangul: 'ㅂ', cols: 1, type: KeyTypes.Char },
  { label: 'w', symbol: '-', hangul: 'ㅈ', cols: 1, type: KeyTypes.Char },
  { label: 'e', symbol: '=', hangul: 'ㄷ', cols: 1, type: KeyTypes.Char },
  { label: 'r', symbol: '₩ ', hangul: 'ㄱ', cols: 1, type: KeyTypes.Char },
  { label: 't', symbol: '[', hangul: 'ㅅ', cols: 1, type: KeyTypes.Char },
  { label: 'y', symbol: ']', hangul: 'ㅛ', cols: 1, type: KeyTypes.Char },
  { label: 'u', symbol: ';', hangul: 'ㅕ', cols: 1, type: KeyTypes.Char },
  { label: 'i', symbol: "'", hangul: 'ㅑ', cols: 1, type: KeyTypes.Char },
  { label: 'o', symbol: ',', hangul: 'ㅐ', cols: 1, type: KeyTypes.Char },
  { label: 'p', symbol: '', hangul: 'ㅔ', cols: 1, type: KeyTypes.Char },
  { label: '', cols: 1, type: KeyTypes.Blank },
  { label: 'a', symbol: '.', hangul: 'ㅁ', cols: 1, type: KeyTypes.Char },
  { label: 's', symbol: '/', hangul: 'ㄴ', cols: 1, type: KeyTypes.Char },
  { label: 'd', symbol: '~', hangul: 'ㅇ', cols: 1, type: KeyTypes.Char },
  { label: 'f', symbol: '_ ', hangul: 'ㄹ', cols: 1, type: KeyTypes.Char },
  { label: 'g', symbol: '|', hangul: 'ㅎ', cols: 1, type: KeyTypes.Char },
  { label: 'h', symbol: '{', hangul: 'ㅗ', cols: 1, type: KeyTypes.Char },
  { label: 'j', symbol: '}', hangul: 'ㅓ', cols: 1, type: KeyTypes.Char },
  { label: 'k', symbol: '', hangul: 'ㅏ', cols: 1, type: KeyTypes.Char },
  { label: 'l', symbol: ':', hangul: 'ㅣ', cols: 1, type: KeyTypes.Char },
  { label: '', cols: 1, type: KeyTypes.Blank },
  { label: '', cols: 1, type: KeyTypes.Blank },
  { label: 'shift', cols: 1, type: KeyTypes.Shift },
  { label: 'z', symbol: '"', hangul: 'ㅋ', cols: 1, type: KeyTypes.Char },
  { label: 'x', symbol: '<', hangul: 'ㅌ', cols: 1, type: KeyTypes.Char },
  { label: 'c', symbol: '>', hangul: 'ㅊ', cols: 1, type: KeyTypes.Char },
  { label: 'v', symbol: '?', hangul: 'ㅍ', cols: 1, type: KeyTypes.Char },
  { label: 'b', symbol: '', hangul: 'ㅠ', cols: 1, type: KeyTypes.Char },
  { label: 'n', symbol: '', hangul: 'ㅜ', cols: 1, type: KeyTypes.Char },
  { label: 'm', symbol: '', hangul: 'ㅡ', cols: 1, type: KeyTypes.Char },
  { label: '', cols: 1, type: KeyTypes.Blank },
  { label: 'backspace', cols: 2, type: KeyTypes.Backspace }
];

export const buttons: Key[] = [
  { label: '재배열', cols: 2, type: KeyTypes.Reset },
  { label: 'A/@', cols: 2, type: KeyTypes.Symbols },
  { label: 'SPACE', cols: 4, type: KeyTypes.Space },
  { label: '완료', cols: 3, type: KeyTypes.Submit }
];

// Numpad

export const numpads: Key[] = [
  { label: '1', cols: 1, type: KeyTypes.Numeric },
  { label: '2', cols: 1, type: KeyTypes.Numeric },
  { label: '3', cols: 1, type: KeyTypes.Numeric },
  { label: '4', cols: 1, type: KeyTypes.Numeric },
  { label: '5', cols: 1, type: KeyTypes.Numeric },
  { label: '6', cols: 1, type: KeyTypes.Numeric },
  { label: '7', cols: 1, type: KeyTypes.Numeric },
  { label: '8', cols: 1, type: KeyTypes.Numeric },
  { label: '9', cols: 1, type: KeyTypes.Numeric },
  { label: '0', cols: 1, type: KeyTypes.Numeric },
  { label: '', cols: 1, type: KeyTypes.Blank },
  { label: '', cols: 1, type: KeyTypes.Blank }
];

export const numpadButtons: Key[] = [
  { label: '재배열', cols: 2, type: KeyTypes.Reset },
  { label: '', cols: 2, type: KeyTypes.Backspace },
  { label: '완료', cols: 3, type: KeyTypes.Submit }
];

export const inputNums: Key[] = [
  { label: '1', cols: 1, type: KeyTypes.Numeric },
  { label: '2', cols: 1, type: KeyTypes.Numeric },
  { label: '3', cols: 1, type: KeyTypes.Numeric },
  { label: '4', cols: 1, type: KeyTypes.Numeric },
  { label: '5', cols: 1, type: KeyTypes.Numeric },
  { label: '6', cols: 1, type: KeyTypes.Numeric },
  { label: '7', cols: 1, type: KeyTypes.Numeric },
  { label: '8', cols: 1, type: KeyTypes.Numeric },
  { label: '9', cols: 1, type: KeyTypes.Numeric },
  { label: '0', cols: 1, type: KeyTypes.Numeric },
  { label: '000', cols: 1, type: KeyTypes.Numeric },
  { label: '', cols: 1, type: KeyTypes.Backspace }
];
