import { data } from './data/data.js';
console.log(data);
var seriesTable = document.getElementById("series");
var promedioElement = document.getElementById("promedio");
mostrarDatosSeries(data);
function mostrarDatosSeries(listaSeries) {
    var tbodySeries = document.createElement("tbody");
    var promedio = listaSeries.reduce(function (acc, serie) { return acc + serie.seasons; }, 0) / listaSeries.length;
    for (var _i = 0, listaSeries_1 = listaSeries; _i < listaSeries_1.length; _i++) {
        var serie = listaSeries_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td style=\"font-weight: bold\">".concat(serie.id, "</td>\n        <td style=\"color: rgb(100, 129, 211)\">").concat(serie.name, "</td>\n        <td>").concat(serie.channel, "</td>\n        <td>").concat(serie.seasons, "</td>");
        tbodySeries.appendChild(trElement);
    }
    var promedioParagraph = document.createElement("p");
    promedioParagraph.innerHTML = "El promedio de temporadas de las series es: ".concat(promedio);
    seriesTable.appendChild(tbodySeries);
    promedioElement.appendChild(promedioParagraph);
}
