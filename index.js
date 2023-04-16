List.forEach(list => {
    const tr = document.createElement('tr');
    const trContent = `
            <td>${list.ID}</td>
            <td>${list.Name}</td>
            <td>${list.Depart}</td>
            <td>${list.Date}</td>
            <td>${list.JoinTime}</td>
            <td>${list.LogoutTime}</td>
            <td>${list.Details}</td>
            `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);            
});
// shortcut order //
const List = [
    {
        ID: '01',
        Name: 'Sam David',
        Depart: 'Design',
        Date: '02-21-23',
        JoinTime: '8:00AM',
        LogoutTime: '3:00PM',
        Details: 'View',
    },
    {
        ID: '02',
        Name: 'Robert Green',
        Depart: 'Coding',
        Date: '02-21-23',
        JoinTime: '9:00AM',
        LogoutTime: '4:00PM',
        Details: 'View',
    },
    {
        ID: '03',
        Name: 'Thomas Green',
        Depart: 'Testing',
        Date: '02-21-23',
        JoinTime: '8:00AM',
        LogoutTime: '3:00PM',
        Details: 'View',
    },
    {
        ID: '04',
        Name: 'Patricia Green',
        Depart: 'Design',
        Date: '02-21-23',
        JoinTime: '8:00AM',
        LogoutTime: '3:00PM',
        Details: 'View',
    },
    {
        ID: '01',
        Name: 'Malika Green',
        Depart: 'Design',
        Date: '02-20-23',
        JoinTime: '8:00AM',
        LogoutTime: '3:00PM',
        Details: 'View',
    },
    {
        ID: '02',
        Name: 'Robert Green',
        Depart: 'Coding',
        Date: '02-20-23',
        JoinTime: '9:00AM',
        LogoutTime: '4:00PM',
        Details: 'View',
    },
    {
        ID: '03',
        Name: 'Thomas Green',
        Depart: 'Testing',
        Date: '02-20-23',
        JoinTime: '8:00AM',
        LogoutTime: '3:00PM',
        Details: 'View',
    },

   
]