import type { RootState } from '../index'

export const selectAgentName = (state: RootState) => state.agent.name
export const selectAgentProfilePictureUrl = (state: RootState) =>
  state.agent.profilePictureUrl
export const selectAgentProfilePictureHasCustom = (state: RootState) =>
  state.agent.profilePictureHasCustom
export const selectAgentStatus = (state: RootState) => state.agent.status
export const selectCurrentTask = (state: RootState) => state.agent.currentTask
export const selectGuiMode = (state: RootState) => state.agent.guiMode
export const selectFootageUrl = (state: RootState) => state.agent.footageUrl
export const selectBrowserFrame = (state: RootState) => state.agent.browserFrame
export const selectBrowserUrl = (state: RootState) => state.agent.browserUrl
export const selectBrowserTitle = (state: RootState) => state.agent.browserTitle
export const selectSkillMeta = (state: RootState) => state.agent.skillMeta
