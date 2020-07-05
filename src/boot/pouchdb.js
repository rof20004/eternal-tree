import PouchDB from 'pouchdb'
import books from '../storage/json/books.json'

const pouchdb = new PouchDB('eternal-tree')

export default async ({ Vue, store }) => {
  pouchdb.info().then(function (info) {
    console.log('Database initialized: ', info)
  })

  try {
    const data = await pouchdb.allDocs({ include_docs: true })
    if (data.total_rows === 0) {
      throw Error('No data found in database')
    }
  } catch (error) {
    await pouchdb.bulkDocs(books)
    window.location.href = '/'
  } finally {
    Vue.prototype.$pouchdb = pouchdb
  }
}
