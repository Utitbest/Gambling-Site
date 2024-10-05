let game = document.querySelector('.game');
let pickspan = document.querySelectorAll('.numpick');
let resultshow = document.querySelector('.resultshow');
let wallet = document.querySelector('.WalletBalance');
let startGame = document.querySelector('.starGame');
let bubblecontainer = document.querySelector('.bubbleMain');
let clear = document.querySelector('.clearStorage');
let condom = document.querySelector('.ourboys');
let bubbles = document.querySelectorAll('.bubble');
let stake = document.querySelectorAll('.stake');
let gameStartwrap = document.querySelector('.gameStartwrap');
let falloutanimation = document.querySelector('.falloutanimation');
let falloutanimations = document.querySelector('.falloutanimations');
let LastNumbers = document.querySelector('.LastNumbers')
// let stakeAmmountee = document.querySelector('.stakeAmmount')
let WinAmount;

pickspan.forEach((picks, index) => {
    picks.addEventListener('click', function(){

        if(ReturnSelectedNumber() !== null){
            if(ReturnSelectedNumber().includes(picks.innerText)){
                this.removeAttribute('style');
                
                removeUnselect(picks.innerText);
                let rmve = condom.querySelector('.num-'+ picks.innerText)
                if(rmve !== null){
                    rmve.remove();
                }
                return;
            }
        }
       
        if(ReturnSelectedNumber() !== null){
            if(ReturnSelectedNumber().length >= 6){
                game.insertAdjacentElement('afterbegin', gameNotification('You can only select 6 random numbers'));
                closeNotification();
                return;
            }
        }

        let colors = 'rgb('+ color() + ',' +color() +',' +color()+')';
        let Bcolors = 'rgb('+ color() + ',' +color() +',' +color()+')';

        picks.style .setProperty('background', colors );
        picks.style.setProperty('border-color' , Bcolors);

       
        let auntycd = document.createElement('span')
            auntycd.className = 'gbese num-' + picks.innerText;
            auntycd.style.setProperty('background', colors);
            auntycd.style.setProperty('border-color', Bcolors);
            auntycd.innerHTML = picks.innerHTML;
            condom.append(auntycd);

            addToStorage(picks.innerHTML);
    });
});
function color(){
    return Math.floor(Math.random() * 255)
}

function addToStorage(data){
    let a, b, c, d, e, f, g;
    if(localStorage.getItem('userPicks') !== null){
        a = [];
        b = JSON.parse(localStorage.getItem('userPicks'));
        a.push(data);

        let c = a.concat(b);

        // console.log(c)
        localStorage.setItem('userPicks', JSON.stringify(c));
    }else{
        a = [];
        a.push(data);

        localStorage.setItem('userPicks', JSON.stringify(a));
    }
}

function ReturnSelectedNumber(){
    if(localStorage.getItem('userPicks') != null){
        return JSON.parse(localStorage.getItem('userPicks'));
    }else{
        return null;
    }
};
clear.onclick = function(){
    localStorage.removeItem('userPicks');
    pickspan.forEach((selected, index) =>{
        selected.removeAttribute('style')
        condom.innerHTML = '';
        resultshow.innerHTML = '';
    });
    stake.forEach(ele => {
        ele.classList.remove('selectedAmount');
        ele.removeAttribute('selected');
    })
}
clear.addEventListener('dblclick', function(){
    localStorage.removeItem('gameWallet');
    wallet.innerHTML = '0';

    game.insertAdjacentElement('afterbegin', gameNotification('You have succesfully clear your wallet balance, Yur new balance is &#8358;0'));
    closeNotification();
    return
});

