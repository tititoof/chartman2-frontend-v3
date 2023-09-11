<template>
  <v-row>
    <v-col
      cols="12"
      sm="12"
    >
      <div class="justify-center text-h3">
        Un exemple vaut mille mots
      </div>

      <div class="justify-center text-body-1 py-6">
        Imaginons que l'on veuille faire unsystème de messagerie interne à
        l'application.<br>
        On va vouloir que l'utilisateur n°1 puisse envoyer un message à l'
        utilisateur n°2.<br>
        Si l'utilisateur n°2 est connecté, il veut recevoir une notification
        (quand on lui envoi un message).<br>
        Je vais passer sur la création du modèle, etc...<br>
        De bons tutoriels sur Ruby on rails en français
        <a
          class="white--text"
          href="https://grafikart.fr/tutoriels/ruby-on-rails"
          target="_blank"
        >grafikart</a><br>
        <page-text-caption text="app/models/message.rb" />
        <sheet-code path="/exemple/message" />

        <page-text-caption
          text="app/controllers/api/v1/messages_controller.rb"
        />
        <sheet-code path="/exemple/messages_controller" />

        <page-text-caption
          text="app/procedures/api/v1/messages/create_procedure.rb"
        />
        <sheet-code path="/exemple/create_procedure" />

        <page-text-caption
          text="app/services/api/v1/messages/create_service.rb"
        />
        <sheet-code path="/exemple/create_service" />

        <page-text-caption text="app/jobs/messages_broadcast_job.rb" />
        <sheet-code path="/exemple/messages_broadcast_job" />
      </div>
    </v-col>
  </v-row>
</template>
<script setup></script>
