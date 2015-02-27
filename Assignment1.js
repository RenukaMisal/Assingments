	//getting students json object
	var student=require('./source1');	
	var http = require('http');
	var fs = require('fs');	
	//getting jstoxml module 
	var xml=require("jstoxml");			

	
	//function to print in Text document
	function printInTxt(){
		try{
		
			fs.writeFile('stud.txt',"First Name | Last Name | Score"+"\n");

			for (var i = 0; i <=student.students.length-1 ; i++) {
				console.log(student.students[i].id);
				var data=(student.students[i].id)+"|"+(student.students[i].fName)+"|"+(student.students[i].lName)+"|"+(student.students[i].score)+"\n";		//logic for witing into file in the same formate
			
				fs.appendFile('stud.txt', data, function (err) {
	     
	     			if (err) throw err;
	     			console.log('Its saved! in same location.');
   	 			});
			};
		}
		
		catch(e){

			console.error("file not found");
			process.exit(e.code);

		}
	}

	//converting json object into xml
	var conversion=xml.toXML( student.students,{header: false, indent: '  '});

	//function to print in xml file
	function printInXml(){
		try{
		
			fs.writeFile('destination.xml','Conversion from json onject to xml'+"\n"+conversion,function (err) {
	     
	     			if (err) throw err;
	     			console.log('Its saved! in same location.');
   	 			});
			}
			catch(e)
			{
				console.log("Error");

			}
	}

	//sorting function for sorting by id
	function sortById(x,y)
	{
		return x.id-y.id;
	}
	
	//giving a call to a function to print in text file...Before sorting
	printInTxt();

	fs.appendFile('stud.txt',"\n"+"after sorting"+"\n");
 	student.students.sort(sortById);
	//giving a call to a function to print in text file...After sorting
	printInTxt();
	
	//Giving a call to function to print in xml file...
	printInXml();

	

	

	

	
