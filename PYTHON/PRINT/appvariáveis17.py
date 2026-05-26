# 1. Solicitar o valor do usuário (entrada como string, convertida para float)
valor_entrada = float(input("Digite o valor em R$: "))

# 2. Definir o valor a ser somado
valor_soma = 50.00

# 3. Realizar a soma
resultado = valor_entrada + valor_soma

# 4. Exibir o resultado formatado com 2 casas decimais (:.2f)
print(f"O valor original é: R${valor_entrada:.2f}")
print(f"O valor com o acréscimo de R$50.00 é: R${resultado:.2f}")