import createCrudModule from 'vuex-crud'

const SUBASTAS_API = process.env.API_BASE + '/subastas'

export const subastas = createCrudModule({
  resource: 'subastas',
  urlRoot: SUBASTAS_API,
  parseList (response) {
    const { data } = response
    return Object.assign({}, response, {
      data: data.results // expecting array of objects with IDs
    })
  }
})
