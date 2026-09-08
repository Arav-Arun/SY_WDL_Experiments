/* ============================================
   Experiment 4: Form Validation using JavaScript
   Task 2: Required text fields + trim()
   Task 3: Mobile number and email (regex)
   Task 4: Selection, soil moisture and date
   ============================================ */

var namePattern = /^[A-Za-z ]+$/;
var mobilePattern = /^[6-9][0-9]{9}$/;
var emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
var plotPattern = /^PLOT-[A-Z0-9]{1,3}$/;

var fieldIds = ["name", "mobile", "email", "village", "plotid",
                "cropstage", "soiltype", "moisture", "date"];

function getValue(id) {
    return document.getElementById(id).value.trim();
}

function showError(fieldId, errorId, message) {
    document.getElementById(errorId).innerHTML = message;
    document.getElementById(fieldId).className = "invalid";
}

function getIrrigationMethod() {
    var choices = document.getElementsByName("irrigation");
    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            return choices[i].value;
        }
    }
    return "";
}

function clearErrors() {
    var boxes = document.getElementsByClassName("error");
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = "";
    }
    for (var i = 0; i < fieldIds.length; i++) {
        document.getElementById(fieldIds[i]).className = "";
    }
    var message = document.getElementById("formMessage");
    message.innerHTML = "";
    message.className = "";
}

function validateForm() {
    clearErrors();
    var valid = true;

    var name = getValue("name");
    var mobile = getValue("mobile");
    var email = getValue("email");
    var village = getValue("village");
    var plotid = getValue("plotid");
    var cropstage = getValue("cropstage");
    var soiltype = getValue("soiltype");
    var moisture = getValue("moisture");
    var date = getValue("date");
    var method = getIrrigationMethod();

    /* Task 2: required text fields */
    if (name == "") {
        showError("name", "errName", "Full name is required.");
        valid = false;
    } else if (!namePattern.test(name)) {
        showError("name", "errName", "Use alphabets and spaces only.");
        valid = false;
    }

    if (village == "") {
        showError("village", "errVillage", "Village is required.");
        valid = false;
    }

    if (plotid == "") {
        showError("plotid", "errPlot", "Plot ID is required.");
        valid = false;
    } else if (!plotPattern.test(plotid.toUpperCase())) {
        showError("plotid", "errPlot", "Use the format PLOT-A.");
        valid = false;
    }

    /* Task 3: mobile number and email */
    if (mobile == "") {
        showError("mobile", "errMobile", "Mobile number is required.");
        valid = false;
    } else if (!mobilePattern.test(mobile)) {
        showError("mobile", "errMobile",
                  "Enter a 10 digit number starting with 6 to 9.");
        valid = false;
    }

    if (email == "") {
        showError("email", "errEmail", "Email address is required.");
        valid = false;
    } else if (!emailPattern.test(email)) {
        showError("email", "errEmail", "Enter a valid email address.");
        valid = false;
    }

    /* Task 4: selections, soil moisture and date */
    if (cropstage == "") {
        showError("cropstage", "errCrop", "Select the crop stage.");
        valid = false;
    }

    if (soiltype == "") {
        showError("soiltype", "errSoil", "Select the soil type.");
        valid = false;
    }

    if (method == "") {
        document.getElementById("errMethod").innerHTML =
            "Select an irrigation method.";
        valid = false;
    }

    if (moisture == "") {
        showError("moisture", "errMoisture", "Soil moisture is required.");
        valid = false;
    } else if (isNaN(moisture) || moisture < 0 || moisture > 100) {
        showError("moisture", "errMoisture", "Enter a value from 0 to 100.");
        valid = false;
    }

    if (date == "") {
        showError("date", "errDate", "Registration date is required.");
        valid = false;
    } else {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        var entered = new Date(date);
        if (entered > today) {
            showError("date", "errDate", "Future date is not allowed.");
            valid = false;
        }
    }

    var message = document.getElementById("formMessage");
    if (valid) {
        message.className = "success";
        message.innerHTML = "Registration successful. Irrigation advisory " +
                            "for " + plotid.toUpperCase() + " will be sent " +
                            "to " + mobile + ".";
    } else {
        message.className = "failure";
        message.innerHTML = "Please correct the highlighted fields.";
    }

    return false;
}
