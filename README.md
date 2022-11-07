# Tete-a-Tete

**Website for a local hair-salon.**

### [Website](https://tete-a-tete.vercel.app/)

[![](https://github.com/shalkauskas/media/blob/main/tete-gif.gif)](https://tete-a-tete.vercel.app/ "Visit website")

### Features

- Built with[ **Next.js**](https://nextjs.org/) (Server-side rendering, image optimization)
- Responsive styling with [**Tailwind CSS**](https://tailwindcss.com/)
- Design by [**Daria Khudiakova**](https://daria-in-design.com/tete-a-tete)
- Google maps and Google reviews integration
- Image optimization via next/image & Cloudinary
- [EmailJS](https://www.emailjs.com/) for contact form management
- Hosted on [Vercel](https://vercel.com/)


### Try it locally

1. Clone the repo

2. In root folder create a `.env` file and add your API keys

In order for *Google map and  reviews* to work you need the following

```
NEXT_PUBLIC_placesAPIkey= "Google Places API key"
NEXT_PUBLIC_placeid= "Google Places Place ID"
NEXT_PUBLIC_googleMapsApiKey="Google Maps API Key"
```
For *Contact Us* form you need to make an account at [EmailJS](https://www.emailjs.com/) and provide these variables

```
NEXT_PUBLIC_templateid="Email JS Template ID"
NEXT_PUBLIC_userid="EmailJS User ID"

```

3. Then
`npm start`

Salon services data is in `components/Services/services-*.js`

Team member data is in `components/Team/members.js`

*This project is serverless so I am using a self hosted CORS reverse proxy for cross-origin API requests* 
[see more](https://github.com/Rob--W/cors-anywhere)


### Tools
- [ Next.js](https://nextjs.org/) 
- React
- [Tailwind CSS](https://tailwindcss.com/)
- [EmailJS](https://www.emailjs.com/) 


### Task list
- [ ] Add online booking

### License
MIT License
### Credits
*Thanks to [**Daria Khudiakova**](https://daria-in-design.com/) design!*
