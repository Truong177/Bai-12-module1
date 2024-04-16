let x = 0;
let array = Array();
function addElement() {
    array[x] = document.getElementById("txt").value;
    alert('Element ' +array[x] + ' Add at index ' +x)
    x++;
    document.getElementById('txt').value = "";
}
function subArray() {
    let e = "<hr/>";
    for (let i = 0; i < array.length; i++) {
        e += "Element " + i + " = " + array[i] + "<br/>";
    }
    document.getElementById('resutl').innerHTML = e;
}