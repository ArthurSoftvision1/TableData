// load JSON table content   
$.getJSON("./src/resources/file.json", function(data) {
    let employee_data = '';
    let i = 0;

    $.each(data, function(key, value) {
        if (i < 20) {
        employee_data += '<tr onclick="selectRow()">';
        employee_data += '<td>'+value.checkbox+'</td>';
        employee_data += '<td>'+value.id+'</td>';
        employee_data += '<td>'+value.name+'</td>';
        employee_data += '<td>'+value.owner+'</td>';
        employee_data += '<td>'+value.type+'</td>';
        employee_data += '<td>'+value.created_date+'</td>';
        employee_data += '<td>'+value.modified_date+'</td>';
        employee_data += '</tr>';
        }
        i++;
    });
    $('#employee_table').append(employee_data);
});

// display 20 entries
function getTwenty() {

    $("#header").siblings().remove();

    let thousand = document.getElementById('one-thousand').innerHTML = "Load 1000 rows";
    let backgroundThousand = document.getElementById('one-thousand').style.backgroundColor = "white";
    let colorThousand = document.getElementById('one-thousand').style.color = "grey";
    let borderThousand = document.getElementById('one-thousand').style.border = "1px solid grey";

    let fiveHundred = document.getElementById('five-hundred').innerHTML = "Load 500 rows";
    let backgroundfiveHundred = document.getElementById('five-hundred').style.backgroundColor = "white";
    let colorfiveHundred = document.getElementById('five-hundred').style.color = "grey";
    let borderfiveHundred = document.getElementById('five-hundred').style.border = "1px solid grey";

    let twoHundred = document.getElementById('two-hundred-fifty').innerHTML = "Load 250 rows";
    let backgroundtwoHundred = document.getElementById('two-hundred-fifty').style.backgroundColor = "white";
    let colortwoHundred= document.getElementById('two-hundred-fifty').style.color = "grey";
    let bordertwoHundred = document.getElementById('two-hundred-fifty').style.border = "1px solid grey";

    let twentyBtn = document.getElementById('twenty').innerHTML = "Loaded 20 rows";
    let backgroundTwenty = document.getElementById('twenty').style.backgroundColor = "#02CFCD";
    let colorTwenty = document.getElementById('twenty').style.color = "white";
    let borderTwenty = document.getElementById('twenty').style.border = "1px solid #02CFCD";

    let hundredBtn = document.getElementById('hundred').innerHTML = "Load 100 rows";
    let background = document.getElementById('hundred').style.backgroundColor = "white";
    let color = document.getElementById('hundred').style.color = "grey";
    let border = document.getElementById('hundred').style.border = "1px solid grey";

    $.getJSON("./src/resources/file.json", function(data) {
        let employee_data = '';
        let i = 0;

        $.each(data, function(key, value) {
            if (i < 20) {
            employee_data += '<tr onclick="selectRow()">';
            employee_data += '<td>'+value.checkbox+'</td>';
            employee_data += '<td>'+value.id+'</td>';
            employee_data += '<td>'+value.name+'</td>';
            employee_data += '<td>'+value.owner+'</td>';
            employee_data += '<td>'+value.type+'</td>';
            employee_data += '<td>'+value.created_date+'</td>';
            employee_data += '<td>'+value.modified_date+'</td>';
            employee_data += '</tr>';
            }
            i++;
        });
        $('#employee_table').append(employee_data);
    });
    selectRow();
}

