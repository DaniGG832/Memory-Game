function juego() {
  return {
    cartas: [
      { color: "green", girada: false, borrada: false },
      { color: "red", girada: false, borrada: false },
      { color: "blue", girada: false, borrada: false },
      { color: "yellow", girada: false, borrada: false },
      { color: "green", girada: false, borrada: false },
      { color: "red", girada: false, borrada: false },
      { color: "blue", girada: false, borrada: false },
      { color: "yellow", girada: false, borrada: false },
    ],

    puntosnegativos: 0,

    open: true,
    reiniciar: false,

    get cartasGiradas() {
      return this.cartas.filter((carta) => carta.girada);
    },

    get cartasBorradas() {
      return this.cartas.filter((carta) => carta.borrada);
    },

    get puntos() {

      return (this.cartasBorradas.length * 10) - this.puntosnegativos;
    },

    /* get puntosnegativos(){

      return this.puntosnegativos;
    }, */
    /* iniciarpartida() {
      
      console.log(1)
    }, */

    girarCarta(carta) {
      if (this.cartasGiradas.length == 2) {
        return;
      }

      carta.girada = !carta.girada;
      if (this.cartasGiradas.length == 2) {
        setTimeout(() => {
          if (this.cartasGiradas[0].color == this.cartasGiradas[1].color) {
            lanzaparejaencontrada("Pareja Encontrada");

            this.cartasGiradas.forEach((carta) => (carta.borrada = true));
            if (this.cartasBorradas.length == this.cartas.length) {
              setTimeout(() => { alert("Enhorabuena has ganado")},10);
              this.open = true;
            }

            console.log(this.cartasGiradas);
          } else {
            lanzaparejanocontrada("Pareja no Encontrada");
            this.puntosnegativos++;
            console.log(this.puntosnegativos);
          }
          this.cartasGiradas.forEach((carta) => (carta.girada = false));
        }, 750);
      }
    },
    iniciar() {
      this.cartas.sort(() => Math.random() - 0.5),
      this.iniciarJuego();
      this.mostrarcartas();
      this.open = false;
      

      console.log(25);
    },

    iniciarJuego() {
      this.puntosnegativos = 0;
      this.open = true;
      console.log(1);
      this.cartas.forEach((carta) => {
        (carta.borrada = false)
        console.log(45);
      });
      
    },

     mostrarcartas(){
      this.cartas.forEach(carta => (carta.girada = true));
      setTimeout(() => {
        this.cartas.forEach(carta => (carta.girada = false));
      }, 2000)
    } 


  };
}

function lanzaparejaencontrada(mensaje) {
  let event = new CustomEvent("parejaencontrada", {
    detail: { mensaje: mensaje },
  });

  window.dispatchEvent(event);
}

function lanzaparejanocontrada(mensaje) {
  let event = new CustomEvent("parejanocontrada", {
    detail: { mensaje: mensaje },
  });

  window.dispatchEvent(event);
}
