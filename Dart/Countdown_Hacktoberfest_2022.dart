void main() {
  var now = DateTime.now();

  var end = DateTime(2022, 10, 31);

  var diff = end.difference(now);

  print('There are ${diff.inDays} days left in Hacktoberfest 2022!');
}
