onload = function(){


    const container= document.getElementById('div1');
    const gen_new_btn= document.getElementById('create_graph');

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
    const network = new vis.Network(container);
    network.setOptions(options);



    function create_data(){
        const cities= ["Delhi","Gurgaon","Chennai","Mumbai","Goa","Ahmedabad","Bangalore","Kolkata","Bihar","Ladakh"];
        let V=[];
        for(let i=0;i<cities.length;i++)
        {
            V.push({id:i,label:cities[i]});
        }
        let nE= Math.random()*cities.length+4;
        let E=[];
        for(let i=1;i<nE;i++)
        {
            let dist= Math.floor(Math.random()*50)+50;
            let neigh= Math.floor(Math.random()*i);
            E.push({from:i, to:neigh, label: String(dist) });
        }

        const data={
            nodes : V,
            edges : E,
        }

        return data;
    }

    gen_new_btn.onclick = function () {
        let data = create_data();
        network.setData(data);
    };

    gen_new_btn.click();
};

