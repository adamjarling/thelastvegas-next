import React from "react";
import PropTypes from "prop-types";
import Section from "components/section";
import LinkButton from "components/link-button";
import HeadlineCalloutWrapper from "components/headline-callout/wrapper";
import HeadlineCalloutSubhead from "components/headline-callout/subhead";
import HeadlineCalloutHeadline from "components/headline-callout/headline";

const preOrderLink =
  "https://cargorecordsdirect.co.uk/products/furbaby-the-tight-spaces-furbaby-the-tight-spaces";

function BannerNewAlbumPromoVideo(props) {
  return (
    <Section>
      <HeadlineCalloutWrapper>
        <HeadlineCalloutSubhead>
          Release Date October 15, 2021
        </HeadlineCalloutSubhead>
        <HeadlineCalloutHeadline>
          It's alive! Debut album now available at Cargo Records UK Direct
        </HeadlineCalloutHeadline>
        <LinkButton href={preOrderLink}>Order Now</LinkButton>
      </HeadlineCalloutWrapper>
    </Section>
  );
}

BannerNewAlbumPromoVideo.propTypes = {};

export default BannerNewAlbumPromoVideo;
