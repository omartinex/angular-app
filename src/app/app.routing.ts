// Importar los modulos  del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { InterpolacionComponent } from './components/interpolacion/interpolacion.component';


// Array de rutas
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'interpolacion', component: InterpolacionComponent},
  {path: 'formulario', component: FormularioComponent}
];

// Exportar el modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
