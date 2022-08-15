import './ShareModal.scss'
import MyModal from '@/components/Modal/MyModal'
import Share from '@/features/MiddleSide/Share'

const ShareModal = ({ opened, setOpened }:{opened: boolean, setOpened:Function}) => {
  return (
    <MyModal opened={opened} setOpened={setOpened}>
      <Share/>
    </MyModal>
  )
}

export default ShareModal
