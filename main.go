// main.go

package main

import (
  "net/http"

  "github.com/gin-gonic/gin"

  "github.com/gin-contrib/static"
)

var router *gin.Engine

func main() {

  // Set the router as the default one provided by Gin
  router = gin.Default()
  // Process the templates at the start so that they don't have to be loaded
  // from the disk again. This makes serving HTML pages very fast.
  router.Use(static.Serve("/", static.LocalFile("./react_frontend/lib/", true)))

  router.LoadHTMLGlob("./react_frontend/lib/index.html") 

  router.GET("/", func(c *gin.Context) {

    // Call the HTML method of the Context to render a template
    c.HTML(
      // Set the HTTP status to 200 (OK)
      http.StatusOK,
      // Use the index.html template (SPA)
      "index.html",
      // Pass the data that the page uses (in this case, 'title')
      gin.H{
        "title": "Home Page",
      },
    )
  })

  router.GET("/browse", func(c *gin.Context) {

    // Call the HTML method of the Context to render a template
    c.HTML(
      // Set the HTTP status to 200 (OK)
      http.StatusOK,
      // Use the index.html template (SPA)
      "index.html",
      // Pass the data that the page uses (in this case, 'title')
      gin.H{
        "title": "Home Page",
      },
    )
  })

  router.GET("/signin", func(c *gin.Context) {

    // Call the HTML method of the Context to render a template
    c.HTML(
      // Set the HTTP status to 200 (OK)
      http.StatusOK,
      // Use the index.html template (SPA)
      "index.html",
      // Pass the data that the page uses (in this case, 'title')
      gin.H{
        "title": "Sign In Page",
      },
    )
  })

  router.GET("/signup", func(c *gin.Context) {

    // Call the HTML method of the Context to render a template
    c.HTML(
      // Set the HTTP status to 200 (OK)
      http.StatusOK,
      // Use the index.html template (SPA)
      "index.html",
      // Pass the data that the page uses (in this case, 'title')
      gin.H{
        "title": "Sign Up Page",
      },
    )
  })

  // Start serving the application
  router.Run()

}