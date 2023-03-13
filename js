<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

Write a JavaScript in a web page to display the current day and time.

<!DOCTYPE HTML>
<html>

  <head>
    <title>1st Program</title>
  </head>

  <body>
    <h4 id="day">

    </h4>
    <h4 id="time">

    </h4>

    <script>
      var date = new Date();
    /*
      var today = date.toDateString();
      document.getElementById("day").innerHTML = today;
			*/
      var day = date.getDay();
      let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      document.getElementById("day").innerHTML = weekday[day];

    </script>
    <script>
      var date = new Date();
      var time = date.toLocaleTimeString();
      
      document.getElementById("time").innerHTML = time;

    </script>
  </body>

</html>



Write a JavaScript to convert a temperature Celsius to Fahrenheit and a temperature in Fahrenheit to Celsius. 

	<!DOCTYPE HTML>
<html>
  <head>
    <title>2nd Program</title>
  </head>
  <body>
    <h3 id = "celsius">

    </h3>
    <script>
    	var c = prompt("Enter the value of celsius : ");
      var f = c * (9/5) + 32;
      document.getElementById("celsius").innerHTML = f;
    </script>
    <h3 id = "fahrenheit">

    </h3>
    <script>
    	var f = prompt("Enter the value of fahrenheit in kelvin : ");
      var c = (f - 32) * (5/9);
      document.getElementById("fahrenheit").innerHTML = c;
    </script>
  </body>
</html>
Write a JavaScript to compute Simple Interest and Compound Interest for a given Principal, Rate of Interest and Duration of years. Use the input popup box to get the input from the user. The formula are
 Simple Interest= Principal*Years*Rate of Interest100
Compound Interest= 1000 * 1+101005 - 1

<!DOCTYPE HTML>
<html>
	<head>
		<title>3rd Program</title>
	</head>
	<body>
		
		<h4 id="SI"></h4>
		<script>
			var principal = prompt("Enter the principal amount : ");
			var ROI = prompt("Enter the rate of interest : ");
			var years = prompt("Enter the no.of years : ");
			
			let simpleInt = (principal * years * ROI) / 100;
			
			document.getElementById("SI").innerHTML = "The Simple Interest earned : "+simpleInt;
		</script>
		
		<h4 id="CI"></h4>
		<script>
			var principal = prompt("Enter the principal amount : ");
			var ROI = prompt("Enter the rate of interest : ");
			var years = prompt("Enter the no.of years : ");
			
			let compndInt = principal * ((Math.pow(1 + (ROI/100)),years)) - 1;
			document.getElementById("CI").innerHTML = "The Compound Interest earned : "+compndInt;
		</script>
	</body>
</html>

Write a JavaScript program that accepts two points and determines the distance between them. Use the input popup box to get the input and display the calculated value using the alert popup box. The formula is  Distance= x2-x12+y2-y12

<!DOCTYPE HTML>
<html>
	<head>
		<title>4th Program</title>
	</head>
	<body>
		
		<h4 id="distance"></h4>
		<script>
			var x1 = prompt("Enter the first point (x coordinate) : ");
			var x2 = prompt("Enter the first point (y coordinate) : ");
			var y1 = prompt("Enter the second point (x coordinate) : ");
			var y2 = prompt("Enter the second point (y coordinate) : ");
			let dist = Math.sqrt(Math.pow((x2 - x1),2) + Math.sqrt((y2 - y1),2));
			document.getElementById("distance").innerHTML = dist;
		</script>
	</body>
</html>





Write a JavaScript program to compute the Area of a Triangle when the three sides are given. The formula is  Area= ss-as-b(s-c) , where S= (a + b + c)2

<!DOCTYPE HTML>
<html>
	<head>
		<title>5th Program</title>
	</head>
	<body>
		
		<h4 id="area"></h4>
		<script>
			var s1 = prompt("Enter the side 1 : ");
			var s2 = prompt("Enter the side 2 : ");
			var s3 = prompt("Enter the side 3 : ");
			
			let s = (s1 + s2 + s3) / 2;
			
			let area = Math.sqrt(s * (s -s1) * (s - s2) * (s - s3));
			
			if(area > 0){
				document.getElementById("area").innerHTML = area;
			}
		</script>
	</body>
</html>

Write a JavaScript that asks the user to enter two numbers, obtains the two numbers from the user and outputs text that displays the sum, product, difference and quotient of the two numbers.

<!DOCTYPE HTML>
<html>
	<head>
		<title>6th Program</title>
	</head>
	<body>
		<h4 id="op"></h4>
		<script>
			let num1 = prompt("Enter number 1 : ");
			let num2 = prompt("Enter number 2 : ");
			
			let sum = eval(num1) + eval(num2);
			var prod = num1 * num2;
			var diff = num1 - num2;
			var quot;
			if(num2 != 0){
				quot = num1 / num2;
			}
			else{
				quot = 0;
			}
			document.getElementById("op").innerHTML = "The Sum : " + sum + " The difference : " + diff + " The product : " + prod + " The quotient : " + quot;
		</script>
	</body>
</html>


Write a JavaScript that takes three integers from the user and displays the sum, average, product, smallest and largest of the numbers in an alert dialog.
	
	<!DOCTYPE HTML>
<html>
    <head>
   	 <title>
   		 7th Program
   	 </title>
    </head>
    <body>
   	 <button id="sum" onclick="sum()">SUM</button>
   	 <br><br>
   	 <button id="avg" onclick="avg()">AVERAGE</button>
   	 <br><br>
   	 <button id="prod" onclick="prod()">PRODUCT</button>
   	 <br><br>
   	 <button id="smallest" onclick="smallest()">SMALLEST</button>
   	 <br><br>
   	 <button id="largest" onclick="largest()">LARGEST</button>
   	 <br><br>
   	 <script>
   		 
   		 var num1 = prompt("Enter number 1 : ");
   		 var num2 = prompt("Enter number 2 : ");
   		 var num3 = prompt("Enter number 3 : ");
   			 
   		 function sum(){
   			 var sum = eval(num1) + eval(num2) + eval(num3);
   			 alert("The sum of three integers : "+sum);
   		 }
   		 
   		 function avg(){
   			 var avg = (eval(num1) + eval(num2) + eval(num3)) / 3;
   			 alert("The average of three integers : "+avg);
   		 }
   		 
   		 function prod(){
   			 var prod = num1 * num2 * num3;
   			 alert("The product of three integers : "+prod);
   		 }
   		 
   		 function smallest(){
   			 var small = Math.min(num1,num2,num3);
   			 alert("The smallest of three integers : "+small);
   		 }
   		 
   		 function largest(){
   			 var large = Math.max(num1,num2,num3);
   			 alert("The largest of three integers : "+large);
   		 }
   		 
   	 </script>
    </body>
