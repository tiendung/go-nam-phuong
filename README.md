- [ ] add tags in post for seo
- [ ] biến "clean sweep" thành quiz
- [ ] homepage: download tai lieu mien phi => 101 an sach
- [x] bài viết tương tự (related posts) at the end of a content
- [x] add facebook instant articles
- [x] quiz now can share result to facebook
- [x] plain js quiz play to run smoothly on iphone4s
- [x] add google analytics

https://developers.facebook.com/docs/instant-articles/cta/
  The maximum number of URLs allowed in the Related Articles block is 3.

https://goo.gl/M2oFA9 | Facebook Instant Articles
https://goo.gl/KmnaqT | Google Analytics
https://frontendchecklist.io
https://varvy.com/seo


<!-- Add below code to layouts/index.html to enable Netlify CMS
<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
<script>
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
</script> -->
