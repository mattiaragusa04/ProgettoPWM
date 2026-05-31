import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  tipoSelezionato: string = '';
  submitted: boolean = false;
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    // Definiamo la struttura del nostro form e le validazioni
    this.registerForm = this.fb.group({
      nome: ['', Validators.required],
      cognome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{6,}$/)]],
      confermaPassword: ['', Validators.required],
      tipoIndirizzo: ['', Validators.required],
      via: ['', Validators.required],
      numeroCivico: ['', Validators.required],
      paese: ['', Validators.required],
      provincia: ['', Validators.required]
    });
  }

  impostaTipoIndirizzo(tipo: string) {
    this.tipoSelezionato = tipo;
    // Aggiorniamo il valore del tipo di indirizzo all'interno del form
    this.registerForm.patchValue({ tipoIndirizzo: tipo });
  }

  async onSubmit() {
    this.submitted = true;
    
    if (this.registerForm.get('password')?.value !== this.registerForm.get('confermaPassword')?.value) {
      alert('Le password non coincidono. Riprova.');
      return; // Interrompe l'invio se le password non coincidono
    }

    if (this.registerForm.valid) {
      console.log('Dati pronti per essere inviati al server:', this.registerForm.value);
      
      try {
        // Chiamata al backend con fetch
        const response = await fetch('http://localhost:3000/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.registerForm.value)
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Successo:', data);
          
          // Salva i dati della sessione nel localStorage
          // Assumiamo che il backend restituisca un token o i dati dell'utente
          if (data.token) localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify(data.utente || data));

          alert('Registrazione completata con successo!');
          
          // Reindirizza l'utente alla home page con la sessione attiva
          this.router.navigate(['/']);
        } else {
          alert('Errore durante la registrazione. Riprova.');
        }
      } catch (error) {
        console.error('Errore di connessione:', error);
        alert('Impossibile contattare il server.');
      }
    } else {
      console.log('Attenzione: il form contiene errori di validazione.');
    }
  }


}
