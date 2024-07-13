<script lang="ts">
    import { Button } from '$lib/components/ui/button'
    import { Checkbox } from '$lib/components/ui/checkbox'
    import { onMount } from 'svelte'

    // Define types for state variables
    let mobileMenuOpen: boolean = false
    let userProfileOpen: boolean = false

    // Define types for event handlers
    const toggleMobileMenu = (): void => {
        mobileMenuOpen = !mobileMenuOpen
    }

    const toggleUserProfile = (): void => {
        userProfileOpen = !userProfileOpen
    }
</script>

<nav class="sticky top-0 z-10 border bg-white bg-opacity-75 backdrop-blur-md">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center">
                <Button
                    on:click={toggleMobileMenu}
                    class="relative inline-flex items-center justify-center"
                    aria-controls="mobile-menu"
                    aria-expanded={mobileMenuOpen ? 'true' : 'false'}
                    variant="ghost"
                    size="icon"
                >
                    <span class="sr-only">Open main menu</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="main-grid-item-icon h-5 w-5"
                        viewBox="0 0 24 24"
                        ><path d="M3 12h18M3 6h18M3 18h18" /></svg
                    >
                </Button>
            </div>
            <div
                class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
            >
                <div class="flex flex-shrink-0 items-center">
                    <p class="text-md font-semibold">Kruistz</p>
                </div>
            </div>
            <div
                class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
            >
                <div class="relative ml-3">
                    <div></div>
                </div>
            </div>
        </div>
    </div>

    {#if mobileMenuOpen}
        <div class="sm:hidden" id="mobile-menu">
            <div class="space-y-1 px-2 pb-3 pt-2">
                <a
                    href="#"
                    class="text-base|| block rounded-md bg-gray-900 px-3 py-2 font-medium text-white"
                    aria-current="page">Dashboard</a
                >
                <a
                    href="#"
                    class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >Team</a
                >
                <a
                    href="#"
                    class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >Projects</a
                >
                <a
                    href="#"
                    class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >Calendar</a
                >
            </div>
        </div>
    {/if}
</nav>

<main>
    <section>
        <div
            class="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row"
        >
            <div
                class="items-left mb-16 flex flex-col text-left md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24"
            >
                <h1 class="mb-4 text-4xl font-bold">Hello, I'm Kruistz!</h1>
                <p class="mb-8 text-lg leading-normal">
                    An hobbyist coder who likes to play gacha games. I also like
                    to take some photos too!
                </p>
                <div class="flex justify-center">
                    <Button class="mr-2">Button</Button>
                    <Button variant="outline">Button</Button>
                </div>
            </div>
            <div class="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
                <img
                    class="rounded object-cover object-center"
                    alt="hero"
                    src="https://dummyimage.com/720x600"
                />
            </div>
        </div>
    </section>
</main>
