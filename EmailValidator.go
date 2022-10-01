package main

import (
	"fmt"
	"os"
	"regexp"
)

func main() {
	regex := regexp.MustCompile(`^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$`)
	regexResult := regex.MatchString(os.Args[1])
	if regexResult {
		fmt.Println(os.Args[1], "-> email valid")
	} else {
		fmt.Println(os.Args[1], "-> email tidak valid")
	}
}
