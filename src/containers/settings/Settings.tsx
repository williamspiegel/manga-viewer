import { useTranslation } from 'react-i18next';
export default function Settings() {
  const { t } = useTranslation();
  return <div>{t('Settings')}</div>;
}
