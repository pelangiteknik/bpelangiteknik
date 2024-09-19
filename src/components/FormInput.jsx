'use client'
import { useEffect, useState } from 'react'
import { useFormik } from "formik";
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
import Image from 'next/image';
import { HandleDeleteImageC } from '@/service/handleDeleteImageC';
import { useCon } from '@/zustand/useCon';
import toast from 'react-hot-toast';

export default function FormInput({ data }) {
    const setLayang = useCon((state) => state.setLayang)

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
            const updatedImages = selectedImagesDB.filter((data) => data.public_id !== e); // Filter out the image
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

    const handleChange = (e) => {
        formik.setFieldValue('myFile', e.target.files[0]);
        const files = Array.from(e.target.files); // Convert FileList to an array
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

    const validationRules = Yup.object().shape({
        productName: Yup.string()
            .max(150, 'Must be 15 characters or less')
            .required('Required'),
        stockProduct: Yup.number()
            .max(99999, 'Must be 15 characters or less')
            .required('Required'),
        tagProduct: Yup.string()
            .max(150, 'Must be 15 characters or less')
            .required('Required'),
        productType: Yup.string()
            .max(200, 'Must be 20 characters or less')
            .required('Required'),
        subProductType: Yup.string()
            .max(200, 'Must be 20 characters or less')
            .required('Required'),

        productPrice: Yup.number()
            .max(9999999999, 'Must be 200 characters or less')
            .required('Required'),
        productDiscount: Yup.number()
            .max(999, 'Must be 200 characters or less')
            .required('Required'),
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
            .required('Required'),
        // dimension_spec: Yup.string()
        //     .max(200, 'Must be 20 characters or less')
        //     .required('Required'),
        // email: Yup.string().email('Invalid email address').required('Required'),
        myFile: Yup.mixed()
            .test('fileFormat', 'Only Image files are allowed', value => {

                if (value) {
                    const supportedFormats = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'tiff'];
                    return supportedFormats.includes(value?.name?.split('.')?.pop());
                }
                return true;
            })
            .test('fileSize', 'File size must not be more than 30MB',
                value => {
                    if (value) {
                        return value?.size <= 32145728;
                    }
                    return true;
                }),
    })

    const formik = useFormik({
        initialValues: {
            productName: data ? data?.productName : '',
            stockProduct: data ? data?.stockProduct : '',
            productType: data ? data?.productType : '',
            subProductType: data ? data?.subProductType : '',
            tagProduct: data ? data?.tagProduct : '',
            productPrice: data ? data?.productPrice : '',
            productDiscount: data ? data?.productDiscount : '',
            productPriceFinal: data ? data?.productPriceFinal : '',
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
            myFile: '',
        },


        onSubmit: async (value) => {
            // if (selectedImages.length === 0) return

            try {
                setLoading(true)
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

                const slug = value?.productName
                    ?.toLowerCase() // ubah jadi huruf kecil
                    ?.replace(/[^a-z0-9\s]/g, '') // hapus karakter selain huruf, angka, dan spasi
                    ?.trim() // hapus spasi di awal dan akhir
                    ?.replace(/\s+/g, '-')


                const GabungData = {
                    ...value,
                    descProduct: draftToHtml(convertToRaw(editorState.getCurrentContent())),
                    productPriceFinal: Math.round(value?.productPrice - ((value?.productPrice * value?.productDiscount) / 100)),
                    slugProduct: slug,
                    IdProduct: slug,
                    saveDraf: draf
                }

                await fetch(`${process.env.NEXT_PUBLIC_URL}/api/c/listProduct`, {
                    method: data ? 'PUT' : 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${process.env.NEXT_PUBLIC_SECREET}`
                    },
                    body: JSON.stringify(GabungData),
                })

                await fetch(`${process.env.NEXT_PUBLIC_URL}/api/c/specProduct`, {
                    method: data ? 'PUT' : 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${process.env.NEXT_PUBLIC_SECREET}`
                    },
                    body: JSON.stringify(GabungData),
                })

                // Menggunakan for...of untuk mengiterasi array dataImage cloudinary
                for (const image of dataImage) {
                    {
                        selectedImages.length && await fetch(`${process.env.NEXT_PUBLIC_URL}/api/c/imageProduct`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `${process.env.NEXT_PUBLIC_SECREET}`
                            },
                            body: JSON.stringify({ ...image, IdProduct: slug }),
                        })
                    }
                }

                // Menggunakan for...of untuk mengiterasi array dataImage supabase
                for (const public_id of selectedImagesDBLocal) {
                    {
                        data &&
                            await fetch(`${process.env.NEXT_PUBLIC_URL}/api/c/imageProduct`, {
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
                router.push('/')
                formik.resetForm()
                setLayang()
                toast.success('Successfully!')
                // handle the error
                // if (!res.ok) throw new Error(await res.text())
            } catch (e) {
                // Handle errors here
                console.error(e)
            }

        },
        validationSchema: validationRules,
    })

    return (
        <div className={styles.container}>
            <div className={styles.dalamcontainer}>
                <form className={styles.form} onSubmit={formik.handleSubmit}>
                    <div className={styles.atas}>
                        <div className={styles.kiri}>{data ? data?.productName : 'PelangiTeknik'}</div>
                        <div className={styles.kanan}>
                            <button type='submit' onClick={() => setDraf(true)} className={styles.draf} >{draf ? loading ? 'Loading...' : 'Save to Draf' : 'Save to Draf'}</button>
                            <button type='submit' onClick={() => setDraf(false)} className={styles.save}>{draf ? 'Save Product' : loading ? 'Loading...' : 'Save Product'}</button>
                        </div>
                    </div>
                    <div className={styles.bawah}>
                        <div className={styles.productImage}>
                            <div className={styles.judul}>Product Image</div>
                            <hr />

                            <div className={styles.isi}>
                                <div className={styles.tag}>
                                    <label htmlFor="tagProduct">Tag</label>
                                    <input
                                        id="tagProduct"
                                        name="tagProduct"
                                        type="text"
                                        placeholder='ex: genset, genset slient'
                                        onChange={formik.handleChange}
                                        value={formik.values.tagProduct}
                                        style={formik.errors.tagProduct ? { border: '1px solid var(--colormain)' } : {}}
                                    />
                                </div>

                                <div className={styles.judulsamping}>Product Image</div>
                                <div className="image-preview">

                                    {selectedImagesDB?.map((image, index) => {
                                        return (
                                            <div key={index} style={{ display: 'inline-block', position: 'relative', margin: '10px' }}>
                                                <Image
                                                    src={image.url}
                                                    alt={`Preview ${index}`}
                                                    style={{ width: '90px', height: '90px', objectFit: 'cover' }}
                                                    width={90}
                                                    height={90}
                                                />
                                                {!loading &&
                                                    <>
                                                        {alertKondisi && alertIDDeleteImage == image.public_id &&
                                                            <div className={styles.yesno}>
                                                                <div className={styles.tombol} onClick={() => handleRemoveImageDB(image.public_id, false, true)}>YES</div>
                                                                <div className={styles.tombol} onClick={() => handleRemoveImageDB(image.public_id, false)}>NO</div>
                                                            </div>
                                                        }
                                                        {!alertKondisi &&
                                                            <button
                                                                type="button"
                                                                onClick={() => handleRemoveImageDB(image.public_id, true)}
                                                                className={styles.tombolhapus}
                                                            >
                                                                X
                                                            </button>
                                                        }
                                                    </>
                                                }
                                            </div>
                                        )
                                    })}

                                    {/* POSTING */}
                                    {selectedImages.map((image, index) => {
                                        return (
                                            <div key={index} style={{ display: 'inline-block', position: 'relative', margin: '10px' }}>
                                                <Image
                                                    src={image.preview}
                                                    alt={`Preview ${index}`}
                                                    style={{ width: '90px', height: '90px', objectFit: 'cover' }}
                                                    width={90}
                                                    height={90}
                                                />
                                                {!loading &&
                                                    <>
                                                        {alertKondisi && alertIDDeleteImage == index &&
                                                            <div className={styles.yesno}>
                                                                <div className={styles.tombol} onClick={() => handleRemoveImage(index, false, true)}>YES</div>
                                                                <div className={styles.tombol} onClick={() => handleRemoveImage(index, false)}>NO</div>
                                                            </div>
                                                        }
                                                        {!alertKondisi &&
                                                            <button
                                                                type="button"
                                                                onClick={() => handleRemoveImage(index, true)}
                                                                className={styles.tombolhapus}
                                                            >
                                                                X
                                                            </button>
                                                        }
                                                    </>
                                                }
                                            </div>
                                        )
                                    })}
                                </div>

                                <label
                                    className={styles.labeltag}
                                    htmlFor="myFile"><MdOutlineFileUpload /> &nbsp;Upload Image</label>
                                <input
                                    style={{ display: 'none' }}
                                    id='myFile'
                                    type='file'
                                    name='myFile'
                                    accept="image/*"
                                    onChange={handleChange}
                                    multiple
                                />

                                <div>{(formik.errors.myFile) ? <p style={{ color: 'red' }}>{formik.errors.myFile}</p> : null}</div>

                            </div>
                        </div>
                        <div className={styles.detaildetail}>
                            <div className={styles.detail}>
                                <div className={styles.judul}>General Information</div>
                                <hr />
                                <div className={styles.isi}>
                                    <label htmlFor="productName">Product Name</label>
                                    <input
                                        disabled={loading}
                                        id="productName"
                                        name="productName"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.productName}
                                        style={formik.errors.productName ? { border: '1px solid var(--colormain)' } : {}}
                                    />

                                    <div className={styles.satubaris}>
                                        <div className={styles.bariskan}>
                                            <label htmlFor="stockProduct">Stock Product</label>
                                            <input
                                                disabled={loading}
                                                id="stockProduct"
                                                name="stockProduct"
                                                type="number"
                                                onChange={formik.handleChange}
                                                value={formik.values.stockProduct}
                                                style={formik.errors.stockProduct ? { border: '1px solid var(--colormain)' } : {}}

                                            />
                                        </div>

                                        <div className={styles.bariskan}>
                                            <label htmlFor="productType">Product Type</label>
                                            <input
                                                disabled={loading}
                                                id="productType"
                                                name="productType"
                                                type="text"
                                                onChange={formik.handleChange}
                                                value={formik.values.productType}
                                                style={formik.errors.productType ? { border: '1px solid var(--colormain)' } : {}}

                                            />
                                        </div>

                                        <div className={styles.bariskan}>
                                            <label htmlFor="subProductType">Sub Product Type</label>
                                            <input
                                                disabled={loading}
                                                id="subProductType"
                                                name="subProductType"
                                                type="text"
                                                onChange={formik.handleChange}
                                                value={formik.values.subProductType}
                                                style={formik.errors.subProductType ? { border: '1px solid var(--colormain)' } : {}}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.satubaris}>
                                        <div className={styles.bariskan}>
                                            <label htmlFor="productPrice">Price</label>
                                            <input
                                                disabled={loading}
                                                id="productPrice"
                                                name="productPrice"
                                                type="number"
                                                onChange={formik.handleChange}
                                                value={formik.values.productPrice}
                                                style={formik.errors.productPrice ? { border: '1px solid var(--colormain)' } : {}}
                                            />
                                        </div>

                                        <div className={styles.bariskan}>
                                            <label htmlFor="productDiscount">Discount (optional)</label>
                                            <input
                                                disabled={loading}
                                                id="productDiscount"
                                                name="productDiscount"
                                                type="number"
                                                onChange={formik.handleChange}
                                                value={formik.values.productDiscount}
                                                max={100}
                                                style={formik.errors.productDiscount ? { border: '1px solid var(--colormain)' } : {}}
                                            />
                                        </div>

                                        <div className={styles.bariskan}>
                                            <label htmlFor="productPriceFinal">Discount Price</label>
                                            <input
                                                id="productPriceFinal"
                                                name="productPriceFinal"
                                                type="number"
                                                onChange={formik.handleChange}
                                                value={Math.round(formik.values.productPrice - ((formik.values.productPrice * formik.values.productDiscount) / 100)) != 0 && Math.round(formik.values.productPrice - ((formik.values.productPrice * formik.values.productDiscount) / 100))}
                                                disabled
                                                style={formik.errors.productPriceFinal ? { border: '1px solid var(--colormain)' } : {}}
                                            // disabled
                                            />
                                        </div>
                                    </div>

                                    <label htmlFor="productPrice">Deskripsi</label>
                                    <Editor
                                        editorState={editorState}
                                        toolbarClassName="toolbarClassName"
                                        wrapperClassName="wrapperClassName"
                                        editorClassName="editorClassName"
                                        placeholder="Tulis Diskripsi..."
                                        onEditorStateChange={onEditorStateChange}
                                        mention={{
                                            separator: " ",
                                            trigger: "@",
                                            suggestions: [
                                                { text: "APPLE", value: "apple" },
                                                { text: "BANANA", value: "banana", url: "banana" },
                                                { text: "CHERRY", value: "cherry", url: "cherry" },
                                                { text: "DURIAN", value: "durian", url: "durian" },
                                                { text: "EGGFRUIT", value: "eggfruit", url: "eggfruit" },
                                                { text: "FIG", value: "fig", url: "fig" },
                                                { text: "GRAPEFRUIT", value: "grapefruit", url: "grapefruit" },
                                                { text: "HONEYDEW", value: "honeydew", url: "honeydew" }
                                            ]
                                        }} />
                                </div>
                            </div>
                            <div className={styles.detail} style={{ margin: '20px 0 30px 0' }}>
                                <div className={styles.judul}>Spesifikasi Produk</div>
                                <hr />
                                <div className={styles.isi}>
                                    <div className={styles.satubaris}>
                                        <div className={styles.bariskan}>
                                            <label htmlFor="phase_spec">Phase</label>
                                            <input
                                                disabled={loading}
                                                id="phase_spec"
                                                name="phase_spec"
                                                type="text"
                                                placeholder='ex: 3 Phase'
                                                onChange={formik.handleChange}
                                                value={formik.values.phase_spec}
                                                style={formik.errors.phase_spec ? { border: '1px solid var(--colormain)' } : {}}
                                            />
                                        </div>

                                        <div className={styles.bariskan}>
                                            <label htmlFor="frequency_spec">Frekuensi</label>
                                            <input
                                                disabled={loading}
                                                id="frequency_spec"
                                                name="frequency_spec"
                                                type="text"
                                                placeholder='ex: 50Hz'
                                                onChange={formik.handleChange}
                                                value={formik.values.frequency_spec}
                                                style={formik.errors.frequency_spec ? { border: '1px solid var(--colormain)' } : {}}
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.satubaris}>
                                        <div className={styles.bariskan}>
                                            <label htmlFor="gensetPower_spec">Genset Power</label>
                                            <input
                                                disabled={loading}
                                                id="gensetPower_spec"
                                                name="gensetPower_spec"
                                                type="text"
                                                placeholder='ex: '
                                                onChange={formik.handleChange}
                                                value={formik.values.gensetPower_spec}
                                                style={formik.errors.gensetPower_spec ? { border: '1px solid var(--colormain)' } : {}}
                                            />
                                        </div>

                                        <div className={styles.bariskan}>
                                            <label htmlFor="ratedPower_spec">Rated</label>
                                            <input
                                                disabled={loading}
                                                id="ratedPower_spec"
                                                name="ratedPower_spec"
                                                type="text"
                                                placeholder='ex: 9KVA'
                                                onChange={formik.handleChange}
                                                value={formik.values.ratedPower_spec}
                                                style={formik.errors.ratedPower_spec ? { border: '1px solid var(--colormain)' } : {}}
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.satubaris}>
                                        <div className={styles.bariskan}>
                                            <label htmlFor="maxPower_spec">Max Power</label>
                                            <input
                                                disabled={loading}
                                                id="maxPower_spec"
                                                name="maxPower_spec"
                                                type="text"
                                                placeholder='ex: 9.5KVA'
                                                onChange={formik.handleChange}
                                                value={formik.values.maxPower_spec}
                                                style={formik.errors.maxPower_spec ? { border: '1px solid var(--colormain)' } : {}}
                                            />
                                        </div>

                                        <div className={styles.bariskan}>
                                            <label htmlFor="ratedACVoltage_spec">Rated Voltage</label>
                                            <input
                                                disabled={loading}
                                                id="ratedACVoltage_spec"
                                                name="ratedACVoltage_spec"
                                                placeholder='ex: 220V'
                                                type="text"
                                                onChange={formik.handleChange}
                                                value={formik.values.ratedACVoltage_spec}
                                                style={formik.errors.ratedACVoltage_spec ? { border: '1px solid var(--colormain)' } : {}}
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.satubaris}>
                                        <div className={styles.bariskan}>
                                            <label htmlFor="starting_spec">Starting</label>
                                            <input
                                                disabled={loading}
                                                id="starting_spec"
                                                name="starting_spec"
                                                type="text"
                                                placeholder='ex: Electric'
                                                onChange={formik.handleChange}
                                                value={formik.values.starting_spec}
                                                style={formik.errors.starting_spec ? { border: '1px solid var(--colormain)' } : {}}
                                            />
                                        </div>

                                        <div className={styles.bariskan}>
                                            <label htmlFor="fuelConsumption_spec">Fuel Consumption</label>
                                            <input
                                                disabled={loading}
                                                id="fuelConsumption_spec"
                                                name="fuelConsumption_spec"
                                                type="text"
                                                placeholder='ex: 2.5L/Hr'
                                                onChange={formik.handleChange}
                                                value={formik.values.fuelConsumption_spec}
                                                style={formik.errors.fuelConsumption_spec ? { border: '1px solid var(--colormain)' } : {}}
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.satubaris}>
                                        <div className={styles.bariskan}>
                                            <label htmlFor="weight_spec">Wight</label>
                                            <input
                                                disabled={loading}
                                                id="weight_spec"
                                                name="weight_spec"
                                                type="number"
                                                placeholder='ex: 250KG'
                                                onChange={formik.handleChange}
                                                value={formik.values.weight_spec}
                                                style={formik.errors.weight_spec ? { border: '1px solid var(--colormain)' } : {}}
                                            />
                                        </div>

                                        <div className={styles.bariskan}>
                                            <label htmlFor="dimension_spec">Dimension</label>
                                            <input
                                                disabled={loading}
                                                id="dimension_spec"
                                                name="dimension_spec"
                                                type="text"
                                                onChange={formik.handleChange}
                                                placeholder='ex: 1130x760x860mm'
                                                value={formik.values.dimension_spec}
                                                style={formik.errors.dimension_spec ? { border: '1px solid var(--colormain)' } : {}}
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                </form>
            </div >
        </div >

    )
}
