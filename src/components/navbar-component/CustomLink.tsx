import { Link, useMatch } from 'react-router-dom'

interface ICustomLinkProps {
    children: React.ReactNode
    to: string
    [key: string]: any
}

export const CustomLink: React.FC<ICustomLinkProps> = ({children, to, ...props}) => {
    const match = useMatch({
        path: to,
        end: to.length === 1
    })

    return (
        <Link to={to}
            className={match ? 'active-link' : 'link'}
            {...props}
        >
            {children}
        </Link>
    )
}