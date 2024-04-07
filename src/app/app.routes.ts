import { RouterModule,Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MidiaComponent } from './paginas/midia/midia.component';
import { SobreNosComponent } from './paginas/sobre-nos/sobre-nos.component';
import { ParqueDaCidadeComponent } from './paginas/parque-da-cidade/parque-da-cidade.component';
import { ProjetosEmAndamentoComponent } from './paginas/projetos-em-andamento/projetos-em-andamento.component';
import { EventosComponent } from './paginas/eventos/eventos.component';
import { HomepageComponent } from './paginas/homepage/homepage.component';


export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'midia', component: MidiaComponent },
    { path: 'sobre-nos', component: SobreNosComponent },
    { path: 'parque-da-cidade', component: ParqueDaCidadeComponent },
    { path: 'projetos-em-andamento', component: ProjetosEmAndamentoComponent },
    { path: 'eventos', component: EventosComponent },
];

NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }