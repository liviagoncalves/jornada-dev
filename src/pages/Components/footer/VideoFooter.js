import React from "react";
import "./VideoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter() {
    return(
        <div className='videoFooter'>
            <div className='videoFooter_text'>
                <h3>@Livia</h3>
                <p>Descrição do Vídeo</p>
                <div className='videoFooter_music'>
                    <MusicNoteIcon/>
                    <div className='videoFooterMusic_text'>
                        <p>Titulo da musica</p>
                    </div>
                </div>
            </div>
            <img className="videoFooter_record" src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png" alt="Imagem de um vinil girando"/>
        </div>
    )
}
export default VideoFooter