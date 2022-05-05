// Esta función es para que se pueda remplazar la letra por el _
String.prototype.replaceAt = function (index, character) {
  return (
    this.substr(0, index) + character + this.substr(index + character.length)
  );
};
const words = ['dog', 'cat', 'morning', 'keyboard', 'device'];
const randomWord = words[Math.floor(Math.random() * words.length)];
let wordReplaced = randomWord.replace(/./g, '_ ');
let failCounter = 0;

document.querySelector('#output').innerHTML = wordReplaced;

document.querySelector('#tryout').addEventListener('click', () => {
  const word = document.querySelector('#word').value;
  let fails = true;

  for (const i in randomWord) {
    if (word == randomWord[i]) {
      wordReplaced = wordReplaced.replaceAt(i * 2, word);
      fails = false;
    }
  }

  // Esta funcion hará que la pagina se reinicie después de unos segundos
  function delayLoad() {
    window.location.reload();
  }

  if (fails) {
    document.querySelector('#ahorcado').style.backgroundPosition =
      -(180 * failCounter) + 'px 0';
    failCounter++;
    if (failCounter == 6) {
      swal('🧨💣🧨 YOU LOST! 🧨💣🧨').then((value) => {
        swal(`The word was: ${randomWord}! 🤯`);
        setTimeout(delayLoad, 3000);
      });
    } else {
      if (wordReplaced.indexOf('_') < 0) {
        swal('🎉✨Congrats!✨🎉', '🏆 You guessed the word! 🏆', 'success');
        setTimeout(delayLoad, 3000);
      }
    }
  }

  document.querySelector('#output').innerHTML = wordReplaced;
  document.querySelector('#word').value = '';
});
