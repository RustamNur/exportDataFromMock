import React from 'react'
import "./main.css"
import { cardInfo } from '../../mock'
import Card from '../card/card'

class Main extends React.Component {
    render() {
      return (
        <div class="flex_container">
          {cardInfo.map((item) => {
            return (
              <div class="flex_item">
                <Card data={item} />
              </div>
            );
          })}
        </div>
      );
    }
  }
  export default Main;