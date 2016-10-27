var icon = document.getElementById('search-icon');

var search = document.getElementById('search');

var opensearch = function(event){
    event.preventDefault();
    search.classList.toggle('opensearch')

}

icon.addEventListener('click', opensearch);
