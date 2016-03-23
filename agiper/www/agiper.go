package agiper

import (
    "fmt"
    "net/http"
)

func init() {
    http.HandleFunc("/search", searchHandler)
    http.Handle("/", http.FileServer(http.Dir("./")))
}

func searchHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprint(w, "Nothing is found!")
}