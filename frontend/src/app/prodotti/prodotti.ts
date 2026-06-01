import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Interfaccia di base per il prodotto (adattala al tuo modello reale)
export interface Prodotto {
  id: number;
  nome: string;
  prezzo: number;
  descrizione: string;
}

@Component({
  selector: 'app-prodotti',
  imports: [CommonModule, FormsModule],
  templateUrl: './prodotti.html',
  styleUrl: './prodotti.css',
})
export class Prodotti implements OnInit {
  categoriaDenominazione: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // In app.routes.ts abbiamo "{ path: 'categoria/:nome', ... }" quindi leggiamo 'nome'
      this.categoriaDenominazione = params.get('nome');
      console.log('Categoria selezionata:', this.categoriaDenominazione);
      
    });
  }
}
