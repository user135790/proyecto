export interface Usuario{
    nombre: String,
    correo: String,
    perfil: TipoPerfil
} 

export enum TipoPerfil{
    ADMIN= "ADMINISTRADOR",
    INVITADO="INVITADO"
}