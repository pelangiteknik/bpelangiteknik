'use client'
import { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from '@/components/formInput.module.css'
import { ContentState, convertFromHTML, convertToRaw, EditorState } from "draft-js";
import htmlToDraft from 'html-to-draftjs';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "draft-js/dist/Draft.css";
import draftToHtml from "draftjs-to-html";
import { useRouter } from 'next/navigation';
import { MdOutlineFileUpload } from "react-icons/md";
// import Image from 'next/image';
import { HandleDeleteImageC } from '@/service/handleDeleteImageC';
import { useCon } from '@/zustand/useCon';
import toast from 'react-hot-toast';
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { HandleValidasi } from '@/service/handleValidasi';
import Logout from './logout';
import { HandlePostCategory } from '@/service/handlePostCategory';

export default function FormInput({ data, text, dataKategori, kondisi }) {


    const pathname = usePathname()
    const setLayang = useCon((state) => state.setLayang)

    const [klikKategori, setKlikKategori] = useState(false);

    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [draf, setDraf] = useState(null)

    // TEXT EDITOR
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const onEditorStateChange = (editorState) => {
        // formik.setFieldValue('myFile', e.target.files[0]);
        setEditorState(editorState)
    };

    useEffect(() => {
        const edit = () => {
            const contentBlock = htmlToDraft(data?.descProduct);
            const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
            const editorState = EditorState.createWithContent(contentState);
            setEditorState(editorState)
        }
        data && edit()
    }, [data, data?.descProduct])

    // const ResetDeskripsi = () => {
    //     const blocksFromHTML = convertFromHTML('&nbsp;')
    //     const state = ContentState.createFromBlockArray(
    //         blocksFromHTML.contentBlocks,
    //         blocksFromHTML.entityMap,
    //     )
    //     setEditorState(EditorState.createWithContent(state))
    // }


    // UNTUK GAMBAR LIST PRODUCT
    const [selectIDImage, setSelectIDImage] = useState([])

    // State untuk menyimpan URL preview
    const [previews, setPreviews] = useState({
        images1: data?.url_image_product[0],
        images2: data?.url_image_product[1],
        images3: data?.url_image_product[2],
        images4: data?.url_image_product[3],
        images5: data?.url_image_product[4],
        images6: data?.url_image_product[5],
    });

    const [files, setFiles] = useState({
        images1: null,
        images2: null,
        images3: null,
        images4: null,
        images5: null,
        images6: null,
    });

    // Fungsi untuk menangani perubahan file
    const handleFileChange = (event, imageName) => {
        const file = event.target.files[0];

        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setPreviews((prevPreviews) => ({
                ...prevPreviews,
                [imageName]: previewUrl,
            }));
            setFiles((prevFiles) => ({
                ...prevFiles,
                [imageName]: file,
            }));
        }
    };

    // Fungsi untuk menghapus gambar yang sudah diupload
    const handleDelete = (imageName) => {
        const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus gambar ini?");
        if (confirmDelete) {
            setPreviews((prevPreviews) => ({
                ...prevPreviews,
                [imageName]: null,
            }));
        }
    };

    const handleDeleteLocal = (e, imageName) => {
        const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus gambar ini?");
        if (confirmDelete) {
            setSelectIDImage([...selectIDImage, e])
            setPreviews((prevPreviews) => ({
                ...prevPreviews,
                [imageName]: null,
            }));
        }
    }

    // UNTUK GAMBAR PRODUCT UTAMA
    const [selectIDImageUtama, setSelectIDImageUtama] = useState([])


    // State untuk menyimpan URL preview
    const [previewsUtama, setPreviewsUtama] = useState({
        imageUtama: data?.imageProductUtama
    });

    const [filesUtama, setFilesUtama] = useState({
        imageUtama: null
    });

    // Fungsi untuk menangani perubahan file
    const handleFileChangeUtama = (event, imageName) => {
        const file = event.target.files[0];

        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setPreviewsUtama((prevPreviews) => ({
                ...prevPreviews,
                [imageName]: previewUrl,
            }));
            setFilesUtama((prevFiles) => ({
                ...prevFiles,
                [imageName]: file,
            }));
        }
    };

    // Fungsi untuk menghapus gambar yang sudah diupload
    const handleDeleteUtama = (imageName) => {
        const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus gambar ini?");
        if (confirmDelete) {
            setPreviewsUtama((prevPreviews) => ({
                ...prevPreviews,
                [imageName]: null,
            }));
        }
    };

    const handleDeleteLocalUtama = (e, imageName) => {
        const confirmDelete = window.confirm("Apakah Anda yakin ingin ganti gambar ini?");
        if (confirmDelete) {
            setSelectIDImageUtama([...selectIDImageUtama, e])
            setPreviewsUtama((prevPreviews) => ({
                ...prevPreviews,
                [imageName]: null,
            }));
        }
    }


    // State untuk menyimpan nilai input
    const [kategori, setKategori] = useState('');
    const [loadingKategori, setLoadingKategori] = useState(false);

    // Fungsi untuk menangani perubahan input
    const handleInputChangeKategori = (event) => {
        setKategori(event?.target.value);
    };

    // Fungsi untuk submit form
    const handleSubmitKategori = async (event) => {
        event.preventDefault();
        setLoadingKategori(true)

        if (dataKategori.filter((data) => data?.category == kategori).length) {
            toast.error(`Produk kategori ${kategori} sudah ada, silakan pilih kategori lain.`);
            setLoadingKategori(false)
            return true
        } else {
            await HandlePostCategory({
                "category": kategori,
                "slugCategory": kategori?.toLowerCase() // ubah jadi huruf kecil
                    ?.replace(/[^a-z0-9\s]/g, '') // hapus karakter selain huruf, angka, dan spasi
                    ?.trim() // hapus spasi di awal dan akhir
                    ?.replace(/\s+/g, '-')
            })
            setLoadingKategori(false)
            setKlikKategori(false)
            setKategori('')
            toast.success(`kategori ${kategori} berhasil ditambahkan!`)
            router.refresh()
        }

        // await HandlePostCategory({
        //     "category": kategori    
        //     "urlYoutube": null
        //     "title": null
        //     "desc": null
        //     "tags": null
        // })
    };


    const initialValues = {
        productName: data ? data?.productName : '',
        stockProduct: data ? data?.stockProduct : '',
        productType: data ? data?.productType : '',
        subKategoriProduct: data ? data?.subKategoriProduct : '',
        productKategori: data ? data?.productKategori : '',
        tagProduct: data ? data?.tagProduct : '',
        productPrice: data ? data?.productPrice : '',
        productDiscount: data ? data?.productDiscount : '',
        productPriceFinal: data ? data?.productPriceFinal : '',
        urlYoutube: data ? data?.urlYoutube : '',
        descMetaProduct: data ? data?.descMetaProduct : '',
        descProduct: draftToHtml(convertToRaw(editorState.getCurrentContent())),

        phase_spec: data ? data?.spec_product?.phase_spec : '',
        frequency_spec: data ? data?.spec_product?.frequency_spec : '',
        gensetPower_spec: data ? data?.spec_product?.gensetPower_spec : '',
        ratedPower_spec: data ? data?.spec_product?.ratedPower_spec : '',
        maxPower_spec: data ? data?.spec_product?.maxPower_spec : '',
        ratedACVoltage_spec: data ? data?.spec_product?.ratedACVoltage_spec : '',
        starting_spec: data ? data?.spec_product?.starting_spec : '',
        fuelConsumption_spec: data ? data?.spec_product?.fuelConsumption_spec : '',
        weight_spec: data ? data?.spec_product?.weight_spec : '',
        dimension_spec: data ? data?.spec_product?.dimension_spec : '',
        // email: '',
        images: []
    };

    const validationSchema = Yup.object({
        productName: Yup.string()
            .max(150, 'Must be 15 characters or less')
            .required('*'),
        stockProduct: Yup.number()
            .max(99999, 'Must be 15 characters or less')
            .required('*'),
        tagProduct: Yup.string()
            .max(150, 'Must be 15 characters or less')
            .required('*'),
        productType: Yup.string()
            .max(200, 'Must be 20 characters or less')
            .required('*'),
        productKategori: Yup.number().required('*'),
        // urlYoutube: Yup.string()
        //     .required('*'),
        descMetaProduct: Yup.string()
            .min(100, 'Minimal 100huruf')
            .required('*'),
        // subKategoriProduct: Yup.string()
        //     .max(200, 'Must be 20 characters or less')
        //     .required('Required'),

        productPrice: Yup.number()
            .max(9999999999, 'Must be 200 characters or less')
            .required('*'),
        productDiscount: Yup.number()
            .max(100, 'Must be 100 characters or less')
            .required('*'),
        // productPriceFinal: Yup.number()
        //     .max(9999999999, 'Must be 200 characters or less')
        //     .required('Required'),

        // phase_spec: Yup.string()
        //     .max(200, 'Must be 20 characters or less')
        //     .required('Required'),
        // frequency_spec: Yup.string()
        //     .max(200, 'Must be 20 characters or less')
        //     .required('Required'),
        // gensetPower_spec: Yup.string()
        //     .max(200, 'Must be 20 characters or less')
        //     .required('Required'),
        // ratedPower_spec: Yup.string()
        //     .max(200, 'Must be 20 characters or less')
        //     .required('Required'),
        // maxPower_spec: Yup.string()
        //     .max(200, 'Must be 20 characters or less')
        //     .required('Required'),
        // ratedACVoltage_spec: Yup.string()
        //     .max(200, 'Must be 20 characters or less')
        //     .required('Required'),
        // starting_spec: Yup.string()
        //     .max(200, 'Must be 20 characters or less')
        //     .required('Required'),
        // fuelConsumption_spec: Yup.string()
        //     .max(200, 'Must be 20 characters or less')
        //     .required('Required'),
        weight_spec: Yup.number()
            .max(9999999999, 'Must be 20 characters or less')
            .required('*'),
        images: Yup.mixed().required('At least one file is required')
        // images: Yup.mixed()
        //     .test('fileFormat', 'Only Image files are allowed', value => {

        //         if (value) {
        //             const supportedFormats = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'tiff'];
        //             return supportedFormats.includes(value?.name?.split('.')?.pop());
        //         }
        //         return true;
        //     })
        //     .test('fileSize', 'File size must not be more than 30MB',
        //         value => {
        //             if (value) {
        //                 return value?.size <= 32145728;
        //             }
        //             return true;
        //         }),
        // dimension_spec: Yup.string()
        //     .max(200, 'Must be 20 characters or less')
        //     .required('Required'),
        // email: Yup.string().email('Invalid email address').required('Required'),
    });

    const handleSubmit = async (value) => {

        try {
            setKategori(false)
            setLoading(true)
            const slug = value?.productName
                ?.toLowerCase() // ubah jadi huruf kecil
                ?.replace(/[^a-z0-9\s]/g, '') // hapus karakter selain huruf, angka, dan spasi
                ?.trim() // hapus spasi di awal dan akhir
                ?.replace(/\s+/g, '-')


            // Validate if the slug is duplicate
            const slugData = pathname == '/post' ? await HandleValidasi(slug) : []

            if (pathname == '/post' && slugData?.data?.length) {
                // Handle duplicate slug
                toast.error("Produk dengan nama ini sudah ada, silakan pilih nama lain.");
                setLoading(false);
                return; // Stop further execution if slug exists
            } else {
                const formData = new FormData();
                const formDataUtama = new FormData();

                // LIST PRODUCT
                for (const key in files) {
                    if (files[key]) {
                        formData.append('files', files[key]);
                    }
                }

                const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/cloudinary`, {
                    method: 'POST',
                    body: formData
                })
                const dataRes = await res.json()
                const dataImage = dataRes?.results



                //FOTO UTAMA
                for (const key in filesUtama) {
                    if (filesUtama[key]) {
                        formDataUtama.append('files', filesUtama[key]);
                    }
                }
                const resUtama = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/cloudinary`, {
                    method: 'POST',
                    body: formDataUtama
                })
                const dataResUtama = await resUtama.json()
                const dataImageUtama = dataResUtama?.results


                //  LIST GAMBAR
                for (const public_id of selectIDImage) {
                    {
                        selectIDImage.length && data &&
                            await fetch(`${process.env.NEXT_PUBLIC_URL}/api/c/listProduct`, {
                                method: 'DELETE',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': `${process.env.NEXT_PUBLIC_SECREET}`
                                },
                                body: JSON.stringify({ public_id: public_id }),
                            })
                    }
                }

                // delete image couldinary PRODUCT UTAMA
                selectIDImageUtama.length && data && await HandleDeleteImageC(selectIDImageUtama)

                await fetch(`${process.env.NEXT_PUBLIC_URL}/api/c/listProduct`, {
                    method: data ? 'PUT' : 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${process.env.NEXT_PUBLIC_SECREET}`
                    },
                    body: JSON.stringify(
                        data ? {
                            ...value,
                            descProduct: draftToHtml(convertToRaw(editorState.getCurrentContent())),
                            productPriceFinal: Math.round(value?.productPrice - ((value?.productPrice * value?.productDiscount) / 100)),
                            slugProduct: slug,
                            saveDraf: draf,
                            dataImage: dataImage,
                            imageProductUtama: dataImageUtama[0],
                            productKategori: Number(value.productKategori),
                            IdProduct: data.id
                        } : {
                            ...value,
                            descProduct: draftToHtml(convertToRaw(editorState.getCurrentContent())),
                            productPriceFinal: Math.round(value?.productPrice - ((value?.productPrice * value?.productDiscount) / 100)),
                            slugProduct: slug,
                            saveDraf: draf,
                            dataImage: dataImage,
                            imageProductUtama: dataImageUtama[0],
                            productKategori: Number(value.productKategori),
                        }),
                })




                setLoading(false)
                router.push('/')
                router.refresh()
                pathname == '/' && setLayang()
                toast.success('data berhasil ditambahkan!')
                // handle the error
                // if (!res.ok) throw new Error(await res.text())
            }

        } catch (e) {
            // Handle errors here
            toast.error("Tidak Berhasil, silahkan Ulang")
            setLoading(false)
            console.error(e)
        }
    };




    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ setFieldValue, values }) => (
                <Form>
                    <div className={styles.container}>


                        <div className={styles.dalamcontainer}>
                            <div className={styles.form}>
                                <div className={styles.atas}>
                                    <Link target='_blank' href={'/'} className={styles.kiri}>
                                        {data ? data?.productName : 'PelangiTeknik'}
                                    </Link>
                                    <div className={styles.kanan}>
                                        <button disabled={loading} type='submit' onClick={() => setDraf(true)} className={styles.draf} >{draf ? loading ? 'Loading...' : 'Save to Draf' : 'Save to Draf'}</button>
                                        <button disabled={loading} type='submit' onClick={() => setDraf(false)} className={styles.save}>{draf ? text ? text : 'Save Product' : loading ? 'Loading...' : text ? text : 'Save Product'}</button>
                                        {!kondisi && <Logout />}
                                    </div>
                                </div>
                                <div className={styles.bawah}>
                                    <div className={styles.productImage}>
                                        <div className={styles.judul}>Meta Tag Google</div>
                                        <hr />
                                        <div className={styles.isi}>
                                            <div className={styles.tag}>
                                                <label htmlFor="tagProduct">Tag <ErrorMessage name="tagProduct" component="div" style={{ color: 'red' }} /></label>
                                                <Field type="text"
                                                    name="tagProduct"
                                                    id="tagProduct"
                                                    placeholder={'ex: genset slient, genset 20kva'}
                                                />

                                            </div>
                                            <div className={styles.tag}>
                                                <label htmlFor="descMetaProduct">Deskripsi  <ErrorMessage name="descMetaProduct" component="div" style={{ color: 'red' }} /></label>
                                                <Field
                                                    type="text"
                                                    as="textarea"
                                                    name="descMetaProduct"
                                                    id="descMetaProduct"
                                                    placeholder="ex: Genset Silent Diesel 9 Kva Tsuzumi TDG 10000 S dengan daya 7000 Watt, 1 Phase, cocok untuk rumah dan usaha. Desain silent, hemat bahan bakar, dan performa mesin diesel yang handal. "
                                                />

                                            </div>
                                            <div className={styles.tag}>
                                                <label htmlFor="urlYoutube">Url Youtube  <ErrorMessage name="urlYoutube" component="div" style={{ color: 'red' }} /></label>
                                                <Field
                                                    type="text"
                                                    name="urlYoutube"
                                                    id="urlYoutube"
                                                    placeholder='ex: https://www.youtube.com/watch?v=MZyjr4bDYWs'
                                                />

                                            </div>
                                            <div className={styles.judulsamping}>Product Image</div>
                                            <ErrorMessage name="images" component="div" style={{ color: 'red' }} />



                                            <div>
                                                {!previewsUtama.imageUtama && (
                                                    <>
                                                        <label className={styles.gambarutama} htmlFor="imageUtama">
                                                            <MdOutlineFileUpload /> &nbsp;Gambar Utama
                                                        </label>
                                                        <input
                                                            style={{ display: 'none' }}
                                                            type="file"
                                                            id="imageUtama"
                                                            name="imageUtama"
                                                            accept="image/*"
                                                            onChange={(e) => handleFileChangeUtama(e, 'imageUtama')}
                                                        />
                                                    </>
                                                )}
                                                {previewsUtama.imageUtama && (
                                                    <div >
                                                        {
                                                            data ?
                                                                <>
                                                                    <img src={previewsUtama.imageUtama?.url ? previewsUtama.imageUtama?.url : previewsUtama.imageUtama} alt="Preview Gambar Utama" className={styles.previewImageUtama} />
                                                                    <div className={styles.deleteButton} onClick={() => handleDeleteLocalUtama(previewsUtama.imageUtama.public_id, 'imageUtama')}>Ganti</div>
                                                                </>
                                                                :
                                                                <>
                                                                    <img src={previewsUtama.imageUtama} alt="Preview Gambar Utama" className={styles.previewImageUtama} />
                                                                    <div className={styles.deleteButtonutama} onClick={() => handleDeleteUtama('imageUtama')}>Ganti</div>
                                                                </>
                                                        }
                                                    </div>
                                                )}
                                            </div>


                                            <div className={styles.listgambar}>
                                                <div>
                                                    {!previews.images1 && (
                                                        <>
                                                            <label className={styles.gambarnew} htmlFor="images1">
                                                                <MdOutlineFileUpload /> &nbsp;Gambar Utama
                                                            </label>
                                                            <input
                                                                style={{ display: 'none' }}
                                                                type="file"
                                                                id="images1"
                                                                name="images1"
                                                                accept="image/*"
                                                                onChange={(e) => handleFileChange(e, 'images1')}
                                                            />
                                                        </>
                                                    )}
                                                    {previews.images1 && (
                                                        <div >
                                                            {
                                                                data ?
                                                                    <>
                                                                        <img src={previews.images1?.url ? previews.images1?.url : previews.images1} alt="Preview Gambar Utama" className={styles.previewImage} />
                                                                        <div className={styles.deleteButton} onClick={() => handleDeleteLocal(previews.images1.public_id, 'images1')}>Hapus</div>
                                                                    </>
                                                                    :
                                                                    <>
                                                                        <img src={previews.images1} alt="Preview Gambar Utama" className={styles.previewImage} />
                                                                        <div className={styles.deleteButton} onClick={() => handleDelete('images1')}>Hapus</div>
                                                                    </>
                                                            }
                                                        </div>
                                                    )}
                                                </div>
                                                <div>
                                                    {!previews.images2 && (
                                                        <>
                                                            <label className={styles.gambarnew} htmlFor="images2">
                                                                <MdOutlineFileUpload /> &nbsp;Upload Gambar
                                                            </label>
                                                            <input
                                                                style={{ display: 'none' }}
                                                                type="file"
                                                                id="images2"
                                                                name="images2"
                                                                accept="image/*"
                                                                onChange={(e) => handleFileChange(e, 'images2')}
                                                            />
                                                        </>
                                                    )}

                                                    {previews.images2 && (
                                                        <>
                                                            {
                                                                data ?
                                                                    <>
                                                                        <img src={previews.images2?.url ? previews.images2?.url : previews.images2} alt="Preview Gambar Utama" className={styles.previewImage} />
                                                                        <div className={styles.deleteButton} onClick={() => handleDeleteLocal(previews.images2.public_id, 'images2')}>Hapus</div>
                                                                    </>
                                                                    :
                                                                    <>
                                                                        <img src={previews.images2} alt="Preview Gambar Utama" className={styles.previewImage} />
                                                                        <div className={styles.deleteButton} onClick={() => handleDelete('images2')}>Hapus</div>
                                                                    </>
                                                            }
                                                        </>
                                                    )}
                                                </div>
                                                <div>
                                                    {!previews.images3 && (
                                                        <>
                                                            <label className={styles.gambarnew} htmlFor="images3">
                                                                <MdOutlineFileUpload /> &nbsp;Upload Gambar
                                                            </label>
                                                            <input
                                                                style={{ display: 'none' }}
                                                                type="file"
                                                                id="images3"
                                                                name="images3"
                                                                accept="image/*"
                                                                onChange={(e) => handleFileChange(e, 'images3')}
                                                            />
                                                        </>
                                                    )}
                                                    {previews.images3 && (
                                                        <>
                                                            {
                                                                data ?
                                                                    <>
                                                                        <img src={previews.images3?.url ? previews.images3?.url : previews.images3} alt="Preview Gambar Utama" className={styles.previewImage} />
                                                                        <div className={styles.deleteButton} onClick={() => handleDeleteLocal(previews.images3.public_id, 'images3')}>Hapus</div>
                                                                    </>
                                                                    :
                                                                    <>
                                                                        <img src={previews.images3} alt="Preview Gambar Utama" className={styles.previewImage} />
                                                                        <div className={styles.deleteButton} onClick={() => handleDelete('images3')}>Hapus</div>
                                                                    </>
                                                            }
                                                        </>
                                                    )}
                                                </div>
                                                <div>
                                                    {!previews.images4 && (
                                                        <>
                                                            <label className={styles.gambarnew} htmlFor="images4">
                                                                <MdOutlineFileUpload /> &nbsp;Upload Gambar
                                                            </label>
                                                            <input
                                                                style={{ display: 'none' }}
                                                                type="file"
                                                                id="images4"
                                                                name="images4"
                                                                accept="image/*"
                                                                onChange={(e) => handleFileChange(e, 'images4')}
                                                            />
                                                        </>
                                                    )}
                                                    {previews.images4 && (
                                                        <>
                                                            {
                                                                data ?
                                                                    <>
                                                                        <img src={previews.images4?.url ? previews.images4?.url : previews.images4} alt="Preview Gambar Utama" className={styles.previewImage} />
                                                                        <div className={styles.deleteButton} onClick={() => handleDeleteLocal(previews.images4.public_id, 'images4')}>Hapus</div>
                                                                    </>
                                                                    :
                                                                    <>
                                                                        <img src={previews.images4} alt="Preview Gambar Utama" className={styles.previewImage} />
                                                                        <div className={styles.deleteButton} onClick={() => handleDelete('images4')}>Hapus</div>
                                                                    </>
                                                            }
                                                        </>
                                                    )}
                                                </div>
                                                <div>
                                                    {!previews.images5 && (
                                                        <>
                                                            <label className={styles.gambarnew} htmlFor="images5">
                                                                <MdOutlineFileUpload /> &nbsp;Upload Gambar
                                                            </label>
                                                            <input
                                                                style={{ display: 'none' }}
                                                                type="file"
                                                                id="images5"
                                                                name="images5"
                                                                accept="image/*"
                                                                onChange={(e) => handleFileChange(e, 'images5')}
                                                            />
                                                        </>
                                                    )}
                                                    {previews.images5 && (
                                                        <>
                                                            {
                                                                data ?
                                                                    <>
                                                                        <img src={previews.images5?.url ? previews.images5?.url : previews.images5} alt="Preview Gambar Utama" className={styles.previewImage} />
                                                                        <div className={styles.deleteButton} onClick={() => handleDeleteLocal(previews.images5.public_id, 'images5')}>Hapus</div>
                                                                    </>
                                                                    :
                                                                    <>
                                                                        <img src={previews.images5} alt="Preview Gambar Utama" className={styles.previewImage} />
                                                                        <div className={styles.deleteButton} onClick={() => handleDelete('images5')}>Hapus</div>
                                                                    </>
                                                            }
                                                        </>
                                                    )}
                                                </div>
                                                <div>
                                                    {!previews.images6 && (
                                                        <>
                                                            <label className={styles.gambarnew} htmlFor="images6">
                                                                <MdOutlineFileUpload /> &nbsp;Upload Gambar
                                                            </label>
                                                            <input
                                                                style={{ display: 'none' }}
                                                                type="file"
                                                                id="images6"
                                                                name="images6"
                                                                accept="image/*"
                                                                onChange={(e) => handleFileChange(e, 'images6')}
                                                            />
                                                        </>
                                                    )}
                                                    {previews.images6 && (
                                                        <>
                                                            {
                                                                data ?
                                                                    <>
                                                                        <img src={previews.images6?.url ? previews.images6?.url : previews.images6} alt="Preview Gambar Utama" className={styles.previewImage} />
                                                                        <div className={styles.deleteButton} onClick={() => handleDeleteLocal(previews.images6.public_id, 'images6')}>Hapus</div>
                                                                    </>
                                                                    :
                                                                    <>
                                                                        <img src={previews.images6} alt="Preview Gambar Utama" className={styles.previewImage} />
                                                                        <div className={styles.deleteButton} onClick={() => handleDelete('images6')}>Hapus</div>
                                                                    </>
                                                            }
                                                        </>
                                                    )}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className={styles.detaildetail}>
                                        <div className={styles.detail}>
                                            <div className={styles.judul}>General Information</div>
                                            <hr />
                                            <div className={styles.isi}>
                                                <label htmlFor="productName">Product Name  <ErrorMessage name="productName" component="div" style={{ color: 'red' }} /></label>
                                                <Field
                                                    type="text"
                                                    name="productName"
                                                    id="productName"
                                                    placeholder={'ex: Genset Tsuzumi TFS 30 KVA '}
                                                />
                                                <div className={styles.satubaris}>
                                                    <div className={styles.bariskankategori}>
                                                        {klikKategori && <div className={styles.tambahkategori}>
                                                            <div className={styles.ataskategori}>
                                                                <label htmlFor="kategori">Tambah Kategori</label>
                                                                {!loadingKategori && <div className={styles.closekategori} onClick={() => setKlikKategori(!klikKategori)}>x</div>}
                                                            </div>
                                                            <div style={{ display: 'flex', gap: '5px' }}>
                                                                <input
                                                                    style={{ width: '70%' }}
                                                                    type="text"
                                                                    id="kategori"
                                                                    value={kategori}
                                                                    onChange={handleInputChangeKategori}
                                                                    placeholder="Masukkan kategori"
                                                                    required
                                                                    disabled={loadingKategori}
                                                                />
                                                                <button onClick={handleSubmitKategori} type="submit">{loadingKategori ? 'Loading' : 'Tambah'}</button>
                                                            </div>
                                                        </div>}


                                                        <label htmlFor="productKategori">Kategori  <ErrorMessage name="productKategori" component="div" style={{ color: 'red' }} />
                                                            &nbsp; <div className={styles.tambahkategoriklik} onClick={() => setKlikKategori(!klikKategori)}>( Tambah Kategori ? )</div>
                                                        </label>

                                                        <Field as="select" name="productKategori" id="productKategori">
                                                            <option value="">Select a Kategori</option>

                                                            {dataKategori?.map((data, i) => {
                                                                return (
                                                                    <option key={i} value={Number(data?.id)}>{data?.category}</option>
                                                                )
                                                            })}

                                                        </Field>

                                                        {/* <Field type="text" name="productKategori" id="productKategori" /> */}
                                                    </div>
                                                    <div className={styles.bariskan}>
                                                        <label htmlFor="subKategoriProduct">Sub Kategori  <ErrorMessage name="subKategoriProduct" component="div" style={{ color: 'red' }} /></label>
                                                        <Field
                                                            type="text"
                                                            name="subKategoriProduct"
                                                            id="subKategoriProduct"
                                                            placeholder={'ex: Engine Fawde'}
                                                        />
                                                    </div>
                                                </div>
                                                <div className={styles.satubaris}>
                                                    <div className={styles.bariskan}>
                                                        <label htmlFor="stockProduct">Stock Product  <ErrorMessage name="stockProduct" component="div" style={{ color: 'red' }} /></label>
                                                        <Field
                                                            type="number"
                                                            name="stockProduct"
                                                            id="stockProduct"
                                                            placeholder={'ex: 25'}
                                                        />
                                                    </div>
                                                    <div className={styles.bariskan}>
                                                        <label htmlFor="productType">Product Type  <ErrorMessage name="productType" component="div" style={{ color: 'red' }} /></label>
                                                        <Field
                                                            type="text"
                                                            name="productType"
                                                            id="productType"
                                                            placeholder={'ex: TDG10000S'}
                                                        />
                                                    </div>
                                                </div>
                                                <div className={styles.satubaris}>
                                                    <div className={styles.bariskan}>
                                                        <label htmlFor="productPrice">Price  <ErrorMessage name="productPrice" component="div" style={{ color: 'red' }} /></label>
                                                        <Field
                                                            type="number"
                                                            name="productPrice"
                                                            id="productPrice"
                                                            placeholder={'ex: 1000000'}
                                                        />
                                                    </div>
                                                    <div className={styles.bariskan}>
                                                        <label htmlFor="productDiscount">Discount (optional)  <ErrorMessage name="productDiscount" component="div" style={{ color: 'red' }} /></label>
                                                        <Field
                                                            type="number"
                                                            name="productDiscount"
                                                            id="productDiscount"
                                                            placeholder={'ex: 10'}
                                                        />
                                                    </div>
                                                    <div className={styles.bariskan}>
                                                        <label htmlFor="productPriceFinal">Discount Price  <ErrorMessage name="productPriceFinal" component="div" style={{ color: 'red' }} /></label>
                                                        <input
                                                            id="productPriceFinal"
                                                            name="productPriceFinal"
                                                            type="number"
                                                            value={Math.round(values?.productPrice - ((values?.productPrice * values?.productDiscount) / 100)) != 0 && Math.round(values?.productPrice - ((values?.productPrice * values?.productDiscount) / 100))}
                                                            disabled
                                                        />
                                                    </div>
                                                </div>
                                                <label htmlFor="productDescription">Deskripsi</label>
                                                <Editor
                                                    editorState={editorState}
                                                    toolbarClassName="toolbarClassName"
                                                    wrapperClassName="wrapperClassName"
                                                    editorClassName="editorClassName"
                                                    placeholder="Tulis Diskripsi..."
                                                    onEditorStateChange={onEditorStateChange}
                                                />
                                            </div>
                                        </div>
                                        <div className={styles.detail} style={{ margin: '20px 0 30px 0' }}>
                                            <div className={styles.judul}>Spesifikasi Produk</div>
                                            <hr />
                                            <div className={styles.isi}>
                                                <div className={styles.satubaris}>
                                                    <div className={styles.bariskan}>
                                                        <label htmlFor="phase_spec">Phase <ErrorMessage name="phase_spec" component="div" style={{ color: 'red' }} /></label>
                                                        <Field placeholder={'ex: 1 Phase'} type="text" name="phase_spec" id="phase_spec" />
                                                    </div>
                                                    <div className={styles.bariskan}>
                                                        <label htmlFor="frequency_spec">Frekuensi <ErrorMessage name="frequency_spec" component="div" style={{ color: 'red' }} /></label>
                                                        <Field placeholder={'ex: 50Hz'} type="text" name="frequency_spec" id="frequency_spec" />
                                                    </div>
                                                </div>
                                                <div className={styles.satubaris}>
                                                    <div className={styles.bariskan}>
                                                        <label htmlFor="gensetPower_spec">Genset Power <ErrorMessage name="gensetPower_spec" component="div" style={{ color: 'red' }} /></label>
                                                        <Field placeholder={'ex: 10'} type="text" name="gensetPower_spec" id="gensetPower_spec" />
                                                    </div>
                                                    <div className={styles.bariskan}>
                                                        <label htmlFor="ratedPower_spec">Rated <ErrorMessage name="ratedPower_spec" component="div" style={{ color: 'red' }} /></label>
                                                        <Field placeholder={'ex: 9.5KVA'} type="text" name="ratedPower_spec" id="ratedPower_spec" />
                                                    </div>
                                                </div>
                                                <div className={styles.satubaris}>
                                                    <div className={styles.bariskan}>
                                                        <label htmlFor="maxPower_spec">Max Power <ErrorMessage name="maxPower_spec" component="div" style={{ color: 'red' }} /></label>
                                                        <Field placeholder={'ex: 9.5KVA'} type="text" name="maxPower_spec" id="maxPower_spec" />
                                                    </div>
                                                    <div className={styles.bariskan}>
                                                        <label htmlFor="ratedACVoltage_spec">Rated Voltage <ErrorMessage name="ratedACVoltage_spec" component="div" style={{ color: 'red' }} /></label>
                                                        <Field placeholder={'ex: 220V'} type="text" name="ratedACVoltage_spec" id="ratedACVoltage_spec" />
                                                    </div>
                                                </div>
                                                <div className={styles.satubaris}>
                                                    <div className={styles.bariskan}>
                                                        <label htmlFor="starting_spec">Starting <ErrorMessage name="starting_spec" component="div" style={{ color: 'red' }} /></label>
                                                        <Field placeholder={'ex: Electric'} type="text" name="starting_spec" id="starting_spec" />
                                                    </div>
                                                    <div className={styles.bariskan}>
                                                        <label htmlFor="fuelConsumption_spec">Fuel Consumption <ErrorMessage name="fuelConsumption_spec" component="div" style={{ color: 'red' }} /></label>
                                                        <Field placeholder={'ex: 2.3L/Hr'} type="text" name="fuelConsumption_spec" id="fuelConsumption_spec" />
                                                    </div>
                                                </div>
                                                <div className={styles.satubaris}>
                                                    <div className={styles.bariskan}>
                                                        <label htmlFor="weight_spec">Weight (satuan gram) <ErrorMessage name="weight_spec" component="div" style={{ color: 'red' }} /></label>
                                                        <Field placeholder={'ex: 1000'} type="number" name="weight_spec" id="weight_spec" />
                                                    </div>
                                                    <div className={styles.bariskan}>
                                                        <label htmlFor="dimension_spec">Dimension <ErrorMessage name="dimension_spec" component="div" style={{ color: 'red' }} /></label>
                                                        <Field placeholder={'ex: 930x535x720mm'} type="text" name="dimension_spec" id="dimension_spec" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
}
