import React from 'react'

import MenuCategoriesNav from './menuCategoriesNav'
import MenuInfo from './menuInfo'
import MenuCategory from './menuCategory'

export default ({categories = [], meals = {}, info = {}}) => {
    const categoriesWithMeals = categories.filter(category => meals.find(meal => category.kategorie === meal.kategorie))
    console.log('categories', categories, 'categoriesWithMeals', categoriesWithMeals)

    return (
        <React.Fragment>
                <MenuCategoriesNav categories={categoriesWithMeals} />
                {categoriesWithMeals.map((category, i) => {
                    const mealsInCategory = meals.filter((meal) => category.kategorie === meal.kategorie)
                    console.log('category', category, 'mealsInCategory', mealsInCategory)
                    return mealsInCategory.length !== 0 ? <MenuCategory category={category} id={i} meals={mealsInCategory} /> : null
                })}
                {info ? <MenuInfo info={info} border/> : null}
        </React.Fragment>
    )
}