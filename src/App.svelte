<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Checkbox } from "$lib/components/ui/checkbox";
  import { onMount } from 'svelte';

  // Define types for state variables
  let mobileMenuOpen: boolean = false;
  let userProfileOpen: boolean = false;

  // Define types for event handlers
  const toggleMobileMenu = (): void => {
    mobileMenuOpen = !mobileMenuOpen;
  }

  const toggleUserProfile = (): void => {
    userProfileOpen = !userProfileOpen;
  }
</script>

<nav class="flex items-center justify-between flex-wrap bg-white bg-opacity-75 backdrop-blur-md sticky z-10 top-0 p-2">
  <div class="flex items-center flex-shrink-0 text-black">
            <Button 
    on:click={toggleMobileMenu} 
    class="relative inline-flex items-center justify-center mr-4" 
    aria-controls="mobile-menu" 
    aria-expanded={mobileMenuOpen ? 'true' : 'false'} 
    variant="ghost" 
    size="icon">
    <span class="sr-only">Open main menu</span>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="main-grid-item-icon w-5 h-5" viewBox="0 0 24 24"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
</Button>
    <span class="font-semibold text-[19px]">Kruistz's Page</span>
  </div>
  <div class="block lg:hidden">
  </div>
</nav>

<main>
  <section>
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-left text-left">
        <h1 class="text-4xl mb-4 font-bold">Hello, I'm Kruistz!</h1>
        <p class="mb-8 leading-normal text-lg">An hobbyist coder who likes to play gacha games. I also like to take some photos too!</p>
      <div class="flex justify-center">
        <Button class="mr-2">Button</Button>
        <Button variant="outline">Button</Button>
      <button class="px-4 py-2 rounded-md border border-black bg-white text-neutarl-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
        Sketch
      </button>
      </div>
      </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
    </div>
    </div>
  </section>
</main>