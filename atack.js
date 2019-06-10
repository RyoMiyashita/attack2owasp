const request = require('request');

for (var i = 0; i < 11; i++) {
    request('http://localhost:3000/rest/captcha', {'method': 'GET'}, function (error, response, body) {
        // console.log(body);
        const captchaJson = JSON.parse(body);
        var spamJson = {
            UserId: 19, comment: "Spam", rating: 1, captcha: captchaJson.answer.toString(), captchaId: captchaJson.captchaId
        };
        // console.log(spamJson);
        request('http://localhost:3000/api/Feedbacks/', {'method': 'POST', 'form': spamJson, json: true}, function (error, response, body) {
            console.log(body);
        });
    });
}
