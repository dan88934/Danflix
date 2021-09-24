// main.go

package main

import (
  "net/http"

  "github.com/gin-gonic/gin"
)

var router *gin.Engine

func main() {

  // Set the router as the default one provided by Gin
  router = gin.Default()

  // Process the templates at the start so that they don't have to be loaded
  // from the disk again. This makes serving HTML pages very fast.
  router.Static("/react_frontend/lib", "./react_frontend/lib")
  // router.Static("/react_frontend/lib", "./react_frontend/lib")
  // router.Static("/static", "./static")

  // router.LoadHTMLGlob("assets/*")
  router.LoadHTMLGlob("./react_frontend/lib/*")

  // Define the route for the index page and display the index.html template
  // To start with, we'll use an inline route handler. Later on, we'll create
  // standalone functions that will be used as route handlers.
  router.GET("/", func(c *gin.Context) {

    // Call the HTML method of the Context to render a template
    c.HTML(
      // Set the HTTP status to 200 (OK)
      http.StatusOK,
      // Use the index.html template
      "home.html",
      // Pass the data that the page uses (in this case, 'title')
      gin.H{
        "title": "Home Page",
      },
    )

  })
  // router.GET("/login", func(c *gin.Context) {

  //   // Call the HTML method of the Context to render a template
  //   c.HTML(
  //     // Set the HTTP status to 200 (OK)
  //     http.StatusOK,
  //     // Use the index.html template
  //     "signin.html",
  //     // Pass the data that the page uses (in this case, 'title')
  //     gin.H{
  //       "title": "Login Page",
  //     },
  //   )

  // })



  // Start serving the application
  router.Run()

}