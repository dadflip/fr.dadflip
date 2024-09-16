<script>
    import logo from '$lib/logos/7rm.png';
    import { Section } from 'flowbite-svelte-blocks';
    import { Footer, FooterCopyright, FooterLinkGroup, FooterBrand, FooterLink } from 'flowbite-svelte';
</script>
<div class="bg-black text-white">
    <header class="absolute inset-x-0 top-0 z-50">
        <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1">
                <a href="/" class="-m-1.5 p-1.5">
                    <span class="sr-only">Dadflip Solutions</span>
                    <img class="w-[150px]" src="{logo}" alt="">
                </a>
            </div>
            <div class="flex lg:hidden">
                <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white">
                    <span class="sr-only">Open main menu</span>
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
            <div class="hidden lg:flex lg:gap-x-12">
                <a href="/" class="text-sm font-semibold leading-6 text-green-500">Dadflip Solutions</a>
                <a href="/flip" class="text-sm font-semibold leading-6 text-green-500">Flip App</a>
                <a href="/contact" class="text-sm font-semibold leading-6 text-green-500">Contact</a>
            </div>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                <a href="/login" class="text-sm font-semibold leading-6 text-green-500">Se connecter (indisponible...) <span aria-hidden="true">&rarr;</span></a>
            </div>
        </nav>
        <!-- Mobile menu, show/hide based on menu open state. -->
        <div class="lg:hidden" role="dialog" aria-modal="true">
            <!-- Background backdrop, show/hide based on slide-over state. -->
            <div class="fixed inset-0 z-50"></div>
            <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-700">
                <div class="flex items-center justify-between">
                    <a href="/" class="-m-1.5 p-1.5">
                        <span class="sr-only">Dadflip Solutions</span>
                        <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">
                    </a>
                    <button type="button" class="-m-2.5 rounded-md p-2.5 text-white">
                        <span class="sr-only">Close menu</span>
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                            <a href="/" class="text-sm font-semibold leading-6 text-green-500">Dadflip Solutions</a>
                            <a href="/flip" class="text-sm font-semibold leading-6 text-green-500">Flip App</a>
                            <a href="/contact" class="text-sm font-semibold leading-6 text-green-500">Contact</a>
                        </div>
                        <div class="py-6">
                            <a href="/login" class="text-sm font-semibold leading-6 text-green-500">Se connecter (indisponible...) <span aria-hidden="true">&rarr;</span></a>                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <div class="relative isolate px-6 pt-14 lg:px-8">
        <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div class="hidden sm:mb-8 sm:flex sm:justify-center">
                <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-gray-700 hover:ring-gray-600">
                    La campagne de crowfunding pour Flip App va démarrer bientôt, on compte sur vous. <a href="#" class="font-semibold text-green-500"><span class="absolute inset-0" aria-hidden="true"></span> Coming soon<span aria-hidden="true">&rarr;</span></a>
                </div>
            </div>
            <div class="text-center">
                <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Flip App, alias @flipxe</h1>
                <p class="mt-6 text-lg leading-8 text-gray-400">Imaginez une application ludique et interactive qui vous permet de découvrir de nouvelles connaissances tout en vous amusant ! Avec Flip App, l'apprentissage devient une aventure passionnante où chaque découverte vous rapproche un peu plus de la maîtrise de nouveaux sujets.</p>
            </div>
        </div>
        <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
            <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
        </div>
    </div>
</div>

  
<Footer footerType="logo">
    <div class="sm:flex sm:items-center sm:justify-between">
        <FooterBrand href="https://app.dadflip.fr" src="{logo}" alt="Dadflip Solutions" name="Dadflip Solutions" />
        <FooterLinkGroup ulClass="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
        <FooterLink href="/">A propos</FooterLink>
        <FooterLink href="/">Privacy Policy</FooterLink>
        <FooterLink href="/">Mentions légales</FooterLink>
        <FooterLink href="/">Contact</FooterLink>
        </FooterLinkGroup>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <FooterCopyright href="/" by="Dadflip Solutions" />
</Footer>