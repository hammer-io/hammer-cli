/* eslint-disable import/prefer-default-export */
import fs from 'fs';
import * as file from './../utils/files/file';

/**
 * Generate the files needed for supporting the express framework. This includes the index.html
 * file, the index.js file, and the routes.js file. It also updates the package.json file by
 * adding express as a dependency.
 * @returns {Promise<void>}
 */
export async function generateExpressFiles(projectName) {
  const path = `${projectName}/src/`;

  // generate the index.html file
  const indexHTMLContents = file.loadTemplate('./../../../templates/express/index.html');
  file.writeFile(`${path}/index.html`, indexHTMLContents);

  // generate the index.js file
  const indexJSContents = file.loadTemplate('./../../../templates/express/index.js');
  file.writeFile(`${path}/index.js`, indexJSContents);

  // generate the routes.js file
  const routesJSContents = file.loadTemplate('./../../../templates/express/routes.js');
  file.writeFile(`${path}/routes.js`, routesJSContents);

  // add express.js as a dependency to the package.json
  let projectPackageJson = file.readFile(`${projectName}/package.json`);
  projectPackageJson = JSON.parse(projectPackageJson);
  projectPackageJson.dependencies.express = '4.16.0';
  projectPackageJson = JSON.stringify(projectPackageJson);
  fs.unlinkSync(`${projectName}/package.json`);
  file.writeFile(`${projectName}/package.json`, projectPackageJson);
}