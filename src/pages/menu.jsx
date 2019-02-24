import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Menu from '../components/menu'

export default ({data}) => {
    const categories = data.allJidloKategorieYaml.edges.reduce((acc, curr) => {
        acc.push(curr.node)
        return acc
    }, [])

    const meals = data.allJidloYaml.edges.reduce((acc, curr) => {
        acc.push(curr.node)
        return acc
    }, [])

    const menuInfo = data.contentYaml

    return (
        <Layout>
            <h1>Menu</h1>
            <Menu categories={categories} meals={meals} info={menuInfo} />
        </Layout>
    )
}

export const query = graphql`
    {
        allJidloKategorieYaml (sort: {fields: poradi, order: ASC}) {
            edges {
                node {
                    poradi
                    kategorie
                    nazev
                    info
                }
            }
        }
        allJidloYaml (sort: {fields: poradi, order: ASC}) {
            edges {
                node {
                    poradi
                    jidlo
                    popis
                    kategorie
                    alergeny
                    typ
                    cena
                }
            }
        }
        contentYaml(id: {eq: "menu-info"}) {
            krabice
            druhy_jidel
            alergeny
        }
    }
`