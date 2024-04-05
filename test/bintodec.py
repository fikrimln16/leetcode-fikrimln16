binary = int(input())

def convertToDecimal(binary: int):
   temp = binary
   dec, i = 0, 0
   
   while temp > 0:
      dec += (2 ** i * temp % 10)
      temp //= 10
      i += 1
   
   return dec

print(convertToDecimal(binary))    