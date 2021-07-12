import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';
import { CursosService } from '../cursos.service';


@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css']
})

export class CursosListaComponent implements OnInit {

  cursos: Curso[];
  
  constructor(private services: CursosService) { }

  ngOnInit(): void {
     this.services.listar().subscribe(dados => this.cursos = dados); 
  }

}
