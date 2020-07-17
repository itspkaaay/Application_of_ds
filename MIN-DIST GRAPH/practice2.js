onload = function(){

    //const left= document.getElementById('left')
    const map1= document.getElementById('map1');
    const gen_new_btn= document.getElementById('create_graph');
    const solve_graph= document.getElementById('solve_graph');
    
    options={

        autoResize: true,
            edges: {
                //labelHighlightBold: true,
                font: {
                    size: 20
                }
            },
            nodes: {
                font: '12px arial red',
                scaling: {
                    label: true
                },
                shape: 'icon',
                icon: {
                    face: 'FontAwesome',
                    code: '\uf015',
                    size: 40,
                    color: '#991133',
                }
            }

    }
    ///// initialising the network


    function create_data(){
        const network = new vis.Network(map1);
        const cities= ["Delhi","Gurgaon","Chennai","Mumbai","Goa","Ahmedabad","Bangalore","Kolkata","Bihar","Ladakh"];
        let V=[];
        for(let i=0;i<cities.length;i++)
        {
            V.push({id:i,label:cities[i]});
        }
        let nE= Math.floor(Math.random()*cities.length)+cities.length;
        console.log("nE->",nE);
        let E=[];
        for(let i=1;i<nE;i++)
        {
            let dist= Math.floor(Math.random()*50)+50;
            let src= Math.floor((Math.random()*i)%cities.length);
            let neigh= Math.floor(Math.random()*(i+1))%cities.length;
            while(src===neigh)
            {
                //src= Math.floor(Math.random()*cities.length);
                neigh= Math.floor(Math.random()*cities.length);
            }
           // console.log("src-",src,"  dest-",neigh,"     dist-",dist);
            E.push({from:src, to:neigh, label: String(dist) });
        }

        const data={
            nodes : V,
            edges : E,
        }
        
        network.setOptions(options);
        network.setData(data);
        
        return data;
    }

    gen_new_btn.onclick = function () {
        
        data = create_data();                     ///// creates and displays the graph
        
    };

    function create_graph(V,E)
    {
    // V is the number of vertices 
    // E is the graph
    console.log("in create graph method");
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

    };
    
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


    //// src condition dealt with
    for( let i =0;i< adj_mat[src].length;i++)
    {
        
        let edge= adj_mat[src][i];
        let neighbour= edge[0];
        let edge_len= edge[1];

        dist[neighbour][0]= Math.min(dist[neighbour][0],edge_len);
        dist[neighbour][1]=src;
       
    }
    /// find min index
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
      
        visited[minIndex]=true;
        
   
        console.log("exploring neighbour when min index node is-",minIndex);


        /// exploring neighbours of minimum index node
        if(minIndex!=-1){
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
    }

    



return dist;
    };


    
    function solve(){
        let n= data['nodes'];
        let e= data['edges'];

        edge_list=[];
        for(let i =0;i<e.length;i++)
        {
            let curr_edge= e[i];
            let n1= curr_edge['from'];
            let n2= curr_edge['to'];
            let d1_2= parseInt(curr_edge['label']);
            edge_list.push([n1,n2,d1_2]);
        }
       // console.log("button->",edge_list);

        adj_mat=create_graph(n.length,edge_list);
        //console.log("adj mat-",adj_mat);

        return djikstras(adj_mat,0,n.length);






    };
    
    solve_graph.onclick = function(){
        d_mat=solve();
        console.log("distance_mat obtained->",d_mat);
    }
 
    
};



