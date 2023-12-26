// Parte do background

const link_image = document.getElementById("link__image")
const botao_troca = document.getElementById("botao__troca")
const corpo = document.getElementById('corpo')
const display_calc = document.getElementById("display")

botao_troca.addEventListener("click", () => {
    if (link_image.value.length != 0) {
        localStorage.setItem('imagem', link_image.value)
        corpo.style.backgroundImage = `url(${localStorage.getItem("imagem")})`
        link_image.value = ''
    }
})

if (localStorage.getItem("imagem") != null) {
    corpo.style.backgroundImage = `url(${localStorage.getItem("imagem")})`
}

var str_display = ''

// Botões da calculadora numericos
const nu9 = document.getElementById("9")
const nu8 = document.getElementById("8")
const nu7 = document.getElementById("7")
const nu6 = document.getElementById("6")
const nu5 = document.getElementById("5")
const nu4 = document.getElementById("4")
const nu3 = document.getElementById("3")
const nu2 = document.getElementById("2")
const nu1 = document.getElementById("1")
const nu0 = document.getElementById("0")
const virgula = document.getElementById(',')

nu9.addEventListener('click', () => {
    str_display += '9'
    atualizar_display()

})
nu8.addEventListener('click', () => {
    str_display += '8'
    atualizar_display()

})
nu7.addEventListener('click', () => {
    str_display += '7'
    atualizar_display()
    
})
nu6.addEventListener('click', () => {
    str_display += '6'
    atualizar_display()

})
nu5.addEventListener('click', () => {
    str_display += '5'
    atualizar_display()

})
nu4.addEventListener('click', () => {
    str_display += '4'
    atualizar_display()

})
nu3.addEventListener('click', () => {
    str_display += '3'
    atualizar_display()

})
nu2.addEventListener('click', () => {
    str_display += '2'
    atualizar_display()

})
nu1.addEventListener('click', () => {
    str_display += '1'
    atualizar_display()

})
nu0.addEventListener('click', () => {
    str_display += '0'
    atualizar_display()

})

var virgula_tem = false

virgula.addEventListener('click', () => {
    if (str_display.length == 0) {
        str_display = '0.'
        virgula_tem = true

    } else if (virgula_tem == false && str_display[str_display.length - 1] != "+" && str_display[str_display.length - 1] != "." && str_display[str_display.length - 1] != "-" && str_display[str_display.length - 1] != "*" && str_display[str_display.length - 1] != "/") {
        str_display += '.'
        virgula_tem = true

    }

    atualizar_display()

})

// Botões de calculo
const mais = document.getElementById('+')
const menos = document.getElementById('-')
const multiplicacao = document.getElementById('x')
const divisao = document.getElementById('/')
const potencia = document.getElementById('**')
const enviar = document.getElementById('enviar')
const apagar = document.getElementById('apagar')

mais.addEventListener('click', () => {
    if (str_display.length == 0) {
        str_display = '0+'

    } else if (str_display[str_display.length - 1] != "+" && str_display[str_display.length - 1] != "." && str_display[str_display.length - 1] != "-" && str_display[str_display.length - 1] != "*" && str_display[str_display.length - 1] != "/") {
        str_display += '+'
    }

    atualizar_display()

})
menos.addEventListener('click', () => {
    if (str_display.length == 0) {
        str_display = '0-'

    } else if (str_display[str_display.length - 1] != "+" && str_display[str_display.length - 1] != "." && str_display[str_display.length - 1] != "-" && str_display[str_display.length - 1] != "*" && str_display[str_display.length - 1] != "/") {
        str_display += '-'
    }

    atualizar_display()

})
multiplicacao.addEventListener('click', () => {
    if (str_display.length == 0) {
        str_display = '0*'

    } else if (str_display[str_display.length - 1] != "+" && str_display[str_display.length - 1] != "." && str_display[str_display.length - 1] != "-" && str_display[str_display.length - 1] != "*" && str_display[str_display.length - 1] != "/") {
        str_display += '*'
    }

    atualizar_display()

})
divisao.addEventListener('click', () => {
    if (str_display.length == 0) {
        str_display = '0/'

    } else if (str_display[str_display.length - 1] != "+" && str_display[str_display.length - 1] != "." && str_display[str_display.length - 1] != "-" && str_display[str_display.length - 1] != "*" && str_display[str_display.length - 1] != "/") {
        str_display += '/'
    }

    atualizar_display()

})
potencia.addEventListener('click', () => {
    if (str_display.length == 0) {
        str_display = '0**'

    } else if (str_display[str_display.length - 1] != "+" && str_display[str_display.length - 1] != "." && str_display[str_display.length - 1] != "-" && str_display[str_display.length - 1] != "*" && str_display[str_display.length - 1] != "/") {
        str_display += '**'
    }

    atualizar_display()

})
enviar.addEventListener('click', () => {
    str_display = eval(str_display)
    str_display = str_display.toString()
    atualizar_display()
})
apagar.addEventListener('click', () => {
    for (let i = 0; i < str_display.length; i++) {
        if (str_display[i] == '*' && str_display[i + 1] == '*') {
            str_display = str_display.replace('**', '^')
            i += 1

        }
    }

    str_display = Array.from(str_display)
    str_display.pop()

    str_display = junta(str_display)

    for (let i = 0; i < str_display.length; i++) {
        if (str_display[i] == '^') {
            str_display = str_display.replace('^', '**')
            i += 1

        }
    }

    if (str_display.length == 1 && str_display[0] == "+" || str_display[0] == "-" || str_display[0] == "*" || str_display[0] == "/") {
        str_display = ''

    }

    atualizar_display()
})

// Junta string
function junta(string)
{
    let nova_str = ''

    for (let i = 0; i < string.length; i++) {
        nova_str += string[i]
    }

    return nova_str
}

// Botões da calculadora de contas

// Agora que os botões estão com valores vamos atualizar o display
function atualizar_display()
{
    let nova_str = ''

    for (let i = 0; i < str_display.length; i++) {
        if (str_display[i] == '*' && str_display[i + 1] == '*') {
            nova_str += '^'
            i += 1

        } else {
            switch (str_display[i]) {
                case '.':
                    nova_str += str_display[i].replace('.', ",")
                    break
                
                case '*':
                    nova_str += str_display[i].replace('*', 'x')
                    break
    
                case '/':
                    nova_str += str_display[i].replace('/', '÷')
                    break
                
                default:
                    nova_str += str_display[i]
            }
        }

    }

    if (str_display.length == 0) {
        display_calc.innerHTML = '0'

    } else {
        display_calc.innerHTML = nova_str

    }

    if (str_display == 'Infinity') {
        str_display = ''
    }
}