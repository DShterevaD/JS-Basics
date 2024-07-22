function summerLit(input) {
    let numberOfPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysPerBook = Number(input[2]);

    let hoursForBook = (numberOfPages / pagesPerHour) / daysPerBook

    console.log(hoursForBook)
}
summerLit(["212", "20", "2"])