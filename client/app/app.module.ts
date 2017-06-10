import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';

@NgModule({ // Modulo do angular
    imports: [ BrowserModule, FotoModule ], // Dependencia de modulos da minha aplicação principal
    declarations: [ AppComponent ], // o que faz parte do modulo.
    bootstrap: [ AppComponent ] // quem eu quero iniciar.
})
export class AppModule {}