let quote = [
  {
    quoteName: "“Be yourself; everyone else is already taken.”",
    author: "― Oscar Wilde",
  },
  {
    quoteName:
      "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    author: "― Marilyn Monroe",
  },
  {
    quoteName:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: "― Albert Einstein",
  },
  {
    quoteName: "“So many books, so little time.”",
    author: "― Frank Zappa",
  },
  {
    quoteName: "“A room without books is like a body without a soul.”",
    author: "― Marcus Tullius Cicero",
  },
];

function quoteRandom() {
  let quoteReturn = Math.trunc(Math.random() * quote.length);
  document.getElementById("quote").innerHTML = quote[quoteReturn].quoteName;
  document.getElementById("author").innerHTML = quote[quoteReturn].author;
}

// ==== Dark Mode ====

const options = {
  bottom: "64px", // default: '32px'
  right: "unset", // default: '32px'
  left: "32px", // default: 'unset'
  time: "0.5s", // default: '0.3s'
  mixColor: "#fff", // default: '#fff'
  backgroundColor: "#fff", // default: '#fff'
  buttonColorDark: "#100f2c", // default: '#100f2c'
  buttonColorLight: "#fff", // default: '#fff'
  saveInCookies: false, // default: true,
  label: "🌓", // default: ''
  autoMatchOsTheme: true, // default: true
};

const darkmode = new Darkmode(options);
darkmode.showWidget();
