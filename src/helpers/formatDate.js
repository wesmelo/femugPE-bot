
module.exports.getGreetingTime = (date) => {
    let response = null;

    if (!date || !date.isValid()) { return }

    var split_afternoon = 12
    var split_evening = 17
    var currentHour = parseFloat(date.format("HH"))

    if (currentHour >= split_afternoon && currentHour <= split_evening) {
        response = "tarde";
    } else if (currentHour >= split_evening) {
        response = "noite";
    } else {
        response = "manhã";
    }
    return response;
}
