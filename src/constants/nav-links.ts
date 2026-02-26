interface NavLink {
	name: string
	to: string
}

export const navLinks: NavLink[] = [
	{name: 'About', to: 'about'},
	{name: 'Skills', to: 'skills'},
	{name: 'Projects', to: 'projects'},
	{name: 'Experience', to: 'experience'},
	{name: 'Contact', to: 'contact'}
]
