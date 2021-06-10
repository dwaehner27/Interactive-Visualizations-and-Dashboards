  
    function init() {

        let dropdown = d3.select("#selDataset");


        d3.json("data/samples.json").then((data) => {
            console.log(data)

            data.names.forEach((name) => {
                dropdown.append("option").text(name).property("value");
            });

            charts(data.names[0]);
            table(data.names[0]);
        });
    }
    init();

    function optionChanged(id) {
        charts(id);
        table(id);
    }