import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { PainelModule } from './painel/painel.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { routing } from './app.routes';

@NgModule({ // Modulo do angular
    imports: [
        BrowserModule, 
        FotoModule, 
        HttpModule, 
        PainelModule,
        routing
    ], // Dependencia de modulos da minha aplicação principal
    declarations: [AppComponent, CadastroComponent, ListagemComponent], // o que faz parte do modulo.
    bootstrap: [AppComponent] // quem eu quero iniciar.
})
export class AppModule { }