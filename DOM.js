let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('champion').value;
    row.insertCell(1).innerHTML = document.getElementById('role').value;
    row.insertCell(2).innerHTML = document.getElementById('runes').value;
    document.getElementById('champion').value = '';
    document.getElementById('role').value = '';
    document.getElementById('runes').value = '';

});
    
    
 
