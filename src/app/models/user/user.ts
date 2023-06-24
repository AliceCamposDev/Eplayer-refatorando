export class User {
    constructor(
        public email: string = "",
        public password?: string,
        public nome: string = "",
        public confEmail: string = "",
        public confSenha: string = ""
    ) {}
    
}
