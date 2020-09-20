const quiz = [
    { 
        quesion: '世界で最も多くの人が住んでいるのはどこでしょう',
        answers: [
            '低所得国',
            '中所得国',
            '高所得者',
            'どの所得国も等しく存在する。',
        ],
        correct: '中所得国'
    },
    
    { 
        quesion: '国連の予測によると、2100年にはいまより人口が40億人増えるとされています。人口が増える最も大きな理由は何でしょう？',
        answers: [
            '子供(３歳から15歳未満)が増えるから',
            '大人(15歳から74歳)が増えるから',
            '後期高齢者(75歳以上)が増えるから',
            '乳児（0歳から２歳が）増えるから',
        ],
        correct: '大人(15歳から74歳)が増えるから',
    },
    
    { 
        quesion: '世界の平均寿命は現在およそ何歳でしょう',
        answers: [
            '40',
            '50',
            '60',
            '70',
        ],
        correct: '70',
    }
];


// const quesion = 'ゲーム市場、最も売れたゲーム機はどれ？';

// const answers = [  
//     'スーパーファミコン',
//     'プレーステーション２',
//     'ニンテンドーDS',
//     'ニンテンドースイッチ',
// ];

// const correct ='ニンテンドーDS';

const quizLenght = quiz.length;
let quizIndex = 0;
let score = 0;

const $button =document.getElementsByTagName('button');
const buttonLength = $button.length;

// 問題文を出したいhtmlのidを取得。


// htmlからidを取得して変数の文字列を反映
//クイズの問題文、選択肢を定義
const setUpQuiz = () => {
    console.log();
document.getElementById('js-question').textContent = quiz[quizIndex].quesion;
    let buttonIndex = [0];
    let buttonLength = $button.length;
    while (buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
};
setUpQuiz();

// $button[0].textContent = answers[0];
// $button[1].textContent = answers[1];
// $button[2].textContent = answers[2];
// $button[3].textContent = answers[3];

// ボタンが押されたときの正誤判定

const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert('正解！');
        score++;
    }　else {
        window.alert('不正解！');
    }
    quizIndex++;
    if(quizIndex < quizLenght) {
        setUpQuiz();
    }
    else {
        window.alert('終了！あなたの正解数は' + score + '/' + quizLenght + 'です！');
        
    }
};

let handleIndex = 0;
while (handleIndex < buttonLength) {
    $button[handleIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
handleIndex++;
}



