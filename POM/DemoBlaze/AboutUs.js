const Commands = require('../Utils/Commands');


class AboutUs {
    commands = new Commands();

    // locators

    aboutUsVideo = '#example-video_html5_api';

    // functions

    async verifyAboutUsVideo () {

        return await this.commands.isElementEnabled(this.aboutUsVideo);
        
    }

}

module.exports = AboutUs;