/* eslint-disable */
import Document, {Head, Main, NextScript} from 'next/document'
import {ServerStyleSheet} from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps({renderPage}) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return {...page, styleTags}
  }

  render() {
    return (
      <html>
        <Head>
          <title>Movie DB</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link rel="stylesheet" href="https://use.typekit.net/dyv7did.css" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
