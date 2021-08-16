interface Usuario {
    nome:  string;
    email: string;
    adress?: string;//? tipo opcional recebe nulo tambem
}

function getUser(): Usuario {
    return{
        nome: 'Jacqueline',
        email:'jacqueline@jacqueline.com'
    }
}

function setUser(usuario: Usuario) {
    //......
}
