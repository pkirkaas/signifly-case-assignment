/**
 * Initializations for signifly-case-assignment
 */

import { getDirname, slashPath } from 'pk-ts-sqlite-lib';
export const projectDir = getDirname(import.meta.url, '..');
export * from   'pk-ts-sqlite-lib';