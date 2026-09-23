/* =========================================
   PRODUTIVA
   TEMA GLOBAL
========================================= */

const THEME_KEY = "produtiva-theme";


/* =========================================
   APLICAR TEMA
========================================= */

function applyTheme(theme){

    if(theme === "light"){

        document.body.classList.add("light");

    }else{

        document.body.classList.remove("light");

    }

}


/* =========================================
   CARREGAR TEMA
========================================= */

function loadTheme(){

    const savedTheme =
        localStorage.getItem(THEME_KEY);

    applyTheme(
        savedTheme === "light"
            ? "light"
            : "dark"
    );

}


/* =========================================
   ALTERAR TEMA
========================================= */

function toggleTheme(){

    const isLight =
        document.body.classList.contains("light");

    const newTheme =
        isLight
            ? "dark"
            : "light";


    localStorage.setItem(
        THEME_KEY,
        newTheme
    );


    applyTheme(newTheme);

}


/* =========================================
   NAVEGAÇÃO
   DIRETA
   SEM TRANSIÇÃO
========================================= */

function navigateTo(url){

    if(!url) return;

    window.location.href = url;

}

window.navigateTo = navigateTo;


/* =========================================
   TEMA LIGHT
========================================= */

(function(){

    const savedTheme =
        localStorage.getItem(THEME_KEY);

    if(savedTheme === "light"){

        document.documentElement.classList.add("light");

    }

})();


/* =========================================
   INICIALIZAÇÃO
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function(){

        loadTheme();

    }
);
