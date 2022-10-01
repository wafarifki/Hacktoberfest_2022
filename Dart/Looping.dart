import 'dart:io';

void main() {
  var n = 7;
  print('');
  for (var i = 1; i <= n; i++) {
    for (var j = 0; j < i; j++) {
      stdout.write(' *');
    }
    print('');
  }
}
