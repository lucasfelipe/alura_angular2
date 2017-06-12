import { Component } from '@angular/core';
import { FotoService } from '../foto/foto.service';
import { FotoComponent } from '../foto/foto.component';
import { PainelComponent } from '../painel/painel.component';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent {

    fotos: FotoComponent[] = [];
    service: FotoService;
    mensagem: string = '';

    constructor(service: FotoService) {
        this.service = service;
        this.service
            .lista()
            .subscribe(fotos =>
                this.fotos = fotos,
            error => console.log(error));
    }

    remove(foto: FotoComponent, painel: PainelComponent): void {
        console.log(foto._id);
        this.service.remove(foto)
            .subscribe(fotos => {
                painel.fadeOut(() => {
                    let novasFotos = this.fotos.slice(0);
                    let indiceFoto = this.fotos.indexOf(foto);
                    novasFotos.splice(indiceFoto, 1);
                    this.fotos = novasFotos;
                    this.mensagem = 'Foto removida com sucesso';
                });
            },
            error => {
                console.log(error);
                this.mensagem = 'Não foi possível remover a foto';
            });
    }

}