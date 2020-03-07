import { createAction } from 'reacticoon/action'

export const setUserContext = createAction(
  'ReacticoonDev::EventsModule::setUserContext',
  userContext => ({
    ...userContext,
    avatar: avatar || `https://avatars.dicebear.com/v2/identicon/${userContext.username[0]}.svg`,
  })
)

export const clearUserContext = createAction(
  'ReacticoonDev::UserContextModule::clearUserContext',
  {}
)
