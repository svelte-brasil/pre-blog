<script>
  import Card from '@src/container/Card.svelte'
  import { cheatSheet } from '@src/data/cheat-sheet'
  import { _ } from 'svelte-i18n'
</script>

<header>
  <div class="logo" on:click={() => (location.href = '#')}>
    <img src="img/svelte-brasil.jpeg" alt="Svelte Brasil" />
  </div>
  <h1>Svelte Brasil - {$_('cheat_sheet')}</h1>
</header>

<section class="container">
  {#each cheatSheet as item}
    <Card {...item} />
  {/each}
</section>

<style>
  header {
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    border: 4px solid var(--primary-color);
    color: var(--primary-color);
    box-shadow: calc(var(--m10) * -1) var(--m10) var(--m5) rgba(0, 0, 0, 0.3);
    width: 100vw;
    background-color: #fff;
    height: 100px;
    z-index: 999;
  }

  header > .logo {
    cursor: pointer;
    height: var(--m96);
    padding: 0;
    height: 100%;
  }

  .logo > img {
    height: 100%;
  }

  header > h1 {
    padding-left: 20px;
    letter-spacing: 2.5px;
  }

  .container {
    margin: 0px auto;
    padding: 10px 50px;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    padding-top: 120px;
  }

  .container > :global(.card) {
    width: fit-content;
    margin-left: 10px;
    margin-bottom: 10px;
    flex: 1;
  }

  @media (max-width: 960px) {
    header > h1 {
      padding-left: 10px;
      letter-spacing: 1.5px;
    }
    .container {
      width: 100vw;
      padding: 10px;
      padding-top: 120px;
    }

    .container > :global(.card) {
      width: 95%;
    }
  }

  @media (max-width: 615px) {
    header h1 {
      font-size: 1.25rem;
    }
  }
</style>
