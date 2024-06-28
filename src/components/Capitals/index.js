import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {isCaptialId: countryAndCapitalsList[0].id}

  isSelected = event => {
    this.setState({
      isCaptialId: event.target.value,
    })
  }

  gettingCountry = isCaptialId => {
    const countryIs = countryAndCapitalsList.find(
      countryItem => isCaptialId === countryItem.id,
    )
    console.log(countryIs)
    return countryIs.country
  }

  render() {
    const {isCaptialId} = this.state
    const country = this.gettingCountry(isCaptialId)
    return (
      <div className="capitals-container">
        <div className="capitals-list-container">
          <h1 className="captial-heading">Countries And Capitals</h1>
          <div className="capital-city-container">
            <select
              className="capitals-select capital-is"
              onChange={this.isSelected}
              value={isCaptialId}
            >
              {countryAndCapitalsList.map(captalItem => (
                <option value={captalItem.id} key={captalItem.id}>
                  {captalItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="capital-question">is capital of which country?</p>
          </div>
          <h1 className="country-name">{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
