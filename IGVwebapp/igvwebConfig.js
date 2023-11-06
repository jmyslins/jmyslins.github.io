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
	    locus: "chr15:38491247-38491886",
	    tracks: [
                {
               name: "GY1-0Hr",      
               url: "https://drive.google.com/file/d/1_7oqLiPN3H87xBWeRt81KIFIxSfgxlne/view", 
               "indexURL": "https://drive.google.com/file/d/1mZdXtcwkdE8JjQZ_2LkP80quF-zqkorb/view",
               "format": "bam",
               "indexed": true,
               "visibilityWindow": 300000,
                },
		{
               name: "GY5-1Hr",      
               url: "https://drive.google.com/file/d/1FsWwG8cUBDezQmvF5aA1au_SjU_oKrEA/view", 
               "indexURL": "https://drive.google.com/file/d/1tacnxQSxsrbOlu5ln9E5NN0sQ2p-WdtQ/view",
               "format": "bam",
               "indexed": true,
               "visibilityWindow": 300000,
                },
		{
               name: "GY8-4Hr",      
               url: "https://drive.google.com/file/d/1h1fT8s0hUKXmJ-L3DGkXacCjsmDhMVlN/view", 
               "indexURL": "https://drive.google.com/file/d/1SOddWpvAFqk7IYicwbHZUEWcnXmC6wSK/view",
               "format": "bam",
               "indexed": true,
               "visibilityWindow": 300000,
                },
		{
               name: "GY11-16Hr",      
               url: "https://drive.google.com/file/d/1KDdS9OwRi6MPEZeqiwve579HjyN9i5Fh/view", 
               "indexURL": "https://drive.google.com/file/d/1yqvYWfJwfiXg3olfhghP2KUEm8vqzL9Y/view",
               "format": "bam",
               "indexed": true,
               "visibilityWindow": 300000,
                },
		{
               name: "GY14-28Hr",      
               url: "https://drive.google.com/file/d/1G7Nd8YLa3CBISyMi_Quh9bmwGcap_fXN/view", 
               "indexURL": "https://drive.google.com/file/d/17U_L0_IbczCCBs6q--jvyOZzLQJQvGrL/view",
               "format": "bam",
               "indexed": true,
               "visibilityWindow": 300000,
                },
		{
            	name: "repeatMask",
            	url: "https://drive.google.com/file/d/1F-W3_B6Oq7o-rjaJM8vrgrye4K85h71J/view",
		type: "annotation",
            	"format": "bed",
            	indexURL: "https://drive.google.com/file/d/1rxetk-z566hz99MQW8HF8N15oVVn-hPB/view", 
           	// displayMode: "EXPANDED",         // Optional: set the display mode
            	color: "rgb(255,0,0)",           // Optional: specify a custom color
        	},
        	{
            	name: "Hyperedits",
            	url: "https://drive.google.com/file/d/1Vbji1BXCe_yUWsj7G5VoqLr11IgihvFc/view",
		type: "annotation",
            	"format": "bed",
        	},
        	{
            	name: "0_1hr sig",
            	url: "https://drive.google.com/file/d/15VtkDPpdpgcbSRMGVftxV-S_dBzCPU3R/view",
		type: "annotation",
            	"format": "bed",
        	},
        	{
            	name: "0_4hr sig",
            	url: "https://drive.google.com/file/d/1CLwdqXhewWfAvRNA0XMNo0rzUWtYzRC4/view",
		type: "annotation",
            	"format": "bed",
        	},
        	{
            	name: "0_16hr sig",
            	url: "https://drive.google.com/file/d/1hMyOGnrUgADTCYVnYECeMzY96VaY8On7/view",
		type: "annotation",
            	"format": "bed",
        	},
        	{
            	name: "0_28hr sig",
            	url: "https://drive.google.com/file/d/1SVHat_TNkqHqJfET5Ob7IcHeLAxNz8vQ/view",
		type: "annotation",
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
