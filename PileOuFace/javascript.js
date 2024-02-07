document.getElementById("pile").addEventListener("click", clickpile);
document.getElementById("face").addEventListener("click", clickface);

let history = [];
let victoires = 0;
let defaites = 0;

function clickpile() {
  choix("p");
  history.unshift("p");
}

function clickface() {
  choix("f");
  history.unshift("f");
}

function choix (lettre) {
    let predi = prediction(history);
    if (predi==lettre) {
        defaites++;
    } else {
        victoires++;
    }
    if (predi=="p") {
        predi="Pile";
    } else {
        predi="Face";
    }
    document.getElementById("score").innerHTML = "Prédiction: " + predi +  ". Score actuel: " + victoires + "/" + (victoires + defaites);
}

function prediction(array) {
  for (let i = 1; i < array.length - 2; i++) {
    if (
      array[i] == array[0] &&
      array[i + 1] == array[1] &&
      array[i + 2] == array[2] &&
      array[i + 3] == array[3]
    ) {
      console.log(
        "Derniere fois (il y a " +
          i +
          " moves), après " +
          array[3] +
          array[2] +
          array[1] +
          array[0] +
          " tu avais mis:" +
          array[i - 1]
      );
      return array[i - 1];
    }
  }
  for (let i = 1; i < array.length - 2; i++) {
    if (
      array[i] != array[0] &&
      array[i + 1] != array[1] &&
      array[i + 2] != array[2] &&
      array[i + 3] != array[3]
    ) {
      console.log(
        "Derniere fois (il y a " +
          i +
          " moves), après l'inverse de " +
          array[3] +
          array[2] +
          array[1] +
          array[0] +
          " tu avais mis:" +
          array[i - 1]
      );
      return array[i - 1];
    }
  }

  for (let i = 1; i < array.length - 2; i++) {
    if (
      array[i] == array[0] &&
      array[i + 1] == array[1] &&
      array[i + 2] == array[2]
    ) {
      console.log(
        "Derniere fois (il y a " +
          i +
          " moves), après " +
          array[2] +
          array[1] +
          array[0] +
          " tu avais mis:" +
          array[i - 1]
      );
      return array[i - 1];
    }
  }

  for (let i = 1; i < array.length - 2; i++) {
    if (
      array[i] != array[0] &&
      array[i + 1] != array[1] &&
      array[i + 2] != array[2]
    ) {
      console.log(
        "Derniere fois (il y a " +
          i +
          " moves), après l'inverse de " +
          array[2] +
          array[1] +
          array[0] +
          " tu avais mis:" +
          array[i - 1]
      );
      return array[i - 1];
    }
  }
  for (let i = 1; i < array.length - 2; i++) {
    if (array[i] == array[0] && array[i + 1] == array[1]) {
      console.log(
        "Derniere fois (il y a " +
          i +
          " moves), après " +
          array[1] +
          array[0] +
          " tu avais mis:" +
          array[i - 1]
      );
      return array[i - 1];
    }
  }
  for (let i = 1; i < array.length - 2; i++) {
    if (array[i] != array[0] && array[i + 1] != array[1]) {
      console.log(
        "Derniere fois (il y a " +
          i +
          " moves), après l'inverse de " +
          array[1] +
          array[0] +
          " tu avais mis:" +
          array[i - 1]
      );
      return array[i - 1];
    }
  }
  if (array[0]=="p") {
    return "f";
  } else {
    return "p";
  }
}
