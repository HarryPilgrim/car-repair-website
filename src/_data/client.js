module.exports = {
    name: "Qura - porn addicton app",
    email: "help@quraapp.com",
    phoneForTel: "+447356271234",
    phoneFormatted: "+44 7356 271 234",
    address: {
        lineOne: "Neon Flow Headquarters",
        lineTwo: "Penthouse",
        city: "Darlington",
        state: "Durham",
        zip: "DL1 0AB",
        country: "UK",
        mapLink: "https://maps.app.goo.gl/TEdS5KoLC9ZcULuQ6",
    },
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.qurapp.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