// display 100 entries
function getHundred() {

    $("#header").siblings().remove();
    
    let thousand = document.getElementById('one-thousand').innerHTML = "Load 1000 rows";
    let backgroundThousand = document.getElementById('one-thousand').style.backgroundColor = "white";
    let colorThousand = document.getElementById('one-thousand').style.color = "grey";
    let borderThousand = document.getElementById('one-thousand').style.border = "1px solid grey";

    let fiveHundred = document.getElementById('five-hundred').innerHTML = "Load 500 rows";
    let backgroundfiveHundred = document.getElementById('five-hundred').style.backgroundColor = "white";
    let colorfiveHundred = document.getElementById('five-hundred').style.color = "grey";
    let borderfiveHundred = document.getElementById('five-hundred').style.border = "1px solid grey";

    let twoHundred = document.getElementById('two-hundred-fifty').innerHTML = "Load 250 rows";
    let backgroundtwoHundred = document.getElementById('two-hundred-fifty').style.backgroundColor = "white";
    let colortwoHundred= document.getElementById('two-hundred-fifty').style.color = "grey";
    let bordertwoHundred = document.getElementById('two-hundred-fifty').style.border = "1px solid grey";
    
    let twentyBtn = document.getElementById('twenty').innerHTML = "Load 20 rows";
    let backgroundTwenty = document.getElementById('twenty').style.backgroundColor = "white";
    let colorTwenty = document.getElementById('twenty').style.color = "grey";
    let borderTwenty = document.getElementById('twenty').style.border = "1px solid grey";
   
    let hundredBtn = document.getElementById('hundred').innerHTML = "Loaded 100 rows";
    let background = document.getElementById('hundred').style.backgroundColor = "#02CFCD";
    let color = document.getElementById('hundred').style.color = "white";
    let border = document.getElementById('hundred').style.border = "1px solid #02CFCD";

    $.getJSON("./src/resources/file.json", function(data) {
        let employee_data = '';
        let i = 0;

        $.each(data, function(key, value) {
            if (i < 100) {
            
            employee_data += '<tr onclick="selectRow()">';
            employee_data += '<td>'+value.checkbox+'</td>';
            employee_data += '<td>'+value.id+'</td>';
            employee_data += '<td>'+value.name+'</td>';
            employee_data += '<td>'+value.owner+'</td>';
            employee_data += '<td>'+value.type+'</td>';
            employee_data += '<td>'+value.created_date+'</td>';
            employee_data += '<td>'+value.modified_date+'</td>';
            employee_data += '</tr>';
          
            }
            i++;
        });
        $('#employee_table').append(employee_data);
    });
}

function getTwoHundredFifty() {

    $("#header").siblings().remove();

    let thousand = document.getElementById('one-thousand').innerHTML = "Load 1000 rows";
    let backgroundThousand = document.getElementById('one-thousand').style.backgroundColor = "white";
    let colorThousand = document.getElementById('one-thousand').style.color = "grey";
    let borderThousand = document.getElementById('one-thousand').style.border = "1px solid grey";

    let fiveHundred = document.getElementById('five-hundred').innerHTML = "Load 500 rows";
    let backgroundfiveHundred = document.getElementById('five-hundred').style.backgroundColor = "white";
    let colorfiveHundred = document.getElementById('five-hundred').style.color = "grey";
    let borderfiveHundred = document.getElementById('five-hundred').style.border = "1px solid grey";

    let twentyBtn = document.getElementById('twenty').innerHTML = "Load 20 rows";
    let backgroundTwenty = document.getElementById('twenty').style.backgroundColor = "white";
    let colorTwenty = document.getElementById('twenty').style.color = "grey";
    let borderTwenty = document.getElementById('twenty').style.border = "1px solid grey";

    let hundredBtn = document.getElementById('hundred').innerHTML = "Load 100 rows";
    let background = document.getElementById('hundred').style.backgroundColor = "white";
    let color = document.getElementById('hundred').style.color = "grey";
    let border = document.getElementById('hundred').style.border = "1px solid grey";

    let twoHundred = document.getElementById('two-hundred-fifty').innerHTML = "Loaded 250 rows";
    let backgroundTwoHundred = document.getElementById('two-hundred-fifty').style.backgroundColor = "#02CFCD";
    let colorTwoHundred = document.getElementById('two-hundred-fifty').style.color = "white";
    let borderTwoHundred = document.getElementById('two-hundred-fifty').style.border = "1px solid #02CFCD";

    $.getJSON("./src/resources/file.json", function(data) {
        let employee_data = '';
        let i = 0;

        $.each(data, function(key, value) {
            if (i < 250) {
            employee_data += '<tr onclick="selectRow()">';
            employee_data += '<td>'+value.checkbox+'</td>';
            employee_data += '<td>'+value.id+'</td>';
            employee_data += '<td>'+value.name+'</td>';
            employee_data += '<td>'+value.owner+'</td>';
            employee_data += '<td>'+value.type+'</td>';
            employee_data += '<td>'+value.created_date+'</td>';
            employee_data += '<td>'+value.modified_date+'</td>';
            employee_data += '</tr>';
            }
            i++;
        });
        $('#employee_table').append(employee_data);
    });
}

