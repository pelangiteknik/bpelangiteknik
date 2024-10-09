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
import { MdLibraryAdd } from "react-icons/md";
import { FaBorderAll } from "react-icons/fa";
import { usePathname } from 'next/navigation'
import { FormatRupiah } from '@/utils/formatRupiah';
import Logout from './logout';
import { HandleDrafArtikel } from '@/service/artikel/handleDraf';
import { HandleDetailArtikel } from '@/service/artikel/handleDetail';
import { HandleDeleteArtikel } from '@/service/artikel/handleDelete';

import dynamic from 'next/dynamic';
import { HandleDeleteProduct } from '@/service/handleDeleteProduct';
const FormInput = dynamic(() => import('@/components/FormInput'), {
    loading: () => <p>Loading Form...</p>, // Optional: loading state while the component is being loaded
    ssr: false // Disable server-side rendering for this component
});
const FormInputArtikel = dynamic(() => import('@/components/FormInputArtikel'), {
    loading: () => <p>Loading Form...</p>, // Optional: loading state while the component is being loaded
    ssr: false // Disable server-side rendering for this component
});


export default function ListProduct({ dataList, query, dataKategori, dataArtikel, dataKategoriArtikel }) {

    const pathname = usePathname()
    const KondisiPencarian = pathname.startsWith('/s/')

    const setLayang = useCon((state) => state.setLayang)
    const layang = useCon((state) => state.layang)

    const setLayangArtikel = useCon((state) => state.setLayangArtikel)
    const layangArtikel = useCon((state) => state.layangArtikel)
    // const savedSearch = localStorage.getItem('searchLocal');


    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [dataArtikelUpdate, setDataArtikelUpdate] = useState(null)
    const [search, setSearch] = useState(query)

    const GetDetailProduct = async (id) => {
        setLoading(true)
        try {
            setLayang()
            const data = await handleDetailProduct(id)
            setData(data?.data[0])
            setLoading(false)
        } catch {
            setLoading(false)
            toast.error(`Error Internet`);
        }
    }
    const GetDetailProductArtikel = async (id) => {
        setLoading(true)
        try {
            setLayangArtikel()
            const data = await HandleDetailArtikel(id)
            setDataArtikelUpdate(data?.data[0])
            setLoading(false)
        } catch {
            setLoading(false)
            toast.error(`Error Internet`);
        }
    }

    const UpdatePublish = async (slug, draf) => {
        setLoading(true)
        try {
            await HandleDraf(slug, draf)
            setLoading(false)
            toast.success('Successfully!')
        } catch {
            setLoading(false)
            toast.error(`Error Internet`);
        }
    }
    const UpdatePublishArtikel = async (slug, draf) => {
        setLoading(true)
        try {
            await HandleDrafArtikel(slug, draf)
            setLoading(false)
            toast.success('Successfully!')
        } catch {
            setLoading(false)
            toast.error(`Error Internet`);
        }
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
            try {
                await HandleDeleteProduct(e)
                setLoading(false)
                toast.success('Successfully!')
            } catch {
                setLoading(false)
                toast.error(`Error Internet`);
            }
        } else {
            // Do nothing!
            console.log('Thing was not saved to the database.');
        }
    }

    const HandleDeleteArtikels = async (e) => {
        if (confirm('Apakah yakin hapus?')) {
            // Save it!
            setLoading(true)
            await HandleDeleteArtikel(e)
            setLoading(false)
            toast.success('Successfully!')
        } else {
            // Do nothing!
            console.log('Thing was not saved to the database.');
        }
    }

    return (
        <>
            <div className="mobile">hanya digunakan di laptop/komputer</div>
            <div className="desktop">
                <div className={styles.container}>
                    <div className={styles.dalamcontainer}>
                        <div className={styles.atas}>
                            <Link href={'/'} className={styles.judul}><MdHome size={30} />PelangiTeknik</Link>

                            <Link href={'/order'} onClick={() => setLoading(true)}> <button className={styles.searchP}>Orders<FaBorderAll />
                            </button></Link>

                            <Link href={'/post'} onClick={() => setLoading(true)}> <button className={styles.searchP}>Posting Product <MdLibraryAdd />
                            </button></Link>

                            <Link href={'/postartikel'} onClick={() => setLoading(true)}> <button className={styles.searchP}>Posting Artikel <MdLibraryAdd />
                            </button></Link>
                            <div className={styles.ataskanan}>
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
                                <Logout />
                            </div>
                        </div>

                        {/* //PRODUCT */}
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
                                            <td style={{ width: '100px' }}>
                                                <label className={styles.switch}>
                                                    <input
                                                        type="checkbox"
                                                        checked={!product?.saveDraf}
                                                        onChange={() => UpdatePublish(product?.slugProduct, !product?.saveDraf)}
                                                    />
                                                    <span className={styles.slider}></span>
                                                </label>
                                            </td>
                                            <td style={{ width: '50px', cursor: 'pointer', color: 'var(--colormain)' }} onClick={() => HandleDeleteProducts(product?.id)}><MdDeleteOutline size={30} /></td>
                                        </tr>)
                                    }
                                    )}
                                </tbody>
                            </table>

                            {KondisiPencarian && !dataList.length && <div>Data Tidak ada</div>}
                        </div>

                        {/* ARTIKEL */}
                        <div className={styles.bawah}>
                            <table
                                className={styles.producttable}>
                                <thead>
                                    <tr>
                                        <th>Judul Artikel</th>
                                        <th>Publish</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataArtikel?.map((artikel, index) => {

                                        return (<tr key={index} >
                                            <td onClick={() => GetDetailProductArtikel(artikel?.slug)}>{artikel?.title}</td>
                                            <td style={{ width: '100px' }}>
                                                <label className={styles.switch}>
                                                    <input
                                                        type="checkbox"
                                                        checked={!artikel?.saveDraf}
                                                        onChange={() => UpdatePublishArtikel(artikel?.slug, !artikel?.saveDraf)}
                                                    />
                                                    <span className={styles.slider}></span>
                                                </label>
                                            </td>
                                            <td style={{ width: '50px', cursor: 'pointer', color: 'var(--colormain)' }} onClick={() => HandleDeleteArtikels(artikel?.id)}><MdDeleteOutline size={30} /></td>
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
                                    <FormInput
                                        kondisi={true}
                                        data={data}
                                        text={'Update Product'}
                                        dataKategori={dataKategori} />
                                </div>
                            </>
                    }
                    {
                        loading ?
                            <div className={styles.loading}>
                                <div className={styles.kotak} >
                                    LOADING...
                                </div>
                            </div> :
                            layangArtikel &&
                            <>
                                <div className={styles.bghitam} onClick={() => setLayangArtikel()}></div>
                                <div className={styles.containerupdate}>
                                    <FormInputArtikel
                                        kondisi={true}
                                        data={dataArtikelUpdate}
                                        dataKategori={dataKategoriArtikel}
                                        text={'Update Artikel'} />
                                </div>
                            </>
                    }
                </div >
            </div>
        </>
    )
}
