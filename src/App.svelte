<script>
  import { isLoading } from './i18n'
  import CheatSheet from './pages/CheatSheet.svelte'
  import Home from './pages/Home.svelte'

  console.log(location.pathname)

  let component = location.href.includes('cheat') ? CheatSheet : Home

  window.addEventListener('popstate', function (event) {
    component = location.href.includes('cheat') ? CheatSheet : Home
  })
</script>

{#if $isLoading}
  ...loading
{:else}
  <svelte:component this={component} />
{/if}
