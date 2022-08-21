from tkinter import *

tela = Tk()
tela.geometry('230x328')
tela.title('Calculadora')
tela.resizable(False, False)
tela['bg'] = '#8c8c8c'
tela.iconbitmap('calculadora.ico')

label1 = Label(
    tela,
    text = 's',
    font = 'arial 50',
    bg = '#8c8c8c'
    )

label1.grid(row = 0, column = 0)

# % da calculadora

porcentagem = Button(
    tela,
    text = '  %  ',
    font = 'arial 15'
)
porcentagem.grid(row = 1, column = 0)

# CE da calculadora

ce = Button(
    tela,
    text = '  CE ',
    font = 'arial 15'
)
ce.grid(row = 1, column = 1)

# C da calculadora

c = Button(
    tela,
    text = '  C  ',
    font = 'arial 15'
)
c.grid(row = 1, column = 2)

# <- é apagar da calculadora

apagar = Button(
    tela,
    text = '  <- ',
    font = 'arial 15'
)
apagar.grid(row = 1, column = 3)

#segunda coluna da calculadora
# x1 é 1/x da calculadora

x1 = Button(
    tela,
    text = ' 1/x ',
    font = 'arial 15'
)
x1.grid(row = 2, column = 0)

# x elevado a 2 da calculadora

x2 = Button(
    tela,
    text = '   x²  ',
    font = 'arial 15'
)
x2.grid(row = 2, column = 1)

# raiz quadrada da calculadora

raiz_quadrada = Button(
    tela,
    text = ' 2√x',
    font = 'arial 15'
)
raiz_quadrada.grid(row = 2, column = 2)

# divisão da calculadora

divisao = Button(
    tela,
    text = '  ÷  ',
    font = 'arial 15'
)
divisao.grid(row = 2, column = 3)

#Terceira coluna da calculadora
# 7 da calculadora

sete = Button(
    tela,
    text = '  7  ',
    font = 'arial 15'
)
sete.grid(row = 3, column = 0)

# 8 da calculadora

oito = Button(
    tela,
    text = '   8   ',
    font = 'arial 15'
)
oito.grid(row = 3, column = 1)

# 9 da calculadora

nove = Button(
    tela,
    text = '  9  ',
    font = 'arial 15'
)
nove.grid(row = 3, column = 2)

# multiplicação da calculadora

multiplicacao = Button(
    tela,
    text = '  X  ',
    font = 'arial 15'
)
multiplicacao.grid(row = 3, column = 3)

#quarta coluna da calculadora
# 4 da calculadora

quatro = Button(
    tela,
    text = '  4  ',
    font = 'arial 15'
)
quatro.grid(row = 4, column = 0)

# 5 da calculadora

cinco = Button(
    tela,
    text = '   5   ',
    font = 'arial 15'
)
cinco.grid(row = 4, column = 1)

# 6 da calculadora

seis = Button(
    tela,
    text = '  6  ',
    font = 'arial 15'
)
seis.grid(row = 4, column = 2)

# subtração da calculadora

subtracao = Button(
    tela,
    text = '   -  ',
    font = 'arial 15'
)
subtracao.grid(row = 4, column = 3)

#quinta coluna da calculadora
# 1 da calculadora

um = Button(
    tela,
    text = '  1  ',
    font = 'arial 15'
)
um.grid(row = 5, column = 0)

# 2 da calculadora

dois = Button(
    tela,
    text = '   2   ',
    font = 'arial 15'
)
dois.grid(row = 5, column = 1)

# 3 da calculadora

tres = Button(
    tela,
    text = '  3  ',
    font = 'arial 15'
)
tres.grid(row = 5, column = 2)

# adição da calculadora

adicao = Button(
    tela,
    text = '   +  ',
    font = 'arial 15'
)
adicao.grid(row = 5, column = 3)

#sexta é ultima coluna da calculadora
# =/- simbolo de negação da calculadora (isso tranfomar os números em negativo)

negacao = Button(
    tela,
    text = ' +/- ',
    font = 'arial 15'
)
negacao.grid(row = 6, column = 0)

# zero da calculadora

zero = Button(
    tela,
    text = '   0   ',
    font = 'arial 15'
)
zero.grid(row = 6, column = 1)

# virgula da calculadora

virgula = Button(
    tela,
    text = '  ,   ',
    font = 'arial 15'
)
virgula.grid(row = 6, column = 2)

# igualdada da calculadora (da o resultado da operação matématica)

igual = Button(
    tela,
    text = '   =  ',
    font = 'arial 15'
)
igual.grid(row = 6, column = 3)

tela.mainloop()