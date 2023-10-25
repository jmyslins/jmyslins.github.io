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
	    locus: "chr15:38487427-38519266",
	    tracks: [
                {
               name: "GY1-0Hr",      
               url: "https://drive.google.com/file/d/1Gu8yG_9TaKCKNviVekOk04-_kovWfj0x/view", 
               "indexURL": "https://drive.google.com/file/d/13GaSJ0KSebaVbZtRws94N5eFds1UoNR7/view",
               "format": "bam",
               "indexed": true,
               "visibilityWindow": 30000000,
                },
		{
            	name: "repeatMask",
            	url: "https://drive.google.com/file/d/1F-W3_B6Oq7o-rjaJM8vrgrye4K85h71J/view",
            	"format": "bed",
            	indexURL: "https://drive.google.com/file/d/1rxetk-z566hz99MQW8HF8N15oVVn-hPB/view", 
           	// displayMode: "EXPANDED",         // Optional: set the display mode
            	color: "rgb(255,0,0)",           // Optional: specify a custom color
        	},
        	{
            	name: "Hyperedits",
            	url: "https://drive.google.com/file/d/1Vbji1BXCe_yUWsj7G5VoqLr11IgihvFc/view",
            	"format": "bed",
        	},
        	{
            	name: "0_1hr sig",
            	url: "https://drive.google.com/file/d/15VtkDPpdpgcbSRMGVftxV-S_dBzCPU3R/view",
            	"format": "bed",
        	},
        	{
            	name: "0_4hr sig",
            	url: "https://drive.google.com/file/d/1CLwdqXhewWfAvRNA0XMNo0rzUWtYzRC4/view",
            	"format": "bed",
        	},
        	{
            	name: "0_16hr sig",
            	url: "https://drive.google.com/file/d/1hMyOGnrUgADTCYVnYECeMzY96VaY8On7/view",
            	"format": "bed",
        	},
        	{
            	name: "0_28hr sig",
            	url: "https://drive.google.com/file/d/1SVHat_TNkqHqJfET5Ob7IcHeLAxNz8vQ/view",
            	"format": "bed",
        	},
           // Other tracks...
       ]
        },
        googleAPI: {
        clientId: "989066869121-f7rfjf4rc8c7fv06ktmh5mm5od5qbhp8.apps.googleusercontent.com",
    scope: "https://www.googleapis.com/auth/drive.readonly" // Read-only access
},

}
