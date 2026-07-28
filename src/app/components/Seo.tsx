import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  canonical: string;
  schema?: object;
}

export function Seo({ title, description, canonical, schema }: SeoProps) {
  return (
    <Helmet>
      <title>{title} </title>
      < meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
}