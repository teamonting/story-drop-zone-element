/// <reference types="node" />

import { test } from 'node:test';
import { BrowserRun } from '@onting/for-jest';
import { fileURLToPath } from 'node:url';
import isCI from 'is-ci';

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
