import { NavLink } from 'react-router-dom'

const NavigationBar = () => {
  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'Services', to: '/services' },
    { name: 'Categories', to: '/categories' },
    { name: 'About Us', to: '/about' },
    { name: 'Vendor', to: '/vendor' },
  ]

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-end space-x-6">
      <div className="text-2xl font-bold text-red-700 mr-auto">B</div>
      {navItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.to}
          className={({ isActive }) =>
            `text-gray-700 hover:text-red-700 px-3 py-1 rounded ${
              isActive ? 'bg-red-100 font-semibold' : ''
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}
      <NavLink
        to="/signin"
        className="px-3 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
      >
        Sign in
      </NavLink>
      <NavLink
        to="/register"
        className="px-3 py-1 rounded bg-gray-800 text-white hover:bg-gray-900"
      >
        Register
      </NavLink>
    </nav>
  )
}

export default NavigationBar