</html>
   		 
   	 	


Write a JavaScript that inputs five numbers and determines and outputs HTML text that displays the number of negative numbers input, the number of positive numbers input and the number of zeros input.

	<!DOCTYPE HTML>
<html>
    <head>
   	 <title>
   		 7th Program
   	 </title>
    </head>
    <body>
   	 <h4 id="count" ></h4>
   	 <script>
   		 
   		 var num1 = prompt("Enter number 1 : ");
   		 var num2 = prompt("Enter number 2 : ");
   		 var num3 = prompt("Enter number 3 : ");
   		 var num4 = prompt("Enter number 4 : ");
   		 var num5 = prompt("Enter number 5 : ");
   		 
   		 const num = [num1,num2,num3,num4,num5];
   		 
   		 var pos = 0;
   		 var neg = 0;
   		 var zero = 0;
   		 
   		 for(let i=0; i<5; i++){
   			 if(num[i] > 0){
   				 pos++;
   			 }
   			 if(num[i] < 0){
   				 neg++;
   			 }
   			 if(num[i] == 0){
   				 zero++;
   			 }
   		 }
   		 
   		 document.getElementById("count").innerHTML = "The number of positive number : "+pos+"\nThe number of negative numbers : "+neg+"\nThe number of zeros : "+zero;
   		 
   	 </script>
    </body>
</html>
   		 
Write a JavaScript that reads in two integers and determines and outputs HTML text that displays whether the first is a multiple of the second.

<!DOCTYPE HTML>
<html>
    <head>
   	 <title>
   		 7th Program
   	 </title>
    </head>
    <body>
   	 <h4 id="multiple" ></h4>
   	 <script>
   		 
   		 var num1 = prompt("Enter number 1 : ");
   		 var num2 = prompt("Enter number 2 : ");
   		 
   		 var rem = num1 % num2;
   		 
   		 if(rem == 0){
   			 document.write(num1+" is a multiple of "+num2);
   		 }
   		 else{
   			 document.write(num1+" is not a multiple of "+num2);
   		 }
   		 
   	 </script>
    </body>
</html>
   	
Write a script that calculates the squares and cubes of the numbers from 0 to 10 and outputs
HTML text that displays the resulting values in an HTML table format, as follows:
number 	square     cube
0 	        	0               0
1           	1               1
2            	4               8
3          	9               27
4           	16             64
5          	25            125
6           	36            216
7           	49            343
8          	64            512
9           	81            729
10        	100          1000
	
<!DOCTYPE HTML>
<html>
    <head>
   	 <title>
   		 8th Program
   	 </title>
    </head>
    <body>
   	 <h4 id="sqrAndCube" ></h4>
   	 <script>
   		 
   		 document.write("<table>");
   		 document.write("<tr><th>Number</th><th>Square</th><th>Cube</th>");
   		 for(let i=1; i<11; i++)
   		 {
   			 document.write("<tr><td>"+i+"</td><td>"+i*i+"<td>"+i*i*i+"</td>");
   		 }
   		 document.write("</table>");
   		 
   	 </script>
    </body>
</html>
   		 
   	 	
Write a JavaScript that reads a five-letter word from the user and produces all possible three letter words that can be derived from the letters of the five-letter word. For example, the three-letter words produced from the word “bathe” include the commonly used words “ate,” “bat,” “bet,” “tab,” “hat,” “the” and “tea.” Output the results in an alert popup box.

	<!DOCTYPE HTML>
<html>
  <head>
    <title>11th Program</title>
  </head>
  <body>
    <script>
      var word5 = prompt("Enter a five letter word : ");
      word3 = []
      var word;
      
      for(let i=0; i<word5.length; i++)
      {
          for(let j=0; j<word5.length; j++)
          {
              for(let k=0; k<word5.length; k++)
              {
                  if(i != j && j != k && i != k)
                  {
                      word = word5[i] + word5[j] + word5[k];
                      word3.push(word);
                  }
              }
          }
          var msg = "Three letter words : ";
          for(let i=0; i<word3.length; i++)
          {
              msg += word3[i]+"\t";
          }
          
          alert(msg);
          
      }
    </script>
 </body>
</html>
      
      
Write a JavaScript program to find the first occurrence and last occurrence of a string in a given string. Also find it after the specified position as well. Use string objects. The web form as shown below:



<!DOCTYPE html>
<html>
<head>
  <title>12th Program</title>
</head>
<body>
	<form>
    	<label for="text">Enter a text:</label><br>
    	<input type="text" id="text" name="text"><br>
    	<label for="search">Search string:</label><br>
    	<input type="text" id="search" name="search"><br>
    	<label for="position">Search after position:</label><br>
    	<input type="number" id="position" name="position"><br>
    	<button type="button" onclick="findOccurrences()">Find occurrences</button>
  	</form>
 	 
  	<p id="result1"></p>

 	 

  <script>
	function findOccurrences() {
  // Get the values from the form
  const text = document.getElementById("text").value;
  const search = document.getElementById("search").value;
  const position = parseInt(document.getElementById("position").value);

  // Find the first occurrence of the search string
  const firstIndex = text.indexOf(search);
  let result1 = `First occurrence: ${firstIndex}`;

  // Find the last occurrence of the search string
  const lastIndex = text.lastIndexOf(search);
  result1 += `<br>Last occurrence: ${lastIndex}`;

  // Find the next occurrence of the search string after the specified position
  if (!isNaN(position)) {
	const nextIndex = text.indexOf(search, position);
	result1 += `<br>First occurrence after position ${position}: ${nextIndex}`;
  }
 
  if(!isNaN(position)){
    const lastindex = text.lastIndexOf(search,position);
    result1 += `<br>Last occurrence after position ${position}: ${lastindex}`;
    }

  // Display the results in the HTML
  document.getElementById("result1").innerHTML = result1;
}

  </script>
