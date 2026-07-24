/// <reference types="node" />

import { BrowserRun } from '@onting/harness';
import isCI from 'is-ci';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';

test('drag the photo into the drop zone', async () => {
  const run = isCI
    ? new BrowserRun('http://web/test.html', {
        testFilePath: fileURLToPath(import.meta.url),
        webDriverURL: 'http://localhost:4444/wd/hub'
      })
    : new BrowserRun('http://localhost:3000/test.html', {
        testFilePath: fileURLToPath(import.meta.url)
      });

  await run.promise;
});
