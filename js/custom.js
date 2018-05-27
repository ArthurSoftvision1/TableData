// count checked checkboxes
function checkboxes() {
    
    let inputElems = document.getElementsByTagName("input"),
    count = 0;
    for (let i=0; i<inputElems.length; i++) {
    if (inputElems[i].type === "checkbox" && inputElems[i].checked === true) {
        count++;
        document.getElementById('display-number').innerHTML = count + " " + "items selected.";
    } else {
        document.getElementById('display-number').innerHTML = count + " " + "items selected.";
    }
    selectRow();
}}

// on click check all checkboxes
$('.selectAll').click(function() {
    if ($(this).is(':checked')) {
        $('input').attr('checked', true);
    } else {
        $('input').attr('checked', false);
    }
});

// remove tr checkbox checked
$(".remove").on("click", function () {
    $('table tr').has('input[type="checkbox"]:checked').remove();
});

let input = document.getElementById('mySearch');
let serchButton = document.getElementById('search');

serchButton.addEventListener('click', function()
{
    let searchBtn = document.getElementById('mySearch').value = "";
    changeButtonText();
});

input.addEventListener('input', function()
{
    if (input.value == '' ) {
        let searchBtn = document.getElementById('search').innerHTML = "Search";
    } else {
        let searchBtn = document.getElementById('search').innerHTML = "x";
    }
});

function changeButtonText() {
    let searchBtn = document.getElementById('search').innerHTML = "Search";
}

function selectRow() {
    let radios = document.getElementsByTagName("input");
    for( var i = 0; i < radios.length; i++ ) {
        radios[i].onclick = function() {
            let el = document.getElementsByTagName("tr");
            
            while(el = el.nextSibling) {
                if(el.tagName === "tr") {  
                    el.className = "selected";
                }
            }
            this.parentElement.parentElement.classList.toggle("selected");
        };
    }
}
