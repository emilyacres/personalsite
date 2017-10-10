// CONSTANTS

export const NEW_MSG = "NEW_MSG"
export const FLASH_MSG = "FLASH_MSG"

//ACTION CREATORS

export const newMSG = msg => ({
  type: NEW_MSG,
  msg
})

export const flashMSG = () => ({
  type: FLASH_MSG
})
