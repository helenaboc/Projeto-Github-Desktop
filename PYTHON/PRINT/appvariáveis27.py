#Faça um programa que pergunte quantas camisetas a pessoa comprou e o valor de cada camiseta. Depois mostre o valor total da compra.
camiseta = int(input("Quantas camisetas você comprou? "))
valor_unitario = float(input("Qual preço de cada uma? "))

valor_total = camiseta * valor_unitario

print(f"Você comprou {camiseta} camiseta(s) e pagou o total de R$ {valor_total}!")