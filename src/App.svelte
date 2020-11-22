<script>
  import { isLoading } from './i18n'
  import CheatSheet from './pages/CheatSheet.svelte'
  import Home from './pages/Home.svelte'

  //let component = Home
  let component = Home

  window.addEventListener('popstate', function (event) {
    if (location.href.includes('cheat')) {
      component = CheatSheet
    }
  })
</script>

{#if $isLoading}
  ...loading
{:else}
  <svelte:component this={component} />
{/if}

<style>
  /* your styles go here */
</style>
