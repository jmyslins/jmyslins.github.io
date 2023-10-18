var igvwebConfig = {

    genomes: "resources/genomes.json",
    trackRegistryFile: "resources/tracks/trackRegistry.json",
    sessionRegistryFile: "resources/sessions/sessionRegistry.json",

    // Supply a drobpox api key to enable the Dropbox file picker in the load menus.  This is optional
    //dropboxAPIKey: "...",
    
     // Supply a Google client id to enable the Google file picker in the load menus.  This is optional
    clientId: "989066869121-f7rfjf4rc8c7fv06ktmh5mm5od5qbhp8.apps.googleusercontent.com",
    apiKey: "AIzaSyAfwdo_SVf4XuyfHVTbcOy8p527XrGEa_w",

    // Provide a URL shorterner function or object.   This is optional.  If not supplied
    // sharable URLs will not be shortened .
    urlShortener: {
        provider: "tinyURL"
    },

    enableCircularView: true,

    restoreLastGenome: false,

    igvConfig:
        {
            genome: "mm10",
            locus: "all",
            genomeList: "resources/genomes.json",
            queryParametersSupported: true,
            showChromosomeWidget: true,
            showSVGButton: false,
            tracks: [
                {
               name: "GY1-0Hr",       
               url: "https://drive.google.com/file/d/1AakuRgvo2jlhl60-LGrgRyw29CBY7pCi/view",
               format: "bam",
               type: "alignment",
               indexed: true,
                },
           {
               name: "IB11",
               type: "wig",
               format: "bigwig",
               url: "https://drive.google.com/file/d/1VkNiT7clzeV70OLDg-Q0dEu_-NdlSySY/view",
           },
           {
               name: "IB12",
               type: "wig",
               format: "bigwig",
               url: "https://drive.google.com/file/d/1nIKq_twOBFSW6GEhqRwYesSXrCtulso_/view",
           }
           // Other tracks...
       ]
        },
        googleAPI: {
        clientId: "989066869121-f7rfjf4rc8c7fv06ktmh5mm5od5qbhp8.apps.googleusercontent.com",
    scope: "https://www.googleapis.com/auth/drive.readonly" // Read-only access
},

}
