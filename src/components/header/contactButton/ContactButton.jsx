import './ContactButton.css'
import { useTranslation } from 'react-i18next'

function ContactButton() {
  const { t } = useTranslation()
  
  return (
    <a href="#contact" className="btn-contact">
      {t('header.contact')}
    </a>
  )
}

export default ContactButton

