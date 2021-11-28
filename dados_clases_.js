//Alumno: Saul Humberto Alamilla Calixto
//No Control: 18390023
//POO orientada a clases (Juego de dados)

class Jugador {
    #caraDado1 = 0;
    #caraDado2 = 0;

    constructor(nombre) {
        this.nombre = nombre;
    }
    //--Dado 1
    get get_caraDado1(){
        return this.#caraDado1;
    }
    set set_caraDado1(Dado1){
        this.#caraDado1 = Dado1;
    }
    //--Dado 2
    get get_caraDado2(){
        return this.#caraDado2;
    }
    set set_caraDado2(Dado2){
        this.#caraDado2 = Dado2;
    }
}

class JuegoDados{
    constructor(numeroJuego, j1, j2) {
        this.numeroJuego = numeroJuego;
        this.jugador1 = j1;
        this.jugador2 = j2;
    }
    tirarDados(){
        this.jugador1.set_caraDado1 = Math.round((Math.random() * 5) + 1);
        this.jugador1.set_caraDado2 = Math.round((Math.random() * 5) + 1);

        this.jugador2.set_caraDado1 = Math.round((Math.random() * 5) + 1);
        this.jugador2.set_caraDado2 = Math.round((Math.random() * 5) + 1);
    }
    determinaGanador() {
        if ( ((this.jugador1.get_caraDado1 + this.jugador1.get_caraDado2) == 7)
            && ((this.jugador2.get_caraDado1 + this.jugador2.get_caraDado2) != 7) )
            return this.jugador1;
        else if ( ((this.jugador2.get_caraDado1 + this.jugador2.get_caraDado2) == 7)
            && ((this.jugador1.get_caraDado1 + this.jugador2.get_caraDado2) != 7) )
            return this.jugador2;
        else return null;
    }
}

class torneoDados{
    jugadas = new Array();
    #juegosGanadosJugador1 = 0;
    #juegosGanadosJugador2 = 0;

    get getJuegosGanadosJugador1(){
        return this.#juegosGanadosJugador1;
    }
    set set_JuegosGanadosJugador1(victoria){
        this.#juegosGanadosJugador1 = this.#juegosGanadosJugador1 + victoria;
    }
    get getJuegosGanadosJugador2(){
        return this.#juegosGanadosJugador2;
    }
    set set_JuegosGanadosJugador2(victoria){
        this.#juegosGanadosJugador2 = this.#juegosGanadosJugador2 + victoria;
    }
    crear(){
        this.player1 = new Jugador("Saul");
        this.player2 = new Jugador("Humberto");
        this.juegoDados = new JuegoDados(1, this.player1, this.player2);
        return this.juegoDados;
    }
    jugar(juegoDados){
        while (this.getJuegosGanadosJugador1 < 3 && this.getJuegosGanadosJugador2 < 3) {
            juegoDados.numeroJuego++;
            this.jugadas.push(juegoDados);
            juegoDados.tirarDados();
            this.ganador = juegoDados.determinaGanador();

            if (this.ganador == null){
                console.log("Empate en el juego",this.jugadas.length);
            }else if (this.ganador.nombre == juegoDados.jugador1.nombre){
                this.set_JuegosGanadosJugador1 = 1;
                console.log("Ganador del juego",this.jugadas.length ,":", this.ganador.nombre)
            }else if (this.ganador.nombre == juegoDados.jugador2.nombre) {
                this.set_JuegosGanadosJugador2 = 1;
                console.log("Ganador del juego",this.jugadas.length,":",this.ganador.nombre)
            }
        }
    }
    #resultado(){
        console.log("Total de juegos:",this.juegoDados.numeroJuego-1);
        if(this.#juegosGanadosJugador1 == 3) {
            return this.juegoDados.jugador1.nombre;
        }
        else if(this.#juegosGanadosJugador2 == 3) {
            return this.juegoDados.jugador2.nombre;
        }
    }

    get get_resultado(){
        return this.#resultado();
    }
}
let objetoTorneo = new torneoDados();
//Crear partida
let juego = objetoTorneo.crear();

//Jugar
objetoTorneo.jugar(juego);

//Obtener resultado
console.log("------");
console.log("Ganador del torneo:",objetoTorneo.get_resultado);