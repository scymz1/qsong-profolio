import json
import re

text = f"""1.	Liu X, Wang Q, Zhou M, Zhou X, Song Q*, “DrugFormer: graph-enhanced language model to predict drug sensitivity.” Advanced Science (2024) (IF: 16.3)
2.	Liu X, Yi J, Li T, Wen J, Kim P, Song Q*, Zhou X, “DRMref: comprehensive reference map of drug resistance mechanisms.” Nucleic Acids Research (2024) (IF: 16.6)
3.	Tang Z, Zhou M, Zhang K, Song Q*, “scPerb: predict single-cell perturbation via style transfer-based variational autoencoder.” Journal of Advanced Research (2024) (IF: 11.0)
4.	Li B, Zhang Y, Wang Q, Zhang C, Li M, Wang G, Song Q*, “Gene Expression Prediction from Histology Images via Hypergraph Neural Networks.” Briefings in Bioinformatics (2024) (IF: 7.9)
5.	Budhkar A, Tang Z, Liu X, Zhang X, Su J, Song Q*, “xSiGra: Explainable model for single-cell spatial data elucidation.” Briefings in Bioinformatics (2024) (IF: 7.9)
6.	Wang Q, Li Y, Zhou X, Song Q*, “AntiFormer: Knowledge graph enhanced LLM for binding affinity prediction.” Briefings in Bioinformatics (2024) (IF: 7.9)
7.	Liu L, Dong P, Peng A, Song Q*, He Z, “Understanding Inflammatory Bowel Disease at Single-cell resolution.” Computational and Structural Biotechnology Journal (2024)
8.	Zhu W, Du Z, Xu Z, Yang D, Chen M, Song Q*, “SCRN: Single-cell Gene Regulatory Network Identification in Alzheimer's Disease.” IEEE/ACM Transactions on Computational Biology and Bioinformatics (2024)
9.	Li Z, Liu X, Tang Z, Zhang P, Jin N, Eadon M, Song Q*, Chen Y, Su J. “TrajVis: a visual clinical decision support system to translate artificial intelligence trajectory models in the precision management of chronic kidney disease.” Journal of the American Medical Informatics Association (2024)
10.	Tang Z, Zhang T, Yang B, Su J, Song Q*, “SiGra: Single-cell spatial elucidation through image-augmented graph transformer.” Nature Communications (2023) (IF: 16.1)
11.	Bouch RJ, Zhang J, Miller BC, Robbins CJ, Mosher TH, Li W, Krupenko SA, Nagpal R, Zhao J, Lu Y, Nikiforov MA, Song Q*, He Z. “Distinct inflammatory Th17 subsets emerge in autoimmunity and infection.” Journal of Experimental Medicine (2023) (IF: 14.1)
12.	Tang Z, Zhang T, Yang B, Su J, Song Q*, “SpaRx: Elucidate single-cell spatial heterogeneity of drug responses for personalized treatment.” Briefings in Bioinformatics (2023) (IF: 7.9)
13.	Tang Z, Zhang T, Yang B, Su J, Song Q*, “spaCI: deciphering spatial cellular communications through adaptive graph model.” Briefings in Bioinformatics (2023) (IF: 7.9)
14.	Song Q, O’Neill S, Pasche B, Miller L, Ruiz J, Chan M, Soike M, “Single-cell sequencing reveals the landscape of the human brain metastatic microenvironment.” Communications Biology (2023)
15.	Rao F, Chen M, Yang D, Morrell B, Song Q*, Zhu W. “scENT for revealing gene clusters from single-cell RNA-seq data.” IEEE/ACM Transactions on Computational Biology and Bioinformatics (2023)
16.	Tang Z, Zhang T, Song Q*, Su J, Yang B. “PINet: Privileged Information Improve the Interpretablity and generalization of structural MRI in Alzheimer’s Disease.” In Proceedings of the 14th ACM International Conference on Bioinformatics, Computational Biology, and Health Informatics (ACM BCB '23)
17.	Song Q, Bates B, Shao YR, Hsu F, Liu F, Madhira V, Mitra A, Bergquist T, Kavuluru R, Li X, Sharafeldin N, Su J, Topaloglu U, \"Risk and outcome of breakthrough COVID-19 infections in vaccinated patients with cancer: real-word evidence from the National COVID Cohort Collaborative (N3C).\" Journal of Clinical Oncology (2022) (IF: 42.1)
18.	Chen M, Xu C, Xu Z, He Z, Su J, Song Q*, “Uncovering the dynamic effects of DEX treatment on lung cancer by integrating bioinformatic inference and multiscale modeling of scRNA-seq and proteomics data.” Computers in biology and medicine (2022) (IF: 7.0)
19.	Song Q*, Jin L, Zhu X, Su J, “SMGR: a joint statistical method for integrative analysis of single-cell multi-omics data.” NAR genomics and bioinformatics (2022)
20.	Chen M, Jia S, Xue M, Huang H, Xu Z, Yang D, Zhu W, Song Q*. “Dual-Stream Subspace Clustering Network for Revealing Gene Targets in Alzheimer’s Disease.” Computers in Biology and Medicine (2022)
21.	Song Q, L Liu, “Single-Cell RNA-Seq Technologies and Computational Analysis Tools: Application in Cancer Research.” Methods in molecular biology (2022)
22.	Song Q, Su J, Zhang W. “scGCN: a Graph Convolutional Networks Algorithm for Knowledge Transfer in Single Cell Omics.” Nature Communications (2021) (IF: 16.1)
23.	Song Q*, Su J. “DSTG: Deconvoluting Spatial Transcriptomics Data through Graph-based Artificial Intelligence.” Briefings in Bioinformatics (2021) (IF: 7.9)
24.	Song Q, Su J, Miller L, Zhang W. “scLM: automatic detection of consensus gene clusters across multiple single-cell datasets.” Genomics, Proteomics & Bioinformatics (2020) (IF: 11.5)
25.	Zhang J, Gu C, Song Q#, Zhu M, Xu Y, Xiao M, Zheng W. “Identifying cancer-associated fibroblasts as emerging targets for hepatocellular carcinoma.” Cell & Bioscience (2020) (IF: 7.0)
26.	Song Q, Hawkins G, Wudel L, et.al. “Dissecting intratumoral myeloid cell plasticity by single cell RNA-seq.” Cancer Medicine (2019)
27.	Song Q, Zhang W and Sun Y. “Haploinsufficiency and mutation are two sides of the cancer coin as cause and therapeutics target.” Translational Cancer Research (2017)
28.	Song Q, Wang H, Miller L and Zhou X. “Systems biology approach to studying proliferation-dependent prognostic subnetworks in breast cancer.” Scientific Reports (2015)
29.	Gatz AE, Xiong C, Chen Y, Jiang S, Nguyen CM, Song Q, Li X, Zhang P, Eadon MT, Su J. “Health disparities in the risk of severe acidosis: real-world evidence from the All of Us cohort.” Journal of the American Medical Informatics Association (2024)
30.	Liu X, Wang G, Wang A, Wen J, Kim P, Song Q, Zhou X, \"CRISPRoffT: Comprehensive database of CRISPR/Cas off-targets.\" Nucleic Acids Research (2024) (IF: 16.6)
31.	Joyce BT, Yao J, Zheng Y, Gao T, Nannini D, Lin S, Li X, Meliker J, Song Q, Jacobs D, Lloyd-Jones D. “Temperature and carotid intima-medial thickness: The coronary artery risk development in young adults (CARDIA) study.” The Science of the total environment (2024).
32.	Wu C, Ning W, Wu T, Chen J, Yao H, Tao Z, Zhao X, Diao K, Wang J, Wang W, Li X. “TCfinder: Robust tumor cell discriminationin scRNA-seq based on gene pathway activity.” iMetaOmics (2024).
33.	Lu Z, Miao X, Song Q, Ding H, Skardal A, Dai K, Zhao W, Lu B, Atala A, “Detection of lineage-reprogramming efficiency of tumor cells in a 3D-printed tumor-on-a-chip model.” Theranostics (2023) (IF: 12.4)
34.	Meyers A, Wang Z, Han W, hao Q, Zabalawi M, Duan L, Zhang Q, Manne R, Lorenzo F, Quinn M, Song Q, Fan D, Lin H, Furdui C, Locasale J, McCall C, Zhu X. “Pyruvate dehydrogenase kinase supports macrophage NLRP3 inflammasome activation during acute inflammation.” Cell Reports (2023) (IF: 7.5)
35.	Jiang Y, Song L, Lin Y, Li T, Li B, Mao X, Song Q, Xing C, Zheng G, Huang S, Jin L, “ROS-mediated SRMS activation confers platinum resistance in ovarian cancer.” Oncogene (2023) (IF: 7.5)
36.	Walton N, Nagarajan R, Wang C, Sincan M, Freimuth R, Everman D, Walton D, Lemas D, Benos P, Alekseyenko A, Song Q, Uzun E, Taylor C, Alpher U, Person T, Rappoport N, Zhao Z, Williams M. “Enabling Clinical Application of Artificial Intelligence in Genomics: An Analysis of Current State and Future Needs - From the AMIA Genomics and Translational Bioinformatics Workgroup.” Journal of the American Medical Informatics Association (2023)
37.	Liu H, Marayati M, Cerda D, Lemezis B, Gao J, Song Q, Chen M, Zhang K, “The Cross-Regulation Between Set1, Clr4, and Lsd1/2 in Schizosaccharomyces pombe.” PLOS Genetics (2024)
38.	Zhang J, Liu Q, Zhang H, Dai M, Song Q, Yang D, Wu G, Chen M. “Uncovering the System Vulnerability and Criticality of Human Brain Under Dynamical Neuropathological Events in Alzheimer’s Disease.“ Journal of Alzheimer’s Disease (2023)
39.	Miao X, Wang H, Fan C, Song Q, Ding R, Wu J, Hu H, Chen K, Ji P, Wen Q, Shi M, Ye B, Fu D, Xiang M. “Enhancing prognostic accuracy in head and neck squamous cell carcinoma chemotherapy via a lipid metabolism-related clustered polygenic model.” Cancer Cell International (2023)
40.	Liu Y, Smith M, Wang Y, D’Agostino R, Ruiz J, Lycan T, Kucera G, Miller L, Li W, Chan M, Farris M, Su J, Song Q, Zhao D, Chandrasekaran A, Xing F, “c-Met mediated cytokine network promotes brain metastasis of breast cancer by remodeling neutrophil activities.” Cancers (2023)
41.	Ji Z, Song Q, Su J. “Advanced computational systems biology approaches for accelerating comprehensive research of the human brain.” Frontiers in Genetics (2023)
42.	Xu E, Zhang J, Li J, Song Q, Yang D, Wu G, Chen M. “Pathology Steered Stratification Network for Subtype Identification in Alzheimer's Disease.” Medical Physics (2023)
43.	N Yao, W Jiang, Y Wang, Song Q, X Cao, Zheng W, Zhang J, \"An immune-related signature for optimizing prognosis prediction and treatment decision of hepatocellular carcinoma.\" European Journal of Medical Research (2023)
44.	Huang H, Tang Z, Zhang T, Yang B, Song Q, Su J. “Feature Selection for Unsupervised Machine Learning”. 2023 IEEE 8th International Conference on Smart Cloud (2023)
45.	Liu Y, Wang L, Song Q, Ali M, Crowe W, Kucera G, Hawkins G, Soker S, Thomas K, Miller L, Lu Y, Bellinger C, Zhang W, Habib A, Petty J, Zhao D. “Intrapleural nano-immunotherapeutic promotes innate and adaptive immune responses to enhance anti-PD-L1 therapy for malignant pleural effusion.” Nature Nanotechnology (2022) (IF: 39.6)
46.	Yoo KW, Yadav MK, Song Q, Atala A, Lu B. “Targeting DNA polymerase to DNA double-strand breaks reduces DNA deletion size and increases templated insertions generated by CRISPR/Cas9.” Nucleic Acids Research (2022) (IF: 16.6)
47.	Zhang J, Wang L, Song Q, Xiao M, Gao J, Cao X, Zheng W. “Organoids in recapitulating tumorigenesis driven by risk factors: Current trends and future perspectives.” International Journal of Biological Sciences (2022) (IF: 8.3)
48.	Bian S, Ni W, Zhu M, Zhang X, Qiang Y, Zhang J, Ni Z, Shen Y, Qiu S, Song Q, Xiao M. ”Flap endonuclease 1 Facilitated Hepatocellular Carcinoma Progression by Enhancing USP7/MDM2-mediated P53 Inactivation.” International Journal of Biological Sciences (2022) (IF: 8.3)
49.	Li T, Mehraein-Ghomi F, Forbes E, Namjoshi S, Ballard A, Song Q, Chou P, Wang X, Kerrigan B, Lang F, Lesser G, Debinski W, Yang X, Zhang W, “HSP90-CDC37 functions as a chaperone for the oncogenic FGFR3-TACC3 fusion.” Molecular Therapy (2022) (IF: 12.4)
50.	Triozzi P, Stirling E, Song Q, Westwood B, Kooshki B, Forbes E, Holbrook B, Cook K, Alexander-Miller M, Miller L, Zhang W, Soto-Pantoja D, “Circulating Immune Bioenergetic, Metabolic, and Genetic Signatures Predict Melanoma Patients' Response to Anti–PD-1 Immune Checkpoint Blockade.” Clinical Cancer Research (2022) (IF: 11.1)
51.	Sharafeldin N, Bates B, Song Q, Madhira V, Yan Y, Dong S, Lee E, Kuhrt N, Shao YR, Liu F, Bergquist T. “Outcomes of COVID-19 in Patients With Cancer: Report From the National COVID Cohort Collaborative (N3C).” Journal of Clinical Oncology (2021) (IF: 42.1)
52.	Sharafeldin N, Bates B, Song Q, Madhira V, Shao YR, Liu F, Bergquist T, Su J, Topaloglu U. “Reply to K. Takada et al.” Journal of Clinical Oncology (2021) (IF: 42.1)
53.	Lu Z, Rajan S, Song Q, Zhao Y, Wan M, Aleman J, Skardal A, Bishop C, Atala A, Lu B. “3D scaffold-free microliver with drug metabolic function generated by lineage reprogrammed hepatocytes from human fibroblasts.” Biomaterials (2021) (IF: 12.5)
54.	Sun L, Zhang X, Song Q, Liu L, Forbes E, Tian W, Zhang Z, Kang Y, Wang H, Fleming J, Pasche B, Zhang W. “IGFBP2 promotes tumor progression by inducing alternative polarization of macrophages in pancreatic ductal adenocarcinoma through the STAT3 pathway.” Cancer Letters (2021)
55.	Zhu M, Wu M, Bian S, Song Q, Xiao M, Huang H, You L, Zhang J, Zhang J, Cheng C, Ni W. “DNA primase subunit 1 deteriorated progression of hepatocellular carcinoma by activating AKT/mTOR signaling and UBE2C-mediated P53 ubiquitination.” Cell & Bioscience (2021) (IF: 7.0)
56.	Zhu M, Huang Y, Bian S, Song Q, Zhang J, Zheng W. “Organoid model: Current Implications and Pharmaceutical Applications in Liver Diseases.” Current Molecular Pharmacology (2021); 14(4):498-508
57.	Zhang J, Song Q, Wu M, & Zheng W. “The Emerging Roles of Exosomes in the Chemoresistance of Hepatocellular Carcinoma.” Current medicinal chemistry (2021)
58.	Ni W, Bian S, Zhu M, Song Q, Zhang J, Xiao M, Zheng W. “Identification and Validation of Ubiquitin-specific Proteases as a Novel Prognostic Signature for Hepatocellular Carcinoma.” Frontiers in Oncology (2021)
59.	Su J, Song Q, Qasem S, O’Neill S, Furdui C, Pasche B, Metheny-Barlow L, Masters A, Lo H, Xing F, Watabe K, Miller L, Tatter S, Laxton A, Whitlow C, Chan M, Soike M, Ruiz J. “Multi-Omics Analysis of Brain Metastasis Outcomes Following Craniotomy.” Frontiers in Oncology (2021)
60.	Zheng W, Zhang J, Song Q, Xu Y, Zhu M, Ma J. “Rac Family Small GTPase 3 Correlates with Progression and Poor Prognosis in Bladder Cancer.” DNA and Cell Biology (2021)
61.	Bian S, Ni W, Zhu M, Song Q, Zhuang J, Ni R, Zheng W. “Identification and Validation of the N6-methyladenosine RNA Methylation Regulator YTHDF1 as A Novel Prognostic Marker and Potential Target for Hepatocellular Carcinoma.” Frontiers in Molecular Biosciences (2020)
62.	Zhang J, Wu M, Xu Y, Song Q, Zheng W. “Secretory Clusterin: A Promising Target for Chemoresistance of Hepatocellular Carcinoma.” Mini reviews in medicinal chemistry (2020)
63.	Zhang J, Song Q, Liu J, Lu L, Xu Y, & Zheng W. “Cyclin-Dependent Kinase Regulatory Subunit 2 Indicated Poor Prognosis and Facilitated Aggressive Phenotype of Hepatocellular Carcinoma.” Disease markers (2019)
64.	Berger C, Korkut A, et.al, Song Q, et.al. “A comprehensive Pan-Cancer molecular study of gynecologic and breast cancers.” Cancer Cell (2018) (IF: 48.8)
65.	Luo J, Liu L, Suresh V, Song Q, and Zhou X. \"RPI-Bind: a structure-based method for accurate identification of RNA-protein binding sites.\" Scientific Reports (2017)"""

publications = [i for i in text.split("\n")]
for i in range(0, 10):
    publications[i] = publications[i][3:]
for i in range(10, len(publications)):
    publications[i] = publications[i][4:]


# Regular expression pattern to match "(20xx)" format
pattern = r"\(20\d{2}\)"

# Find all matches in the text
# matches = re.findall(pattern, text)

for i in range(0, len(publications)):
    year = re.findall(pattern, publications[i])
    if len(year) == 0:
        # print(publications[i])
        year = ["(2023)"]
    publications[i] = (publications[i], year[-1][1:5])

# Sort publications by year
publications_sorted = sorted(publications, key=lambda x: x[1], reverse=True)
# print(publications_sorted)
publications = [i[0] for i in publications_sorted]

# Print sorted publications
# for pub in publications_sorted:
#     print(pub)

# print(publications)

json_output = json.dumps({"PublishedJournalArticles": publications}, ensure_ascii=False, indent=4)

# Print JSON output
print(json_output)
