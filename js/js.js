
/* 
///////////////////////////////////
///////////////////////////////////

HOME 페이지

///////////////////////////////////
///////////////////////////////////
 */

// 회원가입관련

// 전역변수
var users = JSON.parse(localStorage.getItem("users")) || [];

// login
function login(){

    var singinid = document.getElementById("userid");
    var singinpassword = document.getElementById("userpassword");

    for(var i = 0 ; i < users.length ; i++){

        if(users[i].id==singinid.value && users[i].password==singinpassword.value){
            alert("로그인성공.")
            return
        }
    }
            alert("로그인실패.")
            return
}

//회원가입
function signup(){
    
    var singinid = document.getElementById("suuserid");
    var singinpassword = document.getElementById("suuserpassword");

    for(var i = 0 ; i < users.length ; i++){
        if(users[i].id==singinid.value){
            alert('이미 가입된 아이디.');
            return;
        }
    }

    if(/^[a-zA-Z0-9]{6,}$/.test(singinid.value)==false){
    alert('아이디는 영문자+숫자 6글자이상 작성.');
        return;
        }
    
    var re2 = /^.{4,12}$/;
    if(re2.test(singinpassword.value)==false){
    alert('비밀번호는 4~12자리로 작성.');
    return;
    }

    // 객체로 바꿔서 저장하기
    // 1
    var user = {
        id : suuserid.value,
        password : suuserpassword.value
    }
    //entries배열
    users.push(user);

    //json문자열로 변환
    var jsonUsers = JSON.stringify(users);

    //localStorage에 저장
    localStorage.setItem("users", jsonUsers);

    alert("ID : "+suuserid.value+"\nPASSWORD : " + suuserpassword.value+"\n회원가입완료")
}



function signinclick(){
    var subscribebar = document.getElementById("subscribebar");
    subscribebar.style.transform="translateY(0vh)";
    
    document.getElementById("commentwrapper").style.visibility = "hidden";
}

function signupclick(){

    var clickherebox = document.getElementById("clickherebox");
    var gotosignupbox = document.getElementById("gotosignupbox");

// sign up 눌렀을때 화면이동
if(showsign.innerText =="Create account"){
    gotosignupbox.style.transform="translateX(0vW)";
    clickherebox.style.transform="translateX(-120vW)";
    showsign.innerText ="Go to Login";
    
// sign in 눌렀을때 화면이동
}else if (showsign.innerText =="Go to Login"){
    gotosignupbox.style.transform="translateX(+120vW)";
    clickherebox.style.transform="translateX(0vW)";
    showsign.innerText ="Create account";
    
}

    
    
}

// sidebar안에있는 close 버튼
function closesidebar(){
    var subscribebar = document.getElementById("subscribebar");
    subscribebar.style.transform="translateY(120vh)";

    document.getElementById("commentwrapper").style.visibility = "visible";

}



/* 
///////////////////////////////////
///////////////////////////////////

contact 페이지

///////////////////////////////////
///////////////////////////////////
 */

//  택스트 함수
function showclick(){
    var context = document.getElementById("contacttext")
    context.style.visibility = "visible"
}