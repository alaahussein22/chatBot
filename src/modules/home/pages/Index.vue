<script setup lang="ts">
import Chat from "@/modules/home/pages/chat.vue";
import { ref } from "vue";

const isChatOpened =ref(false)

function handleCloseChat() {
  isChatOpened.value = false;
}
</script>

<template>
  <div class="">
    <div class="flex justify-between items-center relative">
      <img
        src="@/assets/images/STSLogo.png"
        alt="login"
        class="w-[22rem] h-[22rem]"
      />

      <div class="absolute -bottom-40 right-10" @click="isChatOpened = true" v-if="!isChatOpened">
        <img
          src="@/assets/images/robot.jpg"
          alt="login"
          class="w-20 h-20 rounded-md cursor-pointer relative"
        />
        <small class="triangle-shape"></small>

        <small
          class="px-6 py-2 bg-[#F6F4FE] absolute -top-[66px] -left-[72px] rounded-md"
          >Need Help? <br />
          Ask STS Chatbot</small
        >
      </div>
      <div v-if="isChatOpened" class="absolute -bottom-[15rem] right-10">

        <Chat :isChatOpened="isChatOpened" @closeChat="handleCloseChat" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.triangle-shape {
  background-color: #f6f4fe;
  width: 20px;
  height: 20px;
  position: absolute;
  top: -88px;
  left: 35px;
  z-index: 1;
  border-radius: 4px; 
  position: relative;
}

.triangle-shape::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 10px solid transparent; 
  border-right: 10px solid transparent; 
  border-top: 10px solid #f6f4fe; 
}
</style>