</body>
</html>

Dates are printed in several common formats. Write a JavaScript that reads a date from an HTML form and creates a Date object in which to store it. Then use the various methods of the Date object that convert Dates into strings to display the date in several formats.

<!DOCTYPE HTML>
<html>
    <head>
   	 <title>13th Program</title>
    </head>
    <body>
   	 <script>
   		 var date = new Date();
   		 document.write("Seven Date Formating"+"<br>");
   		 document.write("ToLocaleString()   :  "+date.toLocaleString()+"<br>");
   		 document.write("ToString()   :  "+date.toString()+"<br>");
   		 document.write("ToDateString()   :  "+date.toDateString()+"<br>");
   		 document.write("ToGMTString()   :  "+date.toGMTString()+"<br>");
   		 document.write("ToUTCString()   :  "+date.toUTCString()+"<br>");
   		 document.write("ToISOString()   :  "+date.toISOString()+"<br>");
   	 </script>
    </body>
</html>

Write a JavaScript that tests as many of the Math library functions as you can. Exercise each of these functions by having your program display tables of return values for several argument values in an HTML textarea.

	<html>
    <head>
   	 <title>JS Math Library Test</title>
    </head>
    <body>
   	 
    	<textarea id="answer" rows="20" cols="50">       	 

    	</textarea><br>
   	 <input type="button" value="Calculate" onclick="calc();" <div="">
   	 
   	 <script type="text/javascript">
   		 function calc()
   		 {
   			 val1 =prompt("Enter the value to find absolute : ");
   			 document.getElementById("answer").value = "abs: " + Math.abs(val1) + "\r\n";
   			 
   			 val1 =prompt("Enter the value to find ceil : ");
   			 document.getElementById("answer").value = document.getElementById("answer").value + "ceil:  " + +Math.ceil(val1) + "\r\n";
   							 
   			 val1 =prompt("Enter the value to find cos : ");
   			 document.getElementById("answer").value = document.getElementById("answer").value + "cos:   " + +Math.cos(val1) + "\r\n";
   			 
   			 val1 =prompt("Enter the value to find exp : ");
   			 document.getElementById("answer").value = document.getElementById("answer").value + "exp:   " + +Math.exp(val1) + "\r\n";
   			 
   			 val1 =prompt("Enter the value to find floor : ");
   			 document.getElementById("answer").value = document.getElementById("answer").value + "floor: " + +Math.floor(val1) + "\r\n";
   			 
   			 val1 =prompt("Enter the value to find log : ");
   			 document.getElementById("answer").value = document.getElementById("answer").value + "log:   " + +Math.log(val1) + "\r\n";
   			 
   			 val1 = prompt("Enter the value 1 to find max : ");
   			 val2 = prompt("Enter the value 2 to find max : ");
   			 document.getElementById("answer").value = document.getElementById("answer").value + "max: " + +Math.max(val1, val2) + "\r\n";
   			 
   			 val1 =prompt("Enter the value 1 to find min : ");
   			 val2 =prompt("Enter the value 2 to find min : ");
   			 document.getElementById("answer").value = document.getElementById("answer").value + "min: " + +Math.min(val1, val2) + "\r\n";
   			 
   			 val1 =prompt("Enter the value to find power : ");
   			 document.getElementById("answer").value = document.getElementById("answer").value + "pow: " + +Math.pow(val1,val2) + "\r\n";
   			 
   			 val1 =prompt("Enter the value to find round : ");
   			 document.getElementById("answer").value = document.getElementById("answer").value + "round: " + +Math.round(val1) + "\r\n";
   			 
   			 val1 =prompt("Enter the value to find sin : ");
   			 document.getElementById("answer").value = document.getElementById("answer").value + "sin:   " + +Math.sin(val1) + "\r\n";
   			 
   			 val1 =prompt("Enter the value to find sqrt : ");
   			 document.getElementById("answer").value = document.getElementById("answer").value + "sqrt:  " + +Math.sqrt(val1) + "\r\n";
   			 
   			 val1 =prompt("Enter the value to find tan : ");
   			 document.getElementById("answer").value = document.getElementById("answer").value + "tan:   " + +Math.tan(val1) + "\r\n";
   		 }
   	 </script>
    </body>
</html>


The process of finding the largest value (i.e., the maximum of a group of values) is used frequently in computer applications. For example, a program that determines the winner of a sales contest would input the number of units sold by each salesperson. The salesperson who sells the most units wins the contest. Write a JavaScript program that inputs a series of 10 real numbers as strings, determines the largest of the numbers and outputs a message that displays the largest number.

	<!DOCTYPE HTML>
<html>
    <head>
   	 <title>
   		 15th Program
   	 </title>
    </head>
    <body>
   	 <h4 id="max"></h4>
   	 <script>
   		 var n= prompt("Enter the no.of inputs : ");
   		 i=0;
   		 const sales=[];
   		 while( i < n){
   			 var num = prompt("Enter the amount of units sold : ");
   			 sales.push(num);
   			 i++;
   		 }
   		 max = Math.max(...sales);
   		 document.getElementById("max").innerHTML = "The largest of the numbers : "+max;
   	 </script>    
    </body>
