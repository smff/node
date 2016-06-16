'use strict';

/**
 * Created by dima on 08.06.16.
 * yo
 */
var Sequelize = require('sequelize');
var config = require('config');
require('sequelize-isunique-validator')(Sequelize);

var db = new Sequelize(config.get('DB.string'));

module.exports = db.define('PERSONS', {
    pr_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    pr_d_id: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true,
            is: {
                args: /^[a-z0-9]{4}-[a-z0-9]{6}$/,
                msg: "Personal document must be in format ####-######"
            },
            isUnique: db.validateIsUnique('pr_d_id', 'User already exists')
        }
    },
    pr_fs_nm: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: true,
                msg: "firstName can't be empty"
            },
            is: {
                args: /^[a-zA-Z]{1,10}$/,
                msg: "firstName allow only letters and length from 1 to 10"
            }
        }
    },
    pr_ls_nm: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: true,
                msg: "firstName can't be empty"
            },
            is: {
                args: /^[a-zA-Z]{1,10}$/,
                msg: "firstName allow only letters and length from 1 to 10"
            }
        }
    },
    pr_bh_d: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: true,
                msg: "birthday can't be empty"
            },
            is: {
                args: /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/,
                msg: "birthday format YYYY-MM-DD"
            }
        }
    },
    pr_mt_st: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: true,
                msg: "martialStatus can't be empty"
            },
            isIn: {
                args: [['married', 'single']],
                msg: "martialStatus can be married or single "
            }
        }
    },
    pr_pho: {
        type: Sequelize.INTEGER,
        validate: {
            notEmpty: {
                args: true,
                msg: "phone can't be empty"
            },
            is: {
                args: /^[0-9\-\sx\.\(\)]+$/,
                msg: "phone allow only letters and length from 7 to 12"
            }
        }
    },
    pr_ct: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: true,
                msg: "city can't be empty"
            },
            is: {
                args: /^[a-zA-Z\-\s]{2,30}$/,
                msg: "city allow only letters and - lenght from 2 to 20"
            }
        }
    },
    pr_adr: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: true,
                msg: "city can't be empty"
            },
            is: {
                args: /^[a-zA-Z0-9\s]+$/,
                msg: "address allow only letters and points lenght from 2 to 20"
            }
        }
    }
}, {
    freezeTableName: true,
    timestamps: false
});