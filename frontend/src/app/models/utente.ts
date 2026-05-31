export class Utente {
    id: number;
    nome: string
    cognome: string;
    email: string
    password: string;
    tipoIndirizzo: string;
    via: string;
    numeroCivico: string;
    paese: string;
    provincia: string;

    constructor(id: number, nome: string, cognome: string, email: string, password: string, tipoIndirizzo: string, via: string, numeroCivico: string, paese: string, provincia: string) {
        this.id = id;
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.password = password;
        this.tipoIndirizzo = tipoIndirizzo;
        this.via = via;
        this.numeroCivico = numeroCivico;
        this.paese = paese;
        this.provincia = provincia;
    }
    
}
