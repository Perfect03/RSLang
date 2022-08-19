import './footer.css';

export const createFooter = () => {
    const body = document.querySelector('body') as HTMLBodyElement;

    const footer = document.createElement('footer')
    footer.classList.add('footer')
    body.append(footer)

    const footer_link_rs = document.createElement('a')
    footer_link_rs.classList.add('footer_link_rs')
    footer.appendChild(footer_link_rs)
    footer_link_rs.href = 'https://rs.school/react/'

    const footer_link_rs_img = document.createElement('img')
    footer_link_rs_img.classList.add('footer_link_rs_img')
    footer_link_rs.appendChild(footer_link_rs_img)
    footer_link_rs_img.src = 'https://rs.school/images/rs_school_js.svg'

    const footer_link_github = document.createElement('div')
    footer_link_github.classList.add('footer_link_github')
    footer.appendChild(footer_link_github)

    const footer_github_first = document.createElement('div')
    footer_github_first.classList.add('footer_github_first')
    footer_link_github.appendChild(footer_github_first)

    const footer_link_github_first = document.createElement('a')
    footer_link_github_first.classList.add('footer_link_github_first', 'links_github')
    footer_github_first.appendChild(footer_link_github_first)
    footer_link_github_first.textContent = 'Perfect03'
    footer_link_github_first.href = 'https://github.com/Perfect03'

    const footer_github_second = document.createElement('div')
    footer_github_second.classList.add('footer_github_second')
    footer_link_github.appendChild(footer_github_second)

    const footer_link_github_second = document.createElement('a')
    footer_link_github_second.classList.add('footer_link_github_second', 'links_github')
    footer_github_second.appendChild(footer_link_github_second)
    footer_link_github_second.textContent = 'Falderian'
    footer_link_github_second.href = 'https://github.com/Falderian'

    const footer_github_third = document.createElement('div')
    footer_github_third.classList.add('footer_github_third')
    footer_link_github.appendChild(footer_github_third)

    const footer_link_github_third = document.createElement('a')
    footer_link_github_third.classList.add('footer_link_github_third', 'links_github')
    footer_github_third.appendChild(footer_link_github_third)
    footer_link_github_third.textContent = 'AlisaFed'
    footer_link_github_third.href = 'https://github.com/AlisaFed'

    const footer_year = document.createElement('div')
    footer_year.classList.add('footer_year')
    footer.appendChild(footer_year)

    const footer_year_content = document.createElement('p')
    footer_year_content.classList.add('footer_year_content')
    footer_year.appendChild(footer_year_content)
    footer_year_content.textContent = '© 2022'
}
