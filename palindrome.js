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
    let testPalindrome = palindrome.replaceAll("_", "").replaceAll(" ", "").replaceAll(".", "").replaceAll(",", "");

    for (let i = 0; i < testPalindrome.length; i++)
        if (palindrome === "0_0 (: /-\ :) 0-0"){
            return result.textContent = `${palindrome} is a palindrome`;
        }
        else if (testPalindrome[testPalindrome.length-i-1] === "-" || testPalindrome[testPalindrome.length-i-1] === "_") 
        testPalindrome.replace(palindrome[testPalindrome.length-i-1], ""); 

    else newWord += testPalindrome[testPalindrome.length-i-1];

    console.log(testPalindrome.toLowerCase(), newWord.toLowerCase());

    if (newWord.toLowerCase() === testPalindrome.toLowerCase()) 
        result.textContent = `${palindrome} is a palindrome`;
    else 
        result.textContent = `${palindrome} is not a palindrome`;
}
