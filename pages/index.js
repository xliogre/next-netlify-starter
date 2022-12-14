import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
          <title>TradingView Charting Library demo</title>
          <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0"></meta>
          <script type="text/javascript" src="charting_library/charting_library.standalone.js"></script>
		      <script type="text/javascript" src="datafeeds/udf/dist/bundle.js"></script>
      </Head>

      <body style="margin:0px;">
        <div id="tv_chart_container"></div>
      </body>
    </div>
  )
}
