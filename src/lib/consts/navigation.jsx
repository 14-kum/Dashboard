import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog,
	HiOutlineChat
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: '1',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineCube />
	},
	{
		key: '2',
		label: 'Products',
		path: '/products',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: '3',
		label: 'Orders',
		path: '/orders',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: '4',
		label: 'Customers',
		path: '/customers',
		icon: <HiOutlineUsers />
	},
	{
		key: '5',
		label: 'Transactions',
		path: '/transactions',
		icon: <HiOutlineDocumentText />
	},
	{
		key: '6',
		label: 'Messages',
		path: '/messages',
		icon: <HiOutlineChat />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]