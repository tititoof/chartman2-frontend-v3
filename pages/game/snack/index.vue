<template>
  <div>
    <TresCanvas window-size>
      <!-- Your scene goes here -->
      <TresPerspectiveCamera
        :position="[3, 3, 3]"
        :look-at="[0, 0, 0]"
      />
      <OrbitControls />
      <!-- <TresMesh>
        <TresTorusGeometry :args="[1, 0.5, 16, 32]" /> -->
        <!-- <TresMeshStandardMaterial
          :map="pbrTexture.map"
          :displacement-map="pbrTexture.displacementMap"
          :roughness-map="pbrTexture.roughnessMap"
          :normal-map="pbrTexture.normalMap"
          :ao-map="pbrTexture.ambientOcclusionMap"
        />
      </TresMesh> -->
      <!-- <TresMesh> -->
        <!-- <TresSphereGeometry :args="[1,32,32]" /> -->
      <!-- </TresMesh> -->
      <TresAmbientLight
        :color="0xffffff"
        :intensity="1"
      />
      <!-- <Suspense>
        <ThreeNuxtStones />
        </Suspense> -->
        <Suspense>
          <ThreeBunny />
        </Suspense>
    </TresCanvas>
  </div>
</template>
<script setup>

// const { scene: model, animations } = await useGLTF(
//   'https://raw.githubusercontent.com/Tresjs/assets/main/models/gltf/ugly-naked-bunny/ugly-naked-bunny-animated.gltf',
// )

// const { actions, mixer } = useAnimations(animations, model)

// const currentAction = ref(actions.Greeting)

// currentAction.value.play()
</script>
