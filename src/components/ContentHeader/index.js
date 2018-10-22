import React from 'react'
import './index.scss'

const ContentHeader = ({title, subtitle = null}) =>
  <header className="content-header">
    <h2 className="content-header__title">{title}</h2>
    {subtitle && <h3 className="content-header__subtitle">
      {subtitle}
    </h3>}
  </header>

export default ContentHeader;
