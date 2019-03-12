# Store Manager

[![Build Status](https://travis-ci.org/Qadriyah/sm-frontend.svg?branch=develop)](https://travis-ci.org/Qadriyah/sm-frontend)
[![Maintainability](https://api.codeclimate.com/v1/badges/9fee9fdad2226249f486/maintainability)](https://codeclimate.com/github/Qadriyah/sm-frontend/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/9fee9fdad2226249f486/test_coverage)](https://codeclimate.com/github/Qadriyah/sm-frontend/test_coverage)

Store Manager is a web application that helps store owners manage sales and product inventory  records. This application is meant for use in a single store.

## Getting Started

These instrauctions will get you a copy of the project up and runnig on your local machine for development and testing purposes.

### Prerequisites

You need `git` to get started.
Download and install a copy of [ git ](https://git-scm.com/downloads) for your operating system

## Installation

Run the following commands from the terminal to install the project on your local machine

```
git clone https://github.com/Qadriyah/sm-frontend.git

npm install

Create a .env file
PORT: 3000
HOST: Server address
```

### Production ready code for the UI

```
https://github.com/Qadriyah/sm-frontend
```

## Runing the tests

The following command runs all tests and generates a coverage report

```
npm test
```

## Running selective tests

Tests are separated into different modules, the following commands run tests selectively

```
npm test __tests__/actions
npm test __tests__/components
npm test __tests__/reducers
npm test __tests__/utils
```

## List of endpoint implemented

| Method | Route                                     | Description             |
| ------ | ----------------------------------------- | ----------------------- |
| POST   | /api/v1/products                          | Add product             |
| GET    | /api/v1/products                          | Get all products        |
| GET    | /api/v1/products/&lt;productId&gt;        | Get product by Id       |
| POST   | /api/v1/login                             | Login user              |
| DELETE | /api/v1/products/delete/&lt;productId&gt; | Delete specific product |
| POST   | /api/v1/products/edit                     | Edit product details    |

## Built With

- HTML - The markup language
- CSS - Used to describe how html elements are displayed
- Bootstrap - CSS framework
- ReactJS - Frontend framework

## Links

- [herouk](https://sm-frontend-app.herokuapp.com/)

## Usage

### Default admin login details

```
Username: admin
Password: admin
```

### Default attendant login details

```
Username:
Password:
```

## Author

```
Baker Sekitoleko
```

## Acknowledgements

- [The Andela Community](https://andela.com/)
- [Google](https://www.google.com)
- Team Valkyrie
- Ephraim A. Malinga
