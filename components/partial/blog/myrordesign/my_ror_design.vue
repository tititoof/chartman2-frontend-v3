<template>
  <v-row>
    <v-col
      cols="12"
      sm="12"
    >
      <div class="justify-center text-h3">
        Mon design
      </div>
      <div class="justify-center text-body-1 py-6">
        Après avoir lu pas mal d'articles de plein de personnes travaillant
        depuis des années sur RoR<br>
        Pour un développement classique, j'utilise le design suivant <br>
        <ul>
          <li>
            Les <code class="text-overline">services</code> me servent à
            executer une tâche (création d'un article par exemple)
          </li>
          <li>
            Les <code class="text-overline">procédures</code> vont executer
            plusieurs tâches à travers les services (la création d'un article
            puis effectuer le broadcast avec action cable)
          </li>
          <li>
            les <code class="text-overline">namespace</code> pour faire les
            évolutions en douceur

            <sheet-code path="/my_ror_design/routes" />

            Ca donne des urls
            <code class="text-overline">/api/v1/article/1</code> et
            <code class="text-overline">/api/v2/article/1</code> plutôt sympa
            non ? <v-icon
              color="orange"
              :icon="mdiEmoticonCool"
            /><br>
          </li>
          <li>
            Les <code class="text-overline">serializer</code> avec la gem
            <a
              href="https://github.com/jsonapi-serializer/jsonapi-serializer"
              target="_blank"
            >jsonapi-serializer</a>
          </li>
        </ul>
      </div>
    </v-col>
  </v-row>
</template>
<script setup>
import { mdiEmoticonCool } from '@mdi/js'
</script>
