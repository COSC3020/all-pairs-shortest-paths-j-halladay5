const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

//graph with no edges
var graph1 = [
  [0,0,0],
  [0,0,0],
  [0,0,0],
];
assert(JSON.stringify(allPairsShortestPath(graph1)) == JSON.stringify([[0, Infinity, Infinity],
                                                                      [Infinity, 0, Infinity],
                                                                      [Infinity, Infinity, 0]]));

//directed all connecting
var graph2 = [
  [0,4,5,0,0],
  [0,0,0,2,6],
  [1,0,0,0,0],
  [0,0,3,0,1],
  [0,0,0,1,0]
];
assert(JSON.stringify(allPairsShortestPath(graph2)) == JSON.stringify([[0,4,5,6,7],
                                                                       [6,0,5,2,3],
                                                                       [1,5,0,7,8],
                                                                       [4,8,3,0,1],
                                                                       [5,9,4,1,0]]));

//directed not all connnected
var graph3 = [
  [0,4,5,0,0],
  [0,0,0,2,6],
  [1,0,0,0,0],
  [0,0,3,0,1],
  [0,0,0,0,0]
];
assert(JSON.stringify(allPairsShortestPath(graph3)) == JSON.stringify([[0,4,5,6,7],
                                                                       [6,0,5,2,3],
                                                                       [1,5,0,7,8],
                                                                       [4,8,3,0,1],
                                                                       [Infinity, Infinity, Infinity, Infinity,0]]));

//undirected not all connecting
var graph4 = [
    [0,2,3,0,6],
    [2,0,3,1,0],
    [3,3,0,8,0],
    [0,1,8,0,4],
    [6,0,0,4,0]
    ];
assert(JSON.stringify(allPairsShortestPath(graph4)) == JSON.stringify([[0,2,3,3,6],
                                                                       [2,0,3,1,5],
                                                                       [3,3,0,4,8],
                                                                       [3,1,4,0,4],
                                                                       [6,5,8,4,0]]));


//undirected all connecting
var graph5 = [
    [0,2,3,0,0],
    [2,0,3,1,0],
    [3,3,0,8,0],
    [0,1,8,0,0],
    [0,0,0,0,0]
    ];
assert(JSON.stringify(allPairsShortestPath(graph5)) == JSON.stringify([[0,2,3,3,Infinity],
                                                                       [2,0,3,1,Infinity],
                                                                       [3,3,0,4,Infinity],
                                                                       [3,1,4,0,Infinity],
                                                                       [Infinity,Infinity, Infinity, Infinity, 0]]));
