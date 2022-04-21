import {CronJob} from 'cron'
import axios from 'axios'

/**
 * Envoi les mails (Tout les Lundi à 03:00)
 * @type {CronJob}
 */
const sendMail = new CronJob('* 5 * * * *', function () {
    axios.post('http://localhost:3000/login', {login:"", password:""}).then(async (res) => {
        const token = res.data
        // To
    });
}, null, true, 'Europe/Paris');

const startJob = () => {
    sendMail.start()
}

export default {startJob}
