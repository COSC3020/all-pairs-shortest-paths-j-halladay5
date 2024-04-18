function allPairsShortestPath(graph)
{
    var dist = [];
    for(let x = 0; x<graph.length; x++)
    {
        dist[x] = new Array(graph.length).fill(Infinity);
        dist[x][x] = 0;
        for(let y = 0; y< graph.length;y++)
        {
            if(graph[x][y] != 0)
            {
                dist[x][y] = graph[x][y]
            }
        }
    }
    
    for(var k = 1; k< dist.length; k++)
    {
        for(var i = 0; i < dist.length; i++)
        {
            for (var j = 0; j < dist.length; j++)
            {
                if(dist[i][j] > dist[i][k] + dist[k][j])
                {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }
    return dist;
    
}

