'use client'
import { useState } from 'react'
import { useFormik } from "formik";
import * as Yup from 'yup';
import styles from '../components/formInput.module.css'
import { ContentState, convertFromHTML, convertToRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "draft-js/dist/Draft.css";
import draftToHtml from "draftjs-to-html";
import { useRouter } from 'next/navigation';

export default function UploadGambar() {
    const [selectedImages, setSelectedImages] = useState([]);
    const router = useRouter()

    const [price, setPrice] = useState(null)
    const [diskon, setDiskon] = useState(null)
    const diskonPrice = (price * diskon) / 100


    const [kondisiPrice, setKondisiPrice] = useState(false)
    const [kondisiDiskon, setKondisiDiskon] = useState(false)
    const [kondisiDiskonPrice, setDiskonPrice] = useState(false)


    // TEXT EDITOR
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const onEditorStateChange = (editorState) => {
        setEditorState(editorState)
    };

    // useEffect(() => {
    //     const edit = () => {
    //         const contentBlock = htmlToDraft(data?.diskripsi_barang);
    //         const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
    //         const editorState = EditorState.createWithContent(contentState);
    //         setEditorState(editorState)
    //     }
    //     kondisi && edit()
    // }, [kondisi, data?.diskripsi_barang])

    // const ResetDeskripsi = () => {
    //     const blocksFromHTML = convertFromHTML('&nbsp;')
    //     const state = ContentState.createFromBlockArray(
    //         blocksFromHTML.contentBlocks,
    //         blocksFromHTML.entityMap,
    //     )
    //     setEditorState(EditorState.createWithContent(state))
    // }

    const validationRules = Yup.object().shape({
        productName: Yup.string()
            .max(150, 'Must be 15 characters or less')
            .required('Required'),
        productType: Yup.string()
            .max(200, 'Must be 20 characters or less')
            .required('Required'),
        productMerk: Yup.string()
            .max(200, 'Must be 20 characters or less')
            .required('Required'),
        productPrice: Yup.number()
            .max(9999999999, 'Must be 200 characters or less')
            .required('Required'),
        productDiscount: Yup.number()
            .max(999, 'Must be 200 characters or less')
            .required('Required'),
        productDiscountPrice: Yup.number()
            .max(9999999999, 'Must be 200 characters or less')
            .required('Required'),

        phase_spec: Yup.string()
            .max(200, 'Must be 20 characters or less')
            .required('Required'),
        frequency_spec: Yup.string()
            .max(200, 'Must be 20 characters or less')
            .required('Required'),
        gensetPower_spec: Yup.string()
            .max(200, 'Must be 20 characters or less')
            .required('Required'),
        ratedPower_spec: Yup.string()
            .max(200, 'Must be 20 characters or less')
            .required('Required'),
        maxPower_spec: Yup.string()
            .max(200, 'Must be 20 characters or less')
            .required('Required'),
        ratedACVoltage_spec: Yup.string()
            .max(200, 'Must be 20 characters or less')
            .required('Required'),
        starting_spec: Yup.string()
            .max(200, 'Must be 20 characters or less')
            .required('Required'),
        fuelConsumption_spec: Yup.string()
            .max(200, 'Must be 20 characters or less')
            .required('Required'),
        weight_spec: Yup.string()
            .max(200, 'Must be 20 characters or less')
            .required('Required'),
        dimension_spec: Yup.string()
            .max(200, 'Must be 20 characters or less')
            .required('Required'),
        // email: Yup.string().email('Invalid email address').required('Required'),
        myFile: Yup.mixed().required('required')
            .test('fileFormat', 'Only Image files are allowed', value => {
                console.log(value)

                if (value) {
                    const supportedFormats = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'tiff'];
                    return supportedFormats.includes(value.name.split('.').pop());
                }
                return true;
            })
            .test('fileSize', 'File size must not be more than 3MB',
                value => {
                    if (value) {
                        return value.size <= 3145728;
                    }
                    return true;
                }),
    })
    const formik = useFormik({
        initialValues: {
            productName: '',
            productType: '',
            productMerk: '',
            productPrice: '',
            productDiscount: '',
            productDiscountPrice: '',
            descProduct: draftToHtml(convertToRaw(editorState.getCurrentContent())),

            phase_spec: '',
            frequency_spec: '',
            gensetPower_spec: '',
            ratedPower_spec: '',
            maxPower_spec: '',
            ratedACVoltage_spec: '',
            starting_spec: '',
            fuelConsumption_spec: '',
            weight_spec: '',
            dimension_spec: '',
            // email: '',
            myFile: '',
        },
        onSubmit: async (value) => {
            console.log(value);
            price == null ? setKondisiPrice(true) : setKondisiPrice(false)
            diskon == null ? setKondisiDiskon(true) : setKondisiPrice(false)
            diskonPrice == 0 ? setDiskonPrice(true) : setKondisiPrice(false)

            console.log('Submitted')
            if (selectedImages.length === 0) return

            try {
                const formData = new FormData();
                selectedImages.forEach(image => {
                    formData.append('files', image.file); // Append each image file to formData
                });

                const res = await fetch('http://localhost:3000/api', {
                    method: 'POST',
                    body: formData
                })
                const dataRes = await res.json()
                console.log('dari res', dataRes)

                // handle the error
                if (!res.ok) throw new Error(await res.text())
            } catch (e) {
                // Handle errors here
                console.error(e)
            }
        },
        validationSchema: validationRules,
    })

    // Remove image by index
    const handleRemoveImage = (index) => {
        const updatedImages = selectedImages.filter((_, i) => i !== index); // Filter out the image
        setSelectedImages(updatedImages);
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


    return (
        <div className={styles.container}>


            <div className={styles.dalamcontainer}>
                <form className={styles.form} onSubmit={formik.handleSubmit}>
                    <div className={styles.atas}>
                        <div className={styles.kiri}>PelangiTeknik</div>
                        <div className={styles.kanan}>
                            <button className={styles.draf}>Save to Draf</button>
                            <button type='submit' className={styles.save}>Save Product</button>
                        </div>
                    </div>
                    <div className={styles.bawah}>
                        <div className={styles.productImage}>
                            <div className={styles.judul}>Product Image</div>
                            <hr />
                            <div className={styles.isi}>
                                <input
                                    type='file'
                                    name='myFile'
                                    accept="image/*"
                                    onChange={handleChange}
                                    multiple
                                />

                                <div>{(formik.errors.myFile) ? <p style={{ color: 'red' }}>{formik.errors.myFile}</p> : null}</div>
                                <br />
                                <div className="image-preview">
                                    {selectedImages.map((image, index) => (
                                        <div key={index} style={{ display: 'inline-block', position: 'relative', margin: '10px' }}>
                                            <img
                                                src={image.preview}
                                                alt={`Preview ${index}`}
                                                style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveImage(index)}
                                                style={{
                                                    position: 'absolute',
                                                    top: '5px',
                                                    right: '5px',
                                                    background: 'red',
                                                    color: 'white',
                                                    border: 'none',
                                                    // borderRadius: '50%',
                                                    width: 'fit-content',
                                                    height: '20px',
                                                    cursor: 'pointer',
                                                }}
                                            >
                                                X
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className={styles.detaildetail}>
                            <div className={styles.detail}>
                                <div className={styles.judul}>General Information</div>
                                <hr />
                                <div className={styles.isi}>
                                    <label htmlFor="productName">Product Name</label>
                                    <input
                                        id="productName"
                                        name="productName"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.productName}
                                        style={formik.errors.productName ? { border: '1px solid var(--colormain)' } : {}}
                                    />

                                    <div className={styles.satubaris}>
                                        <div className={styles.bariskan}>
                                            <label htmlFor="productType">Product Type</label>
                                            <input
                                                id="productType"
                                                name="productType"
                                                type="text"
                                                onChange={formik.handleChange}
                                                value={formik.values.productType}
                                                style={formik.errors.productType ? { border: '1px solid var(--colormain)' } : {}}

                                            />
                                        </div>

                                        <div className={styles.bariskan}>
                                            <label htmlFor="productMerk">Product Merk</label>
                                            <input
                                                id="productMerk"
                                                name="productMerk"
                                                type="text"
                                                onChange={formik.handleChange}
                                                value={formik.values.productMerk}
                                                style={formik.errors.productMerk ? { border: '1px solid var(--colormain)' } : {}}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.satubaris}>
                                        <div className={styles.bariskan}>
                                            <label htmlFor="productPrice">Price</label>
                                            <input
                                                id="productPrice"
                                                name="productPrice"
                                                type="number"
                                                onChange={(e) => setPrice(e.target.value)}
                                                value={price}
                                                style={kondisiPrice ? { border: '1px solid var(--colormain)' } : {}}
                                            />
                                        </div>

                                        <div className={styles.bariskan}>
                                            <label htmlFor="productDiscount">Discount (optional)</label>
                                            <input
                                                id="productDiscount"
                                                name="productDiscount"
                                                type="number"
                                                onChange={(e) => setDiskon(e.target.value)}
                                                value={diskon}
                                                max={100}
                                                style={kondisiDiskon ? { border: '1px solid var(--colormain)' } : {}}
                                            />
                                        </div>

                                        <div className={styles.bariskan}>
                                            <label htmlFor="productDiscountPrice">Discount Price</label>
                                            <input
                                                id="productDiscountPrice"
                                                name="productDiscountPrice"
                                                type="number"
                                                value={diskonPrice == 0 ? '' : diskonPrice}
                                                disabled
                                                style={kondisiDiskonPrice ? { border: '1px solid var(--colormain)' } : {}}
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
                                                id="weight_spec"
                                                name="weight_spec"
                                                type="text"
                                                placeholder='ex: 250KG'
                                                onChange={formik.handleChange}
                                                value={formik.values.weight_spec}
                                                style={formik.errors.weight_spec ? { border: '1px solid var(--colormain)' } : {}}
                                            />
                                        </div>

                                        <div className={styles.bariskan}>
                                            <label htmlFor="dimension_spec">Dimension</label>
                                            <input
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
            </div>
        </div>

    )
}
