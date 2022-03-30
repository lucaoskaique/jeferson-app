import { useEffect } from 'react'

import * as S from './styles'

const TwitterContainer = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://platform.twitter.com/widgets.js'
    document.getElementsByClassName('twitter-embed')[0].appendChild(script)
  }, [])
  return (
    <S.Wrapper>
      <section className="twitterContainer">
        <div className="twitter-embed">
          <a
            className="twitter-timeline"
            data-theme="dark"
            data-tweet-limit="3"
            data-chrome="noheader nofooter noborders"
            href="https://twitter.com/depjeferson"
          >
            Tweets by HeyMarkKop
          </a>
        </div>
      </section>
    </S.Wrapper>
  )
}

export default TwitterContainer
