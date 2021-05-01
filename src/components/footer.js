import * as React from "react"

import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

class Footer extends React.Component {

  render() {
    return (
      <div class="footer-container">
        <div class="social-sharing-container">
          <div id="fb-root"></div>
          <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0" nonce="J8cOmyBy"></script>

          <IconButton target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse">
            <FacebookIcon style={{ color: "black" }}></FacebookIcon>
          </IconButton>
          <IconButton target="_blank" href="https://twitter.com/share?ref_src=twsrc%5Etfw">
            <TwitterIcon style={{ color: "black" }}></TwitterIcon>
          </IconButton>
        </div>
        <div>
          <span>Created by <a target="_blank" href="https://www.darshankalola.com">Darshan Kalola</a></span>
        </div>
      </div>
    )
  }
}

export default Footer
