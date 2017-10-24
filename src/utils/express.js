import {
  loadTemplate,
  writeFile
} from './file';
import constants from './../constants/constants';
import { getActiveLogger } from '../utils/winston';

const log = getActiveLogger();

/**
 * Generate Express files - index.js and routes.js
 *
 * @param folderName
 */
export function createJsFiles(folderName) { // eslint-disable-line import/prefer-default-export
  log.verbose('creating javascript files for express', { folderName });

  writeFile(
    `${folderName}/src/${constants.express.index.fileName}`,
    loadTemplate('./../../templates/js/express/index.js')
  );
  writeFile(
    `${folderName}/src/${constants.express.routes.fileName}`,
    loadTemplate('./../../templates/js/express/routes.js')
  );
}
