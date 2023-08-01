<script lang="ts">
  import generate from "../wasm/pkg/seikinosusume.js"
  let seikinga: string = "セイキンが";
  let seikin: string = "SEIKIN";
  let files;
  let path: string = "";
</script>

<h1>セイキンおすすめシールジェネレーター</h1>

<div class="flex flex-row">
  
<label for="icon">アイコン画像を選んでください: </label>

<input type="file" id="icon" name="icon" accept="image/png, image/jpeg" bind:files>

<div><input bind:value={seikinga} /></div>

<div><input bind:value={seikin} /></div>

{#if files && files[0]}
  <button on:click={generate(seikinga, seikin, files[0].name)}>Generate!</button>
{/if}

</div>
