<script>
  export let title = ''
</script>

<section class="card">
  <header>
    <h2>{title}</h2>
    <span class="circles" />
  </header>
  <div>
    <pre>
      <slot>Content</slot>
    </pre>
  </div>
</section>

<style>
  .card {
    box-shadow: -5px 5px rgba(0, 0, 0, 0.3);
  }

  .card > header {
    background-color: var(--primary-color);
    padding: var(--m10);
    color: #ffffff;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    height: 48px;
  }

  header > h2 {
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
    margin-left: 20px;
  }

  section > div {
    border: var(--m1) solid var(--primary-color);
    padding: var(--m10);
    height: calc(100% - 48px);
    overflow-x: auto;
  }

  pre {
    font-size: var(--m18);
    color: var(--secondary-color);
  }

  @media (max-width: 484px) {
    header > h2 {
      font-size: 1.2em;
    }
  }
</style>
