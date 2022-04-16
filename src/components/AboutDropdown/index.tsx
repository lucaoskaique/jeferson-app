import { AccountBalanceWallet as Wallet } from '@styled-icons/material-outlined/AccountBalanceWallet'
import { ArrowDropDown as Down } from '@styled-icons/material-outlined/ArrowDropDown'
import { Campaign } from '@styled-icons/material-outlined/Campaign'
import { LibraryBooks } from '@styled-icons/material-outlined/LibraryBooks'
import Dropdown from 'components/Dropdown'
import Link from 'next/link'

import * as S from './styles'

const AboutDropdown = () => (
  <Dropdown
    title={
      <>
        <span>Conheça o Jeferson</span>
        <Down size={24} />
      </>
    }
  >
    <S.Nav>
      <Link href="/" passHref>
        <S.Link>
          <Campaign />
          <span>Pronunciamentos</span>
        </S.Link>
      </Link>
      <Link href="/" passHref>
        <S.Link>
          <LibraryBooks />
          <span>Propostas</span>
        </S.Link>
      </Link>
      <Link href="/" passHref>
        <S.Link>
          <Wallet />
          <span>Transparência</span>
        </S.Link>
      </Link>
    </S.Nav>
  </Dropdown>
)

export default AboutDropdown
