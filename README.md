[![Build Status](https://travis-ci.org/hammer-io/tyr.svg?branch=master)](https://travis-ci.org/hammer-io/tyr)

# tyr

A CLI tool to scaffold Node.js microservice applications with DevOps capabilities. It
takes an opinionated approach, meaning we've done the homework and start you off with
what we think are the best tools for a small team creating a new open-source project. Upon
running the CLI, it will ask you a series of questions and use the answers to do the
following:

- generate a new Node.js project,
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
2. Create a [Docker Hub](https://hub.docker.com/) account. Docker is used to create a
   container for the application for deployment, and Docker Hub is used in the process
   of deploying the app container.

### Installation

```bash
npm install --global tyr-cli
```


## Usage

```bash
tyr [OPTIONS]
```

### Options:
* `-h, --help`       output usage information
* `--config <file>`  configure project from configuration file

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


* If Source Control Choice is `<None>`, then CI Choice, Containerization Choice, and Deployment 
Choice must also be `<None>`.

* If CI Choice is `None>`, then Containerization Choice and Deployment Choice must also be `<None>`.

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
  tooling:
    {
      sourceControl: '{source control choice}',
      web: '{web framework choice}',
      ci: '{ci choice}',
      containerization: '{containerization choice}',
      deployment: '{deployment choice}'
    }
}
```


## Contributing

Please see our [Contributing Guide](https://github.com/hammer-io/tyr/blob/master/CONTRIBUTING.md)
for contribution guidelines.
