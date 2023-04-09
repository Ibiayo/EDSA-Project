const form = document.querySelector('#form');
const resultsDiv = document.querySelector('#results');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const fullNameInput = document.querySelector('#fname');
    const emailInput = document.querySelector('input[type="email"]');
    const phoneNumberInput = document.querySelector('input[name="phone-number"]');
    const messageInput = document.querySelector('textarea');
    
    let fullName = fullNameInput.value;
    let email = emailInput.value;
    let phoneNumber = phoneNumberInput.value;
    let message = messageInput.value;

    const inputs = [fullName, email, phoneNumber, message];

    let output = '';

    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];

        const charCount = input.length;

        const wordCount = input.split(' ').filter(word => word !== '').length;

        const reversed = input.split('').reverse().join('');

        const upper = input.toUpperCase();

        const lower = input.toLowerCase();

        output += `
            <h3>Input Field ${i+1}:</h3>
            <p>Input Text: ${input}</p>
            <p>Character count: ${charCount}</p>
            <p>Word count: ${wordCount}</p>
            <p>Reversed: ${reversed}</p>
            <p>Uppercase: ${upper}</p>
            <p>Lowercase: ${lower}</p>
            <hr />
        `;
    }

    resultsDiv.innerHTML = output;
    
});
function resultDisplay(){
  document.getElementById(results).style.height = "1300px";  
    document.getElementById(results).style.border = "thick solid #556b2f";
    document.getElementById(results).style.color = "#556b2f";
    document.getElementById(results).style.padding = "10px";
    document.getElementById(results).style.marginTop = "5px";
}
