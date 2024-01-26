<script setup>

import { computed, ref } from 'vue';
import IconRecord from '~icons/mdi/record-circle'
import IconStop from '~icons/mdi/stop-circle-outline'
import IconDownload from '~icons/mdi/download-outline'
import IconDelete from '~icons/mdi/delete-circle-outline'

//Properties
const props = defineProps({
    modelValue: {
        type: Blob,
        default: null
    }   
})
const emit = defineEmits(['update:modelValue'])
const audioFile = ref(props.modelValue)

//Control and data variables
const audioUrl = ref('');
const audioElement = ref('null');
const audioFileName = ref('');

const isRecording = ref(false);
const hasAudioFile = computed(()=> {
    const file = audioFile.value;

    if (!file) return false;

    return (typeof file.stream === 'function');
})

let mediaRecorder = null;
let audioParts = [];

let dateFormatOpt = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour:'2-digit',
  minute:'2-digit'
}; 

//main functions 
const starRecord = async function(e){
    audioParts = []
    
    await getRecorder(); 
    if(!!mediaRecorder){
        mediaRecorder.start(500);
        isRecording.value = true;
    }
    
} 

const startPlay = function(e){
    console.log('startPlay')
    
} 

const stopRecord = function(e){
    
    //Stopt recording (needs to be done in all tracks)
    mediaRecorder.requestData();
    mediaRecorder.stream.getTracks().forEach( track => track.stop() ); // stop each of them
    mediaRecorder.stop();

    //The blobs inherits the mimetype already chosen by the browser
    const mimeType = mediaRecorder.mimeType;
    const blob = new Blob(audioParts, { type: mimeType });
    audioParts = []

    audioFile.value = blob;
    isRecording.value = false;
    const extension = mimeType.startsWith('audio/aac') ? 'aac':
                      mimeType.startsWith('audio/mpeg') ? 'mp3':
                      mimeType.startsWith('audio/ogg') ? 'ogg':
                      mimeType.startsWith('audio/opus') ? 'opus':
                      mimeType.startsWith('audio/wav') ? 'wav':
                      mimeType.startsWith('audio/webm') ? 'weba':
                      'audio';
    audioFileName.value = 'recording-' 
                        + Intl.DateTimeFormat('bs', dateFormatOpt).format(new Date()).replace(/[: ]+/g, '-') //yyyy-MM-dd-HH-mm
                        + '.' + extension;
    
     
    if(!!audioUrl){
        URL.revokeObjectURL(audioUrl.value);
    }
    audioUrl.value = window.URL.createObjectURL(blob);
    console.log({audioUrl:audioUrl.value}) 

} 

const download = function(e){

    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(audioFile.value);
    link.download = audioFileName.value;

    //Triggers the download by dispatching a clic event
    link.dispatchEvent(
      new MouseEvent('click', { 
        bubbles: true, 
        cancelable: true, 
        view: window 
      })
    )

}

const deleteAudio = function(e){
    console.log('deleteAudio')
    
    if(!!audioUrl){
        URL.revokeObjectURL(audioUrl.value);
    }

    audioUrl.value = '';
    audioFile.value = null;
} 


//support functions 

/**
 * Ensures that a MediaRecorder is available.
 */
const getRecorder = async function (){
    //if(!!mediaRecorder) return true;

  await navigator.mediaDevices.getUserMedia({ audio: true})
    .then((stream) => {

        mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.ondataavailable = (e) => {
            console.log(e.data); 
            audioParts.push(e.data);
        };

    }).catch((err) => {
      console.error(`The following getUserMedia error occurred: ${err}`);
    });
}
</script>
<template>

<div class="vt-audio-recorder">

    <button class="vt-audio__button" 
        :class="{'vt-audio__button--on': isRecording}"
        :disabled="isRecording"
        @click="starRecord($event)"><IconRecord /></button> 

    <button class="vt-audio__button" 
        :disabled="!isRecording"
        @click="stopRecord($event)"><IconStop /></button>

    <button class="vt-audio__button" 
        :title="'Download file' + (hasAudioFile? (': '+ audioFileName):'')"
        :disabled="!hasAudioFile"
        @click="download($event)"><IconDownload /></button>
        
    <button class="vt-audio__button"  
        :disabled="isRecording  || !hasAudioFile"
        @click="deleteAudio($event)"><IconDelete /></button>

    <audio v-show="hasAudioFile" 
        class="vt-audio__player"
        controls :src="audioUrl"
        ref="audioElement"></audio>

    
</div>

</template>


<style>

.vt-audio-recorder{
    display: inline-flex;
    justify-items: stretch;
    gap: 0.5em;
    border-radius: var(--vt-border-radius);
    border: 1px solid var(--vt-border-color);
    .vt-audio__button{
        display: grid;
        align-content: center;
        justify-content: center;
        width: 1.5em;
        font-size: 2em;
        border-style: none;
        padding: 0;
        border-radius: var(--vt-border-radius);
        background-color: transparent;
        cursor: pointer;
        &.vt-audio__button--on{
            color: var(--vt-accent-color);
        }
        &:hover{
            background-color: var(--vt-hover-bg-color);
        }
        &:disabled{
            opacity: 0.5;
            cursor: unset;
        }
    }
    .vt-audio__player{
        height: 40px;
    }
}
</style>