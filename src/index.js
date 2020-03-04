module.exports = function check(str, bracketsConfig) {
    bracketsConfig = bracketsConfig.join().replace(/,/g, "");
    for (let i = 0; i < bracketsConfig.length; i += 2) {
        let tmp = bracketsConfig.slice(i, i + 2);
        while (~str.indexOf(tmp)) {
            str = str.replace(tmp, "");
            i = -2;
        }
    }
    return str ? false : true;
};