function CreateElement(){
    return document.createElement('utit')
}
function gameNotification(data){
    let a, b, c, d, e, f, g, h, i, j;
    a = CreateElement('div');
    a.className = 'gameNotification ';
        b = CreateElement('div');
        b.className = 'notify-inner'
            c = CreateElement('div');
            c.className = 'gameclose close-here fa-fade';
            c.innerText = 'Click to close';
        b.append(c);
        d = CreateElement('div')
        d.className = 'notify-msg';
        e = CreateElement('h5');
        e.innerHTML = data;
        d.append(e)
        b.append(d);
    a.append(b);
    return a;
}
function FunForLossing(fans){
    a = CreateElement('div');
    a.className = 'FunNotification';
    b = CreateElement('div');
    b.className = 'Fun-inner';
    c = CreateElement('div')
    c.className = 'Fun-msg ';
    c.innerHTML = '&#128557;';
    d = CreateElement('h5')
    d.className = 'textone'
    d.innerHTML = fans;
    e = document.createElement('button');
    e.className = 'boness clsing';
    e.innerHTML = 'Try again'
    b.append(e);
    b.append(d);
    b.append(c);
    a.append(b);
    return a;
}
function FunNotification(ade){
    let a , b , c, d, e, f;

    a = CreateElement('div');
    a.className = 'FunNotification';
    b = CreateElement('div');
    b.className = 'Fun-inner';
    c = CreateElement('div')
    c.className = 'Fun-msg ';
    c.innerHTML = '&#128512;';
    d = CreateElement('h5')
    d.className = 'textone'
    d.innerHTML = ade;
    e = document.createElement('button');
    e.className = 'boneshe clsing';
    e.innerHTML = 'Play again!'
    b.append(e);
    b.append(d);
    b.append(c);
    a.append(b);
    return a;
}
function closingPrayer(){
    let clsing = document.querySelector('.clsing');
    let notification = document.querySelector('.FunNotification');
    let happyLaugh1 = document.querySelector('.happyLaugh');
    clsing.addEventListener('click', function(){
        if(happyLaugh1 !== null){
            happyLaugh1.remove();
        }
            notification.remove();
            clsing.remove();
        });
}

function closeNotification(){
    let btnclose = document.querySelector('.close-here');
    let notification = document.querySelector('.gameNotification');
        btnclose.addEventListener('click', function(){ 
            notification.remove();
            btnclose.remove();
        });
};

function removeUnselect(data){
    let current = ReturnSelectedNumber();
    let position = current.indexOf(data);
    let tmp = current.splice(position, 1);

    localStorage.setItem('userPicks', JSON.stringify(current));
}

function returnSelectedIfRefresh(){
    if(ReturnSelectedNumber() !== null){
        for(let x = 0; x < ReturnSelectedNumber().length; x++){
            let colors = 'rgb('+ color() + ',' +color() +',' +color()+')';
            let Bcolors = 'rgb('+ color() + ',' +color() +',' +color()+')';

            let auntycd = document.createElement('span')
            auntycd.className = 'gbese num-' + ReturnSelectedNumber()[x];
            auntycd.style.setProperty('background', colors);
            auntycd.style.setProperty('border-color', Bcolors);
            auntycd.innerHTML = ReturnSelectedNumber()[x];

            condom.append(auntycd)

            let ele = document.querySelector('.id-' + ReturnSelectedNumber()[x]);
                ele.style.setProperty('background', colors);
                ele.style.setProperty('border-color', Bcolors);
        };
    };
};

function bubbleRandom(){
    let BW, bH, bCwidth, bCHight;
    
    for(let y = 0; y < bubbles.length; y++){
        bCHight = bubblecontainer.clientHeight;
        bCwidth = bubblecontainer.clientWidth;
        BW = bubbles[y].clientWidth;
        bH = bubbles[y].clientHeight;
        
        let colors = 'rgb('+ color() + ',' +color() +',' +color()+')';
        let Bcolors = 'rgb('+ color() + ',' +color() +',' +color()+')';

        let xp = bCwidth - BW;
        let xy = bCHight - bH;

        let x = Math.floor(Math.random() * xp - 150);
        let ypos = Math.floor(Math.random() * xy - 79);

        bubbles[y].style.bottom = x + 'px';
        bubbles[y].style.left = ypos + 'px';
        bubbles[y].style.background = `radial-gradient(`+ colors + ',' + Bcolors + `)`;
        bubbles[y].style.setProperty('border-color', Bcolors);
    }
}

