import * as S from './styles'

export type LogoProps = {
  size?: 'normal' | 'small'
}

const Logo = ({ size = 'normal' }: LogoProps) => (
  <S.Wrapper size={size}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 131 30"
      role="img"
      aria-label="Deputado Jeferson Fernandes"
    >
      <g fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
        <path
          fill="#F2F2F2"
          d="m5.41064 12.7957 6.76296.3701 2.1918-6.58198.8929-.61684 4.7493 5.09792 5.5541.8945-5.4787 5.9288 2.0356 6.5621h.4888l-7.1176-4.0149-6.25399 4.8658.0937-6.455-3.91887-6.0505Z"
        />
        <path
          fill="#F2F2F2"
          d="m12.9581 12.2932 2.3517-6.32622 2.0559 5.41362.6338.9126 1.1152.4336h6.447l-3.7738 2.6669-1.7692.8926-.4355.6458.1084 1.6165 2.111 5.9017-5.1902-3.6647-1.1226-.3502-1.163.361-5.14978 3.6521 2.22488-7.2587-.5879-.7747-5.40336-3.6194"
        />
        <path
          fill="#231F20"
          d="M32.2546 16.4713c.8397.508 1.6536.762 2.4418.762.8231 0 1.3926-.2594 1.7086-.7747.316-.5152.4759-1.3153.4759-2.3984V.293905C37.3898.192308 38.0622.14151 38.8982.14151c.8359 0 1.5249.050798 2.0687.152395V13.6792c0 1.0813-.0955 2.0519-.2829 2.9046-.1874.8527-.5108 1.5766-.9719 2.1698-.463.5915-1.0748 1.045-1.8336 1.3571-.7625.3138-1.7123.4699-2.8569.4699-1.5893 0-2.9856-.372-4.1798-1.1158.1874-1.1665.6596-2.1644 1.4128-2.9935Zm22.0912-1.1919h-6.6803c.035.7529.2315 1.3407.5861 1.7598.3601.4191.9499.6259 1.7693.6259.4116 0 .8819-.0599 1.422-.1742.5347-.1143 1.1557-.3011 1.8538-.5624.5604.5751.9131 1.3534 1.0491 2.3349-1.3706.9652-3.0498 1.446-5.0359 1.446-1.0785 0-1.9824-.1688-2.7118-.508-.7276-.3393-1.3191-.8128-1.773-1.4206-.4538-.6095-.7753-1.328-.9627-2.1571-.1892-.8291-.2829-1.7344-.2829-2.714 0-.9471.1157-1.8233.3472-2.627.2315-.8037.5824-1.50222 1.0528-2.09366.4703-.59143 1.0711-1.05769 1.7987-1.39513.7275-.33745 1.58-.50799 2.5574-.50799.8231 0 1.5635.13607 2.2231.40639.6596.27032 1.2199.64223 1.6829 1.11575.463.47351.8176 1.03955 1.0656 1.69994.2481.6604.373 1.3788.373 2.1571 0 1.0323-.1121 1.9031-.3344 2.6143Zm-6.7078-2.7413h3.3658v-.2794c0-.6259-.1414-1.1411-.4189-1.5475-.2829-.4064-.7018-.6096-1.264-.6096-.5438 0-.9462.1905-1.2126.5715-.259.381-.4189 1.0032-.4703 1.865Zm11.086 7.7903v-9.9202l-2.2102.0254c-.1029-.4191-.1544-.8799-.1544-1.38244 0-.50254.0515-.97242.1544-1.40783l2.0044.02539c-.0863-.6259-.1286-2.48367-.1286-2.98984 0-1.26814.4152-2.3222 1.2457-3.15856.8304-.836357 1.9144-1.255443 3.2501-1.255443s2.6475.237664 3.9317.711176c.0165.439047-.0606.917997-.2315 1.433237-.1709.51524-.3858.90893-.643 1.17925-.8048-.23767-1.4643-.35559-1.9788-.35559-1.1482 0-1.7215.58418-1.7215 1.75072 0 .48984.0349 2.25508.1029 2.71227l3.3659-.0508c.1029.43541.1543.9053.1543 1.40784s-.0514.96332-.1543 1.38242l-3.0829-.0508v9.9474c-.5825.1016-1.2255.1524-1.9273.1524-.7-.0036-1.3614-.0544-1.9769-.156Zm19.2048-5.049h-6.6821c.0349.7529.2315 1.3407.5861 1.7598.3601.4191.9517.6259 1.7693.6259.4115 0 .8819-.0599 1.422-.1742.5365-.1143 1.1557-.3011 1.8538-.5624.5604.5751.9113 1.3534 1.0491 2.3349-1.3706.9652-3.0499 1.446-5.0359 1.446-1.0785 0-1.9824-.1688-2.71-.508-.7275-.3393-1.3191-.8128-1.7729-1.4206-.4538-.6095-.7754-1.328-.9646-2.1571-.1874-.8291-.2829-1.7344-.2829-2.714 0-.9471.1157-1.8233.3472-2.627.2315-.8037.5824-1.50222 1.0546-2.09366.4722-.59143 1.0711-1.05769 1.7987-1.39513.7275-.33745 1.58-.50799 2.5574-.50799.8213 0 1.5635.13607 2.2231.40639.6596.27032 1.2199.64223 1.6829 1.11575.463.47351.8176 1.03955 1.0656 1.69994.2481.6604.373 1.3788.373 2.1571 0 1.0323-.1121 1.9031-.3344 2.6143Zm-6.706-2.7413h3.3659v-.2794c0-.6259-.1415-1.1411-.4189-1.5475-.2829-.4064-.7018-.6096-1.264-.6096-.5439 0-.9462.1905-1.2126.5715-.2609.381-.4208 1.0032-.4704 1.865Zm9.5942-3.04427c.0863-.33744.248-.7148.4887-1.12844.2388-.41365.4795-.71481.7202-.89986 1.5764.11793 2.6732.88897 3.2887 2.30951.6504-1.52214 1.7215-2.28411 3.2133-2.28411.4447 0 1.0105.06713 1.6958.20319 0 .52431-.09 1.14659-.27 1.86502-.1801.71846-.4244 1.33166-.7331 1.83966-.2903-.1016-.7276-.1869-1.31-.254-.8561 0-1.558.4318-2.1073 1.2935v7.8919c-.5659.1016-1.2291.1524-1.9916.1524s-1.4349-.0508-2.0173-.1524v-8.1967c-.0018-1.2699-.327-2.14983-.9774-2.63967Zm10.8269 9.97277c.0166-.439.1323-.9216.3473-1.4459.2149-.5243.4666-.938.7588-1.2428 1.3705.7112 2.5611 1.065 3.5716 1.065.4795 0 .8488-.0798 1.1042-.2413.2572-.1615.3858-.3774.3858-.6477 0-.508-.395-.8871-1.1814-1.1411l-1.4128-.5334c-2.1422-.7783-3.2115-2.0465-3.2115-3.8062 0-1.2863.4501-2.30411 1.3485-3.05702.9003-.7529 2.111-1.12844 3.6359-1.12844.7552 0 1.5856.10522 2.4932.31749.9075.21226 1.6535.46081 2.2355.74927.035.47351-.06.9942-.282 1.56023-.223.56607-.497.96877-.822 1.20467-1.4383-.6423-2.638-.9634-3.5971-.9634-.3436 0-.6045.0762-.7845.2286-.1801.1524-.2701.3465-.2701.5842 0 .4064.3252.7275.9756.9652l1.5929.5587c2.2782.7947 3.4172 2.1572 3.4172 4.0857 0 1.2681-.47 2.275-1.413 3.0188-.9423.7439-2.2871 1.1158-4.0344 1.1158-1.7472-.0036-3.3658-.4173-4.8577-1.2464ZM114.191 8.78266c1.233 1.21734 1.85 2.96084 1.85 5.22674 0 1.016-.132 1.9376-.399 2.7667-.264.8291-.65 1.5349-1.155 2.119-.506.5842-1.127 1.0323-1.863 1.3444-.737.3138-1.586.4699-2.545.4699-.959 0-1.804-.1597-2.532-.4826-.727-.3211-1.345-.7747-1.85-1.3571-.505-.5841-.887-1.2899-1.145-2.119-.257-.8291-.385-1.7416-.385-2.7413 0-1.0141.128-1.9321.385-2.7521.258-.8201.634-1.52762 1.132-2.11905.496-.59144 1.114-1.04863 1.85-1.36974.737-.32112 1.586-.48259 2.545-.48259 1.696 0 3.066.49891 4.112 1.49674Zm-4.099 1.47314c-.381 0-.685.0889-.917.2667-.235.1778-.421.4191-.557.7239-.141.3048-.235.6549-.286 1.0522-.052.3973-.077.8255-.077 1.2809 0 .7111.022 1.3243.064 1.8396.042.5152.128.947.261 1.2935.128.3465.308.6042.54.7747.235.1687.54.254.92.254.759 0 1.259-.3248 1.5-.9761.244-.6513.363-1.5765.363-2.7793 0-1.2174-.119-2.1445-.363-2.7776-.241-.6368-.724-.9525-1.448-.9525Zm20.195 1.6999v5.2014c0 1.1158.206 1.9539.617 2.5127-.65.5751-1.431.8636-2.339.8636-.891 0-1.499-.2032-1.824-.6096-.325-.4064-.489-1.0232-.489-1.8523v-5.4064c0-.5751-.077-.9978-.231-1.2681-.155-.2704-.454-.4064-.899-.4064-.257 0-.547.0671-.874.2032-.325.136-.66.3555-1.003.6603v8.4743c-.291.0508-.608.0889-.952.1143-.342.0254-.694.0381-1.053.0381-.36 0-.711-.0127-1.052-.0381-.344-.0254-.66-.0635-.95-.1143V7.66691l.18-.17779h1.515c1.046 0 1.748.50798 2.108 1.52213 1.2-1.04862 2.39-1.57293 3.571-1.57293 1.2 0 2.111.41001 2.738 1.23004.623.82184.937 1.91584.937 3.28734Z"
        />
        <path
          fill="url(#b)"
          d="m13.7518 1.13026-3.1435 9.93464c-.2682.8491.2095 1.7598 1.0693 2.0284.858.2666 1.7858-.2069 2.054-1.0559l3.1436-9.93471c.2682-.84906-.2095-1.759801-1.0693-2.0283062-.8598-.2666908-1.7858.2068212-2.0541 1.0558762Z"
        />
        <path
          fill="url(#c)"
          d="m18.4536 13.1713 10.5404-.0055c.9002 0 1.6388-.7239 1.6406-1.6128.0019-.889-.733-1.62014-1.6333-1.62014L18.461 9.9383c-.9003 0-1.6388.7239-1.6407 1.6128-.0018.889.7331 1.6202 1.6333 1.6202Z"
        />
        <path
          fill="url(#d)"
          d="m.696441 12.8755 8.633269 5.9706c.73669.5098 1.76189.3357 2.27999-.3918.5181-.7275.3418-1.7417-.3968-2.2515l-8.63143-5.9706c-.73674-.5098-1.761933-.33563-2.281876.3919-.518106.7257-.3417295 1.7416.396847 2.2514Z"
        />
        <path
          fill="#007DB3"
          d="m29.9434 12.8755-8.6333 5.9706c-.7367.5098-1.7619.3357-2.28-.3918-.5181-.7275-.3418-1.7417.3968-2.2515l8.6333-5.9706c.7367-.5098 1.7619-.33563 2.2818.3919.5163.7257.3381 1.7416-.3986 2.2514Z"
        />
        <path
          fill="url(#e)"
          d="m25.4108 26.8124-3.4926-9.8204c-.2976-.8381-1.2346-1.2881-2.0834-.9942-.8507.2921-1.3063 1.2192-1.0069 2.0574l3.4927 9.8203c.2976.8382 1.2346 1.2881 2.0853.9961.8469-.2939 1.3026-1.221 1.0049-2.0592Z"
        />
        <path
          fill="#008944"
          d="M24.8343 26.0377 16.291 19.942c-.7294-.5207-1.7564-.3611-2.2874.3574-.5291.7184-.3674 1.7362.362 2.2568l8.5432 6.0958c.7294.5207 1.7564.3611 2.2874-.3574.5291-.7184.3675-1.7362-.3619-2.2569Z"
        />
        <path
          fill="url(#f)"
          d="m5.80601 26.0377 8.54329-6.0957c.7293-.5207 1.7582-.3611 2.2873.3574.5292.7184.3675 1.7362-.3619 2.2568L7.73146 28.652c-.72939.5207-1.75826.3611-2.28738-.3574-.52913-.7184-.36746-1.7362.36193-2.2569Z"
        />
        <path
          fill="#FAB613"
          d="m5.22859 26.8124 3.49263-9.8204c.29763-.8381 1.23463-1.2881 2.08348-.9942.8506.2921 1.3063 1.2192 1.0068 2.0574l-3.49264 9.8203c-.29764.8382-1.23464 1.2881-2.08345.9961-.85065-.2939-1.30445-1.221-1.00682-2.0592Z"
        />
        <path
          fill="#C1161C"
          d="m1.63332 13.1713 10.54038-.0055c.9002 0 1.6388-.7239 1.6406-1.6128.0019-.889-.733-1.62014-1.6333-1.62014L1.64067 9.9383c-.900253 0-1.63882931.7239-1.64066656 1.6128-.00183726.889.73306456 1.6202 1.63331656 1.6202Z"
        />
        <path
          fill="#A24683"
          d="m16.8644 1.13026 3.1436 9.93464c.2682.8491-.2095 1.7598-1.0693 2.0284-.858.2666-1.7858-.2069-2.054-1.0559l-3.1436-9.93471c-.2682-.84906.2095-1.759801 1.0693-2.0283062.8598-.2666908 1.7858.2068212 2.054 1.0558762Z"
        />
        <path
          fill="#AE1117"
          d="M72.7957 4.2217c-.0772 0-.1323-.01633-.1672-.05261-.0349-.03447-.0533-.0889-.0533-.1651V.633166c0-.076197.0184-.130624.0533-.165094.0349-.034471.09-.050799.1672-.050799h1.1776c.5696 0 1.005.163281 1.3082.491655.3031.328372.4538.798262.4538 1.411462 0 .61321-.1525 1.0831-.4538 1.41147-.3032.32837-.7386.49165-1.3082.49165h-1.1776V4.2217Zm1.1776-.71118c.294 0 .5163-.10159.667-.30479.1506-.20319.226-.49891.226-.88534 0-.38824-.0754-.68396-.226-.88534-.1507-.20319-.373-.30479-.667-.30479h-.5456v2.38208h.5456v-.00182Zm2.8386.71118c-.0772 0-.1323-.01633-.1672-.05261-.0349-.03447-.0514-.0889-.0514-.1651V.633166c0-.076197.0165-.130624.0514-.165094.0349-.034471.09-.050799.1672-.050799h1.9328c.0588 0 .1011.021771.1268.065312.0257.043542.0386.112482.0386.206822V.85813c0 .094339-.0129.16328-.0386.20682-.0257.04354-.068.06531-.1268.06531h-1.3044v.78919h1.1556c.0588 0 .101.02177.1268.06531.0257.04354.0385.11248.0385.20682v.16873c0 .09434-.0128.16328-.0385.20682-.0258.04354-.068.06531-.1268.06531h-1.1556v.88171h1.3099c.0588 0 .1011.02177.1268.06532.0257.04354.0386.11248.0386.20682v.16872c0 .09434-.0129.16328-.0386.20682-.0257.04354-.068.06531-.1268.06531h-1.9383V4.2217Zm3.2685.01089c-.2205 0-.3307-.05806-.3307-.17417V.633166c0-.076197.0165-.130624.0514-.165094.0349-.034471.09-.050799.169-.050799h1.1557c.3454 0 .6485.083455.9131.246735.2646.165094.3968.478952.3968.943392 0 .31931-.0771.56604-.2314.74202-.1544.17598-.3271.29391-.5182.35559-.191.06168-.3601.09252-.507.09252h-.5843v1.26089c0 .11611-.1102.17417-.3307.17417h-.1837Zm1.0086-2.15167c.1323 0 .2444-.03447.3381-.10341s.1396-.19231.1396-.37011c0-.17779-.0459-.30116-.1396-.37191-.0937-.07076-.2058-.10704-.3381-.10704h-.4905v.95247h.4905Zm3.5698 2.18432c-.5071 0-.8984-.11429-1.1777-.3447-.2792-.23041-.4188-.55334-.4188-.97061V.580553c0-.11611.1102-.174165.3307-.174165h.1874c.2204 0 .3307.058055.3307.174165V2.89732c0 .1923.0698.35014.2094.47351.1396.12337.3197.18505.5402.18505.2204 0 .4005-.06168.542-.18505.1414-.12337.2112-.28121.2112-.47351V.580553c0-.11611.1103-.174165.3307-.174165h.1819c.2205 0 .3307.058055.3307.174165V2.94993c0 .41727-.1396.7402-.4189.97061-.2792.23041-.6724.3447-1.1795.3447Zm3.5661-.03265c-.2204 0-.3307-.05806-.3307-.17417V1.12845h-.8745c-.0588 0-.101-.02177-.1268-.06531-.0257-.04354-.0386-.112485-.0386-.206825V.687593c0-.09434.0129-.16328.0386-.206822.0258-.043541.068-.065312.1268-.065312h2.6034c.0588 0 .101.021771.1268.065312.0257.043542.0385.112482.0385.206822v.168722c0 .09434-.0128.163285-.0385.206825-.0258.04354-.068.06531-.1268.06531h-.8745v2.92997c0 .11611-.1103.17417-.3307.17417h-.193Zm1.9145 0c-.2242 0-.3363-.03992-.3363-.11974 0-.01452.0074-.04717.0221-.09797L91.0359.51887c.0294-.076198.1342-.114296.3142-.114296h.2866c.1837 0 .2885.038098.3142.114296l1.2107 3.49601c.0111.03628.0166.06894.0166.09797 0 .07982-.0919.11974-.2756.11974h-.2425c-.1801 0-.283-.0381-.3087-.1143l-.2205-.66401H90.832l-.2205.66401c-.0257.0762-.1102.1143-.2535.1143h-.2186Zm1.7564-1.49492-.3142-.9688c-.0257-.07257-.0533-.18868-.0827-.34833h-.022c-.0037.02177-.0129.06894-.0257.14332-.0129.07439-.0313.14151-.057.2032l-.3252.96879h.8268v.00182Zm2.111 1.48403c-.0772 0-.1323-.01633-.1672-.05261-.0349-.03447-.0514-.0889-.0514-.1651V.633166c0-.076197.0165-.130624.0514-.165094.0349-.034471.0919-.050799.1672-.050799h1.1777c.5695 0 1.0049.163281 1.3081.491655.3031.328372.4538.798262.4538 1.411462 0 .61321-.1525 1.0831-.4538 1.41147-.3032.32837-.7386.49165-1.3081.49165h-1.1777V4.2217Zm1.1795-.71118c.294 0 .5163-.10159.6669-.30479.1507-.20319.226-.49891.226-.88534 0-.38824-.0753-.68396-.226-.88534-.1506-.20319-.3729-.30479-.6669-.30479h-.5457v2.38208h.5457v-.00182Zm4.2147.75472c-.5696 0-1.005-.16691-1.31-.50254-.305-.33563-.4575-.8164-.4575-1.44412 0-.62772.1525-1.10849.4575-1.444122.305-.335632.7423-.50254 1.31-.50254.5695 0 1.005.166908 1.308.50254.303.335632.454.816402.454 1.444122s-.151 1.10849-.454 1.44412c-.303.33563-.7385.50254-1.308.50254Zm0-.71117c.2939 0 .5162-.10523.665-.31568.151-.21045.226-.51705.226-.918 0-.40275-.075-.70754-.226-.91618-.1506-.20863-.3729-.31205-.665-.31205-.294 0-.5163.10342-.6688.31205-.1525.20864-.2278.51343-.2278.91618 0 .40276.0753.70937.2278.918.1525.21045.3748.31568.6688.31568Zm5.128.66763c-.077 0-.134-.01633-.169-.05261-.035-.03447-.052-.0889-.052-.1651V.633166c0-.076197.017-.130624.052-.165094.035-.034471.092-.050799.169-.050799h1.933c.058 0 .101.021771.126.065312.026.043542.039.112482.039.206822V.85813c0 .094339-.013.16328-.039.20682-.025.04354-.068.06531-.126.06531h-1.305v.78919h1.156c.059 0 .101.02177.126.06531.026.04354.039.11248.039.20682v.16873c0 .09434-.013.16328-.039.20682-.025.04354-.067.06531-.126.06531h-1.156v.88171h1.31c.059 0 .101.02177.127.06532.026.04354.038.11248.038.20682v.16872c0 .09434-.012.16328-.038.20682-.026.04354-.068.06531-.127.06531h-1.938V4.2217Zm3.972.04354c-.261 0-.489-.0254-.682-.0762-.194-.05079-.347-.11611-.457-.19593-.103-.06894-.155-.13788-.155-.20682 0-.05443.021-.11974.061-.19594.041-.0762.088-.14332.143-.20138.056-.05805.101-.08708.138-.08708.022 0 .074.02177.155.06531.117.05806.224.10341.319.13607.096.03265.208.04898.336.04898.144 0 .265-.02903.366-.08527.101-.05624.151-.15421.151-.29572 0-.11611-.046-.20682-.14-.27394-.094-.06713-.244-.14151-.454-.22497l-.253-.10885c-.232-.10885-.414-.24311-.546-.40457-.132-.16147-.198-.39006-.198-.68759 0-.24674.06-.45174.183-.616839.123-.165094.283-.286647.482-.364659.198-.078011.411-.11611.637-.11611.188 0 .357.018142.509.056241.153.038099.272.087083.36.15058.081.058056.122.116111.122.174166 0 .050798-.017.114296-.05.190493-.033.076198-.074.143328-.121.197748-.048.05624-.092.08346-.133.08346-.018 0-.049-.00907-.091-.02722-.043-.01814-.078-.03265-.107-.04354-.132-.04354-.27-.06531-.413-.06531-.191 0-.324.03084-.399.09253-.075.06168-.112.13243-.112.21226 0 .09434.026.17235.077.23403.051.06169.114.11067.187.14877.074.0381.182.08708.326.14877.209.08708.38.16872.512.24673s.246.1905.344.33745c.097.14695.145.33381.145.56241 0 .27939-.059.50798-.178.68577-.12.1778-.272.30661-.46.38643-.185.07983-.387.11974-.604.11974Zm2.945-.03265c-.22 0-.331-.05806-.331-.17417V1.12845h-.874c-.059 0-.101-.02177-.127-.06531-.026-.04354-.039-.112485-.039-.206825V.687593c0-.09434.013-.16328.039-.206822.026-.043541.068-.065312.127-.065312h2.603c.059 0 .101.021771.127.065312.026.043542.039.112482.039.206822v.168722c0 .09434-.013.163285-.039.206825-.026.04354-.068.06531-.127.06531h-.874v2.92997c0 .11611-.111.17417-.331.17417h-.193Zm1.913 0c-.225 0-.337-.03992-.337-.11974 0-.01452.008-.04717.022-.09797l1.211-3.49601c.03-.076198.134-.114296.314-.114296h.287c.184 0 .288.038098.314.114296l1.211 3.49601c.011.03628.016.06894.016.09797 0 .07982-.091.11974-.275.11974h-.243c-.18 0-.283-.0381-.308-.1143l-.221-.66401h-1.299l-.22.66401c-.026.0762-.11.1143-.254.1143h-.218Zm1.756-1.49492-.314-.9688c-.026-.07257-.053-.18868-.083-.34833h-.022c-.004.02177-.013.06894-.026.14332-.012.07439-.031.14151-.057.2032l-.325.96879h.827v.00182Zm2.113 1.48403c-.077 0-.132-.01633-.167-.05261-.035-.03447-.054-.0889-.054-.1651V.633166c0-.076197.019-.130624.054-.165094.035-.034471.09-.050799.167-.050799h1.178c.569 0 1.005.163281 1.308.491655.303.328372.453.798262.453 1.411462 0 .61321-.15 1.0831-.453 1.41147-.303.32837-.739.49165-1.308.49165h-1.178V4.2217Zm1.178-.71118c.293 0 .516-.10159.666-.30479.151-.20319.226-.49891.226-.88534 0-.38824-.075-.68396-.226-.88534-.15-.20319-.373-.30479-.666-.30479h-.546v2.38208h.546v-.00182Zm4.161.75472c-.507 0-.898-.11429-1.178-.3447-.279-.23041-.419-.55334-.419-.97061V.580553c0-.11611.111-.174165.331-.174165h.187c.221 0 .331.058055.331.174165V2.89732c0 .1923.07.35014.21.47351.139.12337.319.18505.54.18505.22 0 .4-.06168.542-.18505.141-.12337.211-.28121.211-.47351V.580553c0-.11611.11-.174165.331-.174165h.182c.22 0 .33.058055.33.174165V2.94993c0 .41727-.139.7402-.419.97061-.281.23041-.674.3447-1.179.3447Zm2.486-.03265c-.224 0-.336-.03992-.336-.11974 0-.01452.007-.04717.022-.09797l1.21-3.49601c.03-.076198.134-.114296.314-.114296h.287c.184 0 .289.038098.314.114296l1.211 3.49601c.011.03628.017.06894.017.09797 0 .07982-.092.11974-.276.11974h-.243c-.18 0-.282-.0381-.308-.1143l-.221-.66401h-1.299l-.22.66401c-.026.0762-.11.1143-.254.1143h-.218Zm1.756-1.49492-.314-.9688c-.026-.07257-.053-.18868-.083-.34833h-.022c-.003.02177-.011.06894-.025.14332-.013.07439-.032.14151-.059.2032l-.325.96879h.828v.00182Zm2.113 1.48403c-.077 0-.132-.01633-.167-.05261-.035-.03447-.052-.0889-.052-.1651V.580553c0-.11611.111-.174165.331-.174165h.187c.221 0 .331.058055.331.174165V3.51052h1.189c.059 0 .101.02178.127.06532.025.04354.038.11248.038.20682v.16872c0 .09434-.013.16328-.038.20682-.026.04354-.068.06531-.127.06531h-1.819V4.2217Z"
        />
        <path
          fill="#231F20"
          d="M73.082 29.9456c-.3601 0-.542-.0944-.542-.2812V24.131c0-.1234.0294-.2123.0864-.2685.0569-.0563.1488-.0835.2756-.0835h2.9672c.0955 0 .1653.0345.2076.1052.0422.0708.0643.1815.0643.3339v.2721c0 .1524-.0202.2631-.0643.3338-.0423.0708-.1103.1052-.2076.1052h-1.9384v1.2827h1.8759c.0974 0 .1653.0345.2076.1052.0422.0708.0625.1814.0625.3338v.2722c0 .1524-.0203.263-.0625.3338-.0423.0707-.1102.1052-.2076.1052h-1.8759v2.3005c0 .1868-.18.2812-.5401.2812h-.3087v.0018Zm5.622-.0164c-.1267 0-.2186-.0272-.2756-.0834-.0569-.0563-.0863-.1452-.0863-.2685v-5.4445c0-.1234.0294-.2123.0863-.2685.057-.0562.1489-.0835.2756-.0835h3.1656c.0956 0 .1654.0345.2076.1053.0423.0707.0625.1814.0625.3338v.2721c0 .1524-.0202.2631-.0625.3338-.0422.0708-.112.1053-.2076.1053h-2.1367v1.2735h1.8942c.0955 0 .1654.0345.2076.1053.0423.0707.0625.1814.0625.3338v.2721c0 .1524-.0202.2631-.0625.3338-.0422.0708-.1121.1053-.2076.1053h-1.8942v1.4223h2.1459c.0955 0 .1654.0345.2076.1052.0423.0708.0625.1815.0625.3339v.2721c0 .1524-.0202.263-.0625.3338-.0422.0708-.1121.1052-.2076.1052H78.704v.0018Zm6.3092.0164c-.3601 0-.542-.0944-.542-.2812V24.131c0-.1234.0275-.2123.0863-.2685.057-.0563.1488-.0835.2756-.0835h1.7583c1.4973 0 2.2451.5515 2.2451 1.651 0 .3283-.0955.6132-.2848.8563-.1892.2431-.4464.4227-.7716.5406v.0345c.1139.0417.2315.1397.3527.2939.1195.1542.2187.3266.2977.5134l.7937 1.9322c.0294.0762.0459.1324.0459.1669 0 .0526-.0459.0943-.136.127-.09.0326-.2259.049-.406.049h-.3693c-.294 0-.4685-.0617-.5236-.1851l-.7129-1.7126c-.101-.1923-.2112-.3284-.3288-.4082-.1176-.0798-.3105-.1179-.5806-.1179h-.3528v2.1426c0 .1868-.18.2812-.5401.2812h-.3068v.0018Zm1.7049-3.5904c.1856 0 .3491-.0725.4869-.2195.1378-.147.2076-.3247.2076-.5352 0-.205-.068-.3665-.2021-.488-.1359-.1198-.3197-.1796-.5548-.1796h-.7937v1.4223h.8561Zm5.0635 3.5904c-.3601 0-.5401-.0944-.5401-.2812v-5.6205c0-.1869.18-.2812.5401-.2812h.3877c.1433 0 .2645.0163.3601.049.0955.0326.1745.0943.2352.1887l2.0283 3.0479c.1194.1705.2278.3428.3252.5188l.0367-.009c-.011-.1343-.0184-.3339-.0184-.5969v-2.9155c0-.1868.1801-.2812.542-.2812h.2609c.3601 0 .5402.0944.5402.2812v5.6205c0 .1868-.1801.2812-.5402.2812h-.3417c-.1451 0-.2646-.0163-.3619-.049-.0956-.0327-.1746-.0943-.2352-.1887l-2.0743-3.0914c-.1194-.1687-.2278-.3429-.3252-.5189l-.0367.0091c.011.1342.0184.3338.0184.5969v2.959c0 .1868-.1801.2812-.542.2812h-.2591Zm7.1378 0c-.3657 0-.5494-.0635-.5494-.1923 0-.0236.011-.0762.0368-.1579l1.9842-5.6458c.048-.1234.22-.1851.514-.1851h.469c.301 0 .472.0617.514.1851l1.985 5.6458c.018.0581.027.1107.027.1579 0 .1288-.15.1923-.452.1923h-.397c-.294 0-.463-.0617-.505-.1851l-.36-1.0722h-2.129l-.3605 1.0722c-.0422.1234-.18.1851-.4152.1851h-.3619Zm2.8786-2.4148-.514-1.5638c-.042-.1179-.088-.3048-.136-.5624h-.037c-.005.0344-.02.1125-.04.2322-.02.1197-.054.2304-.096.3284l-.533 1.5638h1.356v.0018Zm4.531 2.4148c-.36 0-.542-.0944-.542-.2812v-5.6205c0-.1869.18-.2812.542-.2812h.388c.145 0 .264.0163.36.049.095.0326.174.0943.235.1887l2.028 3.0479c.12.1705.228.3428.325.5188l.037-.009c-.013-.1343-.018-.3339-.018-.5969v-2.9155c0-.1868.18-.2812.54-.2812h.261c.36 0 .54.0944.54.2812v5.6205c0 .1868-.18.2812-.54.2812h-.344c-.145 0-.264-.0163-.36-.049-.095-.0327-.174-.0943-.235-.1887l-2.074-3.0914c-.12-.1687-.228-.3429-.325-.5189l-.037.0091c.013.1342.018.3338.018.5969v2.959c0 .1868-.18.2812-.54.2812h-.259Zm7.634-.0164c-.127 0-.219-.0272-.276-.0834-.057-.0563-.086-.1452-.086-.2685v-5.4445c0-.1234.029-.2123.086-.2685.057-.0562.149-.0835.276-.0835h1.929c.931 0 1.646.2649 2.142.7947.496.5297.744 1.2899.744 2.2786 0 .9906-.248 1.7489-.744 2.2787-.496.5298-1.211.7946-2.142.7946h-1.929v.0018Zm1.931-1.1502c.481 0 .845-.1633 1.091-.4916.246-.3284.369-.8055.369-1.4315 0-.6259-.123-1.103-.369-1.4314-.246-.3283-.61-.4916-1.091-.4916h-.893v3.8461h.893Zm5.605 1.1502c-.127 0-.217-.0272-.275-.0834-.057-.0563-.085-.1452-.085-.2685v-5.4445c0-.1234.028-.2123.085-.2685.057-.0562.148-.0835.275-.0835h3.166c.097 0 .165.0345.207.1053.043.0707.063.1814.063.3338v.2721c0 .1524-.02.2631-.063.3338-.042.0708-.11.1053-.207.1053h-2.139v1.2735h1.894c.096 0 .166.0345.208.1053.042.0707.064.1814.064.3338v.2721c0 .1524-.022.2631-.064.3338-.042.0708-.11.1053-.208.1053h-1.894v1.4223h2.146c.098 0 .166.0345.208.1052.042.0708.062.1815.062.3339v.2721c0 .1524-.02.263-.062.3338-.042.0708-.11.1052-.208.1052h-3.173v.0018Zm7.463.0708c-.426 0-.799-.0417-1.119-.1234-.318-.0816-.567-.1868-.747-.3156-.17-.1107-.254-.2232-.254-.3339 0-.087.033-.1923.099-.3156.066-.1234.145-.2323.235-.3248.09-.0943.166-.1415.226-.1415.037 0 .12.0345.252.1052.193.0944.367.1669.524.2196.156.0526.34.0798.549.0798.235 0 .434-.0454.601-.1361.165-.0907.248-.2504.248-.4789 0-.1869-.077-.3357-.23-.4427-.152-.1089-.4-.2304-.744-.3647l-.415-.176c-.379-.1759-.676-.3936-.893-.6549-.217-.2594-.325-.6313-.325-1.1103 0-.3973.101-.7293.303-.996.202-.2667.465-.4626.788-.5878.325-.1252.674-.1887 1.045-.1887.307 0 .585.0309.835.0925.249.0617.446.1415.591.2413.132.0944.199.1869.199.2812 0 .0817-.028.1851-.081.3066-.054.1234-.12.2304-.199.3212-.079.0907-.15.136-.216.136-.03 0-.079-.0145-.149-.0435-.07-.029-.129-.0526-.177-.0708-.216-.0707-.441-.1052-.676-.1052-.312 0-.531.049-.654.1488-.123.0998-.184.214-.184.3429 0 .1524.043.2775.127.3773.085.0998.186.1796.307.2413.121.0617.298.1415.533.2413.343.1397.623.2739.838.3991.216.1252.404.3066.564.5443.16.2377.239.5406.239.9089 0 .4518-.098.82-.294 1.1067-.195.2866-.447.4953-.754.6241-.307.127-.637.1923-.992.1923Z"
        />
      </g>
      <defs>
        <linearGradient
          id="b"
          x1="16.4297"
          x2="12.7657"
          y1="-1.38195"
          y2="9.75003"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#540000" />
          <stop offset="1" stopColor="#C1161C" />
        </linearGradient>
        <linearGradient
          id="c"
          x1="32.7994"
          x2="19.729"
          y1="11.5042"
          y2="11.5757"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#470635" />
          <stop offset="1" stopColor="#A24683" />
        </linearGradient>
        <linearGradient
          id="d"
          x1="-.345705"
          x2="8.27152"
          y1="9.66351"
          y2="16.5017"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#573D00" />
          <stop offset="1" stopColor="#FAB613" />
        </linearGradient>
        <linearGradient
          id="e"
          x1="24.3564"
          x2="21.2744"
          y1="29.4858"
          y2="19.5244"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00314F" />
          <stop offset="1" stopColor="#007DB3" />
        </linearGradient>
        <linearGradient
          id="f"
          x1="5.5605"
          x2="14.5129"
          y1="28.3463"
          y2="21.563"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#003C10" />
          <stop offset="1" stopColor="#008944" />
        </linearGradient>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h131v30H0z" />
        </clipPath>
      </defs>
    </svg>
  </S.Wrapper>
)

export default Logo
