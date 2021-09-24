#!/usr/bin/env node


const fs = require('fs').promises;
const { dirname, join, resolve } = require('path');

async function* walk(dir) {
  for await (const d of await fs.opendir(dir)) {
    const entry = join(dir, d.name)
    if (d.isDirectory()) yield* walk(entry)
    else if (d.isFile()) yield entry
  }
}

async function runTestFile(file) {
  file = resolve(file);
  try {
    require(file);
  } catch (e) {
    console.error(e instanceof Error ? e.stack : e)
    process.exit(1);
  }
}

async function run(dir = '.') {
  if ((await fs.lstat(dir)).isFile()) {
    return runTestFile(dir)
  }
  for await (const file of walk(dir)) {
    if (!dirname(file).includes('node_modules') && file.endsWith('.test.js')) {
      await runTestFile(file)
    }
  }
}

void run(process.argv[2])