import { ItemService } from './../item.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-cadastro',
  templateUrl: './item-cadastro.component.html',
  styleUrls: ['./item-cadastro.component.css']
})
export class ItemCadastroComponent implements OnInit {

  itens = [];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.itemService.listar().subscribe(dados =>  this.itens = dados);
  }

}
