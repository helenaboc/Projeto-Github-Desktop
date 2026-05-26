#Faça um programa que pergunte ao usuário 
#se ele tem carteira de motorista
#se digitar sim, o programa deve mostrar True
#Se digitar qualquer outra coisa, deve mostrar falso


resposta = input("Você tem carteira de motorista? ")
resultado  = resposta.lower() == "sim"
print(resultado)