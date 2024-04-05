def print_pattern(n):
    for i in range(n // 2, n):
        line = ""
        
        for j in range(1, n - i, 2):
            line += '#'
            
        for j in range(1, i + 1):
            line += "*"

        for j in range(1, n - i + 1):
            line += '#'

        for j in range(1, i + 1):
            line += "*"

        for j in range(1, n - i):
            line += '#'

        print(line)

    # Bagian bawah 
    for i in range(n, 0, -1):
        line = ""

        for j in range(0, n - i):
            line += '#'

        for j in range(1, i * 2):
            line += "*"

        for j in range(0, n - i):
            line += '#'

        print(line)

print_pattern(12)