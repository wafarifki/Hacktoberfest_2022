package main

import (
	"encoding/json"
	"fmt"
	"log"
	"os"
	"strings"

	"github.com/gocolly/colly"
)

type KomikList struct {
	Title    string `json:"title"`
	Rating   string `json:"rating"`
	Type     string `json:"type"`
	ImageURL string `json:"image_url"`
}

func main() {
	c := colly.NewCollector(
		colly.AllowedDomains("komikindo.id"),
	)

	var komikLists []KomikList
	c.OnHTML("div.animepost div.animposx", func(element *colly.HTMLElement) {
		komikList := KomikList{
			Title:    strings.Trim(element.ChildAttr("a", "title"), "Komik "),
			Rating:   element.ChildText("i"),
			Type:     element.ChildAttr("span", "class"),
			ImageURL: element.ChildAttr("img", "src"),
		}
		komikLists = append(komikLists, komikList)
	})

	c.OnHTML("a.page-numbers", func(element *colly.HTMLElement) {
		nextPage := element.Request.AbsoluteURL(element.Attr("href"))
		c.Visit(nextPage)
	})

	c.OnRequest(func(request *colly.Request) {
		fmt.Println(request.URL.String())
	})

	c.Visit("https://komikindo.id/daftar-komik/")

	toJson, err := json.MarshalIndent(&komikLists, "", "\t")
	if err != nil {
		log.Fatalln(err)
	}

	err = os.WriteFile("animelist.json", toJson, 0755)
	if err != nil {
		log.Fatalln(err)
	}
}
