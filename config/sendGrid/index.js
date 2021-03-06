const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendGisapiaMail = (req, res) => {
  const charEmail = req.body;

  sgMail
    .send(charEmail)
    .then((response) => {
      console.log(response[0].statusCode);
      console.log(response[0].headers);
      res.json({
        success: true,
      });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ success: false });
    });
};

module.exports = sendGisapiaMail;
