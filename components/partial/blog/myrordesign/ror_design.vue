<template>
  <v-row>
    <v-col cols="12" sm="12">
      <div class="justify-center text-h3">Structure projet RoR</div>

      <div class="justify-center text-body-1 py-6">
        Dans un premier temps, regardons la structure d'un projet Ruby on
        Rails<br />
        On créé un nouveau projet RoR :

        <sheet-code path="/ror_design/create_app" />

        Dans le répertoire <code class="text-overline">app</code>, on retrouve
        les répertoires :
        <ul class="mb-2">
          <li>models, pour les modèles (M)</li>
          <li>views, pour les vues (V)</li>
          <li>controllers, pour les contrôleurs (C)</li>
        </ul>
        De plus le fichier
        <code class="text-overline">config/routes.rb</code> permet de gérer les
        ... routes (les points d'entrées de l'application).<br />
        Exemple :<br />

        <page-text-caption text="config/routes.rb" />

        <sheet-code path="/ror_design/ror_router_1" />

        <page-text-caption text="app/controllers/articles_controller.rb" />

        <sheet-code path="/ror_design/articles_controller" />

        Lorsque l'on va appeler la route
        <code class="text-overline">/article/1</code><br />
        RoR va appeler la méthode show du contrôleur
        <code class="text-overline">ArticlesController</code><br />
        Pour aller plus loin dans l'architecture de Ruby on rails
        <a
          class="white--text"
          :href="
            $sanitize(
              'https://adrianmejia.com/ruby-on-rails-architectural-design/'
            )
          "
          target="_blank"
        >
          Adrian Mejia Logo </a
        ><br />
      </div>
    </v-col>
  </v-row>
</template>
<script setup></script>
