import './infoCharacterDetail.css'

export const InfoCharacterDetail = ({ title, info }) => (
  <div className='wrapInfo'>
  <h3 className='titleInfo'>{title}</h3>
    {
      info.map(singleInfo => {
        return <h4 key={singleInfo.name} className='infoName'>{singleInfo.name}</h4>
      })
    }
  </div>
)
