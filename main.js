const messageComponents = {
    verbs: [
        'aggregate', 'architect', 'benchmark', 'brand', 'cultivate', 'deliver', 'deploy', 'disintermediate', 'disrupt', 'drive', 'e-enable',
        'embrace', 'empower', 'enable', 'engage', 'engineer', 'enhance', 'envisioneer', 'evolve', 'expedite', 'exploit', 'exten', 'facilitate', 
        'generate', 'grow', 'harness', 'implement', 'incentivize', 'incubate', 'innovate', 'integrate', 'iterate', 'leverage', 'matrix', 'maximize', 
        'mesh', 'monetize', 'morph', 'optimize', 'orchestrate', 'productize', 'recontextualize', 'redefine', 'reintermediate', 'reinvent', 'repurpose',
        'revolutionize', 'scale', 'seize', 'strategiz', 'streamline', 'syndicate', 'synergize', 'synthesize', 'target', 'transform', 'transition', 
        'unleash', 'utilize',' visualize', 'whiteboard'
    ],
    adjs: [
        'B2B', 'B2C', 'back-end', 'best-of-breed', 'bleeding-edge', 'bricks-and-clicks', 'clicks-and-mortar','collaborative', 'compelling', 'cross-platform', 
        'cross-media', 'customized', 'cutting-edge', 'distributed', 'dot-com', 'dynamic', 'e-business', 'efficient', 'end-to-end', 'nterprise', 'extensible', 
        'frictionless', 'front-end', 'global', 'granular', 'holistic', 'impactful', 'innovative', 'integrated', 'interactive', 'intuitive', 'killer', 
        'leading-edge', 'magnetic', 'mission-critical', 'next-generation', 'one-to-one', 'open-source', 'out-of-the-box', 'plug-and-play', 'proactive', 
        'real-time', 'revolutionary', 'rich', 'robust', 'scalable', 'seamless', 'sex', 'sticky', 'strategic', 'synergistic', 'transparent', 'urn-key', 
        'ubiquitous',' user-centric', 'value-added', 'vertical', 'viral', 'virtual', 'visionar', 'web-enabled', 'wireless', 'world-class' 
    ],
    nouns: [
        'action-items', 'applications', 'architectures', 'bandwidth', 'channels', 'communities', 'content', 'convergence', 
    'deliverables', 'e-business', 'e-commerce', 'e-markets', 'e-services', 'e-tailers', 'experiences', 'eyeball', 'functionalities', 
    'infomediaries', 'infrastructures', 'initiatives', 'interfaces', 'markets', 'methodologies', 'metric', 'mindshare', 'models', 
    'networks', 'niches', 'paradigms', 'partnerships', 'platforms', 'portals', 'relationships', 'ROI', 'synergies', 'web-readiness', 
    'schemas', 'solutions', 'supply-chains', 'ystems', 'technologies', 'users', 'vortals', 'web services'
]
}

const dwebsComponents = {
    verbs: [
        'Dox', 'Encryption', 'Pen test', 'Phish', 'attack', 'penetrate', 'crack',
       'Enumerate', 'document', 'scan', 'collect', 'breach', 'activate', 'brute force', 
       'response', 'control', 'analyze', 'decrypt', 'defend', 'disrupt', 'nmap',
       'flooding', 'hijack', 'footprint', 'authenticate', 'sniff', 'patch', 'ping',
       'share', 'injection', 'spoof'
       ],
       
       adjs: [
        'Blackhat', 'vulnerable', 'weak', 'strong', 'secure', 'stable',
       'active', 'cloud', 'virtual', 'remote', 'digital', 'external', 'file', 'hash',
       'high', 'host', 'hybrid', 'hyper', 'logic', 'loop', 'public', 'private',
       'reverse', 'data', 'trojan', 'wireless'
       ],
       
       nouns: [
       'Alias', 'Backdoor', 'Bitcoin', 'Botnet', 'Cipher',  'Malware', 'asset',
       'target', 'Ransomware', 'RATs', 'Shell', 'Spyware', 'Vulnerability', 'Worm', 'Zero day', 
       'banner', 'node', 'machine', 'AI', 'algorithm', 
       'forensics','asset', 'ports', 'payload', 'threat', 'device', 'proxy', 'function',
       'parameter', 'method', 'password', 'impact', 'honeypot', 'script', 'bash',
       'terminal', 'command', 'incident', 'protocol', 'state', 'network', 'packet',
       'server', 'engineering', 'risk', 'assessment', 'root', 'key', 'exploit', 'virus',
       'bug'
       ]
       
}

let selectedWords = []
const makeBs = () => {
    // use a loop to iterate through the object with a switch case that can select and format each of the different message components.
    for (let componenet in dwebsComponents) {
        let randNum = Math.floor(Math.random() * 25)
        selectedWords.push(dwebsComponents[componenet][randNum]);
      }
}


makeBs();
let verb = selectedWords[0]
let adj = selectedWords[1]
let noun = selectedWords[2]
console.log(`${verb} ${adj} ${noun}`)

// add in new words, create html page, set up css page to style, set up html page, create button for function