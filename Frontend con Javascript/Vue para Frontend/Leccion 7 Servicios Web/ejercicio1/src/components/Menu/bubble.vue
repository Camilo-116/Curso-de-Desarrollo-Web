<template>
    <div>
        <MenuBar ref="sideNav" v-bind="this.$attrs" @openMenu="openMenu" @closeMenu="closeMenu">
            <slot></slot>
        </MenuBar>
    </div>
</template>

<script>
    import MenuBar from '../MenuPrincipal.vue';
    export default {
      name: 'BubbleBar',
      components: {
        MenuBar
      },
      data() {
        return {
          propsToPass: {
            isOpen: this.$attrs.isOpen,
            right: this.$attrs.right,
            width: this.$attrs.width,
            disableEsc: this.$attrs.disableEsc,
            noOverlay: this.$attrs.noOverlay,
            onStateChange: this.$attrs.onStateChange
          }
        };
      },
      methods : {
          openMenu () {
              //this.$emit("openMenu")
              let set= this.$refs.sideNav.$el.querySelector('.bm-menu');
              //console.log(set,"lallan")
              set.style.borderRadius='150% / 70%';
              if(this.$attrs.right){
              set.style.borderTopRightRadius = '0px 900px';
              set.style.borderBottomRightRadius='0px';
              }
              else{
                set.style.borderTopLeftRadius = '0px 900px';
              set.style.borderBottomLeftRadius='0px';
              }
              set.style.transitionTimingFunction='easy-in';
              this.$emit("openMenu");

              setTimeout(function(){
                  set.style.transitionTimingFunction='cubic-bezier(.29, 1.01, 1, -0.68)';
                  set.style.borderRadius='0px'

                  }, 300);
          },
          closeMenu () {
              //this.$emit("closeMenu")
            let set= this.$refs.sideNav.$el.querySelector('.bm-menu');
            set.style.transitionTimingFunction=null;
            this.$emit("closeMenu")
          }
      }
    };
</script>