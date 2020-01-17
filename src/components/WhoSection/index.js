import React from "react"
import { FormattedMessage } from "gatsby-plugin-intl"
import Fade from "react-reveal/Fade"

import {
  container,
  titleContainer,
  imagesContainer,
  image,
  image1,
  image2,
  image3,
  image4,
} from "./style"
import Icon from "./Icon"

import ThreeWHeader from "@/components/ThreeWHeader"
import mediaIcon from "@/images/who-media.svg"
import merchantsIcon from "@/images/who-merchants.svg"
import financialInstitutionsIcon from "@/images/who-financialInstitutions.svg"
import researchersIcon from "@/images/who-researchers.svg"

const WhoSection = () => (
  <div css={container}>
    <Fade right refProp="innerRef">
      <ThreeWHeader
        css={titleContainer}
        header={<FormattedMessage id="who" defaultMessage="WHO" />}
        subHeader={
          <FormattedMessage
            id="areOurTargetUsers"
            defaultMessage="are our target users"
          />
        }
        questionMark={<FormattedMessage id="questionMark" defaultMessage="?" />}
      />
    </Fade>
    <div css={imagesContainer}>
      <Fade left refProp="innerRef">
        <Icon
          css={[image, image1]}
          src={mediaIcon}
          alt="Media"
          header={<FormattedMessage id="media" defaultMessage="Media" />}
        />
      </Fade>
      <Fade left delay={500} refProp="innerRef">
        <Icon
          css={[image, image2]}
          src={researchersIcon}
          alt="Researchers"
          header={
            <FormattedMessage id="researchers" defaultMessage="Researchers" />
          }
        />
      </Fade>
      <Fade left delay={1000} refProp="innerRef">
        <Icon
          css={[image, image3]}
          src={merchantsIcon}
          alt="Merchants"
          header={
            <FormattedMessage id="merchants" defaultMessage="Merchants" />
          }
        />
      </Fade>
      <Fade left delay={1500} refProp="innerRef">
        <Icon
          css={[image, image4]}
          src={financialInstitutionsIcon}
          alt="Financial Institutions"
          header={
            <FormattedMessage
              id="financialInstitutions"
              defaultMessage="Financial Institutions"
            />
          }
        />
      </Fade>
    </div>
  </div>
)

export default WhoSection
