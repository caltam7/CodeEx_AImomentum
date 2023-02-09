
loadToTable("http://data.fixer.io/api/latest?access_key=fe3a9b3f9ac173a3e51d8ea22951cf95");

async function loadToTable(url){
    //Make a GET REST with fetch
    const response = await fetch(url);
    //Convert the returned data to json format
    const data = await response.json();

    //Deep copy of the fetched data
    let currencyData = JSON.parse(JSON.stringify(data.rates));
    let currencyDataAdded = JSON.parse(JSON.stringify(data.rates));

    const keys = Object.keys(currencyData);

    //Pad 10.0002 to the new var
    keys.forEach((key) => {currencyDataAdded[key] += 10.0002;});

    //Create rows & display data in a table
    keys.forEach((key) => {
        var table = document.getElementById("currencyRates");
        var row = table.insertRow();
        if (IsEven(currencyData[key]))
            row.className = "even";
        if (key == 'HKD')
            row.className = "hkd";
        var currencyNameCell = row.insertCell();
        var rateCell = row.insertCell();
        var ratePaddedCell = row.insertCell();
        currencyNameCell.innerHTML = key;
        rateCell.innerHTML = currencyData[key];
        ratePaddedCell.innerHTML = currencyDataAdded[key];
    });

    console.log(currencyData);
    console.log(currencyDataAdded);
}

  function IsEven(num){
    return (num%2 === 0)
}
