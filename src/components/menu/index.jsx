import React from 'react'

import MenuCategoriesNav from './menuCategoriesNav'
import MenuInfo from './menuInfo'
import MenuCategory from './menuCategory'

export default () => (
    <React.Fragment>
            <MenuCategoriesNav />
            <MenuCategory name="Salát Nộm" />
            <MenuInfo />
    </React.Fragment>
)

const foodList = {
    salat: [
        {}
    ],
}