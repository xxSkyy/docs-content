<template>
  <!-- %partial% -->
  <FormKit
    type="file"
    label="Your files"
    help="This input starts with files already “attached”."
    multiple
    :value="[{ name: 'purple-taste.pdf' }, { name: 'chocolate-recipe.docx' }]"
  />
  <!-- %partial% -->
</template>
