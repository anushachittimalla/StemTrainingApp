import React from 'react';
import Aboutimage from './images/Aboutimage.svg';
import Aboutusarrow from './icons/aboutus-arrow.svg';
import Uparrowimage from './images/Uparrowimage.svg';
import Horizontalline from './images/Horizontalline.svg';
import rightarrow2 from './images/rightarrow2.svg';
import Footer from './Footer';
const Faqpage = () => {
  return (
        <div className='main-Faq'>
            <div className='Faq'>
            
            <div className='about-bgimage' style={{backgroundImage: `url(${Aboutimage})`}}>
            <div className='aboutus'> 
                <h1 className='aboutus-text'> Find Answers Here</h1>
                <div className='home-aboutus'>
                <p className='about-home'>Home  </p>
                <img src={Aboutusarrow} alt='' className='about-arrow' />
                <p className='about-aboutus' style={{color:" #558CDF"}}>FAQ </p>
                </div>
            </div>
            </div>
            <div className='uiux-div'>
    <p className='information-about'>Information About UI/UX Design Degree</p>
    <img src={Uparrowimage} alt='' className='up-arrow' />
<div className='ouraim-div'>
    <p className='ouraim-text'>Our aim is to expand a child's mind during their formative years by surpassing school curriculum boundaries, utilizing practical activities and innovative tools.
Our aim is to expand a child's mind during their formative years by surpassing school Our aim is to expand a child's mind during their formative years by surpassing school curriculum boundaries, utilizing practical activities and innovative tools. </p>
</div>
<img src={Horizontalline} alt='' className='horizontal-line' />
<div className='each-uiux'> 
<p className='information-about2'>Information About UI/UX Design Degree</p>
<img src={rightarrow2} alt='' className='rightarrow2' />
</div>
<img src={Horizontalline} alt='' className='horizontal-line' />
<div className='each-uiux'>
<p className='information-about2'>Information About UI/UX Design Degree</p>
<img src={rightarrow2} alt='' className='rightarrow2' />
</div>
<img src={Horizontalline} alt='' className='horizontal-line' />
<div className='each-uiux'> 
<p className='information-about2'>Information About UI/UX Design Degree</p>
<img src={rightarrow2} alt='' className='rightarrow2' />
</div>
<img src={Horizontalline} alt='' className='horizontal-line' />
<div className='each-uiux'> 
<p className='information-about2'>Information About UI/UX Design Degree</p>
<img src={rightarrow2} alt='' className='rightarrow2' />
</div>
<img src={Horizontalline} alt='' className='horizontal-line' />
<div className='each-uiux'> 
<p className='information-about2'>Information About UI/UX Design Degree</p>
<img src={rightarrow2} alt='' className='rightarrow2' />
</div>
<img src={Horizontalline} alt='' className='horizontal-line' />
<div className='each-uiux'> 
<p className='information-about2'>Information About UI/UX Design Degree</p>
<img src={rightarrow2} alt='' className='rightarrow2' />
</div>
            </div>
            <Footer />
    </div>
    </div>
  )
}

export default Faqpage
