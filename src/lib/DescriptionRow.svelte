
<script lang="ts">
    import LayoutGrid, { Cell } from '@smui/layout-grid';
    import IconButton, { Icon } from '@smui/icon-button';

    export let description: string;
    let isOn = false;

    let synth: any = undefined;
    let utterance: any = undefined;

    function initSpeech() {
        if (synth) return true;

        if(window['speechSynthesis'] === undefined) {
            return false;
        }

        synth = window.speechSynthesis;
        utterance = new SpeechSynthesisUtterance(description);

        utterance.onend = () => {
            isOn = false;
        };

        return true;
    }

    async function toggleVoice() {
        isOn = !isOn;

        if (isOn) {
            if (initSpeech()) {
                if (synth.speaking) {
                    if (synth.paused) {
                        synth.resume();
                    }
                } else synth.speak(utterance);
            }
        }
        else {
            if (synth.speaking) synth.pause();
        }
    }
</script>

<Cell span={12} class="description-row">
    <LayoutGrid class="data-grid-row">
        <Cell span={12}>
            <div class="table-field">{description}</div>
            <div class="voice-button">
                <IconButton on:click={() => toggleVoice()} bind:pressed={isOn}>
                  <Icon class="material-icons" on>volume_up</Icon>
                  <Icon class="material-icons">volume_mute</Icon>
                </IconButton>
              </div>
        </Cell>
    </LayoutGrid>
</Cell>

<style>
    .table-field {
        min-height: 120px;
        display: flex;
        justify-content: left;
        padding: 15px;
        color: black;
        background-color: white;
    }
    .voice-button {
        float: right;
        margin-top: -50px;
        margin-right: 5px;
        margin-bottom: 0px;
        height: 45px;
    }

</style>