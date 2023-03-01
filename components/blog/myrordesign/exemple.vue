<template>
  <div class="justify-center text-h3">Un exemple vaut mille mots</div>

  <div class="justify-center text-body-1 py-6">
    Imaginons que l'on veuille faire unsystème de messagerie interne à
    l'application.<br />
    On va vouloir que l'utilisateur n°1 puisse envoyer un message à l'
    utilisateur n°2.<br />
    Si l'utilisateur n°2 est connecté, il veut recevoir une notification (quand
    on lui envoi un message).<br />
    Je vais passer sur la création du modèle, etc...<br />
    De bons tutoriels sur Ruby on rails en français
    <a class="white--text" :href="$sanitize('https://grafikart.fr/tutoriels/ruby-on-rails')" target="_blank"
      >grafikart</a
    ><br />
    <code class="text-overline">app/models/message.rb</code>
    <v-sheet
      class="d-flex align-center mx-auto py-2 pl-6 mb-2"
      elevation="4"
      color="grey-darken-3"
      min-height="30"
      rounded
      width="100%"
    >
      <ContentDoc path="/exemple/message" />
    </v-sheet>
    <code class="text-overline">app/controllers/api/v1/messages_controller.rb</code>
    <v-sheet
      class="d-flex align-center mx-auto py-2 pl-6 mb-2"
      elevation="4"
      color="grey-darken-3"
      min-height="30"
      rounded
      width="100%"
    >
      <ContentDoc path="/exemple/messages_controller" />
    </v-sheet>
    <code class="text-overline">app/procedures/api/v1/messages/create_procedure.rb</code>
    <v-sheet
      class="d-flex align-center mx-auto py-2 pl-6 mb-2"
      elevation="4"
      color="grey-darken-3"
      min-height="30"
      rounded
      width="100%"
    >
      <ContentDoc path="/exemple/create_procedure" />
    </v-sheet>
    <code class="text-overline">app/services/api/v1/messages/create_service.rb</code>
    <v-sheet
      class="d-flex align-center mx-auto py-2 pl-6 mb-2"
      elevation="4"
      color="grey-darken-3"
      min-height="30"
      rounded
      width="100%"
    >
      <ContentDoc path="/exemple/create_service" />
    </v-sheet>

    <code class="text-overline">app/jobs/messages_broadcast_job.rb</code>
    <v-sheet
      class="d-flex align-center mx-auto py-2 pl-6 mb-2"
      elevation="4"
      color="grey-darken-3"
      min-height="30"
      rounded
      width="100%"
    >
      <ContentDoc path="/exemple/messages_broadcast_job" />
    </v-sheet>
  </div>
</template>