</html>
   		 
   	 	
A mail-order house sells five different products whose retail prices are as follows: product 1, $2.98; product 2, $4.50; product 3, $9.98; product 4, $4.49; and product 5, $6.87. Write a JavaScript that reads a series of pairs of numbers as follows:
1. Product number
2. Quantity sold for one day
Your program should use a switch statement to determine each product's retail price and should calculate and output HTML that displays the total retail value of all the products sold last week. Use a prompt dialog to obtain the product number and quantity from the user. Use a sentinel-controlled loop to determine when the program should stop looping and display the final results. If the user inputs an invalid product number a proper alert window shall be displayed.
	
<!DOCTYPE html>
<html>
    <head>
<title>16th Program</title>
    </head>
    <body>
        <h1>MAIL-ORDER HOUSE WEEKLY REVENUE</h1>
        <h1 id = "str"></h1>
        <script>
            var a = 0;
            var b = 0;
            var c = 0;
            var d = 0;
            var e = 0;
            for(var i=1;i<=7;i++)
            {
                var Prod = prompt("Enter the product number: ");
                var Qty = prompt("Enter the quantity of the product: ");
                switch(Prod)
                {
                    case "1":
                        a = a + (2.98*Qty);
                        break;
                    case "2":
                        b = b + (4.5*Qty);
                        break;
                    case "3":
                        c = c + (9.98*Qty);
                        break;
                    case "4":
                        d = d + (4.49*Qty);
                        break;
                    case "5":
                        e = e + (6.87*Qty);
                        break;
                }
                var total = Number(a)+Number(b)+Number(c)+Number(d)+Number(e);
                document.getElementById("str").innerHTML = total;
            }
           
        </script>
    </body>
</html


Develop a JavaScript program that will determine the gross pay for each of three employees.
The company pays “straight time” for the first 40 hours worked by each employee and pays “time and a half” for all hours worked in excess of 40 hours. You are given a list of the employees of the company, the number of hours each employee worked last week and the hourly rate of each employee. Your program should input this information for each employee, determine the employee’s gross pay and output HTML text that displays the employee's gross pay. Use prompt dialogs to input the data.
	<!DOCTYPE html>
<html>
<head>
  <title>Employee Gross Pay Calculator</title>
</head>
<body>
  <h2>Employee Gross Pay Calculator</h2>

  <button type="button" onclick="calculatePay()">Calculate Pay</button>

  <h3>Employee 1</h3>
  <label for="employee1Name">Name:</label>
  <input type="text" id="employee1Name"><br>
  <label for="employee1Hours">Hours Worked:</label>
  <input type="number" id="employee1Hours"><br>
  <label for="employee1Rate">Hourly Rate:</label>
  <input type="number" id="employee1Rate"><br>
  <p id="employee1Output"></p>

  <h3>Employee 2</h3>
  <label for="employee2Name">Name:</label>
  <input type="text" id="employee2Name"><br>
  <label for="employee2Hours">Hours Worked:</label>
  <input type="number" id="employee2Hours"><br>
  <label for="employee2Rate">Hourly Rate:</label>
  <input type="number" id="employee2Rate"><br>
  <p id="employee2Output"></p>

  <h3>Employee 3</h3>
  <label for="employee3Name">Name:</label>
  <input type="text" id="employee3Name"><br>
  <label for="employee3Hours">Hours Worked:</label>
  <input type="number" id="employee3Hours"><br>
  <label for="employee3Rate">Hourly Rate:</label>
  <input type="number" id="employee3Rate"><br>
  <p id="employee3Output"></p>

  <script>
	function calculatePay() {
  	const employees = [
    	{
      	name: document.getElementById("employee1Name").value,
      	hours: Number(document.getElementById("employee1Hours").value),
      	rate: Number(document.getElementById("employee1Rate").value)
    	},
    	{
      	name: document.getElementById("employee2Name").value,
      	hours: Number(document.getElementById("employee2Hours").value),
      	rate: Number(document.getElementById("employee2Rate").value)
    	},
    	{
      	name: document.getElementById("employee3Name").value,
      	hours: Number(document.getElementById("employee3Hours").value),
      	rate: Number(document.getElementById("employee3Rate").value)
    	}
  	];

  	for (let i = 0; i < employees.length; i++) {
    	const employee = employees[i];
    	let grossPay = 0;

    	if (employee.hours <= 40) {
      	grossPay = employee.hours * employee.rate;
    	} else {
      	grossPay = 40 * employee.rate + (employee.hours - 40) * employee.rate * 1.5;
    	}

    	const output = employee.name + " earned $" + grossPay.toFixed(2) + " gross pay.";
    	document.getElementById("employee" + (i+1) + "Output").textContent = output;
  	}
	}
  </script>
</body>
</html>


A company wants to transmit data over the telephone, but it is concerned that its phones may be tapped. All of its data is transmitted as four-digit integers. It has asked you to write a program that will encrypt its data so that the data may be transmitted more securely. Your script should read a four-digit integer entered by the user in a prompt dialog and encrypt it as follows: Replace each digit by (the sum of that digit plus 7) modulus 10. Then swap the first digit with the third, and swap the second digit with the fourth. Then output HTML text that displays the encrypted integer.

<!DOCTYPE HTML>
<html>
  <head>
    <title>18th Program</title>
  </head>
  <body>
    <script>
      var num4 = prompt("Enter the 4 digit number : ");
	  let digits = []
	  while(num4 > 0)
	  {
		digits.push(num4 % 10);
		num4 = Math.floor(num4 / 10);
	  }
	  digits.reverse();
	  
	  var encrypt = []
	  for(let i=0; i<digits.length; i++)
	  {
		encrypt.push((digits[i] + 7)%10);
	  }
	  
	  var msg = [];
	  
	  msg.push(encrypt[2]);
	  msg.push(encrypt[3]);
	  msg.push(encrypt[0]);
	  msg.push(encrypt[1]);
	  
	  let disp = Number(msg.join(""));
	  
	  alert("The encrypted message : "+disp);
    </script>
 </body>
</html>
      
      


Write a script that finds the smallest of several non-negative integers. Assume that the first value read specifies the number of values to be input from the user.

