'use client'
import Link from 'next/link'
import styles from '../components/listProduct.module.css'
import { HandleDraf } from '../service/handleDraf'

export default function ListProduct({ dataList }) {

    return (
        <div className={styles.container}>
            <div className={styles.dalamcontainer}>
                <div className={styles.atas}>
                    <div className={styles.judul}>PelangiTeknik</div>
                    <div className={styles.judulkanan}>List Product</div>
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
                                    <td><Link target='_blank' href={`/u/${product.slugProduct}`} >{product.productName}</Link></td>
                                    <td>{product.stockProduct}</td>
                                    <td>{product.productPrice}</td>
                                    <td>{product.productDiscount}</td>
                                    <td>{product.productPriceFinal}</td>
                                    <td>
                                        <label className={styles.switch}>
                                            <input
                                                type="checkbox"
                                                checked={product.saveDraf}
                                                onChange={() => HandleDraf(product.slugProduct, !product.saveDraf)}
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
        </div >
    )
}
