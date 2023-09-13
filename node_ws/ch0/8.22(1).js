var jumin_nums = prompt("주민번호를 입력해주세요");
checkAdult(jumin_nums);
function checkAdult(jumin) {
    if(jumin.length != 13) {
        console.log("주민번호는 13자리이여야 합니다.");
        return;
    } 
    let ss = jumin.substring(6,7);
    if(!(ss == 1 || ss == 2 || ss == 3 || ss == 4)) {
        console.log("성별 코드가 유효하지 않습니다.");
        return;
    }
    let year = Number(jumin.substring(0,2));
    if(ss == 1||ss ==2) {
        year = year + 1900;
    } else {
        year = year + 2000;
    }
    
    let now_year = now.getFullYear();
    let age = new_year - year + 1;
    if(age <= 19 < age) {
        console.log("성인입니다");
    } else {
        console.log("미성년입니다.");
    }
    console.log()
}