<!DOCTYPE HTML>
<html>
    <head>
   	 <title>
   		 19th Program
   	 </title>
    </head>
    <body>
   	 <script>
   		 var n = prompt("Enter the number of inputs : ");
   		 let i=0;
   		 const num = [];
   		 while(i < n){
   			 var negNum = prompt("Enter a negative number : ");
   			 num.push(negNum);
   			 i++;
   		 }
   		 
   		 min = Math.min(...num);
   		 document.write("The most negative number in the given set of numbers is : "+min);
   	 </script>
    </body>
</html>
   		 
   	 	
 
A palindrome is a number or a text phrase that reads the same backward and forward. For example, each of the following five-digit integers is a palindrome: 12321, 55555, 45554 and 11611. Write a script that reads in a five-digit integer and determines whether it is a palindrome. If the number is not five digits long, display an alert dialog indicating the problem to the user. Allow the user to enter a new value after dismissing the alert dialog.

<!DOCTYPE HTML>
<html>
    <head>
   	 <title>
   		 20th Program
   	 </title>
    </head>
    <body>
   	 <h4 id="palindrome"></h4>
   	 <script>
   		 const str = prompt("Enter a five digit number : ");
   		 var len = str.length;
   		 if (len != 5){
   			 alert("It is not a five digit number");
   			 const str = prompt("Enter a five digit number : ");
   		 }
   		 var s = str;
   		 for(let i=0;i<len/2;i++){
   			 if(str[i] !== str[len-1-i]){
   				 document.write(s+" is not a palindrome");
   				 break;
   			 }
   			 else{
   				 document.write(s+" is a palindrome");
   				 break;
   			 }

   		 }
   	 </script>
    </body>
</html>
   		 
 
 1.	Write a script that prompts the user for the radius of a circle, uses a function circleArea        to calculate the area of the circle, and prints the area of the circle.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
       function circleArea()
	   {
			var rad = parseInt(document.getElementById("rad").value);
			var area = 3.14*rad*rad;
			document.getElementById("display").innerHTML = area;
		}
    </script>
</head>
  
<body style="text-align: center;">
  
    <label for="rad">
        Enter the value of radius :
    </label>
  
    <input type="number" id="rad" 
           placeholder="Enter value of radius">
    <br><br>
  
    <button onclick="circleArea()">Click Here!</button>
  
    <p>
        Area of Circle: <span id="display"></span>
    </p>
</body>
</html>
2.	Write function distance that calculates the distance between two points (x1, y1) and          (x2, y2). All numbers and return values should be floating-point values. Incorporate this function into a script that enables the user to enter the coordinates of the points through       an HTML form.
<!DOCTYPE html>
<html lang="en">
  <head>
  </head>
  <body>
    <form>
      <input type="text" id ="x1" placeholder="x1">
      <input type="text" id ="y1" placeholder="y1">
      <br>
      <input type="text" id ="x2" placeholder="x2">
      <input type="text" id ="y2" placeholder="y2">
      <br>
      <input type="button" onclick="calcdist()" value="submit">
    </form>
    <p id="ans"></p>

    <script >
      function calcdist(){
        var x1=document.getElementById("x1").value;
        var x2=document.getElementById("x2").value;
        var y1=document.getElementById("y1").value;
        var y2=document.getElementById("y2").value;
        document.getElementById("ans").innerHTML = ((x1-x2)**2+(y1-y2)**2)**(1/2)
      }
    </script>

  </body>
</html>

3.	Write a script that inputs integers (one at a time) and passes them one at a time to function
isEven, which uses the modulus operator to determine whether an integer is even. The function should take an integer argument and return true if the integer is even and false otherwise. Use sentinel-controlled looping and a prompt dialog.
<html>
	<head>
	<title>document </title>

	<script type="text/javascript">
		input = prompt("Please type an integer");

		while (input) 
		{
			var value = parseInt(input);
			document.write(value + (isEven(value) ? " is even" : " is odd") +"<br/>" );

			input = prompt ("Please type an integer or Click Cancel to terminate the script" );
		}

		function isEven (num)
		{
			return (num % 2 == 0);
		}
	</script>
	</head>


	<body>

	</body>
		

</html>
4.	Write a function that takes an integer value and returns the number with its digits reversed.
For example, given the number 7631, the function should return 1367. Incorporate the function into a script that reads a value from the user. Display the result of the function in the status bar.
<!DOCTYPE html>
<html>
  <head>
    <title>Reverse Digits</title>
    <script>
      function reverseDigits() {
        const input = document.getElementById("input").value;
        const reversed = parseInt(input.toString().split("").reverse().join(""));
        document.getElementById("result").innerHTML = `The reversed number is: ${reversed}`;
      }
    </script>
  </head>
  <body>
    <h1>Reverse Digits</h1>
    <input type="number" id="input">
    <button onclick="reverseDigits()">Reverse Digits</button>
    <div id="result"></div>
  </body>
</html>
5.	Write a JavaScript function that generates all combinations of a string.
<html>
	<head>
	<title>document </title>
	
	
	</head>


	<body>
	<p id="arr">
	</p>
	<script type="text/javascript">
		let possibleCombinations = (str) =>{
        let combinations = [];
          for(let i = 0 ;i < str.length; i++)
        {
            for(let j = i + 1; j< str.length + 1; j++)
            {
                combinations.push(str.slice(i , j));
            }
        }
		
       return combinations;
    }
		input = prompt("Please type a string");
		let str =input;
		console.log(possibleCombinations(str));
		arr = possibleCombinations(str);
		document.getElementById("arr").innerHTML = JSON.stringify(arr);
	</script>
	</body>
		

</html>
6.	Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
<html>
	<head>
	<title>document </title>
	
	
	</head>


	<body>
	<p id="arr">
	</p>
	<script type="text/javascript">
		input = prompt("Please type a string");
		let str =input;
		cap = str.charAt(0).toUpperCase();
		document.write(cap);
		for(let i=1;i<str.length;i++)
		{
			document.write(str[i]);
			}
		
	</script>
	</body>
		

