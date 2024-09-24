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

export default function FormInput({ data, text, dataKategori }) {

    const pathname = usePathname()
    const setLayang = useCon((state) => state.setLayang)

    const [klikKategori, setKlikKategori] = useState(false);

    const [selectedImages, setSelectedImages] = useState([]);
    const [selectedImagesDB, setSelectedImagesDB] = useState(data?.url_image_product);

    const [selectedImagesDBLocal, setSelectedImagesDBLocal] = useState([]);
    const [alertIDDeleteImage, setalertIDDeleteImage] = useState('');

    const [alertKondisi, setAlertKondisi] = useState(false);
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


    const handleRemoveImageDB = (e, kondisi, kondisi2) => {
        setalertIDDeleteImage(e)
        setAlertKondisi(kondisi)
        const remove = () => {
            const updatedImages = selectedImagesDB.filter((data) => data?.public_id !== e); // Filter out the image
            setSelectedImagesDB(updatedImages);

            // simpanlocal
            setSelectedImagesDBLocal([...selectedImagesDBLocal, e])
        }

        kondisi2 && remove()
        router.refresh()
    }

    // Remove image by index
    const handleRemoveImage = (e, kondisi, kondisi2) => {
        setalertIDDeleteImage(e)
        setAlertKondisi(kondisi)
        const remove = () => {
            const updatedImages = selectedImages.filter((_, i) => i !== e); // Filter out the image
            setSelectedImages(updatedImages);
            // simpanlocal
        }
        kondisi2 && remove()
        router.refresh()
    };

    const handleFileChange = (event, setFieldValue) => {
        const filesData = event.target.files;
        setFieldValue('images', filesData);

        const files = Array.from(event.target.files); // Convert FileList to an array
        const imagePreviews = [];

        files.forEach(file => {
            const reader = new FileReader();
            reader.onload = () => {
                imagePreviews.push({ file, preview: reader.result });
                if (imagePreviews.length === files.length) {
                    setSelectedImages(prevImages => [...prevImages, ...imagePreviews]); // Add new images to existing ones
                }
            };
            reader.readAsDataURL(file); // Read file as a Data URL
        });

    };


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
                "category": kategori
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
        productKategori: Yup.string().required('*'),
        urlYoutube: Yup.string()
            .max(200, 'Must be 20 characters or less')
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
                selectedImages.forEach(image => {
                    formData.append('files', image?.file); // Append each image file to formData
                });

                const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/cloudinary`, {
                    method: 'POST',
                    body: formData
                })
                const dataRes = await res.json()
                const dataImage = dataRes?.results


                const GabungData = {
                    ...value,
                    descProduct: draftToHtml(convertToRaw(editorState.getCurrentContent())),
                    productPriceFinal: Math.round(value?.productPrice - ((value?.productPrice * value?.productDiscount) / 100)),
                    slugProduct: slug,
                    saveDraf: draf,
                    dataImage: dataImage
                }


                await fetch(`${process.env.NEXT_PUBLIC_URL}/api/c/listProduct`, {
                    method: data ? 'PUT' : 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${process.env.NEXT_PUBLIC_SECREET}`
                    },
                    body: JSON.stringify(GabungData),
                })


                // Menggunakan for...of untuk mengiterasi array dataImage supabase
                for (const public_id of selectedImagesDBLocal) {
                    {
                        data &&
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

                // delete image couldinary
                data && await HandleDeleteImageC(selectedImagesDBLocal)

                setLoading(false)
                // router.push('/')
                // formik.resetForm()
                pathname == '/' && setLayang()
                toast.success('data berhasil ditambahkan!')
                // handle the error
                // if (!res.ok) throw new Error(await res.text())
            }

        } catch (e) {
            // Handle errors here
            toast.error("Tidak Berhasil, silahkan Ulang")
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
                                        <button type='submit' onClick={() => setDraf(true)} className={styles.draf} >{draf ? loading ? 'Loading...' : 'Save to Draf' : 'Save to Draf'}</button>
                                        <button type='submit' onClick={() => setDraf(false)} className={styles.save}>{draf ? text ? text : 'Save Product' : loading ? 'Loading...' : text ? text : 'Save Product'}</button>
                                        <Logout />
                                    </div>
                                </div>
                                <div className={styles.bawah}>
                                    <div className={styles.productImage}>
                                        <div className={styles.judul}>Product Image</div>
                                        <hr />
                                        <div className={styles.isi}>
                                            <div className={styles.tag}>
                                                <label htmlFor="tagProduct">Tag <ErrorMessage name="tagProduct" component="div" style={{ color: 'red' }} /></label>
                                                <Field type="text"
                                                    name="tagProduct"
                                                    id="tagProduct"
                                                />

                                            </div>
                                            <div className={styles.tag}>
                                                <label htmlFor="urlYoutube">Url Youtube  <ErrorMessage name="urlYoutube" component="div" style={{ color: 'red' }} /></label>
                                                <Field type="text" name="urlYoutube" id="urlYoutube" />

                                            </div>
                                            <div className={styles.judulsamping}>Product Image</div>
                                            <div className="image-preview">
                                                {selectedImagesDB?.map((image, index) => (
                                                    <div key={index} style={{ display: 'inline-block', position: 'relative', margin: '10px' }}>
                                                        <img
                                                            src={image?.url}
                                                            alt={`Preview ${index}`}
                                                            style={{ width: '90px', height: '90px', objectFit: 'cover' }}
                                                        />
                                                        {!loading && (
                                                            <>
                                                                {alertKondisi && alertIDDeleteImage === image?.public_id && (
                                                                    <div className={styles.yesno}>
                                                                        <div className={styles.tombol} onClick={() => handleRemoveImageDB(image?.public_id, false, true)}>YES</div>
                                                                        <div className={styles.tombol} onClick={() => handleRemoveImageDB(image?.public_id, false)}>NO</div>
                                                                    </div>
                                                                )}
                                                                {!alertKondisi && (
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => handleRemoveImageDB(image?.public_id, true)}
                                                                        className={styles.tombolhapus}
                                                                    >
                                                                        X
                                                                    </button>
                                                                )}
                                                            </>
                                                        )}
                                                    </div>
                                                ))}
                                                {selectedImages.map((image, index) => (
                                                    <div key={index} style={{ display: 'inline-block', position: 'relative', margin: '10px' }}>
                                                        <img
                                                            src={image.preview}
                                                            alt={`Preview ${index}`}
                                                            style={{ width: '90px', height: '90px', objectFit: 'cover' }}
                                                        />
                                                        {!loading && (
                                                            <>
                                                                {alertKondisi && alertIDDeleteImage === index && (
                                                                    <div className={styles.yesno}>
                                                                        <div className={styles.tombol} onClick={() => handleRemoveImage(index, false, true)}>YES</div>
                                                                        <div className={styles.tombol} onClick={() => handleRemoveImage(index, false)}>NO</div>
                                                                    </div>
                                                                )}
                                                                {!alertKondisi && (
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => handleRemoveImage(index, true)}
                                                                        className={styles.tombolhapus}
                                                                    >
                                                                        X
                                                                    </button>
                                                                )}
                                                            </>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>

                                            <label
                                                className={styles.labeltag}
                                                htmlFor="images"><MdOutlineFileUpload /> &nbsp;Upload Image</label>
                                            <input
                                                // style={{ display: 'none' }}
                                                type="file"
                                                id="images"
                                                name="images"
                                                accept="image/*"
                                                multiple
                                                onChange={(event) => handleFileChange(event, setFieldValue)}
                                            />

                                            <ErrorMessage name="images" component="div" style={{ color: 'red' }} />


                                        </div>
                                    </div>
                                    <div className={styles.detaildetail}>
                                        <div className={styles.detail}>
                                            <div className={styles.judul}>General Information</div>
                                            <hr />
                                            <div className={styles.isi}>
                                                <label htmlFor="productName">Product Name  <ErrorMessage name="productName" component="div" style={{ color: 'red' }} /></label>
                                                <Field type="text" name="productName" id="productName" />
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

                                                            {dataKategori.map((data, i) => {
                                                                return (
                                                                    <option key={i} value={data?.category}>{data?.category}</option>
                                                                )
                                                            })}

                                                        </Field>

                                                        {/* <Field type="text" name="productKategori" id="productKategori" /> */}
                                                    </div>
                                                    <div className={styles.bariskan}>
                                                        <label htmlFor="subKategoriProduct">Sub Kategori  <ErrorMessage name="subKategoriProduct" component="div" style={{ color: 'red' }} /></label>
                                                        <Field type="text" name="subKategoriProduct" id="subKategoriProduct" />
                                                    </div>
                                                </div>
                                                <div className={styles.satubaris}>
                                                    <div className={styles.bariskan}>
                                                        <label htmlFor="stockProduct">Stock Product  <ErrorMessage name="stockProduct" component="div" style={{ color: 'red' }} /></label>
                                                        <Field type="number" name="stockProduct" id="stockProduct" />
                                                    </div>
                                                    <div className={styles.bariskan}>
                                                        <label htmlFor="productType">Product Type  <ErrorMessage name="productType" component="div" style={{ color: 'red' }} /></label>
                                                        <Field type="text" name="productType" id="productType" />
                                                    </div>
                                                </div>
                                                <div className={styles.satubaris}>
                                                    <div className={styles.bariskan}>
                                                        <label htmlFor="productPrice">Price  <ErrorMessage name="productPrice" component="div" style={{ color: 'red' }} /></label>
                                                        <Field type="number" name="productPrice" id="productPrice" />
                                                    </div>
                                                    <div className={styles.bariskan}>
                                                        <label htmlFor="productDiscount">Discount (optional)  <ErrorMessage name="productDiscount" component="div" style={{ color: 'red' }} /></label>
                                                        <Field type="number" name="productDiscount" id="productDiscount" />
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
                                                        <Field type="text" name="phase_spec" id="phase_spec" />
                                                    </div>
                                                    <div className={styles.bariskan}>
                                                        <label htmlFor="frequency_spec">Frekuensi <ErrorMessage name="frequency_spec" component="div" style={{ color: 'red' }} /></label>
                                                        <Field type="text" name="frequency_spec" id="frequency_spec" />
                                                    </div>
                                                </div>
                                                <div className={styles.satubaris}>
                                                    <div className={styles.bariskan}>
                                                        <label htmlFor="gensetPower_spec">Genset Power <ErrorMessage name="gensetPower_spec" component="div" style={{ color: 'red' }} /></label>
                                                        <Field type="text" name="gensetPower_spec" id="gensetPower_spec" />
                                                    </div>
                                                    <div className={styles.bariskan}>
                                                        <label htmlFor="ratedPower_spec">Rated <ErrorMessage name="ratedPower_spec" component="div" style={{ color: 'red' }} /></label>
                                                        <Field type="text" name="ratedPower_spec" id="ratedPower_spec" />
                                                    </div>
                                                </div>
                                                <div className={styles.satubaris}>
                                                    <div className={styles.bariskan}>
                                                        <label htmlFor="maxPower_spec">Max Power <ErrorMessage name="maxPower_spec" component="div" style={{ color: 'red' }} /></label>
                                                        <Field type="text" name="maxPower_spec" id="maxPower_spec" />
                                                    </div>
                                                    <div className={styles.bariskan}>
                                                        <label htmlFor="ratedACVoltage_spec">Rated Voltage <ErrorMessage name="ratedACVoltage_spec" component="div" style={{ color: 'red' }} /></label>
                                                        <Field type="text" name="ratedACVoltage_spec" id="ratedACVoltage_spec" />
                                                    </div>
                                                </div>
                                                <div className={styles.satubaris}>
                                                    <div className={styles.bariskan}>
                                                        <label htmlFor="starting_spec">Starting <ErrorMessage name="starting_spec" component="div" style={{ color: 'red' }} /></label>
                                                        <Field type="text" name="starting_spec" id="starting_spec" />
                                                    </div>
                                                    <div className={styles.bariskan}>
                                                        <label htmlFor="fuelConsumption_spec">Fuel Consumption <ErrorMessage name="fuelConsumption_spec" component="div" style={{ color: 'red' }} /></label>
                                                        <Field type="text" name="fuelConsumption_spec" id="fuelConsumption_spec" />
                                                    </div>
                                                </div>
                                                <div className={styles.satubaris}>
                                                    <div className={styles.bariskan}>
                                                        <label htmlFor="weight_spec">Weight (satuan gram) <ErrorMessage name="weight_spec" component="div" style={{ color: 'red' }} /></label>
                                                        <Field type="number" name="weight_spec" id="weight_spec" />
                                                    </div>
                                                    <div className={styles.bariskan}>
                                                        <label htmlFor="dimension_spec">Dimension <ErrorMessage name="dimension_spec" component="div" style={{ color: 'red' }} /></label>
                                                        <Field type="text" name="dimension_spec" id="dimension_spec" />
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
