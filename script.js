$(document).ready(function () {
    $("#minval").keyup(function () {
      alert("hs");
		var txtbalance = $('#maxval').val();
		var txtdays = $('#minval').val();
		
		if (txtbalance === "" || txtdays === "") return false;
		
        if ( parseInt(txtbalance) < parseInt(txtdays) ) {
            alert("MaxVal should be always greater");
        }
    });

    $("#submit_btn").click(function(){
      
      $("#myform").validate({
        rules:{
          PurchaseRate : {
                    required: true
                },
          ProcTimeMin : {
              required: true
          },
          ExternalCode : {
                  required: true
              },
          ItemDetais : {
                    required: true
                },
          minval : {
                    required: true
                },
        
          maxval : {
              required: true
          },
        
          AreaCode : {
              required: true
          }
        },

        messages : {
                PurchaseRate : "This Field is required",
                ProcTimeMin : "This Field is required",
                ExternalCode : "This Field is required",
                ItemDetais : "This Field is required",
                minval : "This Field is required",
                maxval : "This Field is required",
                AreaCode  : "Please select an option from the list"
            },
        submitHandler: function(form) {
                form.submit(alert("Thanks!"))
            }
      })
    })
});