import React from 'react';
import './main.css';
import {Topic} from './topic';

export class Main extends React.Component{
    render(){
        return(
            <div>
                <h1>Nicholas Iten</h1>
                <table>
                    <tr>
                        <td><a href="https://www.linkedin.com/in/paul-nicholas-iten-332967168/" target="_blank"><i class="fab fa-linkedin-in"></i></a></td>
                        <td><a href="https://github.com/itenpn" target="_blank"><i class="fab fa-github"></i></a></td>
                        <td><a href="https://www.instagram.com/nick.iten/" target="_blank"><i class="fab fa-instagram"></i></a></td>
                        <td><a href="mailto:iten.pn@gmail.com" target="_blank"><i class="far fa-envelope"></i></a></td>
                    </tr>
                </table>
            </div>
        );
    }
}
