import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { IResultados } from 'src/app/interfaces/resultado';
import { EncuestaService } from 'src/app/services/encuesta.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {
  public chart: any;
  nuevoResultado!: IResultados;

  constructor(
    private sEncuesta: EncuestaService
  ) {}

  ngOnInit(): void {
    this.sEncuesta.mostrarResultados()
      .subscribe(
        (res) => {
          this.nuevoResultado = {
            pop: res.pop || 0,
            rock: res.rock || 0,
            salsa: res.salsa || 0,
            clasica: res.clasica || 0,
            otros: res.otros || 0
          }
          this.createChart(this.nuevoResultado);
        }
      )
  }

  createChart(votos: IResultados) {
    this.chart = new Chart("MyChart", {
      type: 'bar',
      data: {
        labels: ['Pop', 'Rock', 'Salsa', 'Clásica', 'Otros'],
        datasets: [
          {
            label: "Votos",
            data: [votos.pop, votos.rock, votos.salsa, votos.clasica, votos.otros],
            backgroundColor: 'green',
          }
        ]
      },
      options: {
        aspectRatio: 3
      }
    });
  }
}
