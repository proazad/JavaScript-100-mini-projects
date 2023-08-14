let subohanallah = 0;
document.getElementById("subohanallah").addEventListener("click", function (event) {
    subohanallah++;
    document.getElementById("count1").innerText = subohanallah;

});

document.getElementById("delete1").addEventListener("click", function (event) {
    if (subohanallah >= 1) {
        subohanallah--;
        let count1 = document.getElementById("count1");
        count1.innerText = subohanallah;
    } 
});

let alhamdulillah = 0;
document.getElementById("alhamdulillah").addEventListener('click', function () {
    alhamdulillah++;
    document.getElementById("count2").innerText = alhamdulillah;
});
document.getElementById("delete2").addEventListener("click", function (event) {
    if (alhamdulillah >= 1) {
        alhamdulillah--;
        document.getElementById("count2").innerText = alhamdulillah;
    } 
});

let allahuakbar = 0;
document.getElementById("allahuakbar").addEventListener('click', function () {
    allahuakbar++;
    document.getElementById("count3").innerText = allahuakbar;
})
document.getElementById("delete3").addEventListener("click", function (event) {
    if (allahuakbar >= 1) {
        allahuakbar--;
        document.getElementById("count3").innerText = allahuakbar;
    } 
});