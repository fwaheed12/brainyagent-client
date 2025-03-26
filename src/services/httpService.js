import config from '../config/config';

export const sendEmail = async (formData) => {
    try {
        //const response = await  fetch(`${config.apiBaseUrl}${config.endpoints.sendMail}`, {
        const response = await  fetch(`http://localhost:3000/api/send-email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        return response;
       
    } catch (error) {
        console.error('Error submitting form:', error);
        //alert('An error occurred. Please try again later.');
    }
};