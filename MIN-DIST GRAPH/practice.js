function create_graph(V,E)
{
    // V is the number of vertices 
    // E is the graph

    adjacency_mat= [];
    for(let i=0;i<V;i++)
    {
        adjacency_mat[i]=[];
    }

    for(let i =0;i< E.length;i++)
    {

         adjacency_mat[E[i][0]-1].push([E[i][1]-1,E[i][2]]);
    }

}

const V=5;
// E=[[1,2,3],[1,4,2],[4,3,3],[3,5,1]];
// create_graph(V,E);
// console.log(adjacency_mat);
// Testing the creation of graphs

