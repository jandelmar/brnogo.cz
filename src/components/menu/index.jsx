import React from 'react'

import MenuCategoriesNav from './menuCategoriesNav'
import MenuInfo from './menuInfo'
import MenuCategory from './menuCategory'

export default ({categories = [], items = {}, info = {}}) => {
    const categoriesWithItems = categories.filter(category => items.find(item => category.kategorie === item.kategorie))
    // console.log('categories', categories, 'categoriesWithItems', categoriesWithItems)

    return (
        <React.Fragment>
                <MenuCategoriesNav categories={categoriesWithItems} />
                {categoriesWithItems.map((category, i) => {
                    const itemsInCategory = items.filter((item) => category.kategorie === item.kategorie)
                    // console.log('category', category, 'itemsInCategory', itemsInCategory)
                    return itemsInCategory.length !== 0 ? <MenuCategory category={category} id={i} meals={itemsInCategory} /> : null
                })}
                {info ? <MenuInfo info={info} border/> : null}
        </React.Fragment>
    )
}