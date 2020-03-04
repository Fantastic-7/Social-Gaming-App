const callback = (accessToken, refreshToken, profile, cb) => {
    return cb(null, profile);
};
export default callback;