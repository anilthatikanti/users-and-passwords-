import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import PasswordItems from '../PasswordItems'

import './index.css'

class PasswordManager extends Component {
  state = {
    userList: [],
    website: '',
    userName: '',
    password: '',
    search: '',
    isChecked: false,
  }

  WebsiteUpdate = e => {
    this.setState({website: e.target.value})
  }

  UsernameUpdate = e => {
    this.setState({userName: e.target.value})
  }

  PasswordUpdate = e => {
    this.setState({password: e.target.value})
  }

  SearchUpdate = e => {
    this.setState({search: e.target.value})
  }

  isChecked = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  addUserDetails = e => {
    e.preventDefault()
    const {website, userName, password} = this.state

    if (userName.length !== 0 && password.length !== 0) {
      const addUser = {
        id: uuidv4(),
        website,
        userName,
        password,
      }
      this.setState(prevState => ({
        userList: [...prevState.userList, addUser],
        website: '',
        userName: '',
        password: '',
      }))
    }
  }

  deleteUser = id => {
    const {userList} = this.state
    const filterUser = userList.filter(eachUser => eachUser.id !== id)
    this.setState({userList: filterUser})
  }

  render() {
    const {
      userList,
      website,
      userName,
      search,
      password,
      isChecked,
    } = this.state

    const filterUserList = userList.filter(eachUser =>
      eachUser.website.toLowerCase().includes(search.toLowerCase()),
    )

    return (
      <div className="MainContainer">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <div className="cardContainer">
          <form className="personalDetails" onSubmit={this.addUserDetails}>
            <h1>Add New Password</h1>
            <div className="inputBox">
              <img
                className="inputLogo"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
              />
              <hr className="vhr" />
              <input
                className="input"
                type="text"
                value={website}
                placeholder="Enter Website"
                onChange={this.WebsiteUpdate}
              />
            </div>

            <div className="inputBox">
              <img
                className="inputLogo"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                alt="username"
              />
              <hr className="vhr" />
              <input
                type="text"
                value={userName}
                className="input"
                placeholder="Enter Username"
                onChange={this.UsernameUpdate}
              />
            </div>

            <div className="inputBox">
              <img
                className="inputLogo"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                alt="password"
              />
              <hr className="vhr" />
              <input
                className="input"
                type="password"
                value={password}
                placeholder="Enter Password"
                onChange={this.PasswordUpdate}
              />
            </div>
            <div className="btnContainer">
              <button type="submit">Add</button>
            </div>
          </form>
          <div>
            <img
              className="passwordManager1"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
            />
            <img
              className="passwordManager2"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
            />
          </div>
        </div>
        <div className="passwordContainer">
          <div className="passwordHeadingContainer">
            <div className="counter">
              <h1>Your Passwords </h1>
              <p className="span">{userList.length}</p>
            </div>
            <div className="inputBox">
              <img
                className="inputLogo"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png  "
                alt="search"
                password
              />
              <hr className="vhr" />
              <input
                className="input"
                type="search"
                placeholder="Search"
                onChange={this.SearchUpdate}
              />
            </div>
          </div>
          <hr className="hhr" />
          <div className="isCheckboxContainer">
            <div className="searchContainer">
              <input
                id="checkboxId"
                type="checkbox"
                className="checkBox"
                onChange={this.isChecked}
              />
              <label htmlFor="checkboxId" className="showPassword">
                Show Passwords
              </label>
            </div>
          </div>
          {filterUserList.length !== 0 ? (
            <ul className="passwordsCards">
              {filterUserList.map(each => (
                <PasswordItems
                  eachUserDetails={each}
                  checked={isChecked}
                  deleteUser={this.deleteUser}
                  key={each.id}
                />
              ))}
            </ul>
          ) : (
            <div className="noPasswords">
              <img
                className="noPassword"
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
              />
              <p className="noPasswordMsg">No Passwords</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default PasswordManager
