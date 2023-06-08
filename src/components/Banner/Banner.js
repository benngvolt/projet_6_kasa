import './Banner.css'

function Banner({bannerImg, bannerText}) {
    return (
        <div className='banner'>
            <img src= {bannerImg} alt='bannière accueil' className='banner__image'/>
            <p  className="banner__text">
                {bannerText}
            </p>
        </div>
    )
  }
  
  export default Banner