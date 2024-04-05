class Solution:
    def reverseOnlyLetters(self, s: str) -> str:
      
      #ubah string menjadi list
      s = list(s)

      # "abc"
      # ["a", "b", "c"]

      #pointer kiri dan kanan
      left, right = 0, len(s) - 1

      #perulangan tp
      while left < right:
         #jika ptr kiri bukan huruf
         if not s[left].isalpha():
            left += 1
         #jika ptr kanan bukan huruf
         elif not s[right].isalpha():
            right -= 1
         #jika keduanya adalah huruf
         else:
            s[left], s[right] = s[right], s[left]
            left += 1
            right -= 1
      
      #gabungkan kembali agar menjadi string
      return "".join(s)