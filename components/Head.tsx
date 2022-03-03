import NextHead from 'next/head';

const defaultTitle = 'Bla Bli Blog';
const defaultDescription = 'The personal blog of stffffn';
const baseUrl = 'https://blabli.blog';
const defaultImage = '/og-image.png';

const Head = ({
  title = defaultTitle,
  description = defaultDescription,
  image = defaultImage,
  urlPath,
}: {
  title?: string;
  description?: string;
  image?: string;
  urlPath: string;
}) => {
  const url = baseUrl + urlPath;
  const imageUrl = baseUrl + image;

  return (
    <NextHead>
      {/* Title */}
      <title>{title}</title>
      <meta name="og:title" content={title} />
      <meta name="twitter:title" content={title} />

      {/* Author */}
      <meta name="author" content="stffffn" />

      {/* Description */}
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />
      <meta name="twitter:description" content={description} />

      {/* URL */}
      <link key="canonical" rel="canonical" href={url} />
      <meta name="og:url" content={url} />
      <meta name="twitter:url" content={url} />

      {/* Image */}
      <meta name="og:image" content={imageUrl} />
      <meta name="twitter:image" content={imageUrl} />

      {/* General */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Language" content="en-US" />
      <meta name="og:type" content="website" />
      <link rel="manifest" href="/favicons/manifest.json" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@stffffn" />
      <meta name="twitter:creator" content="@stffffn" />

      {/* General favicons */}
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="128x128"
        href="/favicons/favicon-128.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/favicons/favicon-192.png"
      />

      {/* iOS favicons */}
      <link
        rel="apple-touch-icon"
        type="image/png"
        sizes="152x152"
        href="/favicons/favicon-152.png"
      />
      <link
        rel="apple-touch-icon"
        type="image/png"
        sizes="167x167"
        href="/favicons/favicon-167.png"
      />
      <link
        rel="apple-touch-icon"
        type="image/png"
        sizes="180x180"
        href="/favicons/favicon-180.png"
      />

      {/* Android favicons */}
      <link
        rel="shortcut icon"
        type="image/png"
        sizes="196x196"
        href="/favicons/favicon-196.png"
      ></link>
    </NextHead>
  );
};

export default Head;
