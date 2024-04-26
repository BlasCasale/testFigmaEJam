import './BottonHeader.css'
import MacAfee from '../MacAfee/MacAfee'
import Norton from '../Norton/Norton'

const BottonHeader = () => {
  return (
    <div className="divBottomHeader">
      <img src="https://s3-alpha-sig.figma.com/img/5bdd/2e8e/ca6d33ae7930758c0396996013437236?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jFWV2z71LOHHJKMWCbzzY4yJZS8xvxpltZXy3gQg9kE-n8WmMc~sdIjCMlQoNAloCE1YZCzgXiFTo3aX~N6ZlWLozVtaoqkbUTd6EjE5oQIwgpJaku-2y5FsH8OveXtonsm5geb2C8hHG0W9J8EafrLjeyzcnNH9js7OddeD7ZmR1dNtEjrXvnGhDHpdt6ef2s8Ar1nl8hyt4Jotzr~s1jw4QrPsdmq98hMbkvOBIWtMTYxw7b7BiRUuEsuIgmFbxCPNAqG7HM0dRfSNwnqgm4CjfvZIIHYgHbrGUMfvINPhwKKCowigeOUEAWC4MPFQS5OkkyABIhADKcxhDofK7Q__" alt="img clarifon" className="imgHeader" />

      <div className='miniBoxHeaderBotton'>
        <MacAfee />
        <Norton />
      </div>
    </div>
  )
}

export default BottonHeader