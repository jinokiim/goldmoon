import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

// ---------------------------------------------------------

const { persistAtom } = recoilPersist();

export const authState = atom({
  key: 'auth',
  default: false,
  effects_UNSTABLE: [persistAtom]
});

export const memberState = atom({
  key: 'mamber-state',
  default: 'member',
  effects_UNSTABLE: [persistAtom]
});
