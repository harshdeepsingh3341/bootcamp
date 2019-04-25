const {comparePassword} = require("../utils/passwordSecurity");
let UserModel;
exports.setUserModel = (mongoose) => {
    const userSchema = mongoose.Schema({
        facebook_id: Number,
        name: {
            type: String
        },
        email: {
            type: String,
        },
        password: {
            type: String
        },
        provider: String
    });

    UserModel = mongoose.model("User", userSchema);
};

exports.saveUserInDb = (user) => {
    const myUser = new UserModel({...user});
    return new Promise((resolve, reject) => {
        myUser.save((err, user) => {
            console.log("promise", myUser);
            if (err) {
                reject(err);
            } else {
                resolve({
                    status: 200,
                    message: "save success",
                    user
                });
            }
        })
    })
};

exports.checkUser = (email, password) => {
    return new Promise((resolve, reject) => {
        UserModel.findOne(
            {
                email
            },
            (err, user) => {
                console.log(user);

                if (err) {
                    reject(err);
                } else {
                    comparePassword(password, user.password).then(response => {
                        console.log(response);
                        (response) ? (
                            resolve({
                                status: 200,
                                isUserMatch: true,
                                user
                            })
                        ) : (
                            resolve({
                                status: 200,
                                isUserMatch: false
                            })
                        )
                    })
                }
            })
    })

};

exports.getUser = (id) => {
    return new Promise((resolve, reject) => {
        UserModel.findById(id,
            (err, user) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({
                        status: 200,
                        message: 'User found',
                        user
                    });
                }
            }
        )
    })
};

exports.findOrCreateUser = (user) => {
    console.log('findOrCreateUser', user);

    return new Promise((resolve, reject) => {
        UserModel.findOne({
            facebook_id: user.facebook_id
        }, (err, responseUser) => {
            if (err) {
                reject(err);
            } else {
                if (!responseUser) {
                    const myUser = new UserModel({
                        ...user
                    });


                    myUser.save((err, user) => {
                        if (err) {
                            reject(err)
                        } else {
                            console.log('save');
                            resolve({
                                status: 200,
                                message: "save success",
                                user
                            });
                        }
                    })
                } else {
                    resolve({
                        status: 200,
                        message: "User found",
                        user: responseUser
                    });
                }
            }
        })
    })
};