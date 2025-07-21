function includeHTML(selector, file) {
  fetch(file)
    .then(res => {
      if (!res.ok) throw new Error(`Erro ao carregar ${file}`);
      return res.text();
    })
    .then(html => {
      document.querySelector(selector).innerHTML = html;
    })
    .catch(err => {
      console.error(err);
    });
}

// Chamar a função para carregar o header
includeHTML("#header", "header.html");
