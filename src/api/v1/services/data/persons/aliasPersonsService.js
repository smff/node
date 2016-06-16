/**
 * Created by dima on 10.06.16.
 */
module.exports = function (data, type) {

    var alias = {
        personId: 'pr_d_id',
        firstName: 'pr_fs_nm',
        lastName: 'pr_ls_nm',
        birthday: 'pr_bh_d',
        martialStatus: 'pr_mt_st',
        phone: 'pr_pho',
        city: 'pr_ct',
        address: 'pr_adr'
    };

    var params;

    // console.log(data);

    switch (type) {
        case 'aliasesToParam':
            params = {};
            for (var key in alias) {
                if (data.hasOwnProperty(key)) {
                    params[alias[key]] = data[key];
                }
            }
            break;

        case 'paramToAlias':
            params = '';
            for (var key in alias) {

                if (alias[key] == data) {
                    params = key;
                }
            }
            break;
        case 'paramToAliases':

            break;

        default:
            params = data;
    }

    return params;
};