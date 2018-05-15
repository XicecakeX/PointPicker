This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#rerequisites)
- [How to Use](#how-to-use)

## Introduction

PointPicker is an application that utilizes the `React.js` and `Leaflet.js` libraries. Using a file with an array of several coordinates, PointPicker allows the user to select a start and end point from the list and displays them on a map.

## Prerequisites

A `points.js` file is needed to map all the points. The file consists of only an array of coordinates with the following attributes: latitude, longitude, and time. An example of a points file is displayed below:

### `points.js`

```js
module.exports = [
  {"latitude": 41.3709670, "longitude": -84.8859890, "time": "13:09:38 UTC"},
  {"latitude": 41.3711770, "longitude": -84.8859890, "time": "13:09:59 UTC"},
  {"latitude": 41.3713870, "longitude": -84.8859890, "time": "13:10:20 UTC"},
  {"latitude": 41.3715970, "longitude": -84.8859890, "time": "13:10:41 UTC"},
]
```

## How to Use
