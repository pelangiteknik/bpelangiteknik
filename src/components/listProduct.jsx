'use client'
import styles from '../components/listProduct.module.css'
import { HandleDraf } from '../service/handleDraf'
import { useState } from 'react'
import FormInput from "../components/FormInput";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { MdHome } from "react-icons/md";

export default function ListProduct({ dataList, query }) {
    const router = useRouter()
    const [klik, setKlik] = useState(false)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [search, setSearch] = useState(query)

    const GetDetailProduct = async (id) => {
        setKlik(true)
        setLoading(true)
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get/product?id=${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${process.env.NEXT_PUBLIC_SECREET}`
                },
                next: {
                    revalidate: 0
                }
            })
            const data = await res.json()
            setData(data?.data[0])
            setLoading(false)
            return data

        } catch (error) {
            console.log(error);
        }
    }

    const UpdatePublish = async (slug, draf) => {
        setLoading(true)
        await HandleDraf(slug, draf)
        setLoading(false)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        setLoading(true)
        router.push(`/s/${search}`)
    }


    return (
        <div className={styles.container}>
            <div className={styles.dalamcontainer}>
                <div className={styles.atas}>
                    <Link href={'/'} className={styles.judul}><MdHome size={30} />PelangiTeknik</Link>
                    <div className={styles.search}>
                        <form onSubmit={handleSearch}>
                            <input
                                type="text"
                                placeholder="Search..."
                                onChange={(e) => setSearch(e.target.value)}
                                value={search}
                            />

                            <button type="submit">Search</button>
                        </form>
                    </div>
                </div>
                <div className={styles.bawah}>
                    <table className={styles.producttable}>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Stock</th>
                                <th>Price</th>
                                <th>Discount (%)</th>
                                <th>Final Price</th>
                                <th>Publish</th> {/* Column for toggle */}
                            </tr>
                        </thead>
                        <tbody>
                            {dataList?.map((product, index) => {

                                return (<tr key={index} >
                                    <td onClick={() => GetDetailProduct(product?.slugProduct)}>{product?.productName}</td>
                                    <td>{product?.stockProduct}</td>
                                    <td>{product?.productPrice}</td>
                                    <td>{product?.productDiscount}</td>
                                    <td>{product?.productPriceFinal}</td>
                                    <td>
                                        <label className={styles.switch}>
                                            <input
                                                type="checkbox"
                                                checked={product?.saveDraf}
                                                onChange={() => UpdatePublish(product?.slugProduct, !product?.saveDraf)}
                                            />
                                            <span className={styles.slider}></span>
                                        </label>
                                    </td>
                                </tr>)
                            }
                            )}
                        </tbody>
                    </table>
                </div>
            </div>


            {loading ?
                <div className={styles.loading}>
                    <div className={styles.kotak} >
                        LOADING...
                    </div>
                </div> :
                klik &&
                <>
                    <div className={styles.bghitam} onClick={() => setKlik(false)}></div>
                    <div className={styles.containerupdate}>
                        <FormInput data={data} />
                    </div>
                </>
            }
        </div >
    )
}
