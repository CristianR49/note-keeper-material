import { Component, OnInit } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import { Categoria } from '../models/categoria';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CategoriasService } from '../services/categorias.service';

@Component({
  selector: 'app-excluir-categoria',
  templateUrl: './excluir-categoria.component.html',
  styleUrls: ['./excluir-categoria.component.scss']
})
export class ExcluirCategoriaComponent implements OnInit{
  categoria$?: Observable<Categoria>;
  
  constructor(private categoriasService: CategoriasService, private route: ActivatedRoute, private router: Router) {}


  ngOnInit(): void {
    this.categoria$ = this.route.data.pipe(map((res) => res['categoria']));
  }

  confirmar(): void{
    
    // Forma imperativa
    // const id = parseInt(this.route.snapshot.paramMap.get('id')!);

    // this.categoriasService.excluir(id).subscribe({
    //   next: () => this.processarSucesso(),
    //   error: (err) => this.processarFalha(err),
    // });

    // Forma declarativa (Reativa)
    this.route.paramMap.pipe(map(params => parseInt(params.get('id')!)),
    switchMap((id) => this.categoriasService.excluir(id))
    ).subscribe({
      next: () => this.processarSucesso(),
      error: (err) => this.processarFalha(err),
    });
  }

  processarSucesso() {
    this.router.navigate(['/categorias', 'listar']);
  }

  processarFalha(err: any) {
    console.error('Erro:', err);
  }

}
