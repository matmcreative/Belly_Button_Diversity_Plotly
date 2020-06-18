function metadataUpdate(sample) {
    d3.json("data/samples.json").then((data) => {
        const metadata = data.metadata;
        // Filter the data for the object with the desired sample number
        const resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        let result = resultArray[0];
        
        // Use d3 to select the panel with the id of #sample-metadata
        let panel = d3.select('#sample-metadata');
        console.log(panel)

        // Use `.html("") to clear any existing metadata
        panel.html("");

        // Use `Object.entries` to add each key and value pair to the panel
        Object.entries(result).forEach(([key, value]) => {
        panel.append("h6").text(`${key.toUpperCase()}: ${value}`);
        });
  
    });
  }
  
        //  Create the Traces
        const trace1 = {
        x: data.otu_ids,
        y: data.survival.map(val => Math.sqrt(val)),
        type: "scatter",
        name: "Belly Button Biodiversity"
        };
    
        // Create the data array for the plot
        var data = [trace1];
    
        // Define the plot layout
        var layout = {
        title: "Square Root of Cancer Survival by Organ",
        xaxis: { title: "Organ" },
        yaxis: { title: "Square Root of Survival" }
        };
    
        // Plot the chart to a div tag with id "plot"
        Plotly.newPlot("plot", data, layout);
    });
};  