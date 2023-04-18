function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));
  
      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
    });
  }

  async function luckyDrawPlayers(player1, player2, player3) {
    let promise1 = luckyDraw(player1);
    let promise2 = luckyDraw(player2);
    let promise3 = luckyDraw(player3);
  
    return Promise.allSettled([promise1, promise2, promise3]);
  }
  
  luckyDrawPlayers("Topolino", "Paperino", "Pippo")
    .then((res) => console.log(res))
    .then(() => console.log("----------------------------"))
    .catch((err) => console.log("Errore: " + err));