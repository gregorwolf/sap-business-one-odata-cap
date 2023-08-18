/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import { DefaultDocument } from './DefaultDocument';
import { DefaultCreditCard } from './DefaultCreditCard';
import type { UserDefaultGroupsApi } from './UserDefaultGroupsApi';
import { BoPrintReceiptEnum } from './BoPrintReceiptEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoSuppLangs } from './BoSuppLangs';
import { Warehouses, WarehousesType } from './Warehouses';
import { SalesPersons, SalesPersonsType } from './SalesPersons';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { Countries, CountriesType } from './Countries';
import { SalesTaxCodes, SalesTaxCodesType } from './SalesTaxCodes';
import { Users, UsersType } from './Users';
import { BusinessPlaces, BusinessPlacesType } from './BusinessPlaces';
import { UserLanguages, UserLanguagesType } from './UserLanguages';

/**
 * This class represents the entity "UserDefaultGroups" of service "SAPB1".
 */
export class UserDefaultGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements UserDefaultGroupsType<T>
{
  /**
   * Technical entity name for UserDefaultGroups.
   */
  static _entityName = 'UserDefaultGroups';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the UserDefaultGroups entity
   */
  static _keys = ['Code'];
  /**
   * Code.
   */
  code!: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse.
   * @nullable
   */
  warehouse?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Employee.
   * @nullable
   */
  salesEmployee?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * B Pfor Invoice Payment.
   * @nullable
   */
  bPforInvoicePayment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cash Account.
   * @nullable
   */
  cashAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Checking Acct.
   * @nullable
   */
  checkingAcct?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Print Receipt.
   * @nullable
   */
  printReceipt?: BoPrintReceiptEnum | null;
  /**
   * Print Invoiceand Paymentin S.
   * @nullable
   */
  printInvoiceandPaymentinS?: BoYesNoEnum | null;
  /**
   * Windows Color.
   * @nullable
   */
  windowsColor?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Address.
   * @nullable
   */
  address?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country.
   * @nullable
   */
  country?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Printing Header.
   * @nullable
   */
  printingHeader?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Phone Number 1.
   * @nullable
   */
  phoneNumber1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Phone Number 2.
   * @nullable
   */
  phoneNumber2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fax Number.
   * @nullable
   */
  faxNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * E Mail.
   * @nullable
   */
  eMail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Addressin Foreign Language.
   * @nullable
   */
  addressinForeignLanguage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Printing Header In Foreign Langu.
   * @nullable
   */
  printingHeaderInForeignLangu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Phone Number 1 Foreign Lang.
   * @nullable
   */
  phoneNumber1ForeignLang?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Phone Number 2 Foreign Lang.
   * @nullable
   */
  phoneNumber2ForeignLang?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fax Number Foreign Lang.
   * @nullable
   */
  faxNumberForeignLang?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Tax Code.
   * @nullable
   */
  defaultTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Additional Id Number.
   * @nullable
   */
  additionalIdNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Signature.
   * @nullable
   */
  userSignature?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Use Tax.
   * @nullable
   */
  useTax?: BoYesNoEnum | null;
  /**
   * Use Warehouse Addressin Apd.
   * @nullable
   */
  useWarehouseAddressinApd?: BoYesNoEnum | null;
  /**
   * Bplid.
   * @nullable
   */
  bplid?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Asset In Doc.
   * @nullable
   */
  assetInDoc?: BoYesNoEnum | null;
  /**
   * Language Code.
   * @nullable
   */
  languageCode?: BoSuppLangs | null;
  /**
   * Default Documents.
   * @nullable
   */
  defaultDocuments?: DefaultDocument<T>[] | null;
  /**
   * Default Credit Cards.
   * @nullable
   */
  defaultCreditCards?: DefaultCreditCard<T>[] | null;
  /**
   * One-to-one navigation property to the {@link Warehouses} entity.
   */
  warehouse2?: Warehouses<T> | null;
  /**
   * One-to-one navigation property to the {@link SalesPersons} entity.
   */
  salesPerson?: SalesPersons<T> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartners} entity.
   */
  businessPartner?: BusinessPartners<T> | null;
  /**
   * One-to-one navigation property to the {@link Countries} entity.
   */
  country2?: Countries<T> | null;
  /**
   * One-to-one navigation property to the {@link SalesTaxCodes} entity.
   */
  salesTaxCode?: SalesTaxCodes<T> | null;
  /**
   * One-to-one navigation property to the {@link Users} entity.
   */
  user?: Users<T> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPlaces} entity.
   */
  businessPlace?: BusinessPlaces<T> | null;
  /**
   * One-to-one navigation property to the {@link UserLanguages} entity.
   */
  userLanguage?: UserLanguages<T> | null;

  constructor(readonly _entityApi: UserDefaultGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface UserDefaultGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  code: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  warehouse?: DeserializedType<T, 'Edm.String'> | null;
  salesEmployee?: DeserializedType<T, 'Edm.Int32'> | null;
  bPforInvoicePayment?: DeserializedType<T, 'Edm.String'> | null;
  cashAccount?: DeserializedType<T, 'Edm.String'> | null;
  checkingAcct?: DeserializedType<T, 'Edm.String'> | null;
  printReceipt?: BoPrintReceiptEnum | null;
  printInvoiceandPaymentinS?: BoYesNoEnum | null;
  windowsColor?: DeserializedType<T, 'Edm.Int32'> | null;
  address?: DeserializedType<T, 'Edm.String'> | null;
  country?: DeserializedType<T, 'Edm.String'> | null;
  printingHeader?: DeserializedType<T, 'Edm.String'> | null;
  phoneNumber1?: DeserializedType<T, 'Edm.String'> | null;
  phoneNumber2?: DeserializedType<T, 'Edm.String'> | null;
  faxNumber?: DeserializedType<T, 'Edm.String'> | null;
  eMail?: DeserializedType<T, 'Edm.String'> | null;
  addressinForeignLanguage?: DeserializedType<T, 'Edm.String'> | null;
  printingHeaderInForeignLangu?: DeserializedType<T, 'Edm.String'> | null;
  phoneNumber1ForeignLang?: DeserializedType<T, 'Edm.String'> | null;
  phoneNumber2ForeignLang?: DeserializedType<T, 'Edm.String'> | null;
  faxNumberForeignLang?: DeserializedType<T, 'Edm.String'> | null;
  defaultTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  additionalIdNumber?: DeserializedType<T, 'Edm.String'> | null;
  userSignature?: DeserializedType<T, 'Edm.Int32'> | null;
  useTax?: BoYesNoEnum | null;
  useWarehouseAddressinApd?: BoYesNoEnum | null;
  bplid?: DeserializedType<T, 'Edm.Int32'> | null;
  assetInDoc?: BoYesNoEnum | null;
  languageCode?: BoSuppLangs | null;
  defaultDocuments?: DefaultDocument<T>[] | null;
  defaultCreditCards?: DefaultCreditCard<T>[] | null;
  warehouse2?: WarehousesType<T> | null;
  salesPerson?: SalesPersonsType<T> | null;
  businessPartner?: BusinessPartnersType<T> | null;
  country2?: CountriesType<T> | null;
  salesTaxCode?: SalesTaxCodesType<T> | null;
  user?: UsersType<T> | null;
  businessPlace?: BusinessPlacesType<T> | null;
  userLanguage?: UserLanguagesType<T> | null;
}