function fiveHundred() {

    $("#header").siblings().remove();

    let thousand = document.getElementById('one-thousand').innerHTML = "Load 1000 rows";
    let backgroundThousand = document.getElementById('one-thousand').style.backgroundColor = "white";
    let colorThousand = document.getElementById('one-thousand').style.color = "grey";
    let borderThousand = document.getElementById('one-thousand').style.border = "1px solid grey";

    let fiveHundred = document.getElementById('five-hundred').innerHTML = "Loaded 500 rows";
    let backgroundfiveHundred = document.getElementById('five-hundred').style.backgroundColor = "#02CFCD";
    let colorfiveHundred = document.getElementById('five-hundred').style.color = "white";
    let borderfiveHundred = document.getElementById('five-hundred').style.border = "1px solid #02CFCD";

    let twoHundred = document.getElementById('two-hundred-fifty').innerHTML = "Load 250 rows";
    let backgroundtwoHundred = document.getElementById('two-hundred-fifty').style.backgroundColor = "white";
    let colortwoHundred= document.getElementById('two-hundred-fifty').style.color = "grey";
    let bordertwoHundred = document.getElementById('two-hundred-fifty').style.border = "1px solid grey";

    let hundredBtn = document.getElementById('hundred').innerHTML = "Load 100 rows";
    let background = document.getElementById('hundred').style.backgroundColor = "white";
    let color = document.getElementById('hundred').style.color = "grey";
    let border = document.getElementById('hundred').style.border = "1px solid grey";

    let twentyBtn = document.getElementById('twenty').innerHTML = "Load 20 rows";
    let backgroundTwenty = document.getElementById('twenty').style.backgroundColor = "white";
    let colorTwenty = document.getElementById('twenty').style.color = "grey";
    let borderTwenty = document.getElementById('twenty').style.border = "1px solid grey";

    $.getJSON("./src/resources/file.json", function(data) {
        let employee_data = '';
        let i = 0;

        $.each(data, function(key, value) {
            if (i < 500) {
            employee_data += '<tr onclick="selectRow()">';
            employee_data += '<td>'+value.checkbox+'</td>';
            employee_data += '<td>'+value.id+'</td>';
            employee_data += '<td>'+value.name+'</td>';
            employee_data += '<td>'+value.owner+'</td>';
            employee_data += '<td>'+value.type+'</td>';
            employee_data += '<td>'+value.created_date+'</td>';
            employee_data += '<td>'+value.modified_date+'</td>';
            employee_data += '</tr>';
            }
            i++;
        });
        $('#employee_table').append(employee_data);
    });
}

function oneThousand() {

    $("#header").siblings().remove();

    let thousand = document.getElementById('one-thousand').innerHTML = "Loaded 1000 rows";
    let backgroundThousand = document.getElementById('one-thousand').style.backgroundColor = "#02CFCD";
    let colorThousand = document.getElementById('one-thousand').style.color = "white";
    let borderThousand = document.getElementById('one-thousand').style.border = "1px solid #02CFCD";

    let fiveHundred = document.getElementById('five-hundred').innerHTML = "Load 500 rows";
    let backgroundfiveHundred = document.getElementById('five-hundred').style.backgroundColor = "white";
    let colorfiveHundred = document.getElementById('five-hundred').style.color = "grey";
    let borderfiveHundred = document.getElementById('five-hundred').style.border = "1px solid grey";

    let twoHundred = document.getElementById('two-hundred-fifty').innerHTML = "Load 250 rows";
    let backgroundtwoHundred = document.getElementById('two-hundred-fifty').style.backgroundColor = "white";
    let colortwoHundred= document.getElementById('two-hundred-fifty').style.color = "grey";
    let bordertwoHundred = document.getElementById('two-hundred-fifty').style.border = "1px solid grey";

    let hundredBtn = document.getElementById('hundred').innerHTML = "Load 100 rows";
    let background = document.getElementById('hundred').style.backgroundColor = "white";
    let color = document.getElementById('hundred').style.color = "grey";
    let border = document.getElementById('hundred').style.border = "1px solid grey";

    let twentyBtn = document.getElementById('twenty').innerHTML = "Load 20 rows";
    let backgroundTwenty = document.getElementById('twenty').style.backgroundColor = "white";
    let colorTwenty = document.getElementById('twenty').style.color = "grey";
    let borderTwenty = document.getElementById('twenty').style.border = "1px solid grey";
    
    $.getJSON("./src/resources/file.json", function(data) {
        let employee_data = '';
        let i = 0;

        $.each(data, function(key, value) {
            if (i < 1000) {
            employee_data += '<tr onclick="selectRow()">';
            employee_data += '<td>'+value.checkbox+'</td>';
            employee_data += '<td>'+value.id+'</td>';
            employee_data += '<td>'+value.name+'</td>';
            employee_data += '<td>'+value.owner+'</td>';
            employee_data += '<td>'+value.type+'</td>';
            employee_data += '<td>'+value.created_date+'</td>';
            employee_data += '<td>'+value.modified_date+'</td>';
            employee_data += '</tr>';
            }
            i++;
        });
        $('#employee_table').append(employee_data);
    });
}
