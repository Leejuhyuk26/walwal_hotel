// view.js	

function chkDelete(num) {
	// 삭제 여부, 다시 확인하고 진행하기
	var r = confirm("삭제하시겠습니까?");

	if (r) {
		location.href = 'deleteOk.do?num=' + num;
	}
}
function cmtchkDelete(num, num2) {
	// 삭제 여부, 다시 확인하고 진행하기
	var r = confirm("삭제하시겠습니까?");

	if (r) {
		location.href = 'cmtdeleteOk.do?cmt_num=' + num + '&num=' + num2;
	}
}
function deleteChk() {
	alert('권한이 없습니다.');
}

function userChk() {
	alert("권한이 없습니다.");
}
function loginWithKakao() {
  Kakao.Auth.login({
    success: function(authObj) {
      alert(JSON.stringify(authObj))
    },
    fail: function(err) {
      alert(JSON.stringify(err))
    },
  })
}



/*var delbtn = document.getElementsByClassName("delbtn").length;
var pwck = document.getElementById("pwck");

for (var i = 0; i < delbtn; i++) {
	
	var delbtn = document.getElementsByClassName("delbtn")[i];
	
	delbtn.onclick = function() {
		if (pwck.style.display == 'none') {
			pwck.style.display = 'block';
		} else {
			pwck.style.display = 'none';
		}
	}
}*/
