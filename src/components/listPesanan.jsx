'use client'
import styles from '@/components/listPesanan.module.css'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { MdHome } from "react-icons/md";
import { MdLibraryAdd } from "react-icons/md";
import Logout from './logout';

export default function ListPesanan() {
    const router = useRouter()
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSearch = (e) => {
        e.preventDefault()
        setLoading(true)
        router.push(`/s/${search}`)
        // localStorage.setItem('searchLocal', search)
    }

    const [orderData, setOrderData] = useState([
        { id: 1, date: "2023-10-15", total: "Rp 1.250.000", status: "Selesai", items: 3, customer: "Budi Santoso" },
        { id: 2, date: "2023-10-16", total: "Rp 750.000", status: "Diproses", items: 2, customer: "Siti Rahayu" },
        { id: 3, date: "2023-10-17", total: "Rp 2.000.000", status: "Dikirim", items: 5, customer: "Ahmad Hidayat" },
        { id: 4, date: "2023-10-18", total: "Rp 500.000", status: "Selesai", items: 1, customer: "Dewi Lestari" },
        { id: 5, date: "2023-10-19", total: "Rp 1.800.000", status: "Diproses", items: 4, customer: "Eko Prasetyo" },
        { id: 6, date: "2023-10-20", total: "Rp 950.000", status: "Dikirim", items: 2, customer: "Rina Wati" },
        { id: 7, date: "2023-10-21", total: "Rp 3.500.000", status: "Selesai", items: 7, customer: "Joko Widodo" },
        { id: 8, date: "2023-10-22", total: "Rp 1.100.000", status: "Diproses", items: 3, customer: "Sri Mulyani" },
        { id: 9, date: "2023-10-23", total: "Rp 650.000", status: "Dikirim", items: 2, customer: "Agus Yudhoyono" },
        { id: 10, date: "2023-10-24", total: "Rp 2.250.000", status: "Selesai", items: 6, customer: "Mega Wati" },
    ]);

    const handleStatusChange = (id, newStatus) => {
        setOrderData((prevOrders) =>
            prevOrders.map((order) =>
                order.id === id ? { ...order, status: newStatus } : order
            )
        );
    };


    return (
        <div className={styles.container}>
            <div className={styles.dalamcontainer}>
                <div className={styles.atas}>
                    <Link href={'/'} className={styles.judul}><MdHome size={30} />PelangiTeknik</Link>

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
                <div className={styles.bawah}>
                    <table className={styles.orderTable}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Date</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th>Items</th>
                                <th>Customer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderData.map((order) => (
                                <tr key={order.id}>
                                    <td>{order.id}</td>
                                    <td>{order.date}</td>
                                    <td>{order.total}</td>
                                    <td>
                                        <select
                                            style={order.status === "Dikirim" && { background: 'yellow' } ||
                                                order.status === "Selesai" && { background: 'green', color: 'white' } ||
                                                order.status === "Diproses" && { background: 'grey' } || {}
                                            }
                                            value={order.status}
                                            onChange={(e) => handleStatusChange(order.id, e.target.value)}
                                        >
                                            <option value="Diproses">Diproses</option>
                                            <option value="Dikirim">Dikirim</option>
                                            <option value="Selesai">Selesai</option>
                                        </select>
                                    </td>
                                    <td>{order.items}</td>
                                    <td>{order.customer}</td>
                                    <td>
                                        {order.status === "Dikirim" && (
                                            <div>
                                                <input
                                                    type="text"
                                                    placeholder="Masukkan nomor resi"
                                                    value={''}
                                                    onChange={(e) => handleTrackingChange(order.id, e.target.value)}
                                                />
                                                <button onClick={() => handleSaveTracking(order.id)}>
                                                    Simpan
                                                </button>
                                            </div>
                                        )}
                                        {order.status === "Selesai" && <span>Pesanan selesai</span>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {
                loading &&
                <div className={styles.loading}>
                    <div className={styles.kotak} >
                        LOADING...
                    </div>
                </div>}
        </div>
    )
}
