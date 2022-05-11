import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Auth, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, onValue, ref } from 'firebase/database';

@Injectable()
export class Autenticacao {

    private dominio: string = '@dominio.com'

    public errorMessage?: string;
    public token_id?: string;

    constructor(
        private router: Router
    ) { }
    
    public async autenticar(cpfOrEmail: string, senha: string): Promise<any> {
        this.errorMessage = undefined;
        const auth: Auth = getAuth();
        const db = getDatabase();
        return signInWithEmailAndPassword(auth, cpfOrEmail, senha)//caso seja um email informado no login
            .then((resposta: any) => {
                auth.currentUser?.getIdToken()
                    .then((idToken: string) => {
                        this.token_id = idToken;
                        sessionStorage.setItem('idToken', idToken);
                        this.router.navigate(['../']);
                    })
            })
            .catch(() => {
                let email: string;
                if(cpfOrEmail.indexOf('@') !== -1){
                    return
                }
                onValue(ref(db, `/users/${cpfOrEmail}`), (snapshot)=>{
                    email = snapshot.val().email;
                    console.log(email)
                    return signInWithEmailAndPassword(auth, email, senha)//caso seja feito o login com o cpf
                        .then((resposta: any) => {
                            auth.currentUser?.getIdToken()
                                .then((idToken: string) => {
                                    this.token_id = idToken;
                                    sessionStorage.setItem('idToken', idToken);
                                    this.router.navigate(['../']);
                                })
                        }).catch((error: any)=>{console.log("DADOS INVALIDOS")})
                });
            });
    }

}