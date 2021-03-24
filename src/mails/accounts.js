const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeMail = (email,name) =>{
    sgMail.send({
        to: email,
        from: 'shuvonaim123@gmail.com',
        subject: 'Welcome to the app !',
        text: `Hello ${name} to sign in to the app`
    });
    console.log('email sent .. 👍');
}

const sendCancillationEmail = (email,name) => {
    sgMail.send({
        to: email,
        from: 'shuvonaim123@gmail.com',
        subject: 'It was nice to meet you !',
        text: `Good bye ${name} 😧. I hope to meet soon !`
    })
}

module.exports = {sendCancillationEmail,sendWelcomeMail};

