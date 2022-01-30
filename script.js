        var botão = window.document.querySelector("input#btn")
        botão.addEventListener("click", contar)
        function contar() {
            var startn = window.document.getElementById("start")
            var start = Number(startn.value)
            var endn = window.document.getElementById("end")
            var end = Number(endn.value)
            var timen = document.getElementById("time")
            var time = Number(timen.value)
            var res = document.getElementById("res")

            if (startn.value.length == 0 || endn.value.length == 0 || timen.value.length == 0) {
                res.innerHTML = `Impossível Contar`
                window.alert("ERRO")
            } else {
                res.innerHTML = `Contando: </br>`
                if (time <= 0) {
                    window.alert("Passo Inválido! Considerando passo 1...")
                    time = 1
                }
                if (start < end) {
                    // contagem crescente
                    for (var count = start; count <= end; count += time) {
                        res.innerHTML += ` ${count} \u{1F449}`
                    }
                } else {
                    // contagem regressiva
                    for (var count = start; count >= end; count -= time) {
                        res.innerHTML += ` ${count} \u{1F449}`
                    }
                }

                res.innerHTML += `\u{1F3C1}`
            }

        }