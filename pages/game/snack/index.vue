<template>
  <div>
    <TresCanvas window-size>
      <!-- Your scene goes here -->
      <TresPerspectiveCamera
        :position="[3, 3, 3]"
        :look-at="[0, 0, 0]"
      />
      <OrbitControls />
      <TresAmbientLight
        :color="0xffffff"
        :intensity="1"
      />
      <Suspense>
        <ThreeNuxtStones />
      </Suspense>
      <Suspense>
        <ThreeBunny />
      </Suspense>
    </TresCanvas>
  </div>
</template>
<script setup>
</script>
