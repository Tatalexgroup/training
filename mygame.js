"use strict";    // этот код работает в современном режиме



//Создаем массив со словами для угадывания
let wordsForGame = ['программа', 'мотоцикл', 'аквапарк', 'приключение'];
//Рандомный выбор слова из массива
let word = wordsForGame[Math.floor(Math.random()*wordsForGame.length)];
//Количество не угаданных букв
let remainingLetters = word.length;
//Создаем итоговый массив
let answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = '_';
}
//GamesArray
while (remainingLetters>0) {
  alert(answerArray.join(''));

//We ask option answer
let guess = prompt('Угадайте букву, или нажмите Отмена для выхода из игры.');
    guess = guess.toLowerCase();
if (guess === null) {
  //Go out from games GamesArray
  break;
} else if (guess.length !== 1) {
  alert("Пожалуйста, введите одиночную букву.");
} else {
  // Обновляем состояние игры
  for (var j = 0; j < word.length; j++) {
    if (word[j] === guess) {
      answerArray[j] = guess;
      remainingLetters--;
    }
  }
}
//Finish games array
}
//Show answer
alert(answerArray.join(' '));
alert('Отлично! Было загадано слово ' + word);
