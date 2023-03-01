<template>
  <v-responsive>
    <v-row>
      <v-col cols="12" width="100%" class="d-flex px-12">
        <v-icon size="x-large" left :icon="mdiScaleBalance" />
        <span class="text-h6 font-weight-light align-center pl-2">
          {{ $t("legal_notices.title") }}
        </span>
      </v-col>
    </v-row>
    <v-row dense class="py-6">
      <v-col class="d-flex justify-center text-h4" cols="12">
        {{ $t("legal_notices.name") }}
      </v-col>
    </v-row>
    <v-row dense class="py-6">
      <v-col cols="6" class="d-flex justify-end">
        {{ $t("legal_notices.fields.name") }}
      </v-col>
      <v-col cols="6" class="font-weight-black">
        {{ $t("legal_notices.texts.name") }}
      </v-col>
    </v-row>
    <v-row dense class="py-6">
      <v-col cols="6" class="d-flex justify-end">
        {{ $t("legal_notices.fields.address") }}
      </v-col>
      <v-col cols="6" class="font-weight-black">
        {{ $t("legal_notices.texts.address1") }}<br/>
        {{ $t("legal_notices.texts.address2") }}<br/>
        {{ $t("legal_notices.texts.address3") }}
      </v-col>
    </v-row>
    <v-row dense class="py-6">
      <v-col cols="6" class="d-flex justify-end">
        {{ $t("legal_notices.fields.contact") }}
      </v-col>
      <v-col cols="6" class="font-weight-black">
        {{ $t("legal_notices.texts.contact") }}
      </v-col>
    </v-row>
    <v-row dense class="py-6">
      <v-col cols="6" class="d-flex justify-end">
        {{ $t("legal_notices.fields.website") }}
      </v-col>
      <v-col cols="6" class="font-weight-black">
        <v-btn
          :href="$t('legal_notices.texts.website')"
          variant="plain"
          color="deep-purple-lighten-5"
          dark
          target="_blank"
          class="pl-0 pb-3"
        >
          {{ $t("legal_notices.texts.website") }}
      </v-btn>
      </v-col>
    </v-row>
    <v-row dense class="py-6">
      <v-col cols="6" class="d-flex justify-end">
        {{ $t("legal_notices.fields.siren") }}
      </v-col>
      <v-col cols="6" class="font-weight-black">
        {{ $t("legal_notices.texts.siren") }}
      </v-col>
    </v-row>

    <v-row dense class="py-6">
      <v-col cols="6" class="d-flex justify-end">
        {{ $t("legal_notices.fields.hosting") }}
      </v-col>
      <v-col cols="6" class="font-weight-black">
        {{ $t("legal_notices.texts.hosting") }} <br />
        {{ $t("legal_notices.texts.hosting_address") }}<br />
        <v-btn
          :href="$t('legal_notices.texts.hosting_website')"
          target="_blank"
          variant="plain"
          color="deep-purple-lighten-5"
          class="pl-0 pb-3"
        >
          {{ $t("legal_notices.texts.hosting_website") }}
        </v-btn>
      </v-col>
    </v-row>
  </v-responsive>
</template>

<script setup lang="ts">
import { mdiScaleBalance } from "@mdi/js";
</script>