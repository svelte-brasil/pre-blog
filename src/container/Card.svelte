<script>
  export let title = ''
  export let repl = ''
</script>

<section class="card">
  <header>
    <h2>{title}</h2>
    <div class="circles">
      <a href={repl} class="circle red" title="código no REPL" target="_blank"
        ><span /></a
      >
      <span class="circle yellow" />
      <span class="circle green" />
    </div>
  </header>
  <div>
    <slot>Content</slot>
  </div>
</section>

<style>
  .card {
    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.3);
  }

  .card > header {
    background-color: var(--primary-color);
    padding: var(--m10);
    color: #ffffff;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 48px;
  }

  header > h2 {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  header > .circles {
    height: var(--m18);
  }

  .circle {
    display: inline-block;
    width: var(--m18);
    height: var(--m18);
    border-radius: 50%;
    background-color: var(--red-color);
    border: 1px solid #fff;
    margin: 0 0 0 5px;
    content: '\f30c';
    text-decoration: none;
  }
  .red {
    background-color: var(--red-color);
  }

  .yellow {
    background-color: var(--yellow-color);
  }

  .green {
    background-color: var(--green-color);
  }

  .card > div {
    border: var(--m1) solid var(--primary-color);
    padding: var(--m10);
    height: calc(100% - 48px);
    overflow-x: auto;
  }

  @media (max-width: 484px) {
    header > h2 {
      font-size: 0.8em;
    }
  }
</style>
