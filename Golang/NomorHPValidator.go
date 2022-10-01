package main

import (
	"fmt"
	"regexp"
)

func main() {

	var nomor = "08388888232982"
	var regex, _ = regexp.Compile(`(\+62 ((\d{3}([ -]\d{3,})([- ]\d{4,})?)|(\d+)))|(\(\d+\) \d+)|\d{3}( \d+)+|(\d+[ -]\d+)|\d+`)

	var isMatch = regex.MatchString(nomor)
	fmt.Println(isMatch)
}
