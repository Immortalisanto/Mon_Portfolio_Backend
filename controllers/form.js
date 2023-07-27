const sendEmail = require('../utils/sendEmail');
require('dotenv').config({ path: '../.env.local' });

exports.sendEmail = async (req, res, next) => {
    const {
        messageData,
        subjectData,
        firstNameData,
        nameData,
        emailData,
        numberData,
    } = req.body;

    let noFirstNameData = '';
    let noNumberData = '';

    if (!firstNameData) {
        noFirstNameData = 'Non renseigné.';
    }

    if (!numberData) noNumberData = 'Non renseigné.';

    try {
        const send_to = process.env.EMAIL_BOX;
        const sent_from = process.env.EMAIL_USER;
        const reply_to = process.env.EMAIL_BOX;
        const subject = 'Nouveau message - Formulaire de contact - Portfolio';
        const message = `
            <h3>Bonjour Anthony !</h3>
            <p>Tu viens de recevoir un nouveau message provenant du formulaire de contact de ton portfolio !</p>
            <h4>Voici les informations du destinateur :</h4>
            <p>Nom : ${nameData}</p>
            <p>Prénom : ${firstNameData}${noFirstNameData}</p>
            <p>Adresse mail : ${emailData}</p>
            <p>Téléphone : ${numberData}${noNumberData}</p>
            <h4>Voici son message :</h4>
            <p>Sujet : ${subjectData}</p>
            <p>${messageData}</p>
        `;

        await sendEmail(subject, message, send_to, sent_from, reply_to);
        res.status(200).json({
            success: true,
            message: 'Email envoyé !',
        });
    } catch (error) {
        res.status(500).json(error.message);
    }
};
