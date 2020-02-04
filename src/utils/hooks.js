import { useEffect } from 'react';

import { getUserToken } from './localStorage';

export const useAutoSignIn = authorizeRequest => useEffect(
  () => {
    const token = getUserToken();
    token && authorizeRequest(token);
  },
  [authorizeRequest]
);
