import createCrudModule from 'vuex-crud'

const SUBASTAS_API = process.env.API_BASE + '/auctions'

export const auctions = createCrudModule({
  resource: 'auctions',
  urlRoot: SUBASTAS_API,
  parseList (response) {
    const { data } = response
    return Object.assign({}, response, {
      data: data.results // expecting array of objects with IDs
    })
  }
})
