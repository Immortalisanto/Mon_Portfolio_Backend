exports.getCv = async (req, res, next) => {
    const pathFile = './assets/CV.pdf';
    const nameFile = 'CV_anthony_tur.pdf';

    res.download(
        pathFile,
        nameFile,
        (error = {
            if(error) {
                res.status(500).send('Erreur lors du téléchargement du CV.');
            },
        })
    );
};
