document.getElementById("calculate").addEventListener("click",function(){
    const birthDateField = document.getElementById("startDate").value;
    const birthDate = new Date(birthDateField);
    const endDate = document.getElementById('endDate').value;
    const bMonth = birthDate.getMonth();
    const bDay = birthDate.getDay();
    const bYear = birthDate.getFullYear();
    console.log(birthDate, endDate);
    console.log(bMonth,bDay,bYear);
});