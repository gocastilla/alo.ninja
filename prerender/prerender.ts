import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { enableProdMode } from '@angular/core';
const minify = require('html-minifier').minify;

import { renderModuleFactory } from '@angular/platform-server';
import { writeFileSync } from 'fs';
import * as path from 'path';
import * as fs from 'fs';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

import { AppServerModuleNgFactory, LAZY_MODULE_MAP } from '../dist/ssrtest-server/main';

const distFolder = '.';
const index = fs.readFileSync(path.resolve(__dirname, `${distFolder}/ssrtest/index.html`)).toString();

enableProdMode();

renderModuleFactory(AppServerModuleNgFactory, {
  document: index,
  extraProviders: [provideModuleMap(LAZY_MODULE_MAP)]
}).then(html => {
  writeFileSync('./dist/ssrtest/prerender.html', minify(html));
  try {
    fs.unlinkSync(path.resolve(__dirname, `${distFolder}/ssrtest/index.html`));

    fs.rename(
      path.resolve(__dirname, `${distFolder}/ssrtest/prerender.html`),
      path.resolve(__dirname, `${distFolder}/ssrtest/index.html`),
      err => {
        if (err) {
          throw err;
        }
        console.log('renamed complete');
      }
    );
  } catch (err) {
    console.error(err);
  }
});
