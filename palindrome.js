const checkBtn = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');

checkBtn.addEventListener('click', alert4);

function alert4 () {
    if (textInput.value === null || textInput.value === "" )
    {
        alert('Please input a value');
    }
    else 
    {
        palindromer(textInput.value);
    }
}   

function palindromer (palindrome) {
    let newWord = "";

     for (let i = 0; i < palindrome.length; i++)
        newWord += palindrome[palindrome.length-i-1];
       
    if (newWord === palindrome) 
        result.textContent = `${palindrome} is a palindrome`;
    else 
        result.textContent = `${palindrome} is not a palindrome`;
}
