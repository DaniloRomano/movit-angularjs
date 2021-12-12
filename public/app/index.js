const http = require("http");
var express = require("express");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var passport = require("passport");
var GitHubStrategy = require("passport-github").Strategy;
var app = express();

app.use(express.static("./public"));

//passport
app.use(cookieParser());
app.use(
  session({
    secret: "homem avestruz",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

var userInfo = {
  nome: null,
  username: null,
  photo: null,
};

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      userInfo.nome = profile.displayName;
      userInfo.username = profile.username;
      userInfo.photo = profile.photos[0].value;
      return done(null, userInfo);
    }
  )
);

  /*
        Chamado apenas UMA vez e recebe o usuário do nosso
        banco disponibilizado pelo callback da estratégia de
        autenticação. Realizará a serialização apenas do
        ObjectId do usuário na sessão.
     */
        passport.serializeUser(function (usuario, done) {
          done(null, usuario);
      });
  
      //Recebe o ObjectId do usuário armazenado na sessão
      // Cahado a CADA Requisição
      passport.deserializeUser(function (usuario, done) {
          done(null, usuario);
          // Usuario.findById(id)
          //     .exec()
          //     .then((usuario) => {
          //         done(null, usuario);
          //     });
      });

app.get("/auth/github", passport.authenticate("github"));
app.get(
  "/auth/github/callback",
  passport.authenticate("github", {
    successRedirect:"/logado",
    failureRedirect: "/#/login",
  })
);

app.route('/logado')
  .get(function(req,res){
    res.redirect("http://localhost/#/?nome="+req.user.nome+"&username="+req.user.username);
  });

app.get("/logout", function (req, res) {
  req.logOut();
  res.redirect("/#/login");
});

const server = http.createServer(app);
server.listen(3000);
