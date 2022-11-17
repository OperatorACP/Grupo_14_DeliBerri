import React from 'react';
import LastProductInDb from './LastProductInDb';
import CategoriesInDb from './CategoriesInDb';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Product in DB -->*/}
            <LastProductInDb />
            {/*<!-- End content row last product in Data Base -->*/}

            {/*<!-- Categories in DB -->*/}
            <CategoriesInDb />
            {/*<!-- End content row Categories in DB -->*/}
        </div>
    )
}

export default ContentRowCenter;