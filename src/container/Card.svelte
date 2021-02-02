<script>
  import 'svelte-highlight/styles/github.css'
  import { _ } from 'svelte-i18n'
  import { fly } from 'svelte/transition'
  import { HighlightSvelte } from 'svelte-highlight'

  export let title = ''
  export let repl = ''
  export let doc = ''
  export let content = ''

  let isCopied = false

  function copy() {
    const element = document.getElementById(title).firstChild
    if (navigator.clipboard) {
      navigator.clipboard.writeText(element.innerText)
      isCopied = true
      setTimeout(() => (isCopied = false), 3000)
    }
  }
</script>

<section class="card">
  <header>
    <h2>
      {$_(title)}
    </h2>
    <span class="circles" />
  </header>
  <section class="links">
    {#if isCopied}
      <span transition:fly={{ x: 20 }}>
        {$_('copied_clipboard')}
      </span>
    {/if}

    <a href on:click|preventDefault={copy} title={$_('copy_clipboard')}>📋</a>
    <a href={doc} target="_blank" title={$_('doc')}>📃</a>
    <a href={repl} target="_blank" title={$_('repl')}>💻</a>
  </section>
  <div class="content">
    <HighlightSvelte id={title} code={content} />
  </div>
</section>

<style>
  .card {
    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: var(--m1) solid var(--primary-color);
    border-radius: 10px;
  }

  .card > header {
    background-color: var(--blue-color);
    padding: var(--m10);
    color: #ffffff;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 48px;
    position: relative;
    border-radius: 10px 10px 0 0;
  }

  header > h2 {
    display: flex;
    align-items: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  header > .circles {
    display: block;
    width: var(--m18);
    height: var(--m18);
    border-radius: 50%;
    background-color: var(--red-color);
    border: 1px solid #fff;
    box-shadow: 25px 0 0 0 var(--yellow-color), 50px 0 0 0 var(--green-color);
    margin-right: 50px;
  }

  .card > .links {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px;
    color: var(--red-color);
  }
  .links a {
    margin-left: 20px;
    font-size: 1.25rem;
    text-decoration: none;
  }

  .card > .content {
    padding: var(--m10);
    height: calc(100% - 48px);
    overflow-x: auto;
    flex: 1;
  }

  @media (max-width: 484px) {
    header > h2 {
      font-size: 0.8em;
    }
  }
</style>
