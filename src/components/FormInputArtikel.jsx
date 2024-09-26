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
import { HandleDeleteImageC } from '@/service/handleDeleteImageC';
import { useCon } from '@/zustand/useCon';
import toast from 'react-hot-toast';
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import Logout from './logout';
import { HandleValidasiArtikel } from '@/service/artikel/handleValidasi';
import { HandlePostCategory } from '@/service/handlePostCategory';
import { HandlePostCategoryArtikel } from '@/service/artikel/handlePostKategori';

export default function FormInputArtikel({ data, text, dataKategori }) {
    const [klikKategori, setKlikKategori] = useState(false);

    const pathname = usePathname()
    const setLayangArtikel = useCon((state) => state.setLayangArtikel)

    const [selectedImages, setSelectedImages] = useState([]);
    const [selectedImagesDB, setSelectedImagesDB] = useState(data?.imageProductArtikel);

    const [selectedImagesDBLocal, setSelectedImagesDBLocal] = useState([]);
    const [alertIDDeleteImage, setalertIDDeleteImage] = useState('');

    const [alertKondisi, setAlertKondisi] = useState(false);
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [draf, setDraf] = useState(null)

    // TEXT EDITOR
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const onEditorStateChange = (editorState) => {

        setEditorState(editorState)
    };

    useEffect(() => {
        const edit = () => {
            const contentBlock = htmlToDraft(data?.content);
            const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
            const editorState = EditorState.createWithContent(contentState);
            setEditorState(editorState)
        }
        data && edit()
    }, [data, data?.content])

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

        if (dataKategori?.filter((data) => data?.category == kategori).length) {
            toast.error(`Produk kategori ${kategori} sudah ada, silakan pilih kategori lain.`);
            setLoadingKategori(false)
            return true
        } else {
            await HandlePostCategoryArtikel({
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
        title: data ? data?.title : '',
        categoryArtikelId: data ? data?.categoryArtikelId : '',
        content: draftToHtml(convertToRaw(editorState.getCurrentContent())),
        description: data ? data?.description : '',
        tags: data ? data?.tags : '',
        images: []
    };

    const validationSchema = Yup.object({
        title: Yup.string()
            .max(150, 'Must be 15 characters or less')
            .required('*'),
        content: Yup.string()
            .required('*'),
        description: Yup.string()
            .min(100, 'Minimal 100huruf')
            .required('*'),
        tags: Yup.string()
            .max(150, 'Must be 15 characters or less')
            .required('*'),
        categoryArtikelId: Yup.string()
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
    });

    const handleSubmit = async (value) => {
        try {
            setLoading(true)
            const slug = value?.title
                ?.toLowerCase() // ubah jadi huruf kecil
                ?.replace(/[^a-z0-9\s]/g, '') // hapus karakter selain huruf, angka, dan spasi
                ?.trim() // hapus spasi di awal dan akhir
                ?.replace(/\s+/g, '-')

            // Validate if the slug is duplicate
            const slugData = pathname == '/postartikel' ? await HandleValidasiArtikel(slug) : []

            if (pathname == '/postartikel' && slugData?.data?.length) {
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
                    content: draftToHtml(convertToRaw(editorState.getCurrentContent())),
                    slug: slug,
                    saveDraf: draf,
                    dataImage: dataImage
                }


                await fetch(`${process.env.NEXT_PUBLIC_URL}/api/a/listArtikel`, {
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
                            await fetch(`${process.env.NEXT_PUBLIC_URL}/api/a/listArtikel`, {
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
                // resetForm()
                pathname == '/' && setLayangArtikel()
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
                                        {data ? data?.title : 'PelangiTeknik'}
                                    </Link>
                                    <div className={styles.kanan}>
                                        <button type='submit' onClick={() => setDraf(true)} className={styles.draf} >{draf ? loading ? 'Loading...' : 'Save to Draf' : 'Save to Draf'}</button>
                                        <button type='submit' onClick={() => setDraf(false)} className={styles.save}>{draf ? text ? text : 'Save Artikel' : loading ? 'Loading...' : text ? text : 'Save Artikel'}</button>
                                        <Logout />
                                    </div>
                                </div>
                                <div className={styles.bawah}>
                                    <div className={styles.productImage}>
                                        <div className={styles.judul}>Meta Tag Google</div>
                                        <hr />
                                        <div className={styles.isi}>
                                            <div className={styles.bariskankategori} >
                                                {klikKategori && <div className={styles.tambahkategori}>
                                                    <div className={styles.ataskategori}>
                                                        <label htmlFor="kategori">Tambah Kategori</label>
                                                        {!loadingKategori && <div
                                                            className={styles.closekategori}
                                                            style={{ position: 'absolute', right: 0, top: '-25px', background: 'red', display: 'flex', justifyContent: 'center', color: 'white' }}
                                                            onClick={() => setKlikKategori(!klikKategori)}>x</div>}
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

                                                <label style={{ display: 'flex' }} htmlFor="categoryArtikelId">Kategori  <ErrorMessage name="categoryArtikelId" component="div" style={{ color: 'red' }} />
                                                    &nbsp; <div className={styles.tambahkategoriklik} onClick={() => setKlikKategori(!klikKategori)}>(Tambah ? )</div>
                                                </label>

                                                <Field as="select" name="categoryArtikelId" id="categoryArtikelId">
                                                    <option value="">Select a Kategori</option>
                                                    {dataKategori?.map((data, i) => {
                                                        return (
                                                            <option key={i} value={data?.category}>{data?.category}</option>
                                                        )
                                                    })}

                                                </Field>

                                                {/* <Field type="text" name="productKategori" id="productKategori" /> */}
                                            </div>
                                            <div className={styles.tag}>
                                                <label htmlFor="tags">Tag <ErrorMessage name="tags" component="div" style={{ color: 'red' }} /></label>
                                                <Field type="text"
                                                    name="tags"
                                                    id="tags"
                                                    placeholder={'ex: genset slient, genset 20kva'}
                                                />

                                            </div>
                                            <div className={styles.tag}>
                                                <label htmlFor="description">Description <ErrorMessage name="description" component="div" style={{ color: 'red' }} /></label>
                                                <Field placeholder="ex: genset adalah perangkat yang digunakan untuk menghasilkan listrik saat sumber listrik utama tidak tersedia. " as="textarea" type="text" name="description" id="description" />
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
                                                style={{ display: 'none' }}
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
                                                <label htmlFor="title">Judul Artikel  <ErrorMessage name="title" component="div" style={{ color: 'red' }} /></label>
                                                <Field placeholder={'ex: Cara merawat genset supaya bersih dan sehat'} type="text" name="title" id="title" />


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
