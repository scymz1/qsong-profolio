import json
import re

publications = ["Liu X, Wang Q, Zhou M, Zhou X, Song Q*, “DrugFormer: graph-enhanced language model to predict drug sensitivity.” Advanced Science (2024) (IF: 16.3)",
      "Liu X, Yi J, Li T, Wen J, Kim P, Song Q*, Zhou X, “DRMref: comprehensive reference map of drug resistance mechanisms.” Nucleic Acids Research (2024) (IF: 16.6)",
      "Tang Z, Zhou M, Zhang K, Song Q*, “scPerb: predict single-cell perturbation via style transfer-based variational autoencoder.” Journal of Advanced Research (2024) (IF: 11.0)",
      "Li B, Zhang Y, Wang Q, Zhang C, Li M, Wang G, Song Q*, “Gene Expression Prediction from Histology Images via Hypergraph Neural Networks.” Briefings in Bioinformatics (2024) (IF: 7.9)",
      "Budhkar A, Tang Z, Liu X, Zhang X, Su J, Song Q*, “xSiGra: Explainable model for single-cell spatial data elucidation.” Briefings in Bioinformatics (2024) (IF: 7.9)",
      "Wang Q, Li Y, Zhou X, Song Q*, “AntiFormer: Knowledge graph enhanced LLM for binding affinity prediction.” Briefings in Bioinformatics (2024) (IF: 7.9)",
      "Liu L, Dong P, Peng A, Song Q*, He Z, “Understanding Inflammatory Bowel Disease at Single-cell resolution.” Computational and Structural Biotechnology Journal (2024)",
      "Zhu W, Du Z, Xu Z, Yang D, Chen M, Song Q*, “SCRN: Single-cell Gene Regulatory Network Identification in Alzheimer's Disease.” IEEE/ACM Transactions on Computational Biology and Bioinformatics (2024)",
      "Li Z, Liu X, Tang Z, Zhang P, Jin N, Eadon M, Song Q*, Chen Y, Su J. “TrajVis: a visual clinical decision support system to translate artificial intelligence trajectory models in the precision management of chronic kidney disease.” Journal of the American Medical Informatics Association (2024)",
      "Gatz AE, Xiong C, Chen Y, Jiang S, Nguyen CM, Song Q, Li X, Zhang P, Eadon MT, Su J. “Health disparities in the risk of severe acidosis: real-world evidence from the All of Us cohort.” Journal of the American Medical Informatics Association (2024)",
      "Liu X, Wang G, Wang A, Wen J, Kim P, Song Q, Zhou X, \"CRISPRoffT: Comprehensive database of CRISPR/Cas off-targets.\" Nucleic Acids Research (2024) (IF: 16.6)",
      "Joyce BT, Yao J, Zheng Y, Gao T, Nannini D, Lin S, Li X, Meliker J, Song Q, Jacobs D, Lloyd-Jones D. “Temperature and carotid intima-medial thickness: The coronary artery risk development in young adults (CARDIA) study.” The Science of the total environment (2024).",
      "Wu C, Ning W, Wu T, Chen J, Yao H, Tao Z, Zhao X, Diao K, Wang J, Wang W, Li X. “TCfinder: Robust tumor cell discriminationin scRNA-seq based on gene pathway activity.” iMetaOmics (2024).",
      "Liu H, Marayati M, Cerda D, Lemezis B, Gao J, Song Q, Chen M, Zhang K, “The Cross-Regulation Between Set1, Clr4, and Lsd1/2 in Schizosaccharomyces pombe.” PLOS Genetics (2024)",
      "Tang Z, Zhang T, Yang B, Su J, Song Q*, “SiGra: Single-cell spatial elucidation through image-augmented graph transformer.” Nature Communications (2023) (IF: 16.1)",
      "Bouch RJ, Zhang J, Miller BC, Robbins CJ, Mosher TH, Li W, Krupenko SA, Nagpal R, Zhao J, Lu Y, Nikiforov MA, Song Q*, He Z. “Distinct inflammatory Th17 subsets emerge in autoimmunity and infection.” Journal of Experimental Medicine (2023) (IF: 14.1)"]


# Regular expression pattern to match "(20xx)" format
pattern = r"\(20\d{2}\)"

# Find all matches in the text
# matches = re.findall(pattern, text)
publications_news=[]
for i in range(0, len(publications)):
    year = re.findall(pattern, publications[i])
    if len(year) == 0:
        # print(publications[i])
        year = ["(2023)"]
    publications_news.append({"description": publications[i], "date": year[-1][1:5]})
