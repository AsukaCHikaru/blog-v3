import * as React from "react";
import { Helmet as ReactHelmet } from "react-helmet";
import { useLocation } from "react-router-dom";

type OwnProps = {
  title?: string;
  description?: string;
};

export const Helmet: React.FC<OwnProps> = ({ title, description }) => {
  const location = useLocation();

  return (
    <ReactHelmet>
      <meta charSet="utf-8" />
      <title>
        {title ? `${title} | The work is undone.` : "The work is undone."}
      </title>
      <meta
        name="og:title"
        content={
          title ? `${title} | The work is undone.` : "The work is undone."
        }
      />
      <meta
        name="twitter:title"
        content={
          title ? `${title} | The work is undone.` : "The work is undone."
        }
      />
      <meta
        name="description"
        content={description || "Asukachikaru's blog."}
      />
      <meta
        name="og:description"
        content={description || "Asukachikaru's blog."}
      />
      <meta
        name="twitter:description"
        content={description || "Asukachikaru's blog."}
      />
      <meta
        name="og:url"
        content={`https://blog.asukachikaru.com${location.pathname}`}
      />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
    </ReactHelmet>
  );
};