// return selected amount
function returnSelectedAmonut(){
    let tmp = document.querySelector('.selectedAmount');
    if(tmp == null){
        return null;
    }
    return tmp.getAttribute('data');
}

// select bet amount

function selectAmount(){
    // stake.forEach((stake, index) => {
    //     stake.addEventListener('click', function(){
    //         let tmp = document.querySelector('.selectedAmount');
    //             if(tmp !== null){
    //                 tmp.classList.remove('selectedAmount');
    //                 tmp.removeAttribute('selected')
    //             }
    //             this.classList.add('selectedAmount')
    //             this.removeAttribute('selected', true)
    //     })
    // })
    for(let x = 0; x < stake.length; x++){
        stake[x].addEventListener('click', function(){
            let tmp = document.querySelector('.selectedAmount');
                if(tmp !== null){
                    tmp.classList.remove('selectedAmount');
                    tmp.removeAttribute('selected');
                }
                    this.classList.add('selectedAmount')
                    // this.removeAttribute('selected', true)
        })
    }
}


startGame.onclick = function(){
    resultshow.innerHTML = '';
    if(isNaN(returnSelectedAmonut()) || returnSelectedAmonut() == null){

        game.insertAdjacentElement('afterbegin', gameNotification('Please select a staking amount!'));
            closeNotification();
        return
    }
    if(ReturnSelectedNumber() == null){
        game.insertAdjacentElement('afterbegin', gameNotification('Select six random number before betting'));
        closeNotification();
        return
    }
    if(ReturnSelectedNumber().length != 6){
        game.insertAdjacentElement('afterbegin', gameNotification('You selected ' + ReturnSelectedNumber().length + ' number intsead of 6 random numbers'));
        closeNotification();
        return
    }
    if(getWallet() <= 0){
        let fundWallet = document.querySelector('.fundWallet');
        if(fundWallet !== null){
            fundWallet.remove();
        }
        // beforebegin, aferbegin, beforeend, afterend
        gameStartwrap.insertAdjacentElement('afterend', showfundWallet());
        AddToWallet();
        return;
    }
    if(returnSelectedAmonut() > getWallet()){
        game.insertAdjacentElement('afterbegin', gameNotification('Your wallet balance is too low, your current balance is &#8358;' + getWallet()));
        closeNotification();

        let fundWallet = document.querySelector('.fundWallet');
        if(fundWallet !== null){
            fundWallet.remove();
        }
        gameStartwrap.insertAdjacentElement('afterend', showfundWallet());
        AddToWallet();        
        return;
    }
    let gameStarForm = 0;
    this.innerHTML = 'Loading';
    let numberTocomeout = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,14,
                            15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
                             27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
                              39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49];
    let bubbleMovement = setInterval(bubbleRandom, 300);
    let systemNum = [];
    let uidCount = [950, 800, 650, 400, 260]
    let stake = document.querySelectorAll('.stake');
    falloutanimation.classList.add('playanimation');
    falloutanimations.classList.add('roller');
    let sTubornMan = document.querySelector('.sTubornMan')
    addSubtract(returnSelectedAmonut(), 'substract')
    let playMusic = document.createElement('audio');
    let tekno = 'C:/Users/UTITOFON PC/Documents/Gambling Site/';
    let puttin = 'falling rock game.mp3';
    playMusic.src = tekno + puttin;
    let gameStartInterval = setInterval(function(){       
        if(gameStarForm <= 6){
            let counter = gameStarForm + 1; 
            startGame.disabled = true;
            clear.disabled = true;
            sTubornMan.style.display = 'flex';
            Disabledbutton()
            // playMusic.play();
            let pickArr = numberTocomeout[Math.floor(Math.random() * numberTocomeout.length)];

            systemNum.push(pickArr);
            localStorage.setItem('systemOutNumber', JSON.stringify(systemNum));
            
            startGame.innerHTML = 'Round' + gameStarForm;
            let colors = 'rgb('+ color() + ',' +color() + ',' +color()+')';
            let Bcolors = 'rgb('+ color() + ',' +color() +',' +color()+')';
            let playOutcome = CreateElement('div');
                playOutcome.innerHTML = pickArr;
                playOutcome.className = 'rst';
                playOutcome.style.setProperty('background', colors)
                playOutcome.style.setProperty('border-color', Bcolors)
                resultshow.append(playOutcome);
            // falloutanimation.style.left = uidCount[gameStarForm] + 'px';

            gameStarForm++;
        }

        
        if(gameStarForm >= 6){
            clearInterval(gameStartInterval);
            clearInterval(bubbleMovement);
            clear.disabled = false;
            startGame.disabled = false;
            Disabledbutton1()
            sTubornMan.style.display = 'none';
            // playMusic.pause();
            startGame.innerHTML = 'Play again';
            falloutanimation.classList.remove('playanimation');
            falloutanimations.classList.remove('roller');

            let numarr = localStorage.getItem('systemOutNumber');
            // UncleDeniesMe(numarr);
            ToBeTaken();
            if(result().length == 0){                
                game.insertAdjacentElement('afterbegin', FunForLossing('Ooh no!!! you\'ve lost'));
                closingPrayer();
                return;
            }
            
            if(result().length == 1 && returnSelectedAmonut() == 100){              
                WinAmount = 100;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 2 && returnSelectedAmonut() == 100){
                WinAmount = 200;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();   
                return;
            }

            if(result().length == 3 && returnSelectedAmonut() == 100){
                WinAmount = 100 * 10;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 4 && returnSelectedAmonut() == 100){
                WinAmount = 100 * 20;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 5 && returnSelectedAmonut() == 100){
                WinAmount = 100 * 40;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 6 && returnSelectedAmonut() == 100){
                WinAmount = 100 * 60;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 1 && returnSelectedAmonut() == 150){
                WinAmount = 150;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 2 && returnSelectedAmonut() == 150){
                WinAmount = 250;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 3 && returnSelectedAmonut() == 150){
                WinAmount = 150 * 10;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 4 && returnSelectedAmonut() == 150){
                WinAmount = 150 * 20;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 5 && returnSelectedAmonut() == 150){
                WinAmount = 150 * 40;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 6 && returnSelectedAmonut() == 150){
                WinAmount = 150 * 60;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 1 && returnSelectedAmonut() == 200){
                WinAmount = 200;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 2 && returnSelectedAmonut() == 200){
                WinAmount = 300;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 3 && returnSelectedAmonut() == 200){
                WinAmount = 200 * 10;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 4 && returnSelectedAmonut() == 200){
                WinAmount = 200 * 20;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 5 && returnSelectedAmonut() == 200){
                WinAmount = 200 * 40;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }
            
            if(result().length == 6 && returnSelectedAmonut() == 200){
                WinAmount = 200 * 60;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 1 && returnSelectedAmonut() == 250){
                WinAmount = 250;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 2 && returnSelectedAmonut() == 250){
                WinAmount = 350;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 3 && returnSelectedAmonut() == 250){
                WinAmount = 250 * 10;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 4 && returnSelectedAmonut() == 250){
                WinAmount = 250 * 20;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 5 && returnSelectedAmonut() == 250){
                WinAmount = 250 * 40;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 6 && returnSelectedAmonut() == 250){
                WinAmount = 250 * 60;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 1 && returnSelectedAmonut() == 300){
                WinAmount = 300;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 2 && returnSelectedAmonut() == 300){
                WinAmount = 400;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 3 && returnSelectedAmonut() == 300){
                WinAmount = 300 * 10;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 4 && returnSelectedAmonut() == 300){
                WinAmount = 300 * 20;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 5 && returnSelectedAmonut() == 300){
                WinAmount = 300 * 40;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 6 && returnSelectedAmonut() == 300){
                WinAmount = 300 * 60;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 1 && returnSelectedAmonut() == 350){
                WinAmount = 350;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }


            if(result().length == 2 && returnSelectedAmonut() == 350){
                WinAmount = 450;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 3 && returnSelectedAmonut() == 350){
                WinAmount = 350 * 10;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 4 && returnSelectedAmonut() == 350){
                WinAmount = 350 * 20;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 5 && returnSelectedAmonut() == 350){
                WinAmount = 350 * 40;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 6 && returnSelectedAmonut() == 350){
                WinAmount = 350 * 60;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 1 && returnSelectedAmonut() == 400){
                WinAmount = 400;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                closingPrayer();
                RibbonDrop();
                return;
            }

            if(result().length == 2 && returnSelectedAmonut() == 400){
                WinAmount = 500;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 3 && returnSelectedAmonut() == 400){
                WinAmount = 400 * 10;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 4 && returnSelectedAmonut() == 400){
                WinAmount = 400 * 20;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 5 && returnSelectedAmonut() == 400){
                WinAmount = 400 * 40;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 6 && returnSelectedAmonut() == 400){
                WinAmount = 400 * 60;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 1 && returnSelectedAmonut() == 450){
                WinAmount = 450;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 2 && returnSelectedAmonut() == 450){
                WinAmount = 550;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 3 && returnSelectedAmonut() == 450){
                WinAmount = 450 * 10;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 4 && returnSelectedAmonut() == 450){
                WinAmount = 450 * 20;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 5 && returnSelectedAmonut() == 450){
                WinAmount = 450 * 40;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 6 && returnSelectedAmonut() == 450){
                WinAmount = 450 * 60;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 1 && returnSelectedAmonut() == 500){
                WinAmount = 500;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 2 && returnSelectedAmonut() == 500){
                WinAmount = 600;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 3 && returnSelectedAmonut() == 500){
                WinAmount = 500 * 10;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 4 && returnSelectedAmonut() == 500){
                WinAmount = 500 * 20;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 5 && returnSelectedAmonut() == 500){
                WinAmount = 500 * 40;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 6 && returnSelectedAmonut() == 500){
                WinAmount = 500 * 60;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 1 && returnSelectedAmonut() == 550){
                WinAmount = 550;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 2 && returnSelectedAmonut() == 550){
                WinAmount = 650;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 3 && returnSelectedAmonut() == 550){
                WinAmount = 550 * 10;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 4 && returnSelectedAmonut() == 550){
                WinAmount = 550 * 40;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 5 && returnSelectedAmonut() == 550){
                WinAmount = 550 * 40;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            }

            if(result().length == 6 && returnSelectedAmonut() == 550){
                WinAmount = 550 * 60;
                addSubtract(WinAmount, 'add');
                game.insertAdjacentElement('afterbegin', FunNotification('Yeah!!!! you\'ve won  &#8358;' + WinAmount));
                RibbonDrop();
                closingPrayer();
                return;
            } 
            
        }
        
      
    }, 2000);
};

