<script>
  import { socials } from '@src/data/social-media'
  import { _ } from '@src/i18n'
</script>

<main class="main">
  <div class="bg">
    <div class="bg-left" />
  </div>

  <div class="main-content">
    <div class="info">
      <div class="info__image">
        <img
          src="/img/logo-svelte-brasil.png"
          alt="Logo do Svelte mais o mapa do brasil com a bandeira" />
      </div>
      <h1 class="info__title">
        <span class="gretting">{$_('welcome')}</span>
        <br />
        SVELTE BRASIL
      </h1>
      <p class="info__description">{$_('our_channels')}</p>
      <ul class="info-social">
        {#each socials as social}
          <li class="info-social__item">
            <a href={social.link} title={social.label} target="_blank">
              <img src={social.iconPath} alt={`ícone do ${social.label}`} />
            </a>
          </li>
        {/each}
      </ul>
      <div class="learning">
        <a href="#/cheat">
          <img src="/img/icons/open-book.svg" alt="aprenda" />
          <span>{$_('cheat_sheet')}</span>
        </a>
      </div>
    </div>
    <div class="illustration">
      <img
        src="/img/illustration-hero.svg"
        alt="ilustração de um homem em pé com jaqueta laranja na esquerda, um quadrado simulando um browser dark mode no centro e um arbuste a direita semelhante a uma folha na cor laranja" />
    </div>
  </div>
</main>

<style>
  :global(body) {
    overflow-x: hidden;
    background-color: #fcfcfc;
    font-family: 'Montserrat', sans-serif;
  }

  :global(ul) {
    list-style-type: none;
  }

  .bg,
  .bg-left {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }

  .bg {
    width: 100%;
    height: 100vh;
    background: url('/img/bg-header1.svg') top no-repeat;
    background-size: 100%;
  }

  .bg-left {
    width: 35%;
    height: 175px;
    background: url('/img/bg-header2.svg') left top no-repeat;
    background-size: 100%;
  }

  .main-content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
  }

  .info {
    width: 40%;
    padding: 4%;
    margin-top: 15%;
  }

  .info__title {
    font-size: 34px;
    line-height: 0.8em;
  }

  .info__title > .gretting {
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
  }

  .info__description {
    font-size: 16px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .info-social {
    display: flex;
    justify-content: space-between;
  }

  .illustration {
    width: 60%;
  }

  .illustration > img {
    width: 90%;
  }

  .learning > a {
    display: flex;
    align-items: center;
    padding: 10px 0;
    text-decoration: none;
    color: var(--primary-color);
  }

  a > span {
    margin-left: 10px;
  }

  @media screen and (max-width: 860px) {
    .info {
      width: 100%;
      margin-top: 20%;
    }

    .illustration {
      display: none;
    }
  }
</style>
