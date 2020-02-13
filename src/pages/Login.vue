<template>
  <div class="bg-white text-center p-5 vh-100">
    <img src="../assets/images/logo@2x.png" alt="open audition" class="w-75 my-5">

    <div class="text-center mt-5">
      <h6 class="font-weight-bold">회원로그인</h6>
      <p>아이디(E-mail)와 비밀번호를입력하세요.</p>
    </div>

    <b-form>
      <b-row class="bg-input rounded mt-5">
        <label class="col-4 col-form-label" for="">아이디</label>
        <b-input class="col-8 border-0"/>
      </b-row>
      <b-row class="bg-input rounded mt-2">
        <label class="col-4 col-form-label" for="">비밀번호</label>
        <b-input class="col-8 border-0"/>
      </b-row>

      <b-row class="mt-2">
        <b-button variant="link">아이디 찾기</b-button>
        <b-button variant="link">비밀번호 찾기</b-button>
        <b-button variant="link" class="ml-auto">회원가입</b-button>
      </b-row>
      <b-button variant="danger" size="lg" pill class="mt-5 w-75 mx-auto">로그인</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    msg: String
  }
}
</script>
