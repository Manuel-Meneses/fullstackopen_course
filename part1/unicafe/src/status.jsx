const StatisticLine = (props) => {
    return(
        <table>
            <tbody>
                <tr>
                    <td>
                        {props.status} {props.count} 
                    </td>
                </tr>
            </tbody>
       </table>
    );
}

export default StatisticLine