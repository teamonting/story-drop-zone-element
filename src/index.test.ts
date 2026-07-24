/// <reference types="node" />

import { BrowserRun } from '@onting/harness';
import isCI from 'is-ci';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';

test('drag the photo into the drop zone', async () => {
  const run = new BrowserRun(new URL('test.html', isCI ? 'http://web/' : 'http://localhost:3000/').href, {
    testFilePath: fileURLToPath(import.meta.url),
    ...(isCI ? { webDriverURL: 'http://localhost:4444/wd/hub' } : {})
  });

  await run.promise;
});
