<script setup lang="ts">
// const resend = useResend()

const name = ref('')
const email = ref('')
const message = ref('')

const sendForm = async () => {
  // await resend.send({
  //   from: email.value,
  //   to: 'your-email@example.com',
  //   subject: `New message from ${name.value}`,
  //   text: message.value,
  // })
}
</script>

<template>
  <div><ContactForm title="Get In touch" /></div>
</template>
