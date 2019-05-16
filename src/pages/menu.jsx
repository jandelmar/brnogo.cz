import React from 'react'
import { Helmet } from "react-helmet"
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Menu from '../components/menu'

export default ({data}) => {
    const jidloKategorie = data.allJidloKategorieYaml.edges.reduce((acc, curr) => {
        acc.push(curr.node)
        return acc
    }, [])

    const jidlo = data.allJidloYaml.edges.reduce((acc, curr) => {
        acc.push(curr.node)
        return acc
    }, [])

    const napojeKategorie = data.allNapojeKategorieYaml.edges.reduce((acc, curr) => {
        acc.push(curr.node)
        return acc
    }, [])

    const napoje = data.allNapojeYaml.edges.reduce((acc, curr) => {
        acc.push(curr.node)
        return acc
    }, [])

    const categories = [...jidloKategorie, ...napojeKategorie]
    const items = [...jidlo, ...napoje]
    const menuInfo = data.contentYaml

    return (
        <Layout>
            <Helmet>
                <title>Gỗ | Menu</title>
                <link rel="canonical" href="https://brnogo.cz/menu" />
            </Helmet>
            <h1>Menu</h1>
            <Menu categories={categories} items={items} info={menuInfo} />
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
        allNapojeKategorieYaml (sort: {fields: poradi, order: ASC}) {
            edges {
                node {
                    poradi
                    kategorie
                    nazev
                    info
                }
            }
        }
        allNapojeYaml (sort: {fields: poradi, order: ASC}) {
            edges {
                node {
                    napoj
                    kategorie
                    objem
                    cena
                }
            }
        }
        contentYaml(id: {eq: "menu-info"}) {
            krabice
            napoje
            druhy_jidel
            alergeny
        }
    }
`