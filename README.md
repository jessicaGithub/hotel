# Webjet take home challenge
Create a single-page application using ReactJS to display a list of hotels according to the provided designs. 
The page should be fully responsive on desktop, tablet, and mobile screens. 
By default, hotels should be listed by price in ascending order. 
Users should be able to filter hotels by name or star rating.

Demonstrate the following:
- Fully responsive page layout with breakpoints at 992px & 768px	  
- Valid & Semantic HTML markup
- Accuracy & Consistency (e.g. component sizes, colors, spacing)
- Reusable components
- Use GitHub repository to check-in small commits to show your progress
- Include a Readme file to document any assumption or choice of framework/library used

### Commands
Run locally: ```npm run dev```

Run tests: ```npm run test```

Build: ```npm run build```

### live preview
You can see my work here: https://hotel-alpha-woad.vercel.app/

### Assumptions made
- Since the application is small, I used the normal boilerplate of react + typescript + jest + tailwind to speed things up
- I'm assuming the font is Roboto, as per the main font of the current webjet site
- Assuming that I will have to work with mock data, I put a script to generate the 550 entries
- Normally I wouldn't do a filter on the FE, unless it's only for a small set of data. But I have to for this exercise since we dont have an endpoint. I usually use a query cache (e.g. react query) to store data and reduce the number of fetching to the server.
- I assumed the ratings can only be in the increments of 0.5 to make things simple
- filtering by rating will return the matching number rounded to the closest +0.5. e.g. filtering by 2 stars will return 2 and 2.5 star hotels. Multiple ratings can be selected.
- I didn't have time to set up proper icon library where we can just add inlined SVG.