</html>
7.	A parking garage charges a $2.00 minimum fee to park for up to three hours. The garage charges an additional $0.50 per hour for each hour or part thereof in excess of three hours. The maximum charge for any given 24-hour period is $10.00. Assume that no car parks for longer than 24 hours at a time. Write a script that calculates and displays the parking charges for each customer who parked a car in this garage yesterday. You should input from the user the hours parked for each customer. The program should display the charge for the current customer and should calculate and display the running total of yesterday's receipts. The program should use the function calculateCharges to determine the charge for each customer. Use a text input field to obtain the input from the user.
<!DOCTYPE html>
<html>
<head>
	<title>Parking Garage Charges</title>
</head>
<body>
	<h2>Parking Garage Charges</h2>
	<label>Enter hours parked:</label>
	<input type="number" id="hours">
	<button onclick="calculateCharges()">Calculate Charges</button>
	<hr>
	<table>
		<thead>
			<tr>
				<th>Hours Parked</th>
				<th>Charge</th>
			</tr>
		</thead>
		<tbody id="chargesTable">
		</tbody>
		<tfoot>
			<tr>
				<th>Total</th>
				<td id="totalCharge"></td>
			</tr>
		</tfoot>
	</table>
	<script>
		function calculateCharges() {
			// Get the hours parked from the input field
			var hours = parseFloat(document.getElementById("hours").value);

			// Calculate the charge using the given formula
			var charge = 2.00;
			if (hours > 3) {
				charge += 0.50 * Math.ceil(hours - 3);
			}
			charge = Math.min(charge, 10.00);

			// Add the charge and hours parked to the table
			var table = document.getElementById("chargesTable");
			var row = table.insertRow(-1);
			row.insertCell(0).innerHTML = hours;
			row.insertCell(1).innerHTML = "$" + charge.toFixed(2);

			// Calculate and display the running total of charges
			var total = parseFloat(document.getElementById("totalCharge").innerHTML.slice(1)) || 0.00;
			total += charge;
			document.getElementById("totalCharge").innerHTML = "$" + total.toFixed(2);
		}
	</script>
</body>

8.	Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<script>
    var count=0;
    str = prompt("Enter the string");
    letter = prompt("Enter the letter");
    for(let i=0;i<str.length;i++)
    {
        if(str[i]==letter)
        {
            count = count+1;
        }
    }
    document.write("No of occurence of ", letter ," in ",str," is ",count);
</script>
</html>

9.	Write a JavaScript function to check whether a given value represents a domain or not.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<script>
    function isDomain(value) {
  const domainRegex = /^([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\.)+[a-zA-Z]{2,}$/;
  return domainRegex.test(value);
}
console.log(isDomain("example.com")); // true
console.log(isDomain("www.example.com")); // true
console.log(isDomain("example.co.uk")); // true
console.log(isDomain("example.technology")); // true
console.log(isDomain("example.technology123")); // false
console.log(isDomain("example.")); // false
console.log(isDomain(".example.com")); // false

</script>
</html>

10.	Write a JavaScript program to check a credit card number is valid or not.
<!DOCTYPE html>
<html>
<head>
  <title>Credit Card Validator</title>
</head>
<body>
  <h1>Credit Card Validator</h1>
  <form>
    <label for="card-number">Credit Card Number:</label>
    <input type="text" id="card-number" name="card-number" required pattern="[0-9]{16}" title="Please enter a valid 16-digit credit card number">
    <br>
    <button type="submit">Submit</button>
  </form>
  <script>
    // Add an event listener to the form submit button
    document.querySelector('form').addEventListener('submit', function(event) {
      // Get the credit card number input field value
      var cardNumber = document.querySelector('#card-number').value;

      // Remove any non-digit characters from the input
      cardNumber = cardNumber.replace(/\D/g, '');

      // Check that the input passes the Luhn algorithm test
      var sum = 0;
      var shouldDouble = false;
      for (var i = cardNumber.length - 1; i >= 0; i--) {
        var digit = parseInt(cardNumber.charAt(i));
        if (shouldDouble) {
          digit *= 2;
          if (digit > 9) {
            digit -= 9;
          }
        }
        sum += digit;
        shouldDouble = !shouldDouble;
      }

      // If the sum is divisible by 10, the credit card number is valid
      if (sum % 10 === 0) {
        alert("Credit card number is valid");
      } else {
        alert("Credit card number is invalid");
      }

      // Prevent the form from submitting
      event.preventDefault();
    });
  </script>
</body>
</html>
11.	Use a two-dimensional array to solve the following problem: A company has four salespeople (1 to 4) who sell five different products (1 to 5). Once a day, each salesperson passes in a slip for each different type of product actually sold. Each slip contains:
a) the salesperson number,
b) the product number, and
c) the total dollar value of the product sold that day.
Thus, each salesperson passes in between zero and five sales slips per day. Assume that the information from all of the slips for last month is available. Write a script that will read all this information for last month’s sales and summarize the total sales by salesperson by product. All totals should be stored in the two-dimensional array sales. After processing all the information for last month, display the results in an HTML5 table format, with each of the columns representing a different salesperson and each of the rows representing a different product. Cross-total each row to get the total sales of each product for last month; cross-total each column to get the total sales by salesperson for last month. Your tabular printout should include these cross-totals to the right of the totaled rows and to the bottom of the totaled columns.
 





12.	We have the following arrays :
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"]
Write a JavaScript program to display the colors in the following way:
"1st choice is Blue ."
"2nd choice is Green."
"3rd choice is Red."
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<script>
    const colors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
    const pos = ["th","st","nd","rd"];
    let i =0;
    document.write(i+1,pos[1]," choice is ",colors[i]);
    i++;
    document.write("<br>");
    document.write(i+1,pos[2]," choice is ",colors[i]);
    i++;
    document.write("<br>");
    document.write(i+1,pos[3]," choice is ",colors[i]);
    i++;
    document.write("<br>");
    document.write(i+1,pos[0]," choice is ",colors[i]);
    i++;
    document.write("<br>");
    document.write(i+1,pos[0]," choice is ",colors[i]);
    i++;
    document.write("<br>");
    document.write(i+1,pos[0]," choice is ",colors[i]);
    i++;
    document.write("<br>");
    document.write(i+1,pos[0]," choice is ",colors[i]);
    i++;
    document.write("<br>");
    
    
