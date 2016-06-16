var PersonModel = require('./src/api/v1/schemas/personsSchema');
var random = require('random-world');
var faker = require('faker');

// console.log(faker);


// console.log(faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));

// PersonModel.findAll({limit: 100}).then(function (data) {
//     console.log(data);
// });


var params = [];
// console.log(params);

var i = 0;
while (i < 100000) {
    params.push({
        pr_d_id: (function () {
            return random.block({
                    blockSize: 4,
                    chars: '0123456789abcdefghijklmnopqrstuvwxyz'
                }) + '-' + random.block({blockSize: 6, chars: '0123456789abcdefghijklmnopqrstuvwxyz'})
        })(),
        pr_fs_nm: (function () {
            return faker.name.firstName()
        })(),
        pr_ls_nm: (function () {
            return faker.name.lastName()
        })(),
        pr_bh_d: (function () {
            var d = random.date();

            var curr_date = '' + d.getDate();
            var curr_month = d.getMonth() + 1;
            var curr_year = d.getFullYear();
            curr_month = curr_month + '';
            if (curr_month.length < 2) curr_month = '0' + curr_month;
            if (curr_date.length < 2) curr_date = '0' + curr_date;

            return [curr_year, curr_month, curr_date].join('-');
        })(),
        pr_mt_st: (function () {
            var martialStatus = [
                'single',
                'married'
            ];

            return martialStatus[Math.floor(Math.random() * martialStatus.length)];
        })(),
        'pr_pho': (function () {
            return faker.phone.phoneNumber()
        })(),
        'pr_ct': (function () {
            return faker.address.city()
        })(),
        'pr_adr': (function () {
            return faker.address.streetAddress()
        })()
    });


    i++;
}


PersonModel.bulkCreate(params).then(function (data) {
    console.log('save');
}).catch(function (err) {
    // console.log(params);
    // console.log(err);
});
