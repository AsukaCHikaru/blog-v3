import * as React from "react";
import { Helmet as ReactHelmet } from "react-helmet";

type OwnProps = {
  title?: string;
  description?: string;
};

export const Helmet: React.FC<OwnProps> = ({ title, description }) => {
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
      <meta name="og:url" content={window.location.href} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
    </ReactHelmet>
  );
};
