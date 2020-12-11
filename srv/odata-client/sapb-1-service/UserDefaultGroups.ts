/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UserDefaultGroupsRequestBuilder } from './UserDefaultGroupsRequestBuilder';
import { BoPrintReceiptEnum } from './BoPrintReceiptEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "UserDefaultGroups" of service "SAPB1".
 */
export class UserDefaultGroups extends EntityV4 implements UserDefaultGroupsType {
  /**
   * Technical entity name for UserDefaultGroups.
   */
  static _entityName = 'UserDefaultGroups';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Code.
   * @nullable
   */
  code?: string;
  /**
   * Name.
   * @nullable
   */
  name?: string;
  /**
   * Warehouse.
   * @nullable
   */
  warehouse?: string;
  /**
   * Sales Employee.
   * @nullable
   */
  salesEmployee?: number;
  /**
   * B Pfor Invoice Payment.
   * @nullable
   */
  bPforInvoicePayment?: string;
  /**
   * Cash Account.
   * @nullable
   */
  cashAccount?: string;
  /**
   * Checking Acct.
   * @nullable
   */
  checkingAcct?: string;
  /**
   * Print Receipt.
   * @nullable
   */
  printReceipt?: BoPrintReceiptEnum;
  /**
   * Print Invoiceand Paymentin S.
   * @nullable
   */
  printInvoiceandPaymentinS?: BoYesNoEnum;
  /**
   * Windows Color.
   * @nullable
   */
  windowsColor?: number;
  /**
   * Address.
   * @nullable
   */
  address?: string;
  /**
   * Country.
   * @nullable
   */
  country?: string;
  /**
   * Printing Header.
   * @nullable
   */
  printingHeader?: string;
  /**
   * Phone Number 1.
   * @nullable
   */
  phoneNumber1?: string;
  /**
   * Phone Number 2.
   * @nullable
   */
  phoneNumber2?: string;
  /**
   * Fax Number.
   * @nullable
   */
  faxNumber?: string;
  /**
   * E Mail.
   * @nullable
   */
  eMail?: string;
  /**
   * Addressin Foreign Language.
   * @nullable
   */
  addressinForeignLanguage?: string;
  /**
   * Printing Header In Foreign Langu.
   * @nullable
   */
  printingHeaderInForeignLangu?: string;
  /**
   * Phone Number 1 Foreign Lang.
   * @nullable
   */
  phoneNumber1ForeignLang?: string;
  /**
   * Phone Number 2 Foreign Lang.
   * @nullable
   */
  phoneNumber2ForeignLang?: string;
  /**
   * Fax Number Foreign Lang.
   * @nullable
   */
  faxNumberForeignLang?: string;
  /**
   * Default Tax Code.
   * @nullable
   */
  defaultTaxCode?: string;
  /**
   * Additional Id Number.
   * @nullable
   */
  additionalIdNumber?: string;
  /**
   * User Signature.
   * @nullable
   */
  userSignature?: number;
  /**
   * Use Tax.
   * @nullable
   */
  useTax?: BoYesNoEnum;
  /**
   * Use Warehouse Addressin Apd.
   * @nullable
   */
  useWarehouseAddressinApd?: BoYesNoEnum;
  /**
   * Bplid.
   * @nullable
   */
  bplid?: number;
  /**
   * Asset In Doc.
   * @nullable
   */
  assetInDoc?: BoYesNoEnum;
  /**
   * One-to-one navigation property to the [[Warehouses]] entity.
   */
  warehouse2!: Warehouses;
  /**
   * One-to-one navigation property to the [[SalesPersons]] entity.
   */
  salesPerson!: SalesPersons;
  /**
   * One-to-one navigation property to the [[BusinessPartners]] entity.
   */
  businessPartner!: BusinessPartners;
  /**
   * One-to-one navigation property to the [[Countries]] entity.
   */
  country2!: Countries;
  /**
   * One-to-one navigation property to the [[SalesTaxCodes]] entity.
   */
  salesTaxCode!: SalesTaxCodes;
  /**
   * One-to-one navigation property to the [[Users]] entity.
   */
  user!: Users;
  /**
   * One-to-one navigation property to the [[BusinessPlaces]] entity.
   */
  businessPlace!: BusinessPlaces;

  /**
   * Returns an entity builder to construct instances of `UserDefaultGroups`.
   * @returns A builder that constructs instances of entity type `UserDefaultGroups`.
   */
  static builder(): EntityBuilderType<UserDefaultGroups, UserDefaultGroupsType> {
    return EntityV4.entityBuilder(UserDefaultGroups);
  }

