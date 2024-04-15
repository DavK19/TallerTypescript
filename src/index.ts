import { data } from './data/data.js';
import { Serie } from './models/Serie.js';

console.log(data);

let seriesTable: HTMLElement = document.getElementById("series")!;
let promedioElement: HTMLElement = document.getElementById("promedio")!;

mostrarDatosSeries(data);

function mostrarDatosSeries(listaSeries: Serie[]): void {
    let tbodySeries: HTMLElement = document.createElement("tbody");

    const promedio: number = listaSeries.reduce((acc, serie) => acc + serie.seasons, 0) / listaSeries.length;

    for (let serie of listaSeries) {
        let trElement: HTMLElement = document.createElement("tr");

        trElement.innerHTML = `<td style="font-weight: bold">${serie.id}</td>
        <td style="color: rgb(100, 129, 211)">${serie.name}</td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>`;

        tbodySeries.appendChild(trElement);
    }

    
 
    let promedioParagraph: HTMLElement = document.createElement("p");
    promedioParagraph.innerHTML = `El promedio de temporadas de las series es: ${promedio}`;
    seriesTable.appendChild(tbodySeries);
    promedioElement.appendChild(promedioParagraph);
}