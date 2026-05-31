import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profilo',
  imports: [CommonModule, RouterLink],
  templateUrl: './profilo.html',
  styleUrl: './profilo.css',
})
export class Profilo implements OnInit, OnDestroy {
  utente: any = null;
  private routerSub!: Subscription;

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {
    this.routerSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.caricaUtente(); 
      }
    });
  }

  ngOnInit() {
    this.caricaUtente();
  }

  ngOnDestroy() {
    if (this.routerSub) {
      this.routerSub.unsubscribe();
    }
  }

  caricaUtente() {
    if (isPlatformBrowser(this.platformId)) {
      const userString = localStorage.getItem('user');
      if (userString) {
        this.utente = JSON.parse(userString);
      } else {
        this.utente = null;
      }
    }
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      // pulisce la sessione in modo sicuro sul browser
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
    // Aggiorna lo stato locale e reindirizza alla home
    this.utente = null;
    alert('Logout effettuato con successo!');
    this.router.navigate(['/']);
  }
}
