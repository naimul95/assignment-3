/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";

if( fileName.startsWith('#')|| fileName.endsWith('.pdf')||  fileName.endsWith('.docx') ){
    console.log('Store');}
else{ console.log('Delete');}    