import React from 'react'
import "./CalendarioDeAsistencias.css";

const CalendarioDeAsistencias = () => {
  return (
    <div className="Calendario">
        <div className="CalendarioTitulo">
            <h2>Calendario De Asistencia</h2>
            <div className="Meses">
                <span className="FlechaIzq">&lt;</span>
                <span className="MesNombre">Junio</span>
                <span className="FlechaDer">&gt;</span>
            </div>
        </div>
        <hr />
        <div className="CalendarioSemana">
            <div className="Semana">
                <div>Lu</div>
                <div>Ma</div>
                <div>Mi</div>
                <div>Ju</div>
                <div>Vi</div>
                <div>Sa</div>
                <div>Do</div>
            </div>
            <div className="dias">
                <div></div><div></div><div></div><div></div><div></div><div>1</div><div>2</div>
                <div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div><div>9</div>
                <div>10</div><div>11</div><div>12</div><div>13</div><div>14</div><div>15</div><div>16</div>
                <div>17</div><div>18</div><div>19</div><div>20</div><div>21</div><div>22</div><div>23</div>
                <div>24</div><div>25</div><div>26</div><div className="Dibujado">27</div><div className="Dibujado">28</div><div className="Dibujado">29</div><div className="Dibujado">30</div>
                <div>31</div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div>
        </div>
    </div>
  )
}

export default CalendarioDeAsistencias