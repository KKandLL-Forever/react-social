import React, { PropsWithChildren } from 'react'
import { Modal, useMantineTheme } from '@mantine/core'

type ComponentProps = PropsWithChildren<{
  opened: boolean,
  setOpened:Function,
  body?: React.ReactNode
  footer?: React.ReactNode
}>

const MyModal = ({ opened, setOpened, children }:ComponentProps) => {
  const theme = useMantineTheme()
  return (
    <Modal
      size="55%"
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      onClose={() => setOpened(false)}
      opened={ opened }
      closeOnClickOutside={false}
    >
      {children}
    </Modal>
  )
}

export default MyModal
