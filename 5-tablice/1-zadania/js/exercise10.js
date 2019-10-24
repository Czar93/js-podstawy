function checkPalindrom(txt) {
    const tab = [...txt];
    if (txt === tab.reverse().join("")) {
        return true;
    }
    return false;
}

console.log( "kajak", checkPalindrom("kajak") );
console.log( "nic", checkPalindrom("nic") );
console.log( "Niger", checkPalindrom("Niger") );
