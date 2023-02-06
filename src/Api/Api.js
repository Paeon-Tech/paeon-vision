import Dawal from '../Assets/img/team-member/dawal.jpg'
import Fababeir from '../Assets/img/team-member/fababeir.jpg'
import Florita from '../Assets/img/team-member/florita.jpg'
import Lotao from '../Assets/img/team-member/lotao.jpg'
import Mariano from '../Assets/img/team-member/mariano.jpg'

const API = {
    nav_menu: [
        {
            menu: 'Home',
            path: '/',
        },
        {
            menu: 'Contact',
            path: '/Contact',
        },
        {
            menu: 'About',
            path: '/About',
        },
    ],
    team_member: [
        {
            name: 'John Carlo T. Fababeir',
            img_src: Fababeir,
            email: 'johncarlofababeir@outlook.com',
            badge: [
                {
                    color: 'success',
                    badge_name: 'Software Developer',
                },
                {
                    color: 'info',
                    badge_name: 'Project Manager',
                },
            ],
        },
        {
            name: 'Cedric Paul B. Dawal',
            img_src: Dawal,
			email: 'bernabecedric1@gmail.com',
            badge: [
                {
                    color: 'warning',
                    badge_name: 'Researcher',
                },
            ],
        },
        {
            name: 'Romano D. Lotao',
            img_src: Lotao,
			email: 'lutaolester10@gmail.com',
            badge: [
                {
                    color: 'warning',
                    badge_name: 'Researcher',
                },
            ],
        },
        {
            name: 'Crischell Jay D. Florita',
            img_src: Florita,
			email: 'cjflorita01@gmail.com',
            badge: [
                {
                    color: 'warning',
                    badge_name: 'Researcher',
                },
            ],
        },
        {
            name: 'Fely L. Mariano',
            img_src: Mariano,
			email: 'felymariano0211@gmail.com',
            badge: [
                {
                    color: 'warning',
                    badge_name: 'Researcher',
                },
            ],
        },
    ],
}

export default API
