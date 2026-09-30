$(document).ready(function()
{
    // Regex patterns
    var namePattern   = /^[A-Za-z ]+$/;
    var mobilePattern = /^[6-9][0-9]{9}$/;
    var emailPattern  = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    var plotPattern   = /^PLOT-[A-Z0-9]{1,3}$/;

    function showError(fieldId, errorId, msg)
    {
        $("#" + errorId).html(msg);
        $("#" + fieldId).addClass("invalid");
    }

    function clearErrors()
    {
        $(".error").html("");
        $("input, select").removeClass("invalid");
        $("#formMessage").html("").removeClass("success failure");
    }

    // Clear errors when reset is clicked
    $("input[type='reset']").click(function()
    {
        clearErrors();
    });

    // Form submit handler
    $("#regForm").submit(function(e)
    {
        e.preventDefault();
        clearErrors();
        var valid = true;

        // Get all field values
        var name      = $.trim($("#name").val());
        var mobile    = $.trim($("#mobile").val());
        var email     = $.trim($("#email").val());
        var village   = $.trim($("#village").val());
        var plotid    = $.trim($("#plotid").val());
        var cropstage = $("#cropstage").val();
        var soiltype  = $("#soiltype").val();
        var moisture  = $.trim($("#moisture").val());
        var date      = $("#date").val();
        var method    = $("input[name='irrigation']:checked").val() || "";

        // Name
        if(name === "")
        {
            showError("name", "errName", "Full name is required.");
            valid = false;
        }
        else if(!namePattern.test(name))
        {
            showError("name", "errName", "Use alphabets and spaces only.");
            valid = false;
        }

        // Mobile
        if(mobile === "")
        {
            showError("mobile", "errMobile", "Mobile number is required.");
            valid = false;
        }
        else if(!mobilePattern.test(mobile))
        {
            showError("mobile", "errMobile", "Enter a valid 10-digit number.");
            valid = false;
        }

        // Email
        if(email === "")
        {
            showError("email", "errEmail", "Email is required.");
            valid = false;
        }
        else if(!emailPattern.test(email))
        {
            showError("email", "errEmail", "Enter a valid email.");
            valid = false;
        }

        // Village
        if(village === "")
        {
            showError("village", "errVillage", "Village is required.");
            valid = false;
        }

        // Plot ID
        if(plotid === "")
        {
            showError("plotid", "errPlot", "Plot ID is required.");
            valid = false;
        }
        else if(!plotPattern.test(plotid.toUpperCase()))
        {
            showError("plotid", "errPlot", "Use format like PLOT-A.");
            valid = false;
        }

        // Dropdowns
        if(!cropstage)
        {
            showError("cropstage", "errCrop", "Select a crop stage.");
            valid = false;
        }
        if(!soiltype)
        {
            showError("soiltype", "errSoil", "Select a soil type.");
            valid = false;
        }

        // Irrigation method (radio)
        if(method === "")
        {
            $("#errMethod").html("Select an irrigation method.");
            valid = false;
        }

        // Moisture
        if(moisture === "")
        {
            showError("moisture", "errMoisture", "Moisture is required.");
            valid = false;
        }
        else if(isNaN(moisture) || moisture < 0 || moisture > 100)
        {
            showError("moisture", "errMoisture", "Enter a value from 0 to 100.");
            valid = false;
        }

        // Date
        if(date === "")
        {
            showError("date", "errDate", "Date is required.");
            valid = false;
        }
        else
        {
            var today = new Date();
            today.setHours(0, 0, 0, 0);
            if(new Date(date) > today)
            {
                showError("date", "errDate", "Future date not allowed.");
                valid = false;
            }
        }

        // Show result
        if(valid)
        {
            $("#formMessage").addClass("success")
                .html("Registration successful! Advisory for " +
                      plotid.toUpperCase() + " will be sent to " + mobile + ".");
        }
        else
        {
            $("#formMessage").addClass("failure")
                .html("Please fix the errors above.");
        }
    });

});