  /**
   * Returns a request builder to construct requests for operations on the `UserDefaultGroups` entity type.
   * @returns A `UserDefaultGroups` request builder.
   */
  static requestBuilder(): UserDefaultGroupsRequestBuilder {
    return new UserDefaultGroupsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `UserDefaultGroups`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `UserDefaultGroups`.
   */
  static customField(fieldName: string): CustomFieldV4<UserDefaultGroups> {
    return EntityV4.customFieldSelector(fieldName, UserDefaultGroups);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Warehouses, WarehousesType } from './Warehouses';
import { SalesPersons, SalesPersonsType } from './SalesPersons';
import { BusinessPartners, BusinessPartnersType } from './BusinessPartners';
import { Countries, CountriesType } from './Countries';
import { SalesTaxCodes, SalesTaxCodesType } from './SalesTaxCodes';
import { Users, UsersType } from './Users';
import { BusinessPlaces, BusinessPlacesType } from './BusinessPlaces';

export interface UserDefaultGroupsType {
  code?: string | null;
  name?: string | null;
  warehouse?: string | null;
  salesEmployee?: number | null;
  bPforInvoicePayment?: string | null;
  cashAccount?: string | null;
  checkingAcct?: string | null;
  printReceipt?: BoPrintReceiptEnum | null;
  printInvoiceandPaymentinS?: BoYesNoEnum | null;
  windowsColor?: number | null;
  address?: string | null;
  country?: string | null;
  printingHeader?: string | null;
  phoneNumber1?: string | null;
  phoneNumber2?: string | null;
  faxNumber?: string | null;
  eMail?: string | null;
  addressinForeignLanguage?: string | null;
  printingHeaderInForeignLangu?: string | null;
  phoneNumber1ForeignLang?: string | null;
  phoneNumber2ForeignLang?: string | null;
  faxNumberForeignLang?: string | null;
  defaultTaxCode?: string | null;
  additionalIdNumber?: string | null;
  userSignature?: number | null;
  useTax?: BoYesNoEnum | null;
  useWarehouseAddressinApd?: BoYesNoEnum | null;
  bplid?: number | null;
  assetInDoc?: BoYesNoEnum | null;
  warehouse2: WarehousesType;
  salesPerson: SalesPersonsType;
  businessPartner: BusinessPartnersType;
  country2: CountriesType;
  salesTaxCode: SalesTaxCodesType;
  user: UsersType;
  businessPlace: BusinessPlacesType;
}

export namespace UserDefaultGroups {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<UserDefaultGroups> = new StringField('Code', UserDefaultGroups, 'Edm.String');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<UserDefaultGroups> = new StringField('Name', UserDefaultGroups, 'Edm.String');
  /**
   * Static representation of the [[warehouse]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WAREHOUSE: StringField<UserDefaultGroups> = new StringField('Warehouse', UserDefaultGroups, 'Edm.String');
  /**
   * Static representation of the [[salesEmployee]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_EMPLOYEE: NumberField<UserDefaultGroups> = new NumberField('SalesEmployee', UserDefaultGroups, 'Edm.Int32');
  /**
   * Static representation of the [[bPforInvoicePayment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const B_PFOR_INVOICE_PAYMENT: StringField<UserDefaultGroups> = new StringField('BPforInvoicePayment', UserDefaultGroups, 'Edm.String');
  /**
   * Static representation of the [[cashAccount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CASH_ACCOUNT: StringField<UserDefaultGroups> = new StringField('CashAccount', UserDefaultGroups, 'Edm.String');
  /**
   * Static representation of the [[checkingAcct]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHECKING_ACCT: StringField<UserDefaultGroups> = new StringField('CheckingAcct', UserDefaultGroups, 'Edm.String');
  /**
   * Static representation of the [[printReceipt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRINT_RECEIPT: EnumField<UserDefaultGroups> = new EnumField('PrintReceipt', UserDefaultGroups);
  /**
   * Static representation of the [[printInvoiceandPaymentinS]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRINT_INVOICEAND_PAYMENTIN_S: EnumField<UserDefaultGroups> = new EnumField('PrintInvoiceandPaymentinS', UserDefaultGroups);
  /**
   * Static representation of the [[windowsColor]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WINDOWS_COLOR: NumberField<UserDefaultGroups> = new NumberField('WindowsColor', UserDefaultGroups, 'Edm.Int32');
  /**
   * Static representation of the [[address]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS: StringField<UserDefaultGroups> = new StringField('Address', UserDefaultGroups, 'Edm.String');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<UserDefaultGroups> = new StringField('Country', UserDefaultGroups, 'Edm.String');
  /**
   * Static representation of the [[printingHeader]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRINTING_HEADER: StringField<UserDefaultGroups> = new StringField('PrintingHeader', UserDefaultGroups, 'Edm.String');
  /**
   * Static representation of the [[phoneNumber1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PHONE_NUMBER_1: StringField<UserDefaultGroups> = new StringField('PhoneNumber1', UserDefaultGroups, 'Edm.String');
  /**
   * Static representation of the [[phoneNumber2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PHONE_NUMBER_2: StringField<UserDefaultGroups> = new StringField('PhoneNumber2', UserDefaultGroups, 'Edm.String');
  /**
   * Static representation of the [[faxNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FAX_NUMBER: StringField<UserDefaultGroups> = new StringField('FaxNumber', UserDefaultGroups, 'Edm.String');
  /**
   * Static representation of the [[eMail]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const E_MAIL: StringField<UserDefaultGroups> = new StringField('eMail', UserDefaultGroups, 'Edm.String');
  /**
   * Static representation of the [[addressinForeignLanguage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESSIN_FOREIGN_LANGUAGE: StringField<UserDefaultGroups> = new StringField('AddressinForeignLanguage', UserDefaultGroups, 'Edm.String');
  /**
   * Static representation of the [[printingHeaderInForeignLangu]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRINTING_HEADER_IN_FOREIGN_LANGU: StringField<UserDefaultGroups> = new StringField('PrintingHeaderInForeignLangu', UserDefaultGroups, 'Edm.String');
  /**
   * Static representation of the [[phoneNumber1ForeignLang]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PHONE_NUMBER_1_FOREIGN_LANG: StringField<UserDefaultGroups> = new StringField('PhoneNumber1ForeignLang', UserDefaultGroups, 'Edm.String');
  /**
   * Static representation of the [[phoneNumber2ForeignLang]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PHONE_NUMBER_2_FOREIGN_LANG: StringField<UserDefaultGroups> = new StringField('PhoneNumber2ForeignLang', UserDefaultGroups, 'Edm.String');
  /**
   * Static representation of the [[faxNumberForeignLang]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FAX_NUMBER_FOREIGN_LANG: StringField<UserDefaultGroups> = new StringField('FaxNumberForeignLang', UserDefaultGroups, 'Edm.String');
  /**
   * Static representation of the [[defaultTaxCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_TAX_CODE: StringField<UserDefaultGroups> = new StringField('DefaultTaxCode', UserDefaultGroups, 'Edm.String');
  /**
   * Static representation of the [[additionalIdNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDITIONAL_ID_NUMBER: StringField<UserDefaultGroups> = new StringField('AdditionalIdNumber', UserDefaultGroups, 'Edm.String');
  /**
   * Static representation of the [[userSignature]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_SIGNATURE: NumberField<UserDefaultGroups> = new NumberField('UserSignature', UserDefaultGroups, 'Edm.Int32');
  /**
   * Static representation of the [[useTax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USE_TAX: EnumField<UserDefaultGroups> = new EnumField('UseTax', UserDefaultGroups);
  /**
   * Static representation of the [[useWarehouseAddressinApd]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USE_WAREHOUSE_ADDRESSIN_APD: EnumField<UserDefaultGroups> = new EnumField('UseWarehouseAddressinAPD', UserDefaultGroups);
  /**
   * Static representation of the [[bplid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BPLID: NumberField<UserDefaultGroups> = new NumberField('BPLID', UserDefaultGroups, 'Edm.Int32');
  /**
   * Static representation of the [[assetInDoc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSET_IN_DOC: EnumField<UserDefaultGroups> = new EnumField('AssetInDoc', UserDefaultGroups);
  /**
   * Static representation of the one-to-one navigation property [[warehouse2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WAREHOUSE_2: OneToOneLink<UserDefaultGroups, Warehouses> = new OneToOneLink('Warehouse2', UserDefaultGroups, Warehouses);
  /**
   * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_PERSON: OneToOneLink<UserDefaultGroups, SalesPersons> = new OneToOneLink('SalesPerson', UserDefaultGroups, SalesPersons);
  /**
   * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PARTNER: OneToOneLink<UserDefaultGroups, BusinessPartners> = new OneToOneLink('BusinessPartner', UserDefaultGroups, BusinessPartners);
  /**
   * Static representation of the one-to-one navigation property [[country2]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_2: OneToOneLink<UserDefaultGroups, Countries> = new OneToOneLink('Country2', UserDefaultGroups, Countries);
  /**
   * Static representation of the one-to-one navigation property [[salesTaxCode]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALES_TAX_CODE: OneToOneLink<UserDefaultGroups, SalesTaxCodes> = new OneToOneLink('SalesTaxCode', UserDefaultGroups, SalesTaxCodes);
  /**
   * Static representation of the one-to-one navigation property [[user]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER: OneToOneLink<UserDefaultGroups, Users> = new OneToOneLink('User', UserDefaultGroups, Users);
  /**
   * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PLACE: OneToOneLink<UserDefaultGroups, BusinessPlaces> = new OneToOneLink('BusinessPlace', UserDefaultGroups, BusinessPlaces);
  /**
   * All fields of the UserDefaultGroups entity.
   */
  export const _allFields: Array<StringField<UserDefaultGroups> | NumberField<UserDefaultGroups> | EnumField<UserDefaultGroups> | OneToOneLink<UserDefaultGroups, Warehouses> | OneToOneLink<UserDefaultGroups, SalesPersons> | OneToOneLink<UserDefaultGroups, BusinessPartners> | OneToOneLink<UserDefaultGroups, Countries> | OneToOneLink<UserDefaultGroups, SalesTaxCodes> | OneToOneLink<UserDefaultGroups, Users> | OneToOneLink<UserDefaultGroups, BusinessPlaces>> = [
    UserDefaultGroups.CODE,
    UserDefaultGroups.NAME,
    UserDefaultGroups.WAREHOUSE,
    UserDefaultGroups.SALES_EMPLOYEE,
    UserDefaultGroups.B_PFOR_INVOICE_PAYMENT,
    UserDefaultGroups.CASH_ACCOUNT,
    UserDefaultGroups.CHECKING_ACCT,
    UserDefaultGroups.PRINT_RECEIPT,
    UserDefaultGroups.PRINT_INVOICEAND_PAYMENTIN_S,
    UserDefaultGroups.WINDOWS_COLOR,
    UserDefaultGroups.ADDRESS,
    UserDefaultGroups.COUNTRY,
    UserDefaultGroups.PRINTING_HEADER,
    UserDefaultGroups.PHONE_NUMBER_1,
    UserDefaultGroups.PHONE_NUMBER_2,
    UserDefaultGroups.FAX_NUMBER,
    UserDefaultGroups.E_MAIL,
    UserDefaultGroups.ADDRESSIN_FOREIGN_LANGUAGE,
    UserDefaultGroups.PRINTING_HEADER_IN_FOREIGN_LANGU,
    UserDefaultGroups.PHONE_NUMBER_1_FOREIGN_LANG,
    UserDefaultGroups.PHONE_NUMBER_2_FOREIGN_LANG,
    UserDefaultGroups.FAX_NUMBER_FOREIGN_LANG,
    UserDefaultGroups.DEFAULT_TAX_CODE,
    UserDefaultGroups.ADDITIONAL_ID_NUMBER,
    UserDefaultGroups.USER_SIGNATURE,
    UserDefaultGroups.USE_TAX,
    UserDefaultGroups.USE_WAREHOUSE_ADDRESSIN_APD,
    UserDefaultGroups.BPLID,
    UserDefaultGroups.ASSET_IN_DOC,
    UserDefaultGroups.WAREHOUSE_2,
    UserDefaultGroups.SALES_PERSON,
    UserDefaultGroups.BUSINESS_PARTNER,
    UserDefaultGroups.COUNTRY_2,
    UserDefaultGroups.SALES_TAX_CODE,
    UserDefaultGroups.USER,
    UserDefaultGroups.BUSINESS_PLACE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<UserDefaultGroups> = new AllFields('*', UserDefaultGroups);
  /**
   * All key fields of the UserDefaultGroups entity.
   */
  export const _keyFields: Array<Field<UserDefaultGroups>> = [UserDefaultGroups.CODE];
  /**
   * Mapping of all key field names to the respective static field property UserDefaultGroups.
   */
  export const _keys: { [keys: string]: Field<UserDefaultGroups> } = UserDefaultGroups._keyFields.reduce((acc: { [keys: string]: Field<UserDefaultGroups> }, field: Field<UserDefaultGroups>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
