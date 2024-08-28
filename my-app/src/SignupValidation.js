



function validation(values) {
    let error = {};

    const email_Pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!values.name || values.name.trim() === "") {
        error.name = "Name should not be empty";
    }


    if (!values.email || values.email.trim() === "") {
        error.email = "Email should not be empty";
    } else if (!email_Pattern.test(values.email)) {
        error.email = "Invalid email format";
    }

    if (!values.password || values.password.trim() === "") {
        error.password = "Password should not be empty";
    } else if (values.password.length < 6) {
        error.password = "Password must be at least 6 characters long";
    }

 
    if (!values.phone_no || values.phone_no.trim() === "") {
        error.phone_no = "Phone number should not be empty";
    } else if (!/^\d{10}$/.test(values.phone_no)) {
        error.phone_no = "Phone number must be 10 digits long";
    }

   
    if (!values.address || values.address.trim() === "") {
        error.address = "Address should not be empty";
    }

    return error;
}

export default validation;
