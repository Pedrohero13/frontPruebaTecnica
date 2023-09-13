import { Component, OnInit  } from '@angular/core';
import { RegionService } from 'src/app/servicios/region.service';
import { lastValueFrom } from 'rxjs';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-regiones',
  templateUrl: './regiones.component.html',
  styleUrls: ['./regiones.component.css'],

})
export class RegionesComponent {
  constructor(private regionService: RegionService){}
  ngOnInit() {
    this.getRegiones();
  }
  //propiedades de la tabla
  displayedColumns: string[] = ['demo-name', 'demo-url'];
  dataSource: any=[]
  dataSourceHabilidades: any=[]
  dataSourceTipos: any=[]
  listaRegiones: any = []

  nombre :string =""
  pokemonNombre:string=""
  miError:string = ""
  errorPokemon:string = ""
  

  public async getRegiones() {
    const response = this.regionService.getRegiones();
    const data = await lastValueFrom(response);
    this.dataSource= data.results;
    this.listaRegiones= data.results;
  }

  public async getPokemon (){
    try {
      const response = this.regionService.getPokemon(this.pokemonNombre);
      const data = await lastValueFrom(response);
      this.dataSourceHabilidades= data.abilities;
      this.dataSourceTipos = data.types
      this.errorPokemon=""
    
    } catch (error) {
      // Capturar y manejar el error aquí
      this.errorPokemon="Error: Pokemon no encontrado"
      throw error; // Puedes relanzar el error si es necesario
    }
    
    

    
    
  }

  public buscarRegion (){
   
   const buscado = this.regionService.buscarRegion(this.listaRegiones, this.nombre)

   if(buscado){
    this.dataSource= [buscado]
    this.miError=""
   }else{
    this.miError="Error: Región no encontrada"
   }
   
    
  }






  
}
