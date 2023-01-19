import React from "react"
import {
  detailSection,
  regionsWrapper,
  metricsWrapper,
  sneakpeekWrapper,
} from "./style"
import sneakpeekGif from "@/images/annual-report/sneakpeek.gif"
import demandTrendPng from "@/images/annual-report/demand-trend.png"
import marketSharePng from "@/images/annual-report/market-share.png"
import userConsumptionPng from "@/images/annual-report/user-consumption.png"
import userLoyaltyPng from "@/images/annual-report/user-loyalty.png"

const AnnualReportDetailSection = () => {
  const availableRegions = [
    "🇸🇬Singapore",
    "🇲🇾Malaysia",
    "🇹🇭Thailand",
    "🇵🇭Philippines",
    "🇮🇳India",
    "🇭🇰Hong Kong",
    "🇹🇼Taiwan",
    "🇮🇩Indonesia",
    "🇯🇵Japan",
  ]

  const metrics = [
    { text: "Food Delivery Major Player Market share", icon: marketSharePng },
    { text: "Food Delivery Demand Trend", icon: demandTrendPng },
    { text: "Food Delivery User Consumption", icon: userConsumptionPng },
    { text: "Food Delivery User Loyalty", icon: userLoyaltyPng },
  ]

  return (
    <section css={detailSection}>
      <h2>
        <span>
          Four Years of Tracking the Ins and Outs of the Food Delivery Market in
          Asia
        </span>
      </h2>
      <div css={regionsWrapper}>
        <h3>
          Across <span>9</span> Regions
        </h3>
        <div>
          {availableRegions.map((region, index) => (
            <>
              <span>{region}</span>
              {index !== availableRegions.length - 1 && <span>···</span>}
            </>
          ))}
        </div>
      </div>
      <div css={metricsWrapper}>
        <h3>
          INTO <span>4</span> Key Metrics
        </h3>
        <ul>
          {metrics.map(metric => (
            <li>
              <span>{metric.text}</span>
              <img src={metric.icon} alt={metric.text} />
            </li>
          ))}
        </ul>
      </div>
      <div css={sneakpeekWrapper}>
        <div></div>
      </div>
    </section>
  )
}

export default AnnualReportDetailSection
