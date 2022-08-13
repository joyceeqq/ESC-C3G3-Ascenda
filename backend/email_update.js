const outcome=0000;
const confirmationCode="2022081210";

  const nodemailer = require('nodemailer');
  let transporter = nodemailer.createTransport({
         host: 'smtp.mailtrap.io',
         port: 2525,
         auth: {
             user: "300c6ffd72db68",
             pass: "62646dbf7657d3"
         }
 });
 message0 = {
    from: "server@gmail.com",
    to: "jessicajones@email.com",
    subject: "Subject",
    text: "Your Transaction (2022081210) is Successful!"
}
message1 = {
    from: "server@gmail.com",
    to: "jessicajones@email.com",
    subject: "Subject",
    text: "Your Transaction is Unsuccessful- Memeber Not Found."
}
message2 = {
    from: "server@gmail.com",
    to: "jessicajones@email.com",
    subject: "Subject",
    text: "Your Transaction is Unsuccessful- Memeber Name Mismatch."
}
message3 = {
    from: "server@gmail.com",
    to: "jessicajones@email.com",
    subject: "Subject",
    text: "Your Transaction is Unsuccessful- Memeber Account Closed."
}
message4 = {
    from: "server@gmail.com",
    to: "jessicajones@email.com",
    subject: "Subject",
    text: "Your Transaction is Unsuccessful- Memeber Account Suspended."
}
message5 = {
    from: "server@gmail.com",
    to: "jessicajones@email.com",
    subject: "Subject",
    text: "Your Transaction is Unsuccessful- Member Ineligible for Accrual."
}
message99 = {
    from: "server@gmail.com",
    to: "jessicajones@email.com",
    subject: "Subject",
    text: "Your Transaction is Unsuccessful- Unable to process, please contact support for more information."
}
if (outcome==0)
{
    transporter.sendMail(message0);
}
if (outcome==1)
{
    transporter.sendMail(message1);
}
if (outcome==2)
{
    transporter.sendMail(message2);
}
if (outcome==3)
{
    transporter.sendMail(message3);
}
if (outcome==4)
{
    transporter.sendMail(message4);
}
if (outcome==5)
{
    transporter.sendMail(message5);
}
if (outcome==99)
{
    transporter.sendMail(message99);
}
/*0000 - success
0001 - member not found
0002 - member name mismatch
0003 - member account closed
0004 - member account suspended
0005 - member ineligible for accrual
0099 - unable to process, please contact
support for more information*/
