const calculateTip = () => {
    const bill = +document.getElementById("bill").value;
    const quality = +document.getElementById("quality").value;
    const persons = +document.getElementById("persons").value;
    const result = (Math.round(bill) / Math.round(quality)) / Math.round(persons);
    const wrongIp = document.getElementById("incorrect");
    const rightIp = document.getElementById("result");
    (result === NaN) ? (wrongIp.innerHTML = `One or more Inputs are wrong!!`) : (rightIp.innerHTML = result);
}