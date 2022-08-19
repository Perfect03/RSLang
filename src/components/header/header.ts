export const createFooter = () => {
    const body = document.querySelector('body') as HTMLBodyElement;
    const header = document.createElement('header')
    header.classList.add('header')
    body.append(header)

    const header_components = document.createElement('div')
    header_components.classList.add('header_components')
    header.appendChild(header_components)

    //Burger button
    const button_burger = document.createElement('button')
    button_burger.classList.add('button_burger')
    header_components.appendChild(button_burger)

    const button_burger_box = document.createElement('span')
    button_burger_box.classList.add('button_burger_box')
    button_burger.appendChild(button_burger_box)

    const button_burger_box_img = document.createElement('img')
    button_burger_box_img.classList.add('button_burger_box_img')
    button_burger_box.appendChild(button_burger_box_img)
    button_burger_box_img.src = 'assets/burger_menu.png'

    //Header pageName & userName
    const header_content = document.createElement('div')
    header_content.classList.add('header_content')
    header_components.appendChild(header_content)

    //pageName
    const header_content_page = document.createElement('div')
    header_content_page.classList.add('header_content_page')
    header_content.appendChild(header_content_page)

    const header_content_page_name = document.createElement('h1')
    header_content_page_name.classList.add('header_content_page_name')
    header_content_page.appendChild(header_content_page_name)
    header_content_page_name.textContent = 'Main'

    //userName
    const header_content_user_box = document.createElement('div')
    header_content_user_box.classList.add('header_content_user_box')
    header_content.appendChild(header_content_user_box)

    const header_content_user = document.createElement('div')
    header_content_user.classList.add('header_content_user')
    header_content_user_box.appendChild(header_content_user)

    const header_content_user_name = document.createElement('p')
    header_content_user_name.classList.add('header_content_user_name')
    header_content_user.appendChild(header_content_user_name)
    header_content_user_name.textContent = 'Jone Doe' //`${user_name}`

    const header_content_user_email = document.createElement('p')
    header_content_user_email.classList.add('header_content_user_email')
    header_content_user.appendChild(header_content_user_email)
    header_content_user_email.textContent = 'jondoe@gmail.com' //`${user_email}`

    const header_content_user_img_box = document.createElement('div')
    header_content_user_img_box.classList.add('header_content_user_img_box')
    header_content_user_box.appendChild(header_content_user_img_box)

    const header_content_user_img = document.createElement('img')
    header_content_user_img.classList.add('header_content_user_img')
    header_content_user_img_box.appendChild(header_content_user_img)
    header_content_user_img.src = 'assets/user.png'

    //Button LogIn
    const header_content_login = document.createElement('div')
    header_content_login.classList.add('header_content_login')
    header_content.appendChild(header_content_login)

    const header_content_login_button = document.createElement('button')
    header_content_login_button.classList.add('main_page_button', 'custom-btn')
    header_content_login.appendChild(header_content_login_button)
    header_content_login_button.textContent = 'LOGIN'
}