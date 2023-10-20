import { useState } from 'react';
import { cva, cx } from '../../../../styled-system/css';

const loadingButtonFromLib = cva({
  base: {
    cursor: 'col-resize',
    color: 'red',
  },
});

export function LoadingButton(props: {
  onClick: () => Promise<void>;
  className: string;
}) {
  const [loading, setLoading] = useState(false);
  const toggleLoading = () => setLoading(!loading);

  console.info('loading:', loading);

  return (
    <button
      className={cx(props.className, loadingButtonFromLib())}
      disabled={loading}
    >
      CLICK ME {loading ? 'loading' : 'not loading'}
    </button>
  );
}
