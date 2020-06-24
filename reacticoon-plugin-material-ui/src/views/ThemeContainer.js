import { saveToStorage } from 'reacticoon/storage'
import { withTheme } from '@material-ui/core/styles'

const ThemeContainer = ({ theme, children }) => children({
  theme,
  toggleThemeType: () => {
    saveToStorage('MUI::THEME::TYPE', theme.type === 'dark' ? 'light' : 'dark')
    window.location.reload()
  }
})

export default withTheme(ThemeContainer)