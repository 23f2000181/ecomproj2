import CategoryItem from "../components/CategoryItem";

const services = [
    { href: "/service1", name: "Service 1", imageUrl: "" },
    { href: "/service2", name: "Service 2", imageUrl: "" },
    { href: "/service3", name: "Service 3", imageUrl: "" },
]

const ServicesPage = () => {
    return (
        <div className="min-h-screen bg-beige text-brown p-8">
            <h1 className="text-3xl font-bold mb-6">Services</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {services.map((service) => (
                    <CategoryItem key={service.name} {...service} />
                ))}
            </div>
        </div>
    )
}

export default ServicesPage
