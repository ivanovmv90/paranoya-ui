var rows = $("table[style]").find("tr");
rows.addClass("tb");
var firstRow = rows.first();
firstRow.addClass("th");
$(firstRow.find("td")[1]).text("");

var key = "tableData";
var monthes = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря"
];
var date;
var previousData = localStorage.getItem(key) || [];
var currentData = [];

rows.each(function(i, el) {
    if (i === 0) return;

    var dateInCol = $($(el).find("td")[1]).text().trim();
    var timeInCol = $($(el).find("td")[2]).text().trim();
    var dateTime = [dateInCol, timeInCol].join(",");
    currentData.push(dateTime);
    var isNew = previousData.indexOf(dateTime) === -1;
    $(el).addClass(isNew ? "new" : "old");
    if (date !== dateInCol) {
        date = dateInCol;
        var dateParts = date.split(".");
        $(el).before("<tr class='date-row'><td colspan='10'>" + dateParts[0] + " " + monthes[parseInt(dateParts[1]) - 1] + "</td></tr>");
    }
});

localStorage.setItem(key, currentData);