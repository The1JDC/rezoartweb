/*!
 * APISubmit V 0.1 by JDC
 * TODO: Get the AWS Lambda into a config
 */


function submitToAPI() {
  var URL = 'https://qx1osmqap6.execute-api.us-east-1.amazonaws.com/stage/contact';

  var name=$('#name-s').val();
  if ((name!=null) && (name!=""))
  {
    var data = {
     name: $('#name-s').val(),
     email: $('#email-s').val(),
     description: $('#message-s').val()
   };
 }
//handle the double form case in contact us.
   name=$('#Name').val();
   if ((name!=null) && (name!=""))
   {
    var data = {
      name: $('#Name').val(),
      email: $('#Email').val(),
      description: $('#Message').val()
    };
   }


   //alert(JSON.stringify(data));
  $.ajax({
    type: 'POST',
    url: URL,
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify(data),

    success: function () {
      // clear form and show a success message
      alert('We have received your feedback. We will be contacting you shortly.');
      //TODO: When 3 work related forms are received, make this nicer
    },
    error: function () {
      // show an error message
      alert('There was an error processing your feedback. Please email us directly.');
    }
  });
}
