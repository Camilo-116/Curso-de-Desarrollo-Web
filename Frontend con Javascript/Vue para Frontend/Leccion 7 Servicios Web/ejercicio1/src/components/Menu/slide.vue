<template>
    <div>
        <MenuBar v-bind="this.$attrs" @openMenu="openMenu" @closeMenu="closeMenu">
            <slot></slot>
        </MenuBar>
    </div>
</template>

<script>
    import MenuBar from '../MenuPrincipal.vue';
    export default {
      name: 'SlideMenu',
      components: {
        MenuBar
      },
      methods: {
        openMenu() {
          this.$emit('openMenu');
        },
        closeMenu() {
          this.$emit('closeMenu');
        }
      }
    };
</script>

