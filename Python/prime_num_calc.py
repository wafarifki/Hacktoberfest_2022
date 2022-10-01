def get_prime():
    first = int(input('enter the number till u want to have prime numbers : '))
    lis = []
    
    for x in range(2,first+1):
        is_prime = True
        for t in range(2,x):
            if x%t == 0: is_prime = False
            else:
                fal = True
            if is_prime == False:
                break
            else: continue
        if is_prime == True:
            lis.append(x)
    print(lis)
