let score;
    let scorestr = localStorage.getItem('score');
    //console.log(scorestr);
    score = JSON.parse(scorestr) || {
      Won: 0,
      Lose: 0,
      Tied: 0,
    }

    function remove(scorestr) {
      if (scorestr !== JSON.stringify(score)) {
        score = {
          Won: 0,
          Lose: 0,
          Tied: 0,
        }
      }
    }




    function computerchoice() {

      let computer = Math.round(Math.random() * 2);
      if (computer === 0) {
        return `Bat`;
      }
      else if (computer === 1) {
        return `Ball`;
      }
      else {
        return `Stumps`;
      }
    }



    function displayresult(user, computer) {
      if (user == `Bat`) {
        if (computer === 'Bat') {
          score.Tied++;
          return `User:Bat,Computer:Bat,Match:Tied`;
        }
        if (computer === 'Ball') {
          score.Won++;
          return `User:Bat,Computer:Ball,Match:Won`;
        }
        if (computer === 'Stumps') {
          score.Lose++;
          return `User:Bat,Computer:Stumps,Match:Losed`;
        }
      }



      if (user == `Ball`) {
        if (computer === 'Bat') {
          score.Lose++;
          return `User:Ball,Computer:Bat,Match:Losed`;
        }
        if (computer === 'Ball') {
          score.Tied++;
          return `User:Ball,Computer:Ball,Match:Tied`;
        }
        if (computer === 'Stumps') {
          score.Won++;
          return `User:Ball,Computer:Stumps,Match:Won`;
        }
      }


      if (user == `Stumps`) {
        if (computer === 'Bat') {
          score.Won++;
          return `User:Stumps,Computer:Bat,Match:Won`;
        }
        if (computer === 'Ball') {
          score.Lose++;
          return `User:Stumps,Computer:Ball,Match:Losed`;
        }
        if (computer === 'Stumps') {
          score.Tied++;
          return `User:Stumps,Computer:Stumps,Match:Tied`;
        }
      }
    }



    function display(result, userchoice, computer) {
      localStorage.setItem(`score`, JSON.stringify(score));
      //alert(`${result} and the score is:Won ${score.Won},Lose ${score.Lose},Tied ${score.Tied}`);
      document.querySelector('#m1').innerText = userchoice ? `User Chosed:${userchoice}` : "";
      document.querySelector('#m2').innerText = computer ? `Computer Chosed:${computer}` : "";
      document.querySelector('#m3').innerText = result ? `The Result is->${result}` : "";
      document.querySelector('#m4').innerText = `The Score is->Won: ${score.Won},Lose: ${score.Lose},Tied: ${score.Tied}`;
    }