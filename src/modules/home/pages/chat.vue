<template>
  <div class="chat-container" :style="{ width: isMinimized ? '20rem' : '350px', height: isMinimized ? '65px' : '500px' }">
    <div class="flex justify-between">
      <div class="flex items-center gap-2">
        <img
          src="@/assets/images/robot.jpg"
          alt="login"
          class="w-10 h-10 rounded-md"
        />
        <div v-if="!isMinimized">
          <p class="text-sm">Summit</p>
          <p class="text-sm text-[#c5c3c3] leading-5">Always here to help!</p>
        </div>
      </div>

      <div class="cursor-pointer flex gap-2">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          @click="toggleMinimize"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 12h12"
          ></path>
        </svg>

        <!-- X SVG to Close Chat -->
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          @click="closeChat"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </div>
    </div>

    <p v-if="!isMinimized" class="text-md text-center py-5 text-[#c5c3c3]">October 11,2024</p>

     <div  v-if="!isMinimized">
    <div v-for="(message, index) in messages" :key="index" :class="['message-container', message.sender === 'me' ? 'me' : 'other']" class="flex items-center">
      <img :src="message.image || defaultImage" class="sender-image" />
      <div :class="['message', message.sender === 'other' ? 'bg-gray' : 'bg-blue']" class="flex flex-col">
        <div>{{ message.text }}</div>
        <div class="time">{{ message.time }}</div>
      </div>
    </div>
  </div>
    <!-- Message Input -->
    <div v-if="!isMinimized" class="relative mt-[6.8rem]">
      <input
        type="text"
        class="w-full py-2 px-4 border rounded-lg bg-gray-100"
        placeholder="Typing a message"
      />
      <div class="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer">
        <svg
          class="w-6 h-6 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import defaultImage from "@/assets/images/robot.jpg";

const messages = ref([
  {
    text: "Hi ,This is a message",
    sender: "other",
    image: "",
    time: "12:50",
  },
  {
    text: "This is a very long message",
    sender: "me",
    image: "https://via.placeholder.com/40?text=O",
    time: "12:50",
  },
]);

const emit = defineEmits(["closeChat"]); 
const isMinimized = ref(false); //

function toggleMinimize() {
  isMinimized.value = !isMinimized.value;
}
function closeChat() {
  emit("closeChat"); 
  }
</script>

<style scoped>
.chat-container {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  padding: 20px;
  transition: width 0.3s, height 0.3s;
}

.message-container {
  display: flex;
  align-items: flex-start;
  margin: 5px 0;
}

.message-container.me {
  flex-direction: row-reverse;
}

.sender-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 10px;
}

.message {
  padding: 10px;
  border-radius: 15px;
  color: #fff;
  max-width: 70%;
  word-break: break-word;
  padding: 1rem;
}

.bg-gray {
  background-color: #f0f0f0;
  color: black;
  border-radius: 12px;
}

.bg-blue {
  background-color: red;
  color: white;
}

.bg-blue .time {
  font-size: 12px;
  color: #fff;
  text-align: right;
  margin-top: 5px;
}

.bg-gray .time {
  font-size: 12px;
  color: black;
  text-align: right;
  margin-top: 5px;

}

input {
  padding-left: 40px;
}

input::placeholder {
  color: #aaa;
}

input:focus {
  outline: none;
}

.relative {
  position: relative;
}

.absolute {
  position: absolute;
}
</style>
