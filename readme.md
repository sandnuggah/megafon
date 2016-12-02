# Megafon
[![Anarchism](https://img.shields.io/badge/anarchism-Ⓐ-000000.svg)](https://en.wikipedia.org/wiki/Anarchism)
[![Communism](https://img.shields.io/badge/communism-☭-ff0000.svg)](https://en.wikipedia.org/wiki/Communism)
[![Socialism](https://img.shields.io/badge/socialism-★-ff0000.svg)](https://en.wikipedia.org/wiki/Socialism)
![Ideology passing](https://img.shields.io/badge/ideology-passing-brightgreen.svg)


## Prerequisites
+ `docker`
+ `docker-compose`

## Installation
+ `cd api; npm install`
+ `cd browser; npm install`
+ `$ docker-compose up`
+ `$ open http://localhost:5000`

Note: Since the local filesystem is mounted on top of the container filesystem you must `npm install` the node modules locally ([better answer](https://github.com/revinfrastruct/megafon/issues/4)).
