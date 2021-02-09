import React from "react";

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Borrar</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const rows = props.personasData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.nombre}</td>
                <td>{row.apellido}</td>
                <td>
                    <button onClick={() =>
                        props.removePersona(index)}>Borrar</button>
                </td>
            </tr >
        )
    })
    return <tbody>{rows}</tbody>
}

const Table = (props) => {
    const { personasData, removePersona } = props;
    return (
        <table>
            <TableHeader />
            <TableBody personasData={personasData} removePersona={removePersona} />
        </table>
    )
}

export default Table;