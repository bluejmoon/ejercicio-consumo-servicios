import { Component, OnInit } from '@angular/core';
import { ArticulosServicesService } from '../app/services/articulos-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'servicios';
  articulos:any;
  constructor(private articuloServicio:ArticulosServicesService){};
  ngOnInit():void {
    this.articuloServicio.retornar()
    .subscribe(result => {this.articulos = result})


      // this.articulos = this.articuloServicio.retornar();
  }
}
