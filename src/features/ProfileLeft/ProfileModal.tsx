// import { Modal, useMantineTheme } from '@mantine/core'
import './ProfileModal.scss'
import MyModal from '@/components/Modal/MyModal'

function ProfileModal ({ opened, setOpened }:{opened: boolean, setOpened:Function}) {
  return (
    <MyModal opened={opened} setOpened={setOpened}>
      <form className="info-form">
        <h3>Your info</h3>
        <div>
          <input type="text" className="info-input" name="FirstName" placeholder="First Name"/>
          <input type="text" className="info-input" name="LastName" placeholder="Last Name"/>
        </div>
        <div>
          <input type="text" className="info-input" name="WorksAt" placeholder="Works at"/>
        </div>
        <div>
          <input type="text" className="info-input" name="LivesIn" placeholder="Lives in"/>
          <input type="text" className="info-input" name="Country" placeholder="Country"/>
        </div>
        <div>
          <input type="text" className="info-input" name="Relationship" placeholder="Relationship status"/>
        </div>
        <div>
          Profile Image
          <input type="file" className="info-input" name="profileImg"/>
          Cover Image
          <input type="file" className="info-input" name="coverImg"/>
        </div>
        <button className="button submit-btn">Update</button>
      </form>
    </MyModal>
  )
}

export default ProfileModal
