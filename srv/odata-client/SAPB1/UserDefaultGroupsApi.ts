/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UserDefaultGroups } from './UserDefaultGroups';
import { UserDefaultGroupsRequestBuilder } from './UserDefaultGroupsRequestBuilder';
import { WarehousesApi } from './WarehousesApi';
import { SalesPersonsApi } from './SalesPersonsApi';
import { BusinessPartnersApi } from './BusinessPartnersApi';
import { CountriesApi } from './CountriesApi';
import { SalesTaxCodesApi } from './SalesTaxCodesApi';
import { UsersApi } from './UsersApi';
import { BusinessPlacesApi } from './BusinessPlacesApi';
import { UserLanguagesApi } from './UserLanguagesApi';
import { DefaultDocument } from './DefaultDocument';
import { DefaultCreditCard } from './DefaultCreditCard';
import { BoPrintReceiptEnum } from './BoPrintReceiptEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoSuppLangs } from './BoSuppLangs';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField,
  CollectionField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class UserDefaultGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<UserDefaultGroups<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): UserDefaultGroupsApi<DeSerializersT> {
    return new UserDefaultGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link warehouse2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_2: OneToOneLink<
      UserDefaultGroups<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_PERSON: OneToOneLink<
      UserDefaultGroups<DeSerializersT>,
      DeSerializersT,
      SalesPersonsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      UserDefaultGroups<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link country2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_2: OneToOneLink<
      UserDefaultGroups<DeSerializersT>,
      DeSerializersT,
      CountriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesTaxCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_TAX_CODE: OneToOneLink<
      UserDefaultGroups<DeSerializersT>,
      DeSerializersT,
      SalesTaxCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link user} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER: OneToOneLink<
      UserDefaultGroups<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPlace} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PLACE: OneToOneLink<
      UserDefaultGroups<DeSerializersT>,
      DeSerializersT,
      BusinessPlacesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link userLanguage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER_LANGUAGE: OneToOneLink<
      UserDefaultGroups<DeSerializersT>,
      DeSerializersT,
      UserLanguagesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WarehousesApi<DeSerializersT>,
      SalesPersonsApi<DeSerializersT>,
      BusinessPartnersApi<DeSerializersT>,
      CountriesApi<DeSerializersT>,
      SalesTaxCodesApi<DeSerializersT>,
      UsersApi<DeSerializersT>,
      BusinessPlacesApi<DeSerializersT>,
      UserLanguagesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      WAREHOUSE_2: new OneToOneLink('Warehouse2', this, linkedApis[0]),
      SALES_PERSON: new OneToOneLink('SalesPerson', this, linkedApis[1]),
      BUSINESS_PARTNER: new OneToOneLink(
        'BusinessPartner',
        this,
        linkedApis[2]
      ),
      COUNTRY_2: new OneToOneLink('Country2', this, linkedApis[3]),
      SALES_TAX_CODE: new OneToOneLink('SalesTaxCode', this, linkedApis[4]),
      USER: new OneToOneLink('User', this, linkedApis[5]),
      BUSINESS_PLACE: new OneToOneLink('BusinessPlace', this, linkedApis[6]),
      USER_LANGUAGE: new OneToOneLink('UserLanguage', this, linkedApis[7])
    };
    return this;
  }

  entityConstructor = UserDefaultGroups;

  requestBuilder(): UserDefaultGroupsRequestBuilder<DeSerializersT> {
    return new UserDefaultGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    UserDefaultGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<UserDefaultGroups<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<UserDefaultGroups<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof UserDefaultGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        UserDefaultGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      UserDefaultGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      UserDefaultGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE: OrderableEdmTypeField<
      UserDefaultGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_EMPLOYEE: OrderableEdmTypeField<
      UserDefaultGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    B_PFOR_INVOICE_PAYMENT: OrderableEdmTypeField<
      UserDefaultGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_ACCOUNT: OrderableEdmTypeField<
      UserDefaultGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHECKING_ACCT: OrderableEdmTypeField<
      UserDefaultGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINT_RECEIPT: EnumField<
      UserDefaultGroups<DeSerializers>,
      DeSerializersT,
      BoPrintReceiptEnum,
      true,
      true
    >;
    PRINT_INVOICEAND_PAYMENTIN_S: EnumField<
      UserDefaultGroups<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    WINDOWS_COLOR: OrderableEdmTypeField<
      UserDefaultGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ADDRESS: OrderableEdmTypeField<
      UserDefaultGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY: OrderableEdmTypeField<
      UserDefaultGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINTING_HEADER: OrderableEdmTypeField<
      UserDefaultGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHONE_NUMBER_1: OrderableEdmTypeField<
      UserDefaultGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHONE_NUMBER_2: OrderableEdmTypeField<
      UserDefaultGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FAX_NUMBER: OrderableEdmTypeField<
      UserDefaultGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    E_MAIL: OrderableEdmTypeField<
      UserDefaultGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESSIN_FOREIGN_LANGUAGE: OrderableEdmTypeField<
      UserDefaultGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINTING_HEADER_IN_FOREIGN_LANGU: OrderableEdmTypeField<
      UserDefaultGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHONE_NUMBER_1_FOREIGN_LANG: OrderableEdmTypeField<
      UserDefaultGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHONE_NUMBER_2_FOREIGN_LANG: OrderableEdmTypeField<
      UserDefaultGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FAX_NUMBER_FOREIGN_LANG: OrderableEdmTypeField<
      UserDefaultGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_TAX_CODE: OrderableEdmTypeField<
      UserDefaultGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDITIONAL_ID_NUMBER: OrderableEdmTypeField<
      UserDefaultGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_SIGNATURE: OrderableEdmTypeField<
      UserDefaultGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    USE_TAX: EnumField<
      UserDefaultGroups<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    USE_WAREHOUSE_ADDRESSIN_APD: EnumField<
      UserDefaultGroups<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    BPLID: OrderableEdmTypeField<
      UserDefaultGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ASSET_IN_DOC: EnumField<
      UserDefaultGroups<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    LANGUAGE_CODE: EnumField<
      UserDefaultGroups<DeSerializers>,
      DeSerializersT,
      BoSuppLangs,
      true,
      true
    >;
    DEFAULT_DOCUMENTS: CollectionField<
      UserDefaultGroups<DeSerializers>,
      DeSerializersT,
      DefaultDocument,
      true,
      true
    >;
    DEFAULT_CREDIT_CARDS: CollectionField<
      UserDefaultGroups<DeSerializers>,
      DeSerializersT,
      DefaultCreditCard,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouse2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_2: OneToOneLink<
      UserDefaultGroups<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_PERSON: OneToOneLink<
      UserDefaultGroups<DeSerializersT>,
      DeSerializersT,
      SalesPersonsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      UserDefaultGroups<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link country2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_2: OneToOneLink<
      UserDefaultGroups<DeSerializersT>,
      DeSerializersT,
      CountriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesTaxCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_TAX_CODE: OneToOneLink<
      UserDefaultGroups<DeSerializersT>,
      DeSerializersT,
      SalesTaxCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link user} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER: OneToOneLink<
      UserDefaultGroups<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPlace} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PLACE: OneToOneLink<
      UserDefaultGroups<DeSerializersT>,
      DeSerializersT,
      BusinessPlacesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link userLanguage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER_LANGUAGE: OneToOneLink<
      UserDefaultGroups<DeSerializersT>,
      DeSerializersT,
      UserLanguagesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<UserDefaultGroups<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', false),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link warehouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE: fieldBuilder.buildEdmTypeField(
          'Warehouse',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesEmployee} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_EMPLOYEE: fieldBuilder.buildEdmTypeField(
          'SalesEmployee',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link bPforInvoicePayment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        B_PFOR_INVOICE_PAYMENT: fieldBuilder.buildEdmTypeField(
          'BPforInvoicePayment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cashAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CashAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link checkingAcct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECKING_ACCT: fieldBuilder.buildEdmTypeField(
          'CheckingAcct',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link printReceipt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_RECEIPT: fieldBuilder.buildEnumField(
          'PrintReceipt',
          BoPrintReceiptEnum,
          true
        ),
        /**
         * Static representation of the {@link printInvoiceandPaymentinS} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_INVOICEAND_PAYMENTIN_S: fieldBuilder.buildEnumField(
          'PrintInvoiceandPaymentinS',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link windowsColor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WINDOWS_COLOR: fieldBuilder.buildEdmTypeField(
          'WindowsColor',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link address} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS: fieldBuilder.buildEdmTypeField('Address', 'Edm.String', true),
        /**
         * Static representation of the {@link country} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY: fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true),
        /**
         * Static representation of the {@link printingHeader} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTING_HEADER: fieldBuilder.buildEdmTypeField(
          'PrintingHeader',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link phoneNumber1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHONE_NUMBER_1: fieldBuilder.buildEdmTypeField(
          'PhoneNumber1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link phoneNumber2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHONE_NUMBER_2: fieldBuilder.buildEdmTypeField(
          'PhoneNumber2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link faxNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAX_NUMBER: fieldBuilder.buildEdmTypeField(
          'FaxNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eMail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_MAIL: fieldBuilder.buildEdmTypeField('eMail', 'Edm.String', true),
        /**
         * Static representation of the {@link addressinForeignLanguage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESSIN_FOREIGN_LANGUAGE: fieldBuilder.buildEdmTypeField(
          'AddressinForeignLanguage',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link printingHeaderInForeignLangu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTING_HEADER_IN_FOREIGN_LANGU: fieldBuilder.buildEdmTypeField(
          'PrintingHeaderInForeignLangu',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link phoneNumber1ForeignLang} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHONE_NUMBER_1_FOREIGN_LANG: fieldBuilder.buildEdmTypeField(
          'PhoneNumber1ForeignLang',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link phoneNumber2ForeignLang} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHONE_NUMBER_2_FOREIGN_LANG: fieldBuilder.buildEdmTypeField(
          'PhoneNumber2ForeignLang',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link faxNumberForeignLang} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAX_NUMBER_FOREIGN_LANG: fieldBuilder.buildEdmTypeField(
          'FaxNumberForeignLang',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultTaxCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_TAX_CODE: fieldBuilder.buildEdmTypeField(
          'DefaultTaxCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link additionalIdNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDITIONAL_ID_NUMBER: fieldBuilder.buildEdmTypeField(
          'AdditionalIdNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link userSignature} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_SIGNATURE: fieldBuilder.buildEdmTypeField(
          'UserSignature',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link useTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_TAX: fieldBuilder.buildEnumField('UseTax', BoYesNoEnum, true),
        /**
         * Static representation of the {@link useWarehouseAddressinApd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_WAREHOUSE_ADDRESSIN_APD: fieldBuilder.buildEnumField(
          'UseWarehouseAddressinAPD',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link bplid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BPLID: fieldBuilder.buildEdmTypeField('BPLID', 'Edm.Int32', true),
        /**
         * Static representation of the {@link assetInDoc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_IN_DOC: fieldBuilder.buildEnumField(
          'AssetInDoc',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link languageCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE_CODE: fieldBuilder.buildEnumField(
          'LanguageCode',
          BoSuppLangs,
          true
        ),
        /**
         * Static representation of the {@link defaultDocuments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DOCUMENTS: fieldBuilder.buildCollectionField(
          'DefaultDocuments',
          DefaultDocument,
          true
        ),
        /**
         * Static representation of the {@link defaultCreditCards} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_CREDIT_CARDS: fieldBuilder.buildCollectionField(
          'DefaultCreditCards',
          DefaultCreditCard,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', UserDefaultGroups)
      };
    }

    return this._schema;
  }
}
