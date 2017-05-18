const express = require( 'express' )
const router = express.Router()
const fetch = require( 'node-fetch' )
const https = require( 'https' )
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('projects/index', { title: 'Frankie' })
})

router.get('/blog', function(req, response, next) {
  let result = ''
  const request = https.request({
    method: 'get',
    host: 'medium.com',
    path: 'https://medium.com/@rocha.francisco123/latest',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    }
  }, res => {
    res.on( 'data', chunk => {
      result = result + chunk
    } )
    res.on( 'end', () => {
      result =  JSON.parse(result.split('</x>')[1])
      const posts = result.payload.references.Post
      const postValues = Object.values(posts)
      const myPosts = postValues.reduce( (memo, value ) => {
        memo[ value['title'] ] = 'https://medium.com/@rocha.francisco123value/'+value['uniqueSlug']
        return memo
      }, {})
      response.render('blogs/index', { title: 'about', myPosts })
    })
  })
  request.end()
})

router.get('/about', function(req, res, next) {
  res.render('about/index', { title: 'about' })
})

router.get('/contact', function(req, res, next) {
  res.render('contact/index', { title: 'contact' })
})

module.exports = router