function systemNumber(){
    return JSON.parse(localStorage.getItem('systemOutNumber'));
}

function userSelect(){
    return JSON.parse(localStorage.getItem('userPicks'));
}

function result(){
    let userSelectArr = userSelect().map(Number);
    let systemArr = systemNumber();

    let rst = userSelectArr.filter(value => systemArr.includes(value));

    return rst
}

function getWallet(){
    return Number(wallet.innerText)
}
function showfundWallet(){
    let a, b, c, d, e, f, g;
        a = CreateElement('div');
        a.className = 'fundWallet';

            b = document.createElement('input');
            b.type = 'text';
            b.placeholder = 'Fund wallet'
            b.className = 'funder';
            a.append(b);

            c = CreateElement('button')
            c.className = 'fundWalletInvoker';
            c.innerHTML = '<i class="fa fa-wallet"></i>';
            a.append(c)
            return a;
}
function GetAndCheckIfRepeat(){
    if(localStorage.getItem('systemOutNumber') !== null){
        return JSON.parse(localStorage.getItem('systemOutNumber'));
    }
    return 0;
}
function AddToWallet(){
    let wallets = document.querySelector('.fundWalletInvoker');
    let funder = document.querySelector('.funder');
    let fundWallet = document.querySelector('.fundWallet')
    wallets.addEventListener('click', function(){
       if(funder.value.search(/[^0-9]/) !== -1){
        game.insertAdjacentElement('afterbegin', gameNotification('Sorry Non-digit values is not allowed "' + funder.value + '"'));
        closeNotification();
        return;
       }
       localStorage.setItem('gameWallet', Number(funder.value) + getWallet());
       game.insertAdjacentElement('afterbegin', gameNotification('You have succesfully fund your wallet &#8358;' + funder.value));
       let bal = updateWalletFromStorage().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
       wallet.innerHTML = bal;
       fundWallet.remove();
       closeNotification();
       return;
    })
}
function updateWalletFromStorage(){
    if(localStorage.getItem('gameWallet') != null){     
        return Number(localStorage.getItem('gameWallet')); 
    }else{
        return 0;
    }
}

