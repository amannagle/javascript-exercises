const caesar = function x(str,shift) {
    return str.split("").map(s=>x(s,shift))
    .join("")

};
function mod(x,y)
{
    return ((x % y) + y) % y;
}
function x(str,shift)
{
    let current_char;
    let starter=0;
    starter=str.charCodeAt();
    current_char=starter;
    starter=starter<97? 65: 97;
    return String.fromCharCode((mod(current_char+shift-starter),starter)+starter);
}
// Do not edit below this line
module.exports = caesar;
