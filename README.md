This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#rerequisites)
- [How to Use](#how-to-use)

## Introduction

PointPicker is an application that utilizes the `React.js` and `Leaflet.js` libraries. Using a file with an array of several coordinates, PointPicker allows the user to select a start and end point from the list and displays them on a map.

## Prerequisites

A `points.js` file is needed to map all the points. The file consists of only an array of coordinates with the following attributes: latitude, longitude, and time. The file syntax is as follows:

### `points.js`

```js
module.exports = [
  {"latitude": ##.#######, "longitude": ##.#######, "time": "00:00:00 UTC"},
  {"latitude": ##.#######, "longitude": ##.#######, "time": "00:00:00 UTC"},
  {"latitude": ##.#######, "longitude": ##.#######, "time": "00:00:00 UTC"},
  {"latitude": ##.#######, "longitude": ##.#######, "time": "00:00:00 UTC"},
  {"latitude": ##.#######, "longitude": ##.#######, "time": "00:00:00 UTC"},
]
```

## How to Use
