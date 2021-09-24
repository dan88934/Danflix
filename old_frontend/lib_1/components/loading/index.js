import React from 'react';
import { LockBody, ReleaseBody, Spinner, Picture } from './styles/loading';
export default function Loading({
  src,
  ...restProps
}) {
  return dom(Spinner, restProps, dom(LockBody, null), dom(Picture, {
    src: `/images/users/${src}.png`,
    "data-testid": "loading-picture"
  }));
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return dom(ReleaseBody, null);
};