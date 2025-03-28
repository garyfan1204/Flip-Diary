var ascending = true;
var lastSortedColumnIndex = null;

function sortTable(columnIndex) {
    if (lastSortedColumnIndex !== columnIndex) {
        ascending = true;
    }

    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("items");
    switching = true;
    
    while (switching) {
        switching = false;
        rows = table.rows;
        
        for (i = 0; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[columnIndex];
            y = rows[i + 1].getElementsByTagName("td")[columnIndex];
            
            if (ascending) {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }

        if (shouldSwitch) {
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
        }
    }
    ascending = !ascending;
    lastSortedColumnIndex = columnIndex;
}