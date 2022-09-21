window.addEventListener("DOMContentLoaded", function() {    
  let form = document.getElementById("contact-form");
  let button = document.getElementById("contact-form-button");
  let status = document.getElementById("contact-form-status");

  function success() {
    form.reset();
    button.style = "display: none ";
    status.innerHTML = "Merci! Le formulaire de contact a été soumis avec succès.";
  }

  function error() {
    status.innerHTML = "Oops! Il y a eu un problème.";
  }

  // handle the form submission event

  form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    let data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});


window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('contact-form')) {
    form.reset();
  }
}

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  let xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}