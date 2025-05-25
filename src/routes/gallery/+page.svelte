<script>
  import Gallery from 'svelte-gallery';

  const f = "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/12/Gradient_builder_2.jpg?auto=format&q=60&w=1815&h=1815&fit=crop&crop=faces"

  const images = [
    { src: f, width: 600, height: 400 },
    { src: f, width: 400, height: 600 },
    { src: f, width: 800, height: 1200 },
    { src: f, width: 300, height: 200 },
    { src: f, width: 600, height: 400 },
    { src: f, width: 400, height: 600 },
    { src: f, width: 800, height: 1200 },
    { src: f, width: 300, height: 200 },
    { src: f, width: 600, height: 400 },
    { src: f, width: 400, height: 600 },
    { src: f, width: 800, height: 1200 },
    { src: f, width: 300, height: 200 }
  ];
</script>

<span class="block w-full">
  <Gallery images = {images} />
</span>