function addSubtract(amount, type){
    let balance;
    if(type == 'substract'){
        balance = updateWalletFromStorage() - amount;

        localStorage.setItem('gameWallet', balance);
        let bal = updateWalletFromStorage().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
       wallet.innerHTML = bal;
    }else if(type == 'add'){
        balance = updateWalletFromStorage() + amount;

        localStorage.setItem('gameWallet', balance);
        let bal = updateWalletFromStorage().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        wallet.innerHTML = bal;

    }
}

Disabledbutton = () => {
    let stake = document.querySelectorAll('.stake');
    stake.forEach(ele => {
        ele.disabled = true;
    })
};
Disabledbutton1 = () => {
    let stake = document.querySelectorAll('.stake');
    stake.forEach(ele => {
        ele.disabled = false;
    })
};

function RibbonDrop(){
    let game = document.querySelector('.game');
    let a, b, c, d, e, f, g;
    a = CreateElement('div');
    a.className = 'happyLaugh';
    b = CreateElement('div')
    b.className = 'happyLaugh_cnt';
    for(let Num = 0; Num < 100; Num++){
        c = CreateElement('span')
        c.className = 'HappyDay';
        b.append(c);  
        c.style.setProperty('animation-delay', Num + 's') 
    }
    a.append(b);
    game.append(a);
    Drip();
}

