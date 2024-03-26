import React from "react";
import { Helmet } from "react-helmet-async";

type MetaConfig = {
  title: string;
  description?: string;
};

const withMetaHelmet = (Page: () => JSX.Element, config: MetaConfig) =>
  function PageWithMeta() {
    const { title, description } = config;
    return (
      <>
        <Helmet>
          <title>{title}</title>
          {typeof description === "string" && (
            <meta name="description" content={description} />
          )}
        </Helmet>
        <Page />
      </>
    );
  };

export default withMetaHelmet;
