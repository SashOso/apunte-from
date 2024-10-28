function LoadSidebar(){
    const sidebar_html=`
        <ul>
            <li><a href="index.html">
                <i class="fa-solid fa-house"></i>
                <span>Inicio</span>
            </a></li>

            <li><a href="tabla.html">
                <i class="fa-solid fa-table"></i>
                <span>Tabla</span>
            </a></li>

            <li><a href="formulario.html">
                <i class="fa-brands fa-wpforms"></i>
                <span>Formulario</span>
            </a></li>

            <li><a href="eliminar.html">
                <i class="fa-solid fa-trash"></i>
                <span>Eliminar</span>
            </a></li>

        </ul>
    `;
    document.querySelector(".sidebar").innerHTML=sidebar_html
}

LoadSidebar()