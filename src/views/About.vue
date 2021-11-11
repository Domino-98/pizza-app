<template>
  <main class="container mx-auto px-10 mt-16">
    <section class="flex justify-center items-center flex-col">
      <h1
        id="about"
        class="text-3xl lg:text-4xl mb-8 border-b-2 border-orange-500"
      >
        O NAS
      </h1>
      <p class="mb-10 text-justify lg:w-1/2 bg-white p-5 rounded-2xl shadow-xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis,
        quaerat officiis? Fugiat deserunt culpa sint iure recusandae in fuga,
        commodi minus beatae repudiandae suscipit nam incidunt vel, animi
        dolorum error labore! Animi ea eius illo debitis atque molestias itaque
        quas rem assumenda id hic mollitia libero vel ipsa officia odit ad
        corrupti, eligendi a asperiores iste est architecto temporibus.
        Expedita, suscipit dolorum? Qui debitis ipsa illo ducimus optio illum,
        hic vero blanditiis assumenda aperiam cupiditate ea quo dolorem autem
        velit?
      </p>
      <div class="flex flex-col-reverse md:flex-row">
        <img
          src="../assets/img/about-img-1.jpg"
          class="md:w-1/2"
          alt="About image 1"
        />
        <div class="flex flex-col bg-gray-50 px-10 md:w-1/2">
          <h2 class="text-2xl lg:text-3xl mb-6 mt-10">
            Oryginalna i smaczna pizza
          </h2>
          <p class="text-base lg:text-lg pb-10 md:pb-5 self-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta,
            sapiente! Assumenda sequi doloribus amet repudiandae nostrum
            officiis, eos ipsa magnam suscipit ullam eaque mollitia facere ad
            fugit ea illum molestiae repellat ex tempora ipsam. Voluptates,
            suscipit.
            <span class="hidden lg:block"
              >Cum amet, impedit, itaque quidem est, distinctio officiis nulla
              odio facilis aut temporibus expedita quaerat hic eos voluptas ipsa
              voluptates. Ex ducimus praesentium temporibus eligendi veritatis
              nulla ratione tempore error sapiente laudantium! Error,
              vero!</span
            >
          </p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row">
        <div class="flex flex-col bg-gray-50 px-10 md:w-1/2">
          <h2 class="text-2xl lg:text-3xl mb-6 mt-10">
            Szybka dostawa pizzy na terenie Rzeszowa
          </h2>
          <p class="text-base lg:text-lg pb-10 md:pb-5 self-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            corporis assumenda nam necessitatibus perspiciatis culpa
            exercitationem distinctio, autem ea!
            <span class="hidden lg:block"
              >Possimus illum recusandae, similique earum mollitia nobis
              voluptates veritatis odio ea.</span
            >
          </p>
        </div>
        <img
          src="../assets/img/about-img-2.jpg"
          class="md:w-1/2"
          alt="About image 2"
        />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "About",
};
</script>
