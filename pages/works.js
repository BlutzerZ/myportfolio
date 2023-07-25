import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "../components/layouts/section";
import { WorkItem } from "../components/layouts/item";
import thumbLarazer from '../public/images/contents/larazer.png'
import thumbEduca from '../public/images/contents/educa.png'
import thumbSidemit from '../public/images/contents/sidemit.png'
import thumbShoespick from '../public/images/contents/shospick.png'
import thumbPcwork from '../public/images/contents/3dBlender.png'
import Layout from "../components/layouts/article";

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Project
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay={0.3}>
                        <WorkItem id="Larazer" title="Larazer" thumbnail={thumbLarazer}>
                            Sebuah sistem untuk memanage organsasi, terdapat fitur seperti proker, post, member, kas, document pendukung, dan role.
                        </WorkItem>
                    </Section>

                    <Section delay={0.3}>
                        <WorkItem id="Educa" title="Educa" thumbnail={thumbEduca}>
                            Sebuah Platform untuk belajar kursus akuntansi, web ini memiliki fitur web ini memiliki fitur menambahkan/edit/hapus course, admin dan user, upload file tugas course.
                        </WorkItem>
                    </Section>

                    <Section delay={0.3}>
                        <WorkItem id="SiDemit" title="SiDemit" thumbnail={thumbSidemit}>
                            Sebuah Website Ecommerce untuk pembelian pakaian, web ini memiliki fitur menambahkan/edit/hapus produk, update stock, dan checkout barang.
                        </WorkItem>
                    </Section>

                    <Section delay={0.3}>
                        <WorkItem id="shoespick" title="Shoes Picker" thumbnail={thumbShoespick}>
                            ShoesPicker adalah sebuah website dimana para user dapat mencari sepatu dengan kriteria yang diinginkan, website ini bekerja dengan cara crawl web sepatu lain dan mencarikan data paling cocok
                        </WorkItem>
                    </Section>

                    <Section delay={0.3}>
                        <WorkItem id="3dSetuppc" title="My Pcsetup" thumbnail={thumbPcwork}>
                            Blender learning and make a mock 3d pc setup daily used
                        </WorkItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}
export { getServerSideProps } from '../components/chakra'
export default Works