// search in Type column
function searchFunc() {
    let input, filter, table, tr, td, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    table = document.getElementById("employee_table");
    tr = table.getElementsByTagName("tr");
    
    for (i = 0; i < tr.length; i++) {
    getType = tr[i].getElementsByTagName("td")[4];

        if (getType) {
            if (getType.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "table-row";
            } else {
            tr[i].style.display = "none";
            }
        }
    }
}