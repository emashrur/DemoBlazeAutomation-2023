const moment = require('moment');

class Dates {


    static getCurrentDate(format) {

        const now = moment();
        
        if (format === 'day') {
            return now.format('D');
        } else if (format === 'month') {
            return now.format('MMM');
        } else if (format === 'year') {
            return now.format('YYYY');
        } else if (format === 'Month') {
            return now.format('MMMM');
        } else {
            throw 'Invalid format';
        }
        
    }

    static setDate (month, date, year) {

        return moment().month(month).year(year).date(date);

    }

    static formatDate (date, format) {

        date.format(format);
        
    }










}

module.exports = Dates;

