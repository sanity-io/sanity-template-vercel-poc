# sanity-template-vercel-poc

_WORK IN PROGRESS_

_A template starter with a clean Studio and deployment to  [Vercel](https://vercel.com)._

This template repo is used by Sanity.io to easily create deployed and configured projects through a web interface. You can test it out by [creating this project](https://www.sanity.io/create/?template=sanity-io%2Fsanity-template-vercel-poc).

The template contains a Sanity Studio and a minimalist [Parcel.js](https://parceljs.org/) frontend that will be readily deployed on [Vercel](https://vercel.com).

## Local development

2. **Run `npm install` from the root folder.** This will install all the needed dependencies
2. **Run `npm start` from the root folder.** This will start a development server for both your Sanity Studio and an example frontend

## Notes

When developing, you may copy `./template/studio/.env.development.example` to `./template/studio/.env.development` and replace the environment variables with the ones from your own Sanity project

```sh
cp ./template/studio/.env.development.example ./template/studio/.env.development
```
