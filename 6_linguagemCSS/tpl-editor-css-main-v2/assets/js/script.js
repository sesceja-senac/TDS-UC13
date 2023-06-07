$(document).ready(function () {
    $('.dropdown-toggle').click(function () {
        var menuSuspenso = $(this).next('.dropdown-menu');
        menuSuspenso.find('.dropdown-item').click(function () {
            event.preventDefault();
            var textoSelecionado = $(this).text().trim();
            var botaoAlternancia = $(this).closest('.dropdown').find('.dropdown-toggle');
            botaoAlternancia.text(textoSelecionado);
        });
    });
    $(document).ready(function () {

        $('.dropdown-item').click(function () {

            $('.correcao').removeClass('disabled');
        });
    });

    $('.dropdown-item').click(function () {
        event.preventDefault();
        var textoSelecionado = $(this).text().trim();
        var botaoAlternancia = $(this).closest('.dropdown').find('.dropdown-toggle');
        botaoAlternancia.text(textoSelecionado);
    });

    $('#corrigirCss1').click(function () {
        var respostasCorretas = {
            '#css1': 'body',
            '#css2': 'background-color',
            '#css3': 'color',
            '#css4': 'p',
            '#css5': 'font-family',
            '#css6': 'font-size'
        };
        verificarRespostas(respostasCorretas);
    });

    $('#corrigirCss2').click(function () {
        var respostasCorretas = {
            '#css1': 'table,td',
            '#css2': 'border',
            '#css3': 'solid',
            '#css4': 'table',
            '#css5': 'background-color',
            '#css6': 'black',
            '#css7': 'white',
            '#css8': 'td.valor',
            '#css9': '.credito',
            '#css10': '.debito',
            '#css11': 'h3',
            '#css12': 'Lucida Sans'
        };
        verificarRespostas(respostasCorretas);
    });

    $('#corrigirCss3').click(function () {
        var respostasCorretas = {
            '#css1': '.slides',
            '#css2': 'padding',
            '#css3': 'text-align',
            '#css4': '.legenda',
            '#css5': 'bold',
            '#css6': 'italic',
            '#css7': 'border-top',
            '#css8': 'padding',
            '#css9': 'margin-top',
            '#css10': 'left',
            '#css11': 'right'
        };
        verificarRespostas(respostasCorretas);
    });

    function verificarRespostas(respostasCorretas) {
        var todasCorretas = true;

        $.each(respostasCorretas, function (dropdownId, respostaCorreta) {
            var respostaSelecionada = $(dropdownId).text().trim();
            if (respostaSelecionada !== respostaCorreta) {
                todasCorretas = false;
                return false;
            }
        });

        if (todasCorretas) {
            exibirModal("Parabéns! Todas as respostas estão corretas.", true);
            reproduzirAudio('audio-correto');
        } else {
            exibirModal("Algumas respostas estão incorretas. Por favor, revise suas seleções.", false);
            reproduzirAudio('audio-incorreto');
        }
    }

    function exibirModal(mensagem, respostaCorreta) {
        var modalHtml = `
            <div class="modal fade" id="respostaModal" tabindex="-1" role="dialog" aria-labelledby="respostaModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header ${respostaCorreta ? 'modal-header-correto' : 'modal-header-incorreto'}">
                            <h5 class="modal-title" id="respostaModalLabel">Resposta</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">${mensagem}</div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary ${respostaCorreta ? 'modal-header-correto' : 'modal-header-incorreto'}" data-bs-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>`;

        $('body').append(modalHtml);
        $('#respostaModal').modal('show');
        $('#respostaModal').on('hidden.bs.modal', function (e) {
            $(this).remove();
        });
    }

    function reproduzirAudio(idAudio) {
        var audioElement = $('#' + idAudio)[0];
        if (audioElement) {
            audioElement.play();
        }
    }


});