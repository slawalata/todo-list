var notes = [];

window.onload = function() {
    //console.log('onload called!');
    
    var formNote = document.getElementById('form-note');
    formNote.addEventListener('submit', function(event) {
        event.preventDefault();
    });

    var entryNote = document.getElementById('note-entry');
    entryNote.addEventListener('keyup', function(e) {
        if(e.key === 'Enter')
        {   
            addNote(entryNote.value);
            entryNote.value = '';
            //console.log(notes);
            refreshItemList();
        }        
    });
    
}

function addNote(_note) 
{
    notes.push(_note);
}

function refreshItemList() {
    var noteList = document.getElementById('note-list');
    var _liTags = '';
    notes.forEach(function(note) {
        _liTags += '<li class="note-item">'+note+'</li>';
    })
    noteList.innerHTML = _liTags;
    noteItemClickEventSetup();
}

function noteItemClickEventSetup() {
    var noteItems = document.getElementsByClassName('note-item');
    for(let i = 0; i < noteItems.length; i++)
    {
        noteItems[i].addEventListener('click', function() {
            console.log('note item clicked : '+noteItems[i].textContent);
            notes = notes.filter((note) => { return note != noteItems[i].textContent});
            refreshItemList();
        });
    }
}