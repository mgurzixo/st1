// cf. https://stackoverflow.com/questions/22707475/how-to-make-a-promise-from-settimeout
export default function later(delay) {
    return new Promise(function (resolve) {
        setTimeout(resolve, delay);
    });
}
