import React from 'react'
import Navicon from '../asset/icon/navicon.png'
import Facebook from '../asset/icon/facebook.jsx'
import Twitter from '../asset/icon/twitter.jsx'
import Youtub from '../asset/icon/youtub.jsx'
import Footers from '../asset/image/footer.png'

function Footer() {
  return (
    <div className='footer-head'>
      <div className="container">
        <div className="footer-1">
          <img src={Navicon} alt="icon" />
          <div className="footer-sub1">
            <Facebook />
            <Twitter />
            <Youtub />
          </div>
        </div>

        <div className="line"></div>

        <div className="footer-2">
          <div className="footer-3">
            <p style={{ fontWeight: '600', margin: '0' }}>Resources</p>
            <p>Support-a-Creator</p>
            <p>Publish to Epic Games</p>
            <p>Careers</p>
            <p>Company</p>
          </div>
          <div className="footer-3">
            <p>Fanart Policy</p>
            <p>UX Research</p>
            <p>Store EULA</p>
          </div>
          <div className="footer-3">
            <p>Online Services</p>
            <p>Community Rules</p>
            <p>Epic Newsroom</p>
          </div>
          <div className="footer-3">
            <p style={{ fontWeight: '600', margin: '0' }}>Made by Epic Games</p>
            <p>Battle Breakers</p>
            <p>Fortnite</p>
            <p>Infinity Blade</p>
          </div>
          <div className="footer-3">
            <p>Robo Recall</p>
            <p>Shadow Complex</p>
            <p>Unreal Tournament</p>
          </div>
          <div className="iconfooter" style={{display:'flex', alignItems:'center',gap:"9px"}}>
            <img style={{ width: '32px', height: '36px' }} src={Navicon} alt="icon" />
            <img src={Footers} alt="icon" />
          </div>
        </div>

        <div className="line"></div>

        <div className="fotter-end">
          <p>© 2022, Epic Games, Inc. Todos os direitos reservados. Epic, Epic Games, o logotipo da Epic Games, Fortnite, o logotipo do Fortnite, Unreal, Unreal Engine, o logotipo do Unreal Engine, Unreal Tournament e o logotipo do Unreal Tournament são marcas comerciais ou registradas da Epic Games, Inc. nos Estados Unidos da América e em outros lugares. Outras marcas e nomes de produtos são marcas registradas de seus respectivos donos. Transações para além dos EUA são feitas através da Epic Games International, S.à r.l.     </p>
        </div>

      </div>
    </div>
  )
}

export default Footer