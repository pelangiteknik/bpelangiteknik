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
import { MdDeleteOutline } from "react-icons/md";

import dynamic from 'next/dynamic';
import { HandleDeleteProduct } from '@/service/handleDeleteProduct';
const FormInput = dynamic(() => import('@/components/FormInput'), {
    loading: () => <p>Loading Form...</p>, // Optional: loading state while the component is being loaded
    ssr: false // Disable server-side rendering for this component
});

import { usePathname } from 'next/navigation'
import { FormatRupiah } from '@/utils/formatRupiah';

export default function ListProduct({ dataList, query, dataKategori }) {
    const pathname = usePathname()
    const KondisiPencarian = pathname.startsWith('/s/')

    const setLayang = useCon((state) => state.setLayang)
    const layang = useCon((state) => state.layang)
    // const savedSearch = localStorage.getItem('searchLocal');


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
        // localStorage.setItem('searchLocal', search)
    }


    const HandleDeleteProducts = async (e) => {
        if (confirm('Apakah yakin hapus?')) {
            // Save it!
            setLoading(true)
            await HandleDeleteProduct(e)
            setLoading(false)
            toast.success('Successfully!')
        } else {
            // Do nothing!
            console.log('Thing was not saved to the database.');
        }
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
                    {
                        KondisiPencarian &&
                        <div className={styles.hasilpencarian}>
                            Hasil Pencarian: <b>
                                {query}
                            </b>
                        </div>
                    }
                    <table
                        style={KondisiPencarian ? { margin: 0 } : {}}
                        className={styles.producttable}>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Stock</th>
                                <th>Price</th>
                                <th>Discount (%)</th>
                                <th>Final Price</th>
                                <th>Publish</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataList?.map((product, index) => {

                                return (<tr key={index} >
                                    <td onClick={() => GetDetailProduct(product?.slugProduct)}>{product?.productName}</td>
                                    <td>{product?.stockProduct}</td>
                                    <td>{FormatRupiah(product?.productPrice)}</td>
                                    <td>{product?.productDiscount}%</td>
                                    <td>{FormatRupiah(product?.productPriceFinal)}</td>
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
                                    <td onClick={() => HandleDeleteProducts(product?.slugProduct)}><MdDeleteOutline size={30} /></td>
                                </tr>)
                            }
                            )}
                        </tbody>
                    </table>

                    {KondisiPencarian && !dataList.length && <div>Data Tidak ada</div>}
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
                            <FormInput data={data} text={'Update Product'} dataKategori={dataKategori} />
                        </div>
                    </>
            }
        </div >
    )
}
