 const campos = [
    { id: 'firstName', errorId: 'Error', mensagem: 'This field is required.' },
    { id: 'lastName', errorId: 'ErrorLastName', mensagem: 'This field is required.' },
    { id: 'emailAddress', errorId: 'emailError', mensagem: 'Please enter a valid email address.' },
    { id: 'message', errorId: 'ErrorMsg', mensagem: 'This field is required.' }
  ];
  
  document.getElementById('myForm').addEventListener('submit', function(event) {
    let valido = true;
  
    for (let i = 0; i < campos.length; i++) { //for criado para que verifique cada campo do formulário assim que o botão submti é clicado//
      const campo = document.getElementById(campos[i].id); 
      const error = document.getElementById(campos[i].errorId);
  
      if (campo.value.trim() === '') {
        error.style.display = 'block';
        campo.classList.add('error-in');
        valido = false;
      } else {
        error.style.display = 'none';
        campo.classList.remove('error-in');
      }
    }
    if (!valido) {
      event.preventDefault();  
    }
  });

  function validateEmail(email) {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return emailPattern.test(email);
    
  }
  document.getElementById("myForm").addEventListener("submit", function(event) {
    const email = document.getElementById("emailAddress").value;
    const notValid = document.getElementById("notValid");
  
    if (validateEmail(email)) {
      notValid.style.display = "none";
    } else {
      notValid.style.display = "block";
      event.preventDefault(); 
     }
  });

  document.getElementById('myForm').addEventListener('submit', function(event) {
  const checkbox = document.getElementById('agreement');
  const error = document.getElementById('errorCheck');

  if (!checkbox.checked) {
    event.preventDefault(); 
    error.style.display = 'block';
    checkbox.classList.add('error-in');

  } else {
    errorCheck.style.display = 'none'; 
    checkbox.classList.remove('error-in');
  }
  });

  document.getElementById('myForm').addEventListener('submit', function (e) {
    const queryTypeSelected = document.querySelector('input[name="query-type"]:checked');
    const error = document.getElementById('errorQuery');
    
    if (!queryTypeSelected) {
      e.preventDefault();
      error.style.display = 'block';
    } else {
      error.style.display = 'none';
    }
  });