import { Button } from "antd-mobile"
import { Outlet } from "react-router-dom"
import { useEffect } from "react"
import { getBillList } from "../store/modules/billStores"
import { useDispatch } from "react-redux"


const Layout = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBillList())
    }, [dispatch])
    return (

        <div>
            <Outlet></Outlet>
            我是Layout
            <Button color="primary">测试全局</Button>
            <div className="puple">
                <Button color="primary">局部</Button>
            </div>

        </div>
    )
}

export default Layout