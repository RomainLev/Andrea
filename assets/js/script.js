function validerFrm() {
  var nom = $('#nom').val();
  var prenom = $('#prenom').val();
  var mail = $('#mail').val();
  var mdp = $('#mdp').val();

  var erreurs = new Array();

  if (nom == ""){
    erreurs.push('Veuillez saisir votre nom');
  }

  if (prenom == ""){
    erreurs.push('Veuillez saisir votre prénom');
  }

  if (mail == ""){
    erreurs.push('Veuillez saisir votre adresse mail');
  }

  if (mdp == ""){
    erreurs.push('Veuillez saisir votre mot de passe');
  }

  if(erreurs.length != 0) {
    var message = "<ul>";

    for (var i = 0 ; i < erreurs.length; i++) {
      message += "<li>";
      message += erreurs[i];
      message += "</li>";
    }

    message += "</ul>";
    document.write(message);
  }
  else{
    alert("Formulaire bien rempli");
  }
}
