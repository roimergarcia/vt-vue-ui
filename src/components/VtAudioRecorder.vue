<script setup>

import { computed, ref } from 'vue';
import IconRecord from '~icons/mdi/record-circle'
import IconPlay from '~icons/mdi/play-box-outline'
import IconStop from '~icons/mdi/stop-circle-outline'
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
const isPlaying = ref(false);
const hasAudioFile = computed(()=> {
    const file = audioFile.value;

    if (!file) return false;

    return (typeof file.stream === 'function');
})

let mediaRecorder = null;
let audioParts = [];



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

const stop = async function(e){

    if(!!mediaRecorder){
        if(isRecording.value){
            stopRecord(e);
        } else if(isPlaying.value){
            stopPlay(e);
        }
    }
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
    const extension = mimeType.startsWith('audio/aac') ? 'aac':
                      mimeType.startsWith('audio/mpeg') ? 'mp3':
                      mimeType.startsWith('audio/ogg') ? 'ogg':
                      mimeType.startsWith('audio/opus') ? 'opus':
                      mimeType.startsWith('audio/wav') ? 'wav':
                      mimeType.startsWith('audio/webm') ? 'weba':
                      'audio';
    audioFileName.value = 'recording-' + (new Date()).format('yyyy-MM-dd_HH:mm') + extension;
    isRecording.value = false;
    
     
    if(!!audioUrl){
        URL.revokeObjectURL(audioUrl.value);
    }
    audioUrl.value = window.URL.createObjectURL(blob);
    console.log({audioUrl:audioUrl.value}) 

} 

const stopPlay = function(e){
    console.log('stopPlay')
    
    audioElement.value.stop()
} 
const deleteAudio = function(e){
    console.log('deleteAudio')
    //mediaRecorder.stop();
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
        :class="{'vt-audio__button--on': isPlaying}"
        :disabled="isPlaying"
        @click="startPlay($event)"><IconPlay /></button>

    <button class="vt-audio__button" 
        :disabled="!(isRecording || isPlaying)"
        @click="stop($event)"><IconStop /></button>

    <button class="vt-audio__button" 
        :class="{'vt-audio__button--on': isRecording}" 
        :disabled="isRecording || isPlaying || !hasAudioFile"
        @click="deleteAudio($event)"><IconDelete /></button>

    <video v-show="hasAudioFile" 
        controls :src="audioUrl"
        ref="audioElement"></video>
    <span v-show="hasAudioFile" >
        {{ audioFileName }}
    </span>
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
}
</style>