<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% // Controller 로부터 결과 데이터 받음
	int cnt = (Integer)request.getAttribute("result");
	int cnt2 = (Integer)request.getAttribute("result2");
%>
<% if(cnt == 0){ %>
	<script>
		alert("삭제 실패");
		history.back();
	</script>
<% } else {%>
	<script>
		alert("삭제 성공");
		//location.href = "review.do?page=1";
		location.href = "view.do?num=<%= cnt2%>";
		//opener.location.reload();
		//history.back();
	</script>
<% } %>











