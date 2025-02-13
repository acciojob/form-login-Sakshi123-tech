function getFormvalue(event) {
            // Prevent form submission to avoid page reload
            event.preventDefault();
            
            // Retrieve the values from the input fields
            let firstName = document.querySelector("input[name='fname']").value.trim();
            let lastName = document.querySelector("input[name='lname']").value.trim();

            // Check if any field is empty
            if (!firstName || !lastName) {
                alert("Please enter both first and last name.");
                return;
            }

            // Concatenate the names and display them in an alert
            alert(firstName + " " + lastName);
}