#Faça um programa que pergunte o valor de um produto e quanto a pessoa entregou para pagar. Depois mostre quanto de troco ela receberá.
valor_produto = float(input("Digite o valor do produto: "))

valor_pagamento = float(input("Digite o valor entregue para pagamento: "))

troco = valor_pagamento - valor_produto

print(f"O valor do produto é R$ {valor_produto} e você deu R$ {valor_pagamento} de pagamento e irá receber R$ {troco} de troco!")

