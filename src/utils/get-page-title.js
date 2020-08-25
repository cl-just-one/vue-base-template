import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Vue base template'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle}-${title}`
  }
  return `${title}`
}