</script>
</html>







13.	There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<script>
    var sum =0;
    n = prompt("Enter the number of values");
    var arr1 = [];
    var arr2 = [];
    for(let i=0;i<n;i++)
    {
        fir = prompt("enter the number");
        arr1.push(fir);
    }
    for(let i=0;i<n;i++)
    {
        fir = prompt("enter the number");
        arr2.push(fir);
    }
    document.write(arr1);
    document.write("<br>");
    document.write(arr2);
    document.write("<br>");
    for(let i=0;i<n;i++)
    {
        sum = Number(arr1[i])+Number(arr2[i]);
        document.write(sum);
        document.write("<br>");
    }
</script>
</html>

14.	Create a small portion in the web page (use table) and using the mousemove event enable the drawing feature with different colors. Also add a button to erase the entire drawing window.
(check)
<!DOCTYPE html>
<html>
  <head>
    <title>Drawing with Colors</title>
    <style>
      table {
        border-collapse: collapse;
        border: 1px solid black;
      }
      td {
        width: 20px;
        height: 20px;
        border: 1px solid black;
        padding: 0px;
        background-color: white;
      }
    </style>
  </head>
  <body>
    <h1>Drawing with Colors</h1>
    <table id="drawing-table">
      <script>
        // Define an array of colors
        const colors = [
          'black',
          'red',
          'orange',
          'yellow',
          'green',
          'blue',
          'purple',
          'gray'
        ];
        // Set the initial color
        let currentColor = 'black';
        // Set the drawing state
        let isDrawing = false;

        // Create the table
        function createTable(rows, cols) {
          let table = document.getElementById('drawing-table');
          for (let i = 0; i < rows; i++) {
            let row = document.createElement('tr');
            for (let j = 0; j < cols; j++) {
              let cell = document.createElement('td');
              cell.addEventListener('mousemove', draw);
              row.appendChild(cell);
            }
            table.appendChild(row);
          }
        }

        // Handle the drawing event
        function draw(e) {
          if (isDrawing) {
            let cell = e.target;
            cell.style.backgroundColor = currentColor;
          }
        }

        // Clear the drawing window
        function clearDrawing() {
          let cells = document.getElementsByTagName('td');
          for (let i = 0; i < cells.length; i++) {
            cells[i].style.backgroundColor = 'white';
          }
        }

        // Create the table and set the initial color
        createTable(16, 16);
      </script>
    </table>
    <br>
    <button onclick="clearDrawing()">Erase</button>
    <br>
    <br>
    <div>
      <label>Colors:</label>
      <!-- Add a button for each color -->
      <button style="background-color: black" onclick="currentColor='black'"></button>
      <button style="background-color: red" onclick="currentColor='red'"></button>
      <button style="background-color: orange" onclick="currentColor='orange'"></button>
      <button style="background-color: yellow" onclick="currentColor='yellow'"></button>
      <button style="background-color: green" onclick="currentColor='green'"></button>
      <button style="background-color: blue" onclick="currentColor='blue'"></button>
      <button style="background-color: purple" onclick="currentColor='purple'"></button>
      <button style="background-color: gray" onclick="currentColor='gray'"></button>
    </div>
  </body>
</html>

15.	Write a function that responds to a click anywhere on the page by displaying an alert dialog. Display the event name if the user held Shift during the mouse click. Display the element name that triggered the event if the user held Ctrl during the mouse click.
document.addEventListener("click", function(event) {
  let message = "Click event detected!";
  
  if (event.shiftKey) {
    message += "\nShift key was held during the click.";
    message += "\nEvent name: " + event.type;
  }
  
  if (event.ctrlKey) {
    message += "\nCtrl key was held during the click.";
    message += "\nElement name: " + event.target.nodeName;
  }
  
  alert(message);
});

16.	Write a JavaScript function that accept row, column, (to identify a particular cell) and a string to update the content of that cell.
function updateTableCell(row, column, value) {
  // Get a reference to the table element
  const table = document.getElementById("my-table");
  
  // Get a reference to the cell at the specified position
  const cell = table.rows[row].cells[column];
  
  // Update the cell's content with the new value
  cell.textContent = value;
}

updateTableCell(2, 3, "New Value");


17.	You have to create a web page that sorts ten numbers entered by a user.    The user initiates the sorting by clicking on a button labeled "Sort in Ascending Order".   Your program will need to use JavaScript to sort the numbers and sorted numbers will then be placed into a set of output boxes.
 

<!DOCTYPE html>
<html>
<head>
  <title>Sort Numbers</title>
</head>
<body>
  <h1>Sort Numbers</h1>
  
  <p>Enter ten numbers:</p>
  
  <input type="number" id="num1">
  <input type="number" id="num2">
  <input type="number" id="num3">
  <input type="number" id="num4">
  <input type="number" id="num5">
  <input type="number" id="num6">
  <input type="number" id="num7">
  <input type="number" id="num8">
  <input type="number" id="num9">
  <input type="number" id="num10">
  
  <br><br>
  
  <button onclick="sortNumbers()">Sort in Ascending Order</button>
  
  <br><br>
  
  <p>Sorted numbers:</p>
  
  <input type="text" id="sorted1">
  <input type="text" id="sorted2">
  <input type="text" id="sorted3">
  <input type="text" id="sorted4">
  <input type="text" id="sorted5">
  <input type="text" id="sorted6">
  <input type="text" id="sorted7">
  <input type="text" id="sorted8">
  <input type="text" id="sorted9">
  <input type="text" id="sorted10">
  
  <script>
    function sortNumbers() {
      // Get the input values
      const num1 = document.getElementById("num1").value;
      const num2 = document.getElementById("num2").value;
      const num3 = document.getElementById("num3").value;
      const num4 = document.getElementById("num4").value;
      const num5 = document.getElementById("num5").value;
      const num6 = document.getElementById("num6").value;
      const num7 = document.getElementById("num7").value;
      const num8 = document.getElementById("num8").value;
      const num9 = document.getElementById("num9").value;
      const num10 = document.getElementById("num10").value;
      
      // Convert the input values to numbers and store them in an array
      const numbers = [parseFloat(num1), parseFloat(num2), parseFloat(num3), parseFloat(num4), parseFloat(num5), parseFloat(num6), parseFloat(num7), parseFloat(num8), parseFloat(num9), parseFloat(num10)];
      
      // Sort the array in ascending order
      numbers.sort(function(a, b) {
        return a - b;
      });
      
	  var str = "";
	  var num = 0;
      // Display the sorted numbers in the output boxes
	  for(var i=0;i<=10;i++){
		num = i+1;
		str = "sorted" + num;
		document.getElementById(str).value = numbers[i];
	}
    }
  </script>
