'use client';

import { LoadingButton } from 'ui';
import { cva } from '../node_modules/ui/styled-system/css';
import { Stack } from '../node_modules/ui/styled-system/jsx';

const loadingButton = cva({
  base: {
    bg: { base: 'yellow', _hover: 'green' },
    flexShrink: 1,
    flexGrow: 0,
    minWidth: 0,
  },
});

export default function Page(): JSX.Element {
  return (
    <main>
      <Stack flexDirection="column-reverse">
        <div>Sample</div>

        <LoadingButton className={loadingButton()} dataTestId="plop" />
      </Stack>
    </main>
  );
}
