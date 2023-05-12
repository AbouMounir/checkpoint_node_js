var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service : 'gmail',
    auth : {
        user : 'coulibalyaruna99@gmail.com',
        pass: 'privatepass'
    }
});

var mailOptions = {
    from : 'coulibalyaruna99@gmail.com',
    to : 'harunaibncoulibaly@gmail.com',
    subject : 'sending email',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions,(err,info) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Emailsent : ' + info.response);
    }
})