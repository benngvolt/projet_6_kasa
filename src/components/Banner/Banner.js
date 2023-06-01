import './Banner.scss'

function Banner({bannerImg, bannerText}) {
    return (
        <div className='banner'>
            <img src= {bannerImg} alt='bannière accueil' className='bannerImg'/>
            <p  className="bannerText">
                {bannerText}
            </p>
        </div>
    )
  }
  
  export default Banner