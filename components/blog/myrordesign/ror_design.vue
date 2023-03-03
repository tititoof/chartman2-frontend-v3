<template>
  <div class="justify-center text-h3">Structure projet RoR</div>

  <div class="justify-center text-body-1 py-6">
    Dans un premier temps, regardons la structure d'un projet Ruby on Rails<br />
    On créé un nouveau projet RoR :
    <v-sheet
      class="d-flex align-center mx-auto py-2 pl-6 mb-2"
      elevation="4"
      color="grey-darken-3"
      min-height="30"
      rounded
      width="100%"
    >
      <ContentDoc path="/ror_design/create_app" />
    </v-sheet>
    Dans le répertoire <code class="text-overline">app</code>, on retrouve les répertoires :
    <ul class="mb-2">
      <li>models, pour les modèles (M)</li>
      <li>views, pour les vues (V)</li>
      <li>controllers, pour les contrôleurs (C)</li>
    </ul>
    De plus le fichier <code class="text-overline">config/routes.rb</code> permet de gérer les ... routes (les
    points d'entrées de l'application).<br />
    Exemple :<br />

    <code class="text-overline">config/routes.rb</code>
    <v-sheet
      class="d-flex align-center mx-auto py-2 pl-6 mb-2"
      elevation="4"
      color="grey-darken-3"
      min-height="30"
      rounded
      width="100%"
    >
      <ContentDoc path="/ror_design/ror_router_1" />
    </v-sheet>
    <code class="text-overline">app/controllers/articles_controller.rb</code>
    <v-sheet
      class="d-flex align-center mx-auto py-2 pl-6 mb-2"
      elevation="4"
      color="grey-darken-3"
      min-height="30"
      rounded
      width="100%"
    >
      <ContentDoc path="/ror_design/articles_controller" />
    </v-sheet>
    Lorsque l'on va appeler la route <code class="text-overline">/article/1</code><br />
    RoR va appeler la méthode show du contrôleur <code class="text-overline">ArticlesController</code
    ><br />
    Pour aller plus loin dans l'architecture de Ruby on rails
    <a
      class="white--text"
      :href="$sanitize('https://adrianmejia.com/ruby-on-rails-architectural-design/')"
      target="_blank"
      >Adrian Mejia Logo</a
    ><br />
  </div>
</template>
