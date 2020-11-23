export const cheatSheet = [
  {
    title: "svelte_component",
    content: [
`<!-- Widget.svelte -->
<script>
  export let textValue
</script>

<div class="container">
  {textValue}
</div>

<style>
.container {
  color: blue;
}
</style>

<!-- App.svelte -->
<script>
  import Widget from './Widget.svelte'
  const title = 'App'
</script>

<header>{title}</header>

<Widget textValue="I'm a svelte component" />
`
    ]
  },
  {
  title: "expressions",
  content: [
`<script>
    let isShowing = true
    let cat = 'cat'
</script>

`,
    '<p>2 + 2 = {2 + 2}</p>',
    ' ',
`<p>
  {isShowing ? 'NOW YOU SEE ME' : 'NOW YOU DON ́T SEE ME'}
</p>`,
    ' ',
    '<p>My e-mail is {email}</p>',
    ' ',
    '<p>{user.name}</p>',
    ' ',
    '<p>{cat + `s`}</p>',
    ' ',
    '<p>{`name ${user.name}`}</p>',
  ]
  },
  {
  title: "simple_bind",
  content: [

`//MyLink.svelte
<script>
    export let href = ''
    export let title = ''
    export let color = ''
</script>

<a href={href} style={\`color: \${color}\`} >
  {title}
</a>`,
` `,
'::shorthand',
`<a {href} style={\`color: \${color}\`} >
  {title}
</a>

<script>
  import MyLink from "./components/MyLink";
  let link = {
    href: "http://www.mysite.com",
    title: "My Site",
    color: "#ff3300"
  };
</script>

<MyLink {...link} />
`
  ]
  },
  {
  title: "two_way_bind",
  content: [
`<MyInput bind:value={value} />

`,
'::shorthand',
`<MyInput bind:value />

<select multiple bind:value={fillings}>
  <option value="Rice">Rice</option>
  <option value="Beans">Beans</option>
  <option value="Cheese">Cheese</option>
</select>

<input type="radio" bind:group={tortilla} value="Plain" />
<input type="radio" bind:group={tortilla} value="Whole wheat" />

<input type="checkbox" bind:group={fillings} value="Rice" />
<input type="checkbox" bind:group={fillings} value="Beans" />

`,
'::element_binding',
`<script>
  let myDiv
  myDiv.innerText = 'My text'
</script>

<div bind:this={myDiv}/>
`
  ]
  },
  {
  title: "conditional_render",
  content: [
`{#if condition}
  <p>Condition is true</p>
{:else if otherCondition}
  <p>OtherCondition is true</p>
{:else}
  <p>Any Condition is true</p>
{/if}

`,
'::re_render',
`{#key value}
	<div transition:fade>{value}</div>
{/key}
`
  ]
  },
  {
  title: "await_template",
  content: [
`{#await promise}
  <p>waiting for the promise to resolve...</p>
{:then value}
  <p>The value is {value}</p>
{:catch error}
  <p>Something went wrong: {error.message}</p>
{/await}
`
  ]
  },
  {
  title: "render",
  content: [
`{@html '<div>'}
{@html '</div>'}
{@html expression}
`
  ]
  },
  {
  title: "handle_events",
  content: [
`<button on:click={handleClick}>
  Press me
</button>

<button on:click={() => console.log('I was pressed')}>
  Press me
</button>

<button on:click|once={handleClick}>
  Press me
</button>

<button on:submit|preventDefault={handleClick}>
  Press me
</button>
`
]
  },
  {
  title: "forwarding_event",
  content: [
`<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
</script>
<button on:click={() => dispatch('message', { text: 'Hello!' })} />
<button on:click>Press me</button>
`
  ]
  },
  {
  title: "rendering_list",
  content: [
`<ul>
  {#each items as item}
  <li>{item.name} x {item.qty}</li>
  {:else}
  <li>Empty list</li>
  {/each}
</ul>

//INDEX
{#each items as item, index}
  <li>
    {index + 1}: {item.name} x {item.qty}
  </li>
{/each}

//INDEX                       (KEY)
{#each items as item, index (item.id)}
  <li>
    {index + 1}: {item.name} x {item.qty}
  </li>
{/each}
`
  ]
  },
  {
  title: "using_slot",
  content: [
`<!-- Widget.svelte -->
<div>
  <slot>Default content</slot>
</div>

<!-- App.svelte -->
<Widget />
<Widget>
  <p>I   changed the default content</p>
</Widget>
`
  ]
  },
  {
  title: "class_binding",
  content: [
`<!-- Widget.svelte -->
<div>
  <slot name="header">
    No header was provided
  </slot>

  <slot>
    <p>Some content between header and footer</p>
  </slot>

  <slot name="footer" />
</div>

<!-- App.svelte -->
<Widget>
  <h1 slot="header">Hello</h1>
  <p slot="footer">
    Copyright (c) 2020 Svelte Brazil
  </p>
</Widget>

<!-- FancyList.svelte -->
<ul>
{#each items as item}
  <li class="fancy">
    <slot name="item" {item} />
  </li>
{/each}
</ul>

<!-- App.svelte -->
<FancyList {items}>
  <div slot="item" let:item>
    {item.text}
  </div>
</FancyList>
`
]
  },
  {
  title: "lifecycle",
  content: [
`
<script>
import onMount from 'svelte'

onMount(() => {
  console.log('Mounting')

  return () => (consolo.log('going out'))
})
</script>

`,
    '::lifecycle',
`[
  onMount(() => {}),
  beforeUpdate(() => {}),
  afterUpdate(() => {}),
  onDestroy(() => {})
]`
  ]
  },
  {
  title: "animations",
  content: [
`<script>
  import { flip } from "svelte/animate";
  import { quintOut } from "svelte/easing";
  let list = [1, 2, 3];
</script>

{#each list as n (n)}
  <div animate:flip={{ delay: 250, duration: 250, easing: quintOut}}>
    {n}
  </div>
{/each}
`
  ]
  },
  {
  title: "transitions",
  content: [
`<script>
  import { fade } from "svelte/transition";
</script>

{#if condition}
  <div transition:fade={{ delay: 250, duration: 300 }}>
    fades in  and out
  </div>
{/if}

`,

'::transitions',
`[Blur, Scale, Fly, Draw, Slide]
`
  ]
  },
  {
  title: "reactive_expressions",
  content: [
`<script>
  export let num let count = 0
  $: squared = num * num count = 9
  $: cubed = squared * num
</script>
`
  ]
  },
  {
  title: "reactive_statement",
  content: [
`<script>
  $: if (count >= 10) {
    alert('count is dangerously high!')
    count = 9
  }
</script>
`
  ]
  },
]
