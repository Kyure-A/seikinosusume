<script lang="ts">
  import { seikinosusume_generator } from "../wasm/pkg/seikinosusume";
  let seikinga: string = "セイキンが";
  let seikin: string = "SEIKIN";
  let files;

  let canvasWidth = 0;
  let canvasHeight = 0;

  function generate (seikinga: string, seikin: string) {
    const imageInput = document.getElementById('icon');
    imageInput.addEventListener('change', (event) => {
      const image = new Image();
      image.onload = () => {
        const { width, height } = image;
        canvasWidth = width;
        canvasHeight = height;

        const canvas = document.getElementById('original-canvas');
        canvas.width = width;
        canvas.height = height;
        canvas.getContext('2d').drawImage(image, 0, 0, width, height);
        const { data } = canvas.getContext('2d').getImageData(0, 0, width, height);

        const converted = seikinosusume_generator(data, width, height, seikinga, seikin);
        const convertedImage = new ImageData(new Uint8ClampedArray(converted), width);
        const convertedCanvas = document.getElementById('converted-canvas');
        convertedCanvas.width = width;
        convertedCanvas.height = height;
        convertedCanvas.getContext('2d').putImageData(convertedImage, 0, 0, 0, 0, width, height);
      };

      const reader = new FileReader();
      reader.onload = () => {
        image.src = reader.result;
      };

      reader.readAsDataURL(event.target.files[0]);
    });
  } 
  
</script>

<h1>セイキンおすすめシールジェネレーター</h1>

<div class="flex flex-row">
  
<label for="icon">アイコン画像を選んでください: </label>

<input type="file" id="icon" name="icon" accept="image/png, image/jpeg" bind:files>

<div><input bind:value={seikinga} /></div>

<div><input bind:value={seikin} /></div>

{#if files && files[0]}
  <button on:click={generate(seikinga, seikin)}>Generate!</button>
{/if}

<canvas id="original-canvas" style="display: none;"></canvas>
<canvas id="converted-canvas" style="margin-top: 20px;"></canvas>

</div>
