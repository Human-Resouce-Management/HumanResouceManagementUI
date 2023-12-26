<template>
<p>cc {{ decodedToken.UserName }}</p>
</template>
<script setup lang="ts">
import { decode } from 'jsonwebtoken';
import Cookies from 'js-cookie';
import {ref} from 'vue';

const decodedToken = ref();
function getCode(){
    var token = Cookies.get('accessToken')?.toString();
    decodedToken.value = decode(token);
    console.log(token);
    console.log(decodedToken.value);
}
getCode();
</script>