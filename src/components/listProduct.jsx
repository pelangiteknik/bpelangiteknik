'use client'
import styles from '@/components/listProduct.module.css'
import { HandleDraf } from '@/service/handleDraf'
import { useState } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { MdHome } from "react-icons/md";
import { handleDetailProduct } from '@/service/handleDetailProduct';
import { useCon } from '@/zustand/useCon';
import toast from 'react-hot-toast';

import dynamic from 'next/dynamic';
const FormInput = dynamic(() => import('@/components/FormInput'), {
    loading: () => <p>Loading Form...</p>, // Optional: loading state while the component is being loaded
    ssr: false // Disable server-side rendering for this component
});

export default function ListProduct({ dataList, query }) {
    const setLayang = useCon((state) => state.setLayang)
    const layang = useCon((state) => state.layang)

    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [search, setSearch] = useState(query)

    const GetDetailProduct = async (id) => {
        setLayang()
        setLoading(true)
        const data = await handleDetailProduct(id)
        setData(data?.data[0])
        setLoading(false)
    }

    const UpdatePublish = async (slug, draf) => {
        setLoading(true)
        await HandleDraf(slug, draf)
        setLoading(false)
        toast.success('Successfully!')
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
                    <Link href={'/post'} target='_blank'> <button className={styles.searchP}>Posting</button></Link>
                    <div className={styles.search}>
                        <form onSubmit={handleSearch}>
                            <input
                                type="text"
                                placeholder="Search..."
                                onChange={(e) => setSearch(e.target.value)}
                                value={search}
                            />

                            <button className={styles.searchB} type="submit">Search</button>
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
                                                checked={!product?.saveDraf}
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


            {
                loading ?
                    <div className={styles.loading}>
                        <div className={styles.kotak} >
                            LOADING...
                        </div>
                    </div> :
                    layang &&
                    <>
                        <div className={styles.bghitam} onClick={() => setLayang()}></div>
                        <div className={styles.containerupdate}>
                            <FormInput data={data} text={'Update Product'} />
                        </div>
                    </>
            }
        </div >
    )
}