</body>
</html>

18.	Write a JavaScript function to sort the following array of objects by title value.
Sample object :
var library = [ 
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games',     
        libraryID: 3245} ];

function sortByTitle(library) {
  library.sort(function(a, b) {
    var titleA = a.title.toUpperCase(); // convert title to uppercase
    var titleB = b.title.toUpperCase(); // convert title to uppercase
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });
  return library;
}

var library = [ 
  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
  { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];

console.log(sortByTitle(library));


19.	Write a Javascript program to display the digital clock in a web page. The clock should show Hours, Minutes, Seconds and AM/PM. Also place the buttons to “Start”, “Stop” and “Reset” the digital clock.
<!DOCTYPE html>
<html>
<head>
	<title>Digital Clock</title>
	<script src="clock.js"></script>
</head>
<body onload="startClock()">
	<h2>Digital Clock</h2>
	<p id="clock"></p>
	<button onclick="startClock()">Start</button>
	<button onclick="stopClock()">Stop</button>
	<button onclick="resetClock()">Reset</button>
	<script>
	// Get the clock element from the HTML
var clockElement = document.getElementById("clock");

// Define variables to hold the current time and the interval ID
var currentTime;
var intervalId;

// Function to start the clock
function startClock() {
	// Clear any existing interval
	clearInterval(intervalId);

	// Start a new interval that updates the clock every second
	intervalId = setInterval(function() {
		currentTime = new Date();
		var hours = currentTime.getHours();
		var minutes = currentTime.getMinutes();
		var seconds = currentTime.getSeconds();
		var ampm = hours >= 12 ? "PM" : "AM";
		hours = hours % 12;
		hours = hours ? hours : 12;
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;
		var timeString = hours + ":" + minutes + ":" + seconds + " " + ampm;
		clockElement.innerHTML = timeString;
	}, 1000); // Update every 1000 milliseconds (i.e. every second)
}

// Function to stop the clock
function stopClock() {
	clearInterval(intervalId);
}

// Function to reset the clock
function resetClock() {
	clockElement.innerHTML = "00:00:00 AM";
}
</script>
</body>
</html>
20.	Design a Registration Form as shown below. Use JavaScript to validate the form. Get the confirmation from the user before submitting the form. The list countries should be added through JavaScript function using onload( ) event.
 

<!DOCTYPE html>
<html>
<head>
  <title>Registration Form</title>
  <script>
    // Function to validate the form
    function validateForm() {
      // Get the values from the form
      var userID = document.forms["registrationForm"]["userID"].value;
      var password = document.forms["registrationForm"]["password"].value;
      var name = document.forms["registrationForm"]["name"].value;
      var address = document.forms["registrationForm"]["address"].value;
      var country = document.forms["registrationForm"]["country"].value;
      var zipcode = document.forms["registrationForm"]["zipcode"].value;
      var email = document.forms["registrationForm"]["email"].value;
      var gender = document.forms["registrationForm"]["gender"].value;
      var language = document.forms["registrationForm"]["language"].value;
      var about = document.forms["registrationForm"]["about"].value;

      // Check if required fields are empty
      if (userID == "" || password == "" || name == "" || address == "" || country == "" || zipcode == "" || email == "" || gender == "" || language == "") {
        alert("Please fill out all required fields.");
        return false;
      }

      // Validate email format
      var emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
      }

      // Get confirmation from the user before submitting the form
      var confirmation = confirm("Are you sure you want to submit the form?");
      if (confirmation == false) {
        return false;
      }
    }

    // Function to add countries to select element
    function addCountries() {
      var countries = ["USA", "Canada", "Mexico", "England", "France", "Germany", "Japan", "China", "India", "Australia"];
      var select = document.getElementById("country");
      for (var i = 0; i < countries.length; i++) {
        var option = document.createElement("option");
        option.text = countries[i];
        select.add(option);
      }
    }
  </script>
</head>
<body onload="addCountries()">
  <h1>Registration Form</h1>
  <form name="registrationForm" onsubmit="return validateForm()">
    <label for="userID">User ID:</label>
    <input type="text" id="userID" name="userID" required><br>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required><br>

    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required><br>

    <label for="address">Address:</label>
    <input type="text" id="address" name="address" required><br>

    <label for="country">Country:</label>
    <select id="country" name="country" required>
      <option value="">Select a country</option>
    </select><br>

    <label for="zipcode">Zip Code:</label>
    <input type="text" id="zipcode" name="zipcode" required><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required><br>

    <label for="gender">Gender:</label>
    <input type="radio" id="male" name="gender" value="Male" required>
    <label for="male">Male</label>
    <input type="radio" id="female" name="gender" value="Female" required>
	<label for="male">Female</label><br>
	
	<label for="gender">Language:</label>
    <input type="radio" id="english" name="language" value="English" required>
    <label for="male">English</label>
    <input type="radio" id="nonenglish" name="language" value="Non-English" required>
    <label for="male">Non-English</label><br>
	
	<label for="about">About:</label>
	<textarea id="about" name="about" rows="5" cols="50"></textarea><br><br>
	
	<button type="submit">Submit</button>

</form>
</body>
</html>

