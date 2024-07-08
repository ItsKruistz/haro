<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Checkbox } from "$lib/components/ui/checkbox";
</script>

<main>
  <section>
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-left text-left">
        <h1 class="text-4xl mb-4 font-bold">Hello, I'm Kruistz!</h1>
        <p class="mb-8 leading-normal text-lg">An hobbyist coder who likes to play gacha games. I also like to take photos too!</p>
      <div class="flex justify-center">
        <Button class="mr-2">Button</Button>
        <Button variant="outline">Button</Button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
    </div>
  </div>
  </section>
</main>