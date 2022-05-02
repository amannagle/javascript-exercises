const caesar = function(str,shift) {
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
    if ((starter>=65 && starter <= 90) || (starter >=97) && (starter <= 122))
    {
    starter=starter < 97 ? 65: 97;
    return String.fromCharCode(mod(current_char+shift-starter,starter)+starter);
    }
    return str;
}
// Do not edit below this line
module.exports = caesar;
