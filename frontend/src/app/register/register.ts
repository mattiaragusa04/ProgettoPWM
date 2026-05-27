import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
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

  constructor(private fb: FormBuilder) {
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
          alert('Registrazione completata con successo!');
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
