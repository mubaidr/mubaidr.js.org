<template>
  <div class="fixed inset-0 pointer-events-none overflow-hidden z-0">
    <!-- Floating geometric shapes -->
    <div
      class="geometric-shape shape-1 bg-blue-500 rounded-full animate-bounce-circle"
    ></div>
    <div
      class="geometric-shape shape-2 bg-purple-500 parallelogram animate-skew-parallelogram"
    ></div>
    <div
      class="geometric-shape shape-3 bg-green-500 triangle animate-drift-triangle"
    ></div>
    <div
      class="geometric-shape shape-4 bg-pink-500 rounded-none rotate-12 animate-rotate-square"
    ></div>
    <div
      class="geometric-shape shape-5 bg-yellow-500 parallelogram animate-skew-parallelogram"
    ></div>
    <div
      class="geometric-shape shape-6 bg-red-500 rounded-lg rotate-45 animate-rotate-square"
    ></div>
    <div
      class="geometric-shape shape-7 bg-teal-500 triangle animate-drift-triangle"
    ></div>
    <div
      class="geometric-shape shape-8 bg-orange-500 parallelogram animate-skew-parallelogram"
    ></div>
    <div
      class="geometric-shape shape-9 bg-purple-500 rounded-full animate-bounce-circle"
    ></div>
  </div>
</template>

<style scoped>
/* Base geometric shape styles */
.geometric-shape {
  @apply absolute opacity-4;
}

/* Shape variations */
.parallelogram {
  border-radius: 4px;
  transform: skew(-20deg);
}

.triangle {
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  border-radius: 0;
}

/* Individual shape positioning and sizing */
/* TOP SECTION (0-33%) - 2 shapes */
.shape-1 {
  left: 25%;
  top: 15%;
  width: 45px;
  height: 45px;
}

.shape-2 {
  left: 75%;
  top: 25%;
  width: 32px;
  height: 32px;
}

/* MIDDLE SECTION (34-66%) - 3 shapes */
.shape-3 {
  left: 15%;
  top: 40%;
  width: 55px;
  height: 55px;
}

.shape-4 {
  left: 60%;
  top: 45%;
  width: 38px;
  height: 38px;
}

.shape-5 {
  left: 85%;
  top: 55%;
  width: 42px;
  height: 42px;
}

/* BOTTOM SECTION (67-100%) - 5 shapes */
.shape-6 {
  left: 35%;
  top: 75%;
  width: 48px;
  height: 48px;
}

.shape-7 {
  left: 10%;
  top: 85%;
  width: 35px;
  height: 35px;
}

.shape-8 {
  left: 50%;
  top: 88%;
  width: 40px;
  height: 40px;
}

.shape-9 {
  left: 80%;
  top: 78%;
  width: 46px;
  height: 46px;
}

/* Animation keyframes */
@keyframes bounce-circle {
  0%,
  100% {
    transform: tranzincY(0px) scale(1);
  }
  50% {
    transform: tranzincY(-8px) scale(1.05);
  }
}

@keyframes skew-parallelogram {
  0%,
  100% {
    transform: skew(-20deg);
  }
  50% {
    transform: skew(-35deg);
  }
}

@keyframes drift-triangle {
  0%,
  100% {
    transform: tranzincX(0px) tranzincY(0px);
  }
  25% {
    transform: tranzincX(5px) tranzincY(-3px);
  }
  50% {
    transform: tranzincX(-5px) tranzincY(3px);
  }
  75% {
    transform: tranzincX(3px) tranzincY(-2px);
  }
}

@keyframes rotate-square {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Animation classes */
.animate-bounce-circle {
  animation: bounce-circle 5s ease-in-out infinite;
}

.animate-skew-parallelogram {
  animation: skew-parallelogram 6s ease-in-out infinite;
}

.animate-drift-triangle {
  animation: drift-triangle 7s ease-in-out infinite;
}

.animate-rotate-square {
  animation: rotate-square 10s linear infinite;
}
</style>
