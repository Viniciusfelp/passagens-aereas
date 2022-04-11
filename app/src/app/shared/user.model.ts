class User {

    public nome!: string;
    public email!: string;
    public senha!: string;
    public cpf!: string;
    public telefone!: string;
    
    constructor()
    constructor(nome?: string, email?: string, senha?: string, cpf?: string, telefone?: string) {
        if(nome !== undefined){
            this.nome = nome;
        }
        if(email !== undefined){
            this.email = email;
        }
        if(senha !== undefined){
            this.senha = senha;
        }
        if(cpf !== undefined){
            this.cpf = cpf;
        }
        if(telefone !== undefined){
            this.telefone = telefone;
        }
    }
}
export { User }