import React from 'react'
import { Helmet } from "react-helmet"
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Menu from '../components/menu'

const convertDataYamlToArray = yaml => yaml.edges.reduce((acc, curr) => {
    acc.push(curr.node)
    return acc
}, [])

export default ({data}) => {
    const jidlo = convertDataYamlToArray(data.allJidloYaml)
    const jidloKategorie = convertDataYamlToArray(data.allJidloKategorieYaml)

    const napoje = convertDataYamlToArray(data.allNapojeYaml)
    const napojeKategorie = convertDataYamlToArray(data.allNapojeKategorieYaml)

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
                    popis
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