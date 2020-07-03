import PouchDB from 'pouchdb'
import books from '../storage/json/books.json'

export default async ({ Vue, store }) => {
  const pouchdb = new PouchDB('eternal-tree')

  pouchdb.info().then(function (info) {
    console.log('Database initialized: ', info)
  })

  try {
    const data = await pouchdb.allDocs({ include_docs: true })
    if (data.total_rows === 0) {
      throw new Error('No data found in database')
    }

    store.commit('books/set', data.rows)
  } catch (error) {
    await pouchdb.bulkDocs(books)
    window.location.href = '/'
  } finally {
    Vue.prototype.$pouchdb = pouchdb
  }
}
