function createContacts() {
    var contacts = [
        {
            'name': 'Alex Alexis',
            'image': 'https://randomuser.me/api/portraits/women/56.jpg',
            'last_chat': [
                {
                    'date': '9:15 AM',
                    'message': 'Lorem ipsum dolor sit amet consectetur adipislcing elit',
                }
            ]
        },
        {
            'name': 'Ramon Reed',
            'image': 'https://randomuser.me/api/portraits/women/59.jpg',
            'last_chat': [
                {
                    'date': '9:15 am',
                    'message': 'Lorem Hello!',
                }
            ]
        },
        {
            'name': 'Eli Barrett',
            'image': 'https://randomuser.me/api/portraits/women/58.jpg',
            'last_chat': [
                {
                    'date': '8:55 pm',
                    'message': 'Lorem ipsum dolor sit'
                }
            ]
        }
    ]

    var lis = ''
    contacts.forEach((c) => {
            lis += `<li class="p-2 card mt-2">
            <div class="card-body">
            <div class="d-flex">
            <div>
            <img class="rounded-pill me-3" width="60"
            src="${c.image}">
            </div>
            <div>
            < p class="fw-bold mb-0 text-light">${c.name}</p>
            < p class="small text-muted">${c.last_chat[0]['message']}</p>
            </div>
            <div>
            < p class="small text-muted">${c.last_chat[0]['date']}</p>
            <span class="badge bg-danger rounded-pill float-end">l</span>
            </div>
            </div>
            </div>
            </li>`
    })
    document.querySelector('.contact').innerHTML = lis;
}

createContacts()