import React, {Component, Fragment} from 'react';
import YouTubeComp from '../../../component/YouTubeComp/YouTubeComp';
class YouTubeCompPage extends Component {
  render() {
    return(
    <Fragment>
      <p> YouTube Component</p>
      <hr/>
      <YouTubeComp
      title="satu dua"
      desc="ini desc 1"/>
      <YouTubeComp
      title="satu dua tiga"
      desc="ini desc 2"/>
    </Fragment>
    )
  }
}
export default YouTubeCompPage;
