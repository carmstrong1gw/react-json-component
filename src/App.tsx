import * as React from 'react';
import './App.css';

import RecursiveProperty from './RecursiveProperty';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <RecursiveProperty property={testJson} propertyName="Root Property" excludeBottomBorder={false} rootProperty={true}/>
        </div>
      </div>
    );
  }
}

export default App;

const testJson = {
    "id": "5ea9a661694bfa7c5e59614a",
    "provenance_domain": {
        "embargo": {},
        "contributors": [
            {
                "name": "Charles Hadley King",
                "affiliation": "George Washington University",
                "email": "hadley_king@gwu.edu",
                "contribution": [
                    "createdBy",
                    "curatedBy"
                ],
                "orcid": "https://orcid.org/0000-0003-1409-4549"
            },
            {
                "name": "Eric Donaldson",
                "affiliation": "FDA",
                "email": "Eric.Donaldson@fda.hhs.gov",
                "contribution": [
                    "authoredBy"
                ]
            }
        ],
        "name": "HCV1a ledipasvir resistance SNP detection",
        "version": "1",
        "license": "https://spdx.org/licenses/CC-BY-4.0.html",
        "created": "2020-04-29T16:08:01.814Z",
        "modified": "2020-04-29T16:08:01.814Z"
    },
    "description_domain": {
        "keywords": [
            "HCV1a",
            "Ledipasvir",
            "antiviral resistance",
            "SNP",
            "amino acid substitutions"
        ],
        "xref": [
            {
                "namespace": "pubchem.compound",
                "name": "PubChem-compound",
                "ids": [
                    "67505836"
                ],
                "access_time": "2020-01-31T17:59:00.000Z"
            },
            {
                "namespace": "pubmed",
                "name": "PubMed",
                "ids": [
                    "26508693"
                ],
                "access_time": "2020-01-31T06:00:00.000Z"
            },
            {
                "namespace": "so",
                "name": "Sequence Ontology",
                "ids": [
                    "SO:000002",
                    "SO:0000694",
                    "SO:0000667",
                    "SO:0000045"
                ],
                "access_time": "2020-01-01T06:00:00.000Z"
            },
            {
                "namespace": "taxonomy",
                "name": "Taxonomy",
                "ids": [
                    "31646"
                ],
                "access_time": "2020-01-01T07:00:00.000Z"
            }
        ],
        "platform": [
            "HIVE"
        ],
        "pipeline_steps": [
            {
                "step_number": 1,
                "name": "HIVE-hexagon",
                "description": "Alignment of reads to a set of references",
                "version": "1.3",
                "prerequisite": [
                    {
                        "name": "Hepatitis C virus genotype 1",
                        "uri": {
                            "uri": "http://www.ncbi.nlm.nih.gov/nuccore/22129792",
                            "access_time": "2017-01-24T09:40:17-0500"
                        }
                    },
                    {
                        "name": "Hepatitis C virus type 1b complete genome",
                        "uri": {
                            "uri": "http://www.ncbi.nlm.nih.gov/nuccore/5420376",
                            "access_time": "2017-01-24T09:40:17-0500"
                        }
                    },
                    {
                        "name": "Hepatitis C virus (isolate JFH-1) genomic RNA",
                        "uri": {
                            "uri": "http://www.ncbi.nlm.nih.gov/nuccore/13122261",
                            "access_time": "2017-01-24T09:40:17-0500"
                        }
                    },
                    {
                        "name": "Hepatitis C virus clone J8CF, complete genome",
                        "uri": {
                            "uri": "http://www.ncbi.nlm.nih.gov/nuccore/386646758",
                            "access_time": "2017-01-24T09:40:17-0500"
                        }
                    },
                    {
                        "name": "Hepatitis C virus S52 polyprotein gene",
                        "uri": {
                            "uri": "http://www.ncbi.nlm.nih.gov/nuccore/295311559",
                            "access_time": "2017-01-24T09:40:17-0500"
                        }
                    }
                ],
                "input_list": [
                    {
                        "uri": "http://example.com/dna.cgi?cmd=objFile&ids=514683",
                        "access_time": "2017-01-24T09:40:17-0500"
                    },
                    {
                        "uri": "http://example.com/dna.cgi?cmd=objFile&ids=514682",
                        "access_time": "2017-01-24T09:40:17-0500"
                    }
                ],
                "output_list": [
                    {
                        "uri": "http://example.com/data/514769/allCount-aligned.csv",
                        "access_time": "2017-01-24T09:40:17-0500"
                    }
                ]
            },
            {
                "step_number": 2,
                "name": "HIVE-heptagon",
                "description": "variant calling",
                "version": "1.3",
                "input_list": [
                    {
                        "uri": "http://example.com/data/514769/dnaAccessionBased.csv",
                        "access_time": "2017-01-24T09:40:17-0500"
                    }
                ],
                "output_list": [
                    {
                        "uri": "http://example.com/data/514801/SNPProfile.csv",
                        "access_time": "2017-01-24T09:40:17-0500"
                    },
                    {
                        "uri": "http://example.com/data/14769/allCount-aligned.csv",
                        "access_time": "2017-01-24T09:40:17-0500"
                    }
                ]
            }
        ]
    },
    "execution_domain": {
        "script": [
            {
                "uri": {
                    "uri": "https://example.com/workflows/antiviral_resistance_detection_hive.py"
                }
            }
        ],
        "script_driver": "shell",
        "software_prerequisites": [
            {
                "name": "HIVE-hexagon",
                "version": "babajanian.1",
                "uri": {
                    "uri": "http://example.com/dna.cgi?cmd=dna-hexagon&cmdMode=-",
                    "access_time": "2017-01-24T09:40:17-0500",
                    "sha1_checksum": "d60f506cddac09e9e816531e7905ca1ca6641e3c"
                }
            },
            {
                "name": "HIVE-heptagon",
                "version": "albinoni.2",
                "uri": {
                    "uri": "http://example.com/dna.cgi?cmd=dna-heptagon&cmdMode=-",
                    "access_time": "2017-01-24T09:40:17-0500"
                }
            }
        ],
        "external_data_endpoints": [
            {
                "name": "HIVE",
                "url": "http://example.com/dna.cgi?cmd=login"
            },
            {
                "name": "access to e-utils",
                "url": "http://eutils.ncbi.nlm.nih.gov/entrez/eutils/"
            }
        ],
        "environment_variables": [
            {
                "key": "HOSTTYPE",
                "value": "x86_64-linux"
            },
            {
                "key": "EDITOR",
                "value": "vim"
            }
        ]
    },
    "io_domain": {
        "input_subdomain": [
            {
                "uri": {
                    "filename": "Hepatitis C virus genotype 1",
                    "uri": "http://www.ncbi.nlm.nih.gov/nuccore/22129792",
                    "access_time": "2017-01-24T09:40:17-0500"
                }
            },
            {
                "uri": {
                    "filename": "Hepatitis C virus type 1b complete genome",
                    "uri": "http://www.ncbi.nlm.nih.gov/nuccore/5420376",
                    "access_time": "2017-01-24T09:40:17-0500"
                }
            },
            {
                "uri": {
                    "filename": "Hepatitis C virus (isolate JFH-1) genomic RNA",
                    "uri": "http://www.ncbi.nlm.nih.gov/nuccore/13122261",
                    "access_time": "2017-01-24T09:40:17-0500"
                }
            },
            {
                "uri": {
                    "uri": "http://www.ncbi.nlm.nih.gov/nuccore/386646758",
                    "access_time": "2017-01-24T09:40:17-0500"
                }
            },
            {
                "uri": {
                    "filename": "Hepatitis C virus S52 polyprotein gene",
                    "uri": "http://www.ncbi.nlm.nih.gov/nuccore/295311559",
                    "access_time": "2017-01-24T09:40:17-0500"
                }
            },
            {
                "uri": {
                    "filename": "HCV1a_drug_resistant_sample0001-01",
                    "uri": "http://example.com/nuc-read/514682",
                    "access_time": "2017-01-24T09:40:17-0500"
                }
            },
            {
                "uri": {
                    "filename": "HCV1a_drug_resistant_sample0001-02",
                    "uri": "http://example.com/nuc-read/514683",
                    "access_time": "2017-01-24T09:40:17-0500"
                }
            }
        ],
        "output_subdomain": [
            {
                "mediatype": "text/csv",
                "uri": {
                    "uri": "http://example.com/data/514769/dnaAccessionBased.csv",
                    "access_time": "2017-01-24T09:40:17-0500"
                }
            },
            {
                "mediatype": "text/csv",
                "uri": {
                    "uri": "http://example.com/data/514801/SNPProfile*.csv",
                    "access_time": "2017-01-24T09:40:17-0500"
                }
            }
        ]
    },
    "error_domain": {
        "empirical_error": {
            "false_negative_alignment_hits": "<0.0010",
            "false_discovery": "<0.05"
        },
        "algorithmic_error": {
            "false_positive_mutation_calls_discovery": "<0.00005",
            "false_discovery": "0.005"
        }
    },
    "etag": "d1baabb26cd2fc65d9ae1a6a77310023dac16b7aee9021d2ce945d943bffc4c4",
    "extension_domain": [],
    "parametric_domain": [
        {
            "param": "seed",
            "value": "14",
            "step": "1"
        },
        {
            "param": "minimum_match_len",
            "value": "66",
            "step": "1"
        },
        {
            "param": "divergence_threshold_percent",
            "value": "0.30",
            "step": "1"
        },
        {
            "param": "minimum_coverage",
            "value": "15",
            "step": "2"
        },
        {
            "param": "freq_cutoff",
            "value": "0.10",
            "step": "2"
        }
    ],
    "usability_domain": [
        "Identify baseline single nucleotide polymorphisms (SNPs)[SO:0000694], (insertions)[SO:0000667], and (deletions)[SO:0000045] that correlate with reduced (ledipasvir)[pubchem.compound:67505836] antiviral drug efficacy in (Hepatitis C virus subtype 1)[taxonomy:31646]"
    ],
    "object_id": "https://portal.aws.biochemistry.gwu.edu/bco/BCO_00017301",
    "spec_version": "1.4.0"
};