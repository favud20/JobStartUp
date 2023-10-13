$(document).ready(function(){

    /* 기업 로고 이미지 수정 */
    $("#profile-edit-button").on("click",function(){

        //company_no
        var company_no = $(".profile-company-no").val();
        //file
        var fileInput = $("#logoFile")[0]; // 파일 입력 필드 가져오기
        var logoFile = fileInput.files[0]; // 선택된 파일 가져오기
        //폼 태그로 추가
        var formData = new FormData();
        formData.append("company_no",company_no);
        formData.append("logoFile",logoFile);

        $.ajax({
            type:"POST",
            url: "/recruiter/updateComLogo",
            data: formData,
            contentType:false,
            processData:false,
            success:
                function(response){
                      if (response !== null) {
                          window.location.href = "/recruiter/myPage?company_no=" + company_no;
                      } else {
                          console.log("수정 실패");
                      }
                },
            error:function(request,status,error){
                console.log("에러입니다");
            }
        });
    });

    /* 박람회 현황 */

    /* 공고 관리 */

    /* 지원자 관리 */


});