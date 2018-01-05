import assert from 'assert';
import fs from 'fs-extra';

import {generateProject} from '../dist/tyr';

describe('Tyr Test', () => {

    // note: this test only tests if the proper files are generated and the right methods are called
    // functionality is tested in the individual service tests
    describe('generateProject()', () => {
      const noThirdPartyConfig = JSON.parse(fs.readFileSync('test/test-configurations/valid-project-configuration-no-third-party-services'));
      const projectName = noThirdPartyConfig.projectConfigurations.projectName;

      it('should generate a project without express', () => {

      });

      it('should generate a project with express', () => {

      });

      it('should generate a project with no third party services', async () => {
        await generateProject(noThirdPartyConfig);

        assert.equal(fs.existsSync(projectName), true, 'should create a top level folder with' +
          ' project name');

        assert.equal(fs.existsSync(projectName + '/src'), true, 'should create a src folder' +
          ' within the project folder');

        assert.equal(fs.existsSync(projectName + '/src/' + 'index.js'), true, 'should create an' +
          ' index.js file.');

        assert.equal(fs.existsSync(projectName + '/' + 'package.json'), true, 'should create a' +
          ' package.json file.');

        assert.equal(fs.existsSync(projectName + '/' + 'README.md'), true, 'should create a' +
          ' README.md file.');

        assert.equal(fs.existsSync(projectName + '/' + 'test.js'), true, 'should create a' +
          ' test.js file.');

        assert.equal(fs.existsSync(projectName + '/node_modules'), true, 'should run NPM install,' +
          ' thus creating a node_modules folder');

        assert.equal(fs.existsSync(projectName + '/package-lock.json'), true, 'should run NPM' +
          ' install, thus creating a package-lock.json file');

        assert.equal(fs.existsSync(projectName + '/.tyrfile'), true, 'should create a .tyrfile');
      }).timeout(10000);

      afterEach(() => {
        fs.removeSync(projectName);
      })
    });
});