$(document).ready(function() {
    
    $("#valid").click(function () {
        $("#maxandmin").validate({
            rules : {
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
        
                MinLevel : {
                    required: true,
                    number : true
                },
        
                MaxLevel : {
                    required: true,
                    number : true,
                },
        
                AreaCode : {
                    required: true
                },
            },
            messages : {
                PurchaseRate : "This Field is required",
                ProcTimeMin : "This Field is required",
                ExternalCode : "This Field is required",
                ItemDetais : "This Field is required",
                MinLevel : "This Field is required",
                MaxLevel : "This Field is required",
                AreaCode  : "Please select an option from the list",
            },
            submitHandler: function(form) {
                if(parseInt($("#MaxLevel").val()) < parseInt($("#MinLevel").val())){
                    alert("Max value should be always greater")
                }else{
                    form.submit(alert("Thanks!"))
                }
                
            }
        })
    })
})