# Belly Button Biodiversity | Plot.ly

## Table of Contents
* [Objective](#Objective)
* [Technologies](#Technologies)
* [Process](#Process)
* [Deployment](#Deployment)
* [Visualization](#Visualization)
* [Troubleshooting](#Troubleshooting)

<img src="Images/bacteria.jpg" width=350px align=right>

# Objective | Create a Interactive Dashboard
Build an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

# Technologies
* D3
* Plotly
* JSON
* Python3

# Process
## Step 1: Plotly

* Read in `samples.json` using D3 library.
```
var path ="data/samples.json";

function init() {
const data = d3.json(path).then(function(data) {    
    console.log(data);    
```

* Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
<img src="Images/hw01.png" width=350px align=right>

```
    //bar plot
    var bardata =[{
        x:top10sample_values,
        y:top10otu_ids.map(id =>  ("OTU" + id.toString())),
        type:"bar",
        text:top10otu_labels,
        orientation: "h"
    }];

    Plotly.newPlot("bar", bardata);  
```

   * Use `sample_values` as the values for the bar chart.
```
    var samples = data.samples
    //console.log(samples);
    var sample_values = samples.map(sample =>sample.sample_values);  
    //console.log(sample_values[0]);
```
    
   * Use `otu_ids` as the labels for the bar chart.
```
    var top10sample_values = sample_values[0].slice(0,10).reverse();
    console.log(top10sample_values);
    var otu_ids = data.samples.map(sample =>sample.otu_ids); 
    var top10otu_ids = otu_ids[0].slice(0,10).reverse();
```
    
   * Use `otu_labels` as the hovertext for the chart.
```
    var otu_labels = data.samples.map(sample =>sample.otu_labels);
    var top10otu_labels = otu_labels[0].slice(0,10).reverse();
    console.log(top10otu_labels);
```

* Create a bubble chart that displays each sample.
   * Use `otu_ids` for the x values.
   * Use `sample_values` for the y values.
   * Use `sample_values` for the marker size.
   * Use `otu_ids` for the marker colors.
   * Use `otu_labels` for the text values.
```
// bubble plot
    var bubbledata =[{
        x: otu_ids[0],
        y: sample_values[0],
        text: otu_labels[0],
        mode: "markers",
        marker: {
        size: sample_values[0],
        color: otu_ids[0],
        colorscale: "Earth"}
    }];
```

![Bubble Chart](Images/bubble_chart.png)
<img src="Images/hw03.png" width=350px align=right>
* Display the sample metadata, i.e., an individual's demographic information.

* Display each key-value pair from the metadata JSON object somewhere on the page.

* Update all of the plots any time that a new sample is selected.

# Deployment

Deploy app to GitHub Pages. Submit the links to your deployment and your GitHub repo.

# Visualization
<img src="Images/hw03.png" width=350px align=right>

### About the Data

Hulcr, J. et al.(2012) _A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable_. Retrieved from: [http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/](http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/)

