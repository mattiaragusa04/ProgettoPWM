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

  // Dati
  prodottiOriginali: Prodotto[] = [];
  prodottiFiltrati: Prodotto[] = [];

  // Variabili per i filtri
  filtroTesto: string = '';
  filtroPrezzoMax: number = 1000; // Valore di default alto

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // In app.routes.ts abbiamo "{ path: 'categoria/:nome', ... }" quindi leggiamo 'nome'
      this.categoriaDenominazione = params.get('nome');
      console.log('Categoria selezionata:', this.categoriaDenominazione);
      
      // Simuliamo il caricamento dei prodotti dal database
      this.caricaProdottiMock();
    });
  }

  // Sostituisci questo metodo con la chiamata reale al tuo Service
  caricaProdottiMock(): void {
    this.prodottiOriginali = [
      { id: 1, nome: 'PlayStation 5', prezzo: 499.99, descrizione: 'Console Next-Gen Sony' },
      { id: 2, nome: 'Xbox Series X', prezzo: 499.99, descrizione: 'Console Next-Gen Microsoft' },
      { id: 3, nome: 'Nintendo Switch OLED', prezzo: 349.99, descrizione: 'Console Ibrida Nintendo' },
      { id: 4, nome: 'Controller DualSense', prezzo: 69.99, descrizione: 'Controller wireless per PS5' },
      { id: 5, nome: 'Cuffie Pulse 3D', prezzo: 99.99, descrizione: 'Cuffie wireless per PS5' }
    ];
    this.applicaFiltri(); // Inizializza la lista filtrata
  }

  applicaFiltri(): void {
    this.prodottiFiltrati = this.prodottiOriginali.filter(prodotto => {
      const corrispondeTesto = prodotto.nome.toLowerCase().includes(this.filtroTesto.toLowerCase());
      const corrispondePrezzo = prodotto.prezzo <= this.filtroPrezzoMax;
      return corrispondeTesto && corrispondePrezzo;
    });
  }
}
