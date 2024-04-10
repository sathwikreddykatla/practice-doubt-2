import './index.css'

const EmojiItem = props => {
  const {eachItem, changeStatus} = props
  const {name, imageUrl} = eachItem
  const clicked = () => {
    changeStatus()
  }
  return (
    <li className="feedback-item">
      <img src={imageUrl} alt="name" onClick={clicked} />
      <p>{name}</p>
    </li>
  )
}
export default EmojiItem
