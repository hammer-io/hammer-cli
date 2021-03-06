[![Build Status](https://travis-ci.org/hammer-io/tyr.svg?branch=master)](https://travis-ci.org/hammer-io/tyr)
[![codecov](https://codecov.io/gh/hammer-io/tyr/branch/master/graph/badge.svg)](https://codecov.io/gh/hammer-io/tyr)
[![npm version](https://badge.fury.io/js/tyr-cli.svg)](https://badge.fury.io/js/tyr-cli)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fhammer-io%2Ftyr.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fhammer-io%2Ftyr?ref=badge_shield)
[![Gitter chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/hammer-io1)

# tyr

A CLI tool to scaffold Node.js microservice applications with DevOps capabilities. It
takes an opinionated approach, meaning we've done the homework and start you off with
what we think are the best tools for a small team creating a new open-source project. Upon
running the CLI, it will ask you a series of questions and use the answers to do the
following:

- generate a new Node.js project,
- add testing, web, and orm frameworks,
- setup Skadi, our data monitoring library,
- initialize and push the code to a new GitHub repository,
- establish a continuous integration environment,
- build a container for the code, and
- deploy the app container to a cloud service.

The goal is to save you time and headaches and get you started developing code faster.


## Getting Started

### Prerequisites

Before you can use Tyr, you need to make sure you've done the following:

1. Create a [GitHub](https://github.com/) account. At this current stage of development,
   GitHub is the default version control platform for storing and managing your code.
2. Ensure that you linked your TravisCI account to your GitHub account.   
3. Create a [Heroku](https://signup.heroku.com/) account. At this current stage of development, Heroku is the default web hosting service. 
4. After creating a Heroku account, find your API key [here](https://dashboard.heroku.com/account). Make sure to copy it as you'll need it to sign in to Heroku. 

### Installation

```bash
npm install --global tyr-cli
```


## Usage

```bash
tyr [OPTIONS]
```

### Options:
* `-V, --version`    output the version number
* `--config <file>`  configure project from configuration file
* `--logfile <file>` the filepath that logs will be written to
* `-h, --help`       output usage information

## Configuration File
### Project Configurations
| Name          | Required | Note                                                                           |
|---------------|----------|--------------------------------------------------------------------------------|
| `projectName` | Yes      | Must be a valid directory name and cannot be a directory that already exists.  |
| `description` | Yes      |                                                                                |
| `version`     | No       | Must match `(number)(.number)*`                                                |
| `author`      | No       | For multiple authors, use comma separated values                               |
| `license`     | No       |                                                                                |

### Tooling Choices
| Name               | Required | Description                                    | Valid Choices         |
|--------------------|----------|------------------------------------------------|-----------------------|
| `ci`               | Yes      | The Continuous Integration Tool you want to use | `<None>`, `TravisCI`  |
| `containerization` | Yes      | The Containerization tool you want to use      | `<None>`, `Docker`    |
| `deployment`       | Yes      | The deployment tool you want to use            | `<None>`, `Heroku`    |
| `sourceControl`    | Yes      | The source control tool you want to use        | `<None>`, `GitHub`    |
| `web`              | Yes      | The web framework you want to use              | `<None>`, `ExpressJS` |
| `test`             | Yes      | The test framework you want to use             | `<None>`, `Mocha`      |
| `orm`              | Yes      | The Object-relational Mapping framework you want to use | `<None>`, `Sequelize` |


* If Source Control Choice is `<None>`, then CI Choice, Containerization Choice, and Deployment 
Choice must also be `<None>`.

* If CI Choice is `<None>`, then Containerization Choice and Deployment Choice must also be `<None>`.

* If Containerization Choice is `<None>`, then Deployment Choice must also be none. 

### File Format
```javascript
{
  projectConfigurations:
    {
      projectName: '{project name}',
      description: '{project description}',
      version: '{version number}',
      author: ['author1', 'author2', ...],
      license: '{license}'
    },
  toolingConfigurations:
    {
      sourceControl: '{source control choice}',
      ci: '{ci choice}',
      containerization: '{containerization choice}',
      deployment: '{deployment choice}',
      web: '{web framework choice}',
      test: '{test framework choice}',
      orm: '{orm framework choice}'
    }
}
```
### Using Tyr as a Library

| Api                                                | Description                                                                                                                                                                                                                                                                                                                                                         |
|----------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `async generateProject(configs)`                   | The configs json object should have the same format as the .tyrfile.  This method calls all the other API methods and does all the work to set up the project.  It will not throw an error though, if an error occurs.  The error will be written to the log.  See other API methods for greater descriptions of functionality.                                     |
| `async generateBasicNodeProject(configs, filePath)`| The configs json object should have the same format as the .tyrfile. The filePath is where the project will be created. This generates the most basic node files including <ul> <li>`/src`</li><li>`index.html`</li><li>`index.js`</li><li>`package.json`</li><li>`README`</li><li>`/config`</li></ul> It returns the configs object.                                                                       |
| `async setUpThirdPartyTools(configs)`              | The configs json object should have the same format as the .tyrfile. This function sets up the requested third-party applications for the new project.,This may take a few minutes if TravisCI is enabled while it waits for Travis to sync. If something goes wrong, an error will be thrown.                                                                      |
| `async generateStaticFiles(configs, filePath)`     | The configs json object should have the same format as the .tyrfile. The filePath is where the project will be created. Generates the static files necessary for third party applications.  This method is dependent on changes to herokuAppName which will be added to the configs after `setUpThirdPartyTools`. If something goes wrong, an error will be thrown. |
| `async commitToGithub(configs, filePath)`          | The configs json object should have the same format as the .tyrfile. The filePath is where the project will be created. This function initializes a local git repository, adds the project files, and then commits them to Github.  If something goes wrong, an error will be thrown.                                                                               |

## Contributing

Please see our [Contributing Guide](https://github.com/hammer-io/tyr/blob/master/CONTRIBUTING.md)
for contribution guidelines.

## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fhammer-io%2Ftyr.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fhammer-io%2Ftyr?ref=badge_large)

## Security Information Management Policy

In order to orchestrate the various third party applications for your
project, we will periodically ask for your username and password to
these applications. To find out more about how we use these credentials
and what steps we are taking to keep your information safe, please read
the [Security Information Management Policy](https://github.com/hammer-io/tyr/blob/master/SECURITY_INFORMATION_MANAGEMENT_POLICY.md).
