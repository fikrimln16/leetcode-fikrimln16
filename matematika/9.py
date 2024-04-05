class Solution:
    def isPalindrome(self, x: int) -> bool:
        
        temp = x
        p = 0
        while temp > 0:
            bil_akhir = temp % 10
            p = p * 10 + bil_akhir
            temp //= 10

        return p == x
