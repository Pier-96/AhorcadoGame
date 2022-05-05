String.prototype.replaceAt = function (index, character) {
  return (
    this.substr(0, index) + character + this.substr(index + character.length)
  );
};

const palabras = ['casa', 'perro', 'comillas', 'zapato'];

const palabra = palabras[Math.floor(Math.random() * palabras.length)];
var palabraConGuiones = palabra.replace(/./g, '_ ');
var contadorfallos = 0;

document.querySelector('#output').innerHTML = palabraConGuiones;
document.querySelector('#calcular').addEventListener('click', () => {
  const letra = document.querySelector('#letra').value;
  var hafallado = true;
  for (const i in palabra) {
    if (letra == palabra[i]) {
      palabraConGuiones = palabraConGuiones.replaceAt(i * 2, letra);
      hafallado = false;
    }
  }
  if (hafallado) {
    contadorfallos++;
      document.querySelector('#ahorcado').style.backgroundPosition =
        -(180 * contadorfallos) + 'px 0';
        if(contadorfallos == 6){
          alert('perdiste')
        }
    }
  document.querySelector('#output').innerHTML = palabraConGuiones;
});
