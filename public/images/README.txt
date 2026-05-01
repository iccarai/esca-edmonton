ESCA IMAGE FOLDERS
==================

Drop replacement images into the correct folder using the exact filename shown.
The site will pick them up automatically on the next build/deploy.

logos/
  esca-logo-white.png   → White ESCA logo (used in header + hero section)
  esca-logo.png         → Full-colour ESCA logo (used anywhere a coloured logo appears)

hero/
  background.jpg        → Full-screen background image on the home page hero

home/
  what-is-esca.png      → Image shown beside the "What Is ESCA?" text block
  what-we-do.png        → Image shown beside the "What We Do" pillars

about/
  founder.jpg           → Alicia's photo on the "Alicia's Story" page

TIPS
----
- The extension matters — .jpg and .png and .jpeg are all different to the site.
- If you drop in a new file and it doesn't show, tell Claude what folder and filename
  you used and it will update the code to match.
- Use .jpg not .jpeg — they look the same but the site won't find .jpeg.
- PNG is required for logos with transparency; .jpg is fine for photos.
- Recommended sizes:
    hero/background.jpg   →  1920 x 1080 px minimum
    home images           →  800 x 600 px minimum
    about/founder.jpg     →  600 x 800 px (portrait)
    logos                 →  original exported size (no minimum)
