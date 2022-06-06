/** @param {string} name */
export function getNumberOfChars(name) {
    // number of characters in: name
    return name.length;
}

/** @param {string} name */
export function getFirstChar(name) {
    // first character of: name
    return name[0];
}

/** @param {string} name */
export function getLastChar(name) {
    // last character of: name
    return name[name.length -1];
}

/** @param {string} name */
export function getLower(name) {
    // name all in lower case (example: "ABC" becomes "abc")
    return name.toLocaleLowerCase();
}

/** @param {string} name */
export function getUpper(name) {
    // name all in upper case (example: "abc" becomes "ABC")
    return name.toLocaleUpperCase();
}

/** @param {string} name */
export function getCapitalized(name) {
    // capitalized version of name (example: "alEX" becomes "Alex")
    return name[0].toLocaleUpperCase() + name.substring(1).toLocaleLowerCase();
}


//преообразование числа в строку 
/**
 * @param {number} number
 */
 function convertNumberToString(number) {

    return number.toString();
}

// Sample usage - do not modify
console.log(convertNumberToString(42)); // "42"
console.log(convertNumberToString(97)); // "97"
console.log(convertNumberToString(11)); // "11"







//Implement the function canVote such that it returns true whenever the age 18 or above and false in all other scenarios.//Реализуйте функцию canVote таким образом, чтобы она возвращала true всякий раз, когда возраст 18 лет или старше, и false во всех других сценариях.


/**
 * @param {number} age
 */
 function canVote(age) {
    let grade  = age;
    
    if (grade >= 18) {
        return true;
    } else (grade < 18) 
        return false ;
        }
    
    
    
    // Sample usage - do not modify
    console.log(canVote(25)); // true
    console.log(canVote(18)); // true
    console.log(canVote(10)); // false
    








//Преобразование из строки в число +1
/**
 * @param {string} age
 */
 export function getNextAge(age) {
    if (age === "") {
       return 0;
   }

   return Number.parseInt(age, 10) + 1 ;  
   
   

}




//Завершите функцию getDescription таким образом, чтобы она возвращала первые 10 символов полученного текстового параметра, за которыми следует многоточие.Однако всякий раз, когда текст состоит из 10 символов или менее, многоточие не следует добавлять, поскольку текст не обрезается!
/**
 * @param {string} text
 */
 export function getDescription(text) {
    console.log(text); // write something in the BROWSER and see it in the console
    if (text.length > 10) {
        return text.substring(0, 10) + "...";
} 
return text;
};

