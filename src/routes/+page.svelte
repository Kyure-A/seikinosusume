<script>
  let seikinga = "セイキンが";
  let seikin = "SEIKIN";
</script>

<h1>セイキンおすすめシールジェネレーター</h1>

<div class="flex flex-row">
  
<label for="icon">アイコン画像を選んでください: </label>

<input type="file"id="icon" name="icon" accept="image/png, image/jpeg">

<div><input bind:value={seikinga} /></div>

<div><input bind:value={seikin} /></div>
</div>
