import { SkinOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import { ChangeEvent } from 'react'

import { useAppDispatch, useAppSelector } from '@/store'
import { debounce } from '@/utils/functions'

import styles from './theme.module.css'
import { setColor, themeColor } from './themeSlice'

export default function Theme() {
  const primaryColor = useAppSelector(themeColor)
  const dispatch = useAppDispatch()

  const changeMainColor = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setColor(e.target.value))
  }

  return (
    <div className={styles.skin}>
      <Button type="primary" shape="circle" icon={<SkinOutlined />} />
      <Input
        type="color"
        className={styles.skinInput}
        defaultValue={primaryColor}
        onChange={debounce(changeMainColor, 500)}
      ></Input>
    </div>
  )
}