function BoneRandom(){
    let Arr = [10, 11, 12, 13,14,
        15, 16, 17, 18, 19, 20, 21, 22, 23, 25, 26,
         27, 28, 29, 50, 31, 79, 33, 34, 55, 36, 60, 38,
          39, 40, 41, 59, 43, 44, 70, 46, 65, 48, 49, ];
    let Burns = Arr[Math.floor(Math.random() * Arr.length)];
    return Burns;
}
function RandomforHeight(){
    let Arr = [10, 11, 12, 13,14,
        15, 16, 17, 18, 19, 20, 21, 22, 23, 25, 26,
         27, 28, 29, 50, 31, 79, 33, 34, 55, 36, 60, 38,
          39, 40, 41, 59, 43, 44, 70, 46, 65, 48, 49, ];
    let bolorsc = Arr[Math.floor(Math.random() * Arr.length)];
    return bolorsc;
}
function Drip(){
    let HappyDa = document.querySelectorAll('.HappyDay');
    for(let a = 0; a < HappyDa.length; a++){
        HappyDa[a].style.setProperty('width', BoneRandom() + 'px');
        HappyDa[a].style.setProperty('height', RandomforHeight() + 'px');
        HappyDa[a].style.background = 'rgb('+color() + ',' + color() + ',' + color() +')'

        // HappyDa[a].style.animationDelay = 1+'px' //HappyDa[a]+ 'px';
        // console.log(HappyDa.length)
    }
}
// function UncleDeniesMe(data){
//     let a, b, c, d, f;
//     if(localStorage.getItem('ToBeReturn') !== null){
//         a = [];
//         b = localStorage.getItem('ToBeReturn');
//         a.push(data)
//         c = a.concat(b);
//         localStorage.setItem('ToBeReturn', JSON.stringify(c));

