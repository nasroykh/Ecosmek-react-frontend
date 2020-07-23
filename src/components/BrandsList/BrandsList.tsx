import React from 'react';
import classes from './BrandsList.module.css';
import Brand from './Brand/Brand';

import brand1 from '../../assets/images/Brands/407083_thumb.png';
import brand2 from '../../assets/images/Brands/Adidas-Logo-880x660.png';
import brand3 from '../../assets/images/Brands/corine de farme.png';
import brand4 from '../../assets/images/Brands/evaflor.jpg';
import brand5 from '../../assets/images/Brands/inessance.jpg';
import brand6 from '../../assets/images/Brands/Jacques_Saint_Pres.jpg';
import brand7 from '../../assets/images/Brands/udv-logo-1.jpg';
import brandnone from '../../assets/images/Brands/block.png';

const brandsList = (props: any) => {

    // let brand = brandsImages.map(img => <Brand src={img.src} alt={img.title} key={img.id} />)

    return(
        <div className={classes.BrandsList}>
            <Brand id={"remove"} src={brandnone} alt="Remove" brandSel={props.brandSel}/>
            <Brand id={"db"} src={brand1} alt="David Beckham" brandSel={props.brandSel}/>
            <Brand id={"ad"} src={brand2} alt="Adidas" brandSel={props.brandSel}/>
            <Brand id={"cori"} src={brand3} alt="Corine de Farme" brandSel={props.brandSel}/>
            <Brand id={"eva"} src={brand4} alt="Evaflor" brandSel={props.brandSel}/>
            <Brand id={"ine"} src={brand5} alt="Inessance" brandSel={props.brandSel}/>
            <Brand id={"jsp"} src={brand6} alt="Jacques Saint Pres" brandSel={props.brandSel}/>
            <Brand id={"udv"} src={brand7} alt="Ulric de Varens" brandSel={props.brandSel}/>
        </div>
    );
}

export default brandsList;