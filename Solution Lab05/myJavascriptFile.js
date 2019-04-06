window.onload = function(){

    /* runs test to see if expected argument is === to value returned by function2test argument */
    function myFunctionTest(expected, function2test) {
        if (expected === function2test()) {
            return "TEST SUCCEEDED";
        } else {
            return "TEST FAILED.  Expected " + expected + " found " + function2test();
        }
        ;
    }

    /*2) max returns the maximum of 2 arguments */
    function max(a, b) {
        if (a > b) {
            return a;
        } else {
            return b;
        }
        // ;
    }


    console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, function () {
        return max(20, 10);
    }));

    /* 3) max3 takes 3 numbers as arguments and returns the largest */
    function maxOfThree(a, b, c) {
        return max(max(a, b), c);

    }

    console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, function () {
        return maxOfThree(5, 4, 44);
    }));
    console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, function () {
        return maxOfThree(55, 4, 44);
    }));
    console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, function () {
        return maxOfThree(55, 4, 44);
    }));

    /* 4) taking character and checks it if vowel or not */

    function isVowel(char){
        var temp= char.toString().toLocaleLowerCase();


        if(temp==='a' || temp==='e' || temp==='i' || temp==='o' ) {
            return true;
        }

        else{
            return false;

        }
    }
    var myChar = 'M';
    console.log("Expected output of isVowel(M) is false  " + myFunctionTest(true, function () {
        return isVowel(myChar);
    }));

    var myChar = 'i';
    console.log("Expected output of isVowel(i) is true  " + myFunctionTest(true, function () {
        return isVowel(myChar);
    }));

    /* 5) sum and multiply functions for values inside an array */

    // var temp = [1,2,3,4];
    function sum(myArray){
        var result=0;

        for(var i=0; i<myArray.length;i++){

            result +=myArray[i];

        }

        return result;

    }

    console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, function () {
        return sum([1,2,3,4]);
    }));


    function multiply(myArray){
        var result=1;

        for(var i=0; i<myArray.length;i++){

            result *=myArray[i];

        }

        return result;
    }

    console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24, function () {
        return multiply([1,2,3,4]);
    }));

    /* 6) reverse a string function  */


    function StringReverse(str){
        var result="";
        for(var i=str.length-1; i>=0;i--){

            result+=str[i];
        }

        return result;
    }

    var tempString="brhane";
    var rstString="enahrb";
    console.log("Expected output of reverse(brhane) is enahrb " + myFunctionTest(rstString,function(){
        return StringReverse(tempString);
    }));


    /* 7) Find longest word from array of words and returns length of longest word */

    var arrayWord=['brhane','mehari','sirak'];

    function longest(arrayWord){
        var zero=0;

        if(arrayWord!==null) {
            var temp = arrayWord[0].length;

            for(var i=1; i<arrayWord.length;i++){
                if(temp < arrayWord[i].length)
                    temp=arrayWord[i].length;

            }

            return temp;

        }
        else{

            return zero;
        }

    }

    console.log("Expected output of longestWordLength(['brhane','mehari','sirak']) is 6 " + myFunctionTest(6, function(){

        return longest(arrayWord);

    }));


    /* 8)filter Long Words that takes an array of words and and
        integer i and returns the array
      * of words that are longer than i
      */
    var wordArray=['brhane','mehari','leterufael','sirak','solomon','leterbrhan','mussie'];
    var len= 8;

    console.log(wordArray.length);


    function filterLongWords(len,arrayStr){
        var result = [];
        var tmp=0;

        if(arrayStr!==null) {

            for (var i = 0; i < arrayStr.length; i++) {


                if (arrayStr[i].length > len) {
                    result.push(arrayStr[i]);
                }
            }

            return result.toString();

        }

        else
        {
            //return tmp;
            console.log("Array should have at least one word");

        }

    }
    var predicted=['leterufael','leterbrhan'];

    console.log("Expected output of filterLongWords(['brhane','mehari','sirak','solomon','leterbrhan','mussie']) is " + predicted + myFunctionTest(predicted.toString(), function(){

        return filterLongWords(7,wordArray);

    }));

    /* (9-A) mulitiply each element by 10 */

    var a = [1,3,5,3,3];
    var b= [10,30,50,30,30];

    function multiplyArrayElements(a) {

        var res1 = a.map(function (element, i, array) {

            return element * 10;

        });
        return res1.toString();
    }

    console.log("Expected output of multiplyArrayElements([1,3,5,3,3]) is [10,30,50,30,30] " + myFunctionTest(b.toString(), function(){

        return multiplyArrayElements(a);

    }));

    /* (9-B) return with all elements equal to 3 */
    var a = [1,3,5,3,3];
    var m= [1,5];

    function filterNumbers3(a) {

        var res2 = a.filter(function (elem, i, array) {
            //return elem !== 3;})
            return elem !== 3;
        });

        return res2.toString();
    }

    console.log("Expected output of filterNumbers3([1,3,5,3,3]) is [1,5] " + myFunctionTest(m.toString(), function(){

        return filterNumbers3(a);

    }));


    var a = [1,3,5,3,3];

    var n= 135;

    function productOfAll(a){

        var res3= a.reduce(function(prevValue, elem, i, array){
            return prevValue * elem;
        });

        return res3;

    }

    console.log("Expected output of productOfAll([1,3,5,3,3]) is 135 " + myFunctionTest(n, function(){

        return productOfAll(a);

    }));
}