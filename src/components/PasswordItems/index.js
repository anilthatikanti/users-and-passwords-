import './index.css'

const PasswordItems = props => {
  const {eachUserDetails, checked, deleteUser} = props
  const {id, website, userName, password} = eachUserDetails
  const PasswordShow = checked ? (
    <p className="paraOfUser">{password}</p>
  ) : (
    <img
      className="starPassword"
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
    />
  )

  const clickOnDetele = () => {
    deleteUser(id)
  }
  return (
    <li className="list">
      <div className="userLogo">
        <h>{website[0]}</h>
      </div>
      <div className="user">
        <p className="paraOfUser">{website}</p>
        <p className="paraOfUser">{userName}</p>
        {PasswordShow}
      </div>
      <button
        type="button"
        testid="delete"
        className="deleteBtn"
        onClick={clickOnDetele}
      >
        <img
          className="deleteLogo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default PasswordItems