//     }else{
//         a = []
//         a.push(data);
//         localStorage.setItem('ToBeReturn', JSON.stringify(a));
//     }
// }
// function DrawUpdate(){
//     let DrawLog = [];
//     DrawLog.push(localStorage.getItem('systemOutNumber'));
//     localStorage.setItem('ToBeReturn', JSON.stringify(DrawLog))
//     console.log('returns',DrawLog)
//     // singleGirl.innerHTML = DrawLog;
// }
// DrawUpdate();

function LastComingNumbers(){
    let LastNumbers = document.querySelector('.LastNumbers');
    let game = document.querySelector('.game')
    LastNumbers.addEventListener('click', function(){
        let a, b, c, d, e, f, g, h;
        a = CreateElement('div')
        a.className = 'comingContainer-cnt';
        b = CreateElement('div');
        b.className = 'containerONe';
        c = CreateElement('div');
        c.className = 'containerTwo';
        d = CreateElement('div')
        d.className = 'Secondsmall';
        e = CreateElement('i')
        e.className = 'Kong1 clone fa fa-xmark fa-shake fa-2x';
        d.append(e);
        f = CreateElement('div');
        f.className = 'Firstbig';

        let FromLocalStorage = JSON.parse(localStorage.getItem('ToBeReturn'));
        let keyS = Object.keys(FromLocalStorage);
        
        for(let x = 0; x < keyS.length; x++){
            g = CreateElement('div');
            g.className = 'firstbig_IN';
            let innerArray = FromLocalStorage[keyS[x]];
           
            f.append(g);
           
        }
        c.append(f)
        c.append(d)
        b.append(c);
        a.append(b);
        game.append(a);

        Skull();
    });
}
LastComingNumbers();
Skull = () => {
    let Kong1 = document.querySelector('.Kong1');
    let comingContainer = document.querySelector('.comingContainer-cnt')
    Kong1.addEventListener('click', function(){ 
        comingContainer.remove();
        Kong1.remove();    
    });
};

// function filterRepeatedNumber(data){
//     let systemNum = []
//     if(GetAndCheckIfRepeat().includes(data)){
//         systemNum.push(pickArr);
//         localStorage.setItem('systemOutNumber', JSON.stringify(systemNum));
//     }else{
//         systemNum.push(pickArr);
//         localStorage.setItem('systemOutNumber', JSON.stringify(systemNum));
//     }
// }

ToBeTaken = () => {
    let NewObj = {}
    let a = JSON.parse(localStorage.getItem('systemOutNumber'));
    let currentObj = JSON.parse(localStorage.getItem('ToBeReturn'));
    let ind;
    if(currentObj == null){
         ind = 0;

         let arrayName = 'array'+ ind;
         NewObj[arrayName] = a;
     
        // NewObj[arrayName].push(a);
         localStorage.setItem('ToBeReturn', JSON.stringify(NewObj));
    }else {
        let key = Object.keys(currentObj);
        ind = key.length;

        let arrayName = 'array'+ ind;
        NewObj[arrayName] = a;
      let abc = Object.assign({},NewObj, currentObj)


        // console.log(abc)
         localStorage.setItem('ToBeReturn', JSON.stringify(abc));
    }


}
// ToBeTaken();

window.addEventListener('keydown', function(event){
    if(event.keyCode == 32){
        resultshow.innerHTML = '';
    }
    if(event.keyCode == 13){
        let game = document.querySelector('.gameNotification');
        game.remove();
    }
})
window.onload = function(){
    let bal = updateWalletFromStorage().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
       wallet.innerHTML = bal;
    returnSelectedIfRefresh();
}
selectAmount();

