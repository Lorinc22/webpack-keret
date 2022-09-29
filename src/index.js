import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

function ChangeKep()
{
    let url = document.getElementById('url').value;
    document.getElementById('kep').src = url;
    document.getElementById('width').defaultValue = document.getElementById('kep').width;
}

function width()
{
    let width = document.getElementById('width').value;
    document.getElementById('kep').width = width;
}

function borderWidth()
{
    let border = document.getElementById('border').value;
    document.getElementById('kep').style.border = border + 'px solid black' ;
}


