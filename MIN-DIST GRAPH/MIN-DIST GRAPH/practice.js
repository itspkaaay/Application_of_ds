function create_graph(V,E)
{
    // V is the number of vertices 
    // E is the graph

    adj_mat= [];
    for(let i =0;i<V;i++)
    {
        adj_mat.push([]);
    }

    for (let i =0;i<E.length;i++)
    {
        adj_mat[E[i][0]].push([E[i][1],E[i][2]]);
        adj_mat[E[i][1]].push([E[i][0],E[i][2]]);
    }
    return adj_mat;

}

function djikstras(adj_mat,src,V)
{
    let visited= Array(9).fill(false);
    dist=[];
    visited[src]= true;
    for(let i=0;i<V;i++)
    {
        dist.push([1000,-1]);
    }
    dist[src][0]=0;

    for( let i =0;i< adj_mat[src].length;i++)
    {
        
        let edge= adj_mat[src][i];
        let neighbour= edge[0];
        let edge_len= edge[1];

        dist[neighbour][0]= edge_len;
        dist[neighbour][1]=src;
       
    }

    for(let i =0;i<V-1;i++)
    {
       
        let minIndex=-1;
        for(let j=0;j<V;j++)
        {
            if(visited[j]===false && (minIndex===-1 || dist[j][0]<dist[minIndex][0]))
            {
                minIndex=j;
            
            }
        }
        if(minIndex!=-1){
        visited[minIndex]=true;
        }
   

        for(let j=0;j<adj_mat[minIndex].length;j++)
        {
            let edge= adj_mat[minIndex][j];
            let neigh= edge[0];
            let nd=edge[1];
            if(visited[neigh]===false)
            {
                if(dist[neigh][0]>dist[minIndex][0]+nd){
                    dist[neigh][0]=dist[minIndex][0]+nd;
                    dist[neigh][1]=minIndex;
                }
            }
        }
    }

    



return dist;
};




//     return distance_mat;


const V=9;
 E=[[0,1,4], [0,7,8], [1,7,11], [1,2,8], [7,8,7], [6,7,1], [2,8,2],
 [6,8,6], [5,6,2], [2,5,4], [2,3,7], [3,5,14], [3,4,9], [4,5,10]];

adj_mat=create_graph(V,E);

src=0;
//console.log("adj mat-",adj_mat);
distance= djikstras(adj_mat,src,V);
// console.log(adjacency_mat);
// Testing the creation of graphs
//console.log(adj_mat);
//console.log(matrix);

//console.log("distance->",distance);

//console.log(adj_mat[0]);
//console.log(adj_mat[0][1][1]);
console.log(dist);



