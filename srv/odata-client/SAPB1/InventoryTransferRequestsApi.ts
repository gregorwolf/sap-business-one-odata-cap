/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventoryTransferRequests } from './InventoryTransferRequests';
import { InventoryTransferRequestsRequestBuilder } from './InventoryTransferRequestsRequestBuilder';
import { BusinessPartnersApi } from './BusinessPartnersApi';
import { PaymentTermsTypesApi } from './PaymentTermsTypesApi';
import { SalesPersonsApi } from './SalesPersonsApi';
import { WarehousesApi } from './WarehousesApi';
import { BusinessPlacesApi } from './BusinessPlacesApi';
import { StockTransferApprovalRequest } from './StockTransferApprovalRequest';
import { ElectronicProtocol } from './ElectronicProtocol';
import { StockTransferLine } from './StockTransferLine';
import {
  StockTransferTaxExtension,
  StockTransferTaxExtensionField
} from './StockTransferTaxExtension';
import { DocumentReference } from './DocumentReference';
import { BoYesNoEnum } from './BoYesNoEnum';
import { StockTransferAuthorizationStatusEnum } from './StockTransferAuthorizationStatusEnum';
import { ElecCommStatusEnum } from './ElecCommStatusEnum';
import { FolioLetterEnum } from './FolioLetterEnum';
import { BoStatus } from './BoStatus';
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
  Time,
  OrderableEdmTypeField,
  EnumField,
  CollectionField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class InventoryTransferRequestsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<InventoryTransferRequests<DeSerializersT>, DeSerializersT>
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
  ): InventoryTransferRequestsApi<DeSerializersT> {
    return new InventoryTransferRequestsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      InventoryTransferRequests<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link paymentTermsType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_TERMS_TYPE: OneToOneLink<
      InventoryTransferRequests<DeSerializersT>,
      DeSerializersT,
      PaymentTermsTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_PERSON: OneToOneLink<
      InventoryTransferRequests<DeSerializersT>,
      DeSerializersT,
      SalesPersonsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE: OneToOneLink<
      InventoryTransferRequests<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPlace} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PLACE: OneToOneLink<
      InventoryTransferRequests<DeSerializersT>,
      DeSerializersT,
      BusinessPlacesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BusinessPartnersApi<DeSerializersT>,
      PaymentTermsTypesApi<DeSerializersT>,
      SalesPersonsApi<DeSerializersT>,
      WarehousesApi<DeSerializersT>,
      BusinessPlacesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BUSINESS_PARTNER: new OneToOneLink(
        'BusinessPartner',
        this,
        linkedApis[0]
      ),
      PAYMENT_TERMS_TYPE: new OneToOneLink(
        'PaymentTermsType',
        this,
        linkedApis[1]
      ),
      SALES_PERSON: new OneToOneLink('SalesPerson', this, linkedApis[2]),
      WAREHOUSE: new OneToOneLink('Warehouse', this, linkedApis[3]),
      BUSINESS_PLACE: new OneToOneLink('BusinessPlace', this, linkedApis[4])
    };
    return this;
  }

  entityConstructor = InventoryTransferRequests;

  requestBuilder(): InventoryTransferRequestsRequestBuilder<DeSerializersT> {
    return new InventoryTransferRequestsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InventoryTransferRequests<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InventoryTransferRequests<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InventoryTransferRequests<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof InventoryTransferRequests,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InventoryTransferRequests,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DOC_ENTRY: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SERIES: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PRINTED: EnumField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    DOC_DATE: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    DUE_DATE: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CARD_CODE: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CARD_NAME: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE_1: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE_2: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMENTS: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_MEMO: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_LIST: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SALES_PERSON_CODE: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    FROM_WAREHOUSE: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TO_WAREHOUSE: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATION_DATE: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    UPDATE_DATE: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    FINANCIAL_PERIOD: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    TRANS_NUM: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DOC_NUM: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    TAX_DATE: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CONTACT_PERSON: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    FOLIO_PREFIX_STRING: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FOLIO_NUMBER: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DOC_OBJECT_CODE: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTHORIZATION_STATUS: EnumField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      StockTransferAuthorizationStatusEnum,
      true,
      true
    >;
    BPLID: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    BPL_NAME: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT_REG_NUM: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTHORIZATION_CODE: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_DELIVERY_DATE: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    START_DELIVERY_TIME: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    END_DELIVERY_DATE: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    END_DELIVERY_TIME: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    VEHICLE_PLATE: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AT_DOCUMENT_TYPE: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    E_DOC_EXPORT_FORMAT: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ELEC_COMM_STATUS: EnumField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      ElecCommStatusEnum,
      true,
      true
    >;
    ELEC_COMM_MESSAGE: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POINT_OF_ISSUE_CODE: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LETTER: EnumField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      FolioLetterEnum,
      true,
      true
    >;
    FOLIO_NUMBER_FROM: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    FOLIO_NUMBER_TO: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ATTACHMENT_ENTRY: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DOCUMENT_STATUS: EnumField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      BoStatus,
      true,
      true
    >;
    SHIP_TO_CODE: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SAP_PASSPORT: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_PAGE_FOLIO_NUMBER: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DUTY_STATUS: EnumField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    U_FERTIGUNGSZEIT: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    U_ILTIS_LIEFERZEIT: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    U_COR_FORM_TYPE: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_BELEGOK: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    U_EST_1: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    U_EST_2: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    U_EST_3: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    U_ACT_1: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    U_ACT_2: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    U_ACT_3: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    U_EST_4: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    U_ACT_4: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    U_ACT_5: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    U_BS_INFOSERVICE: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    U_AB_OK: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_COR_BW_FROM_DATE: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_COR_BW_TO_DATE: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_TESTBELEG: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_ARTIKEL_DETAIL: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_INTERN: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_KALKULATION: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_PROV_BEST: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_AV: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_QM: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_FERT_STAND: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_RAHMENVERTRAG: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_RAHMENVERTRAGS_NR: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_EINGEGANGEN: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_OPP_KALKULATION: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_OPP_ABGABEART: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_OPP_PREISE: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_EINVOICE: OrderableEdmTypeField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    STOCK_TRANSFER_APPROVAL_REQUESTS: CollectionField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      StockTransferApprovalRequest,
      true,
      true
    >;
    ELECTRONIC_PROTOCOLS: CollectionField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      ElectronicProtocol,
      true,
      true
    >;
    STOCK_TRANSFER_LINES: CollectionField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      StockTransferLine,
      true,
      true
    >;
    STOCK_TRANSFER_TAX_EXTENSION: StockTransferTaxExtensionField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      true,
      true
    >;
    DOCUMENT_REFERENCES: CollectionField<
      InventoryTransferRequests<DeSerializers>,
      DeSerializersT,
      DocumentReference,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PARTNER: OneToOneLink<
      InventoryTransferRequests<DeSerializersT>,
      DeSerializersT,
      BusinessPartnersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link paymentTermsType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYMENT_TERMS_TYPE: OneToOneLink<
      InventoryTransferRequests<DeSerializersT>,
      DeSerializersT,
      PaymentTermsTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesPerson} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_PERSON: OneToOneLink<
      InventoryTransferRequests<DeSerializersT>,
      DeSerializersT,
      SalesPersonsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE: OneToOneLink<
      InventoryTransferRequests<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessPlace} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PLACE: OneToOneLink<
      InventoryTransferRequests<DeSerializersT>,
      DeSerializersT,
      BusinessPlacesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<InventoryTransferRequests<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link docEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_ENTRY: fieldBuilder.buildEdmTypeField(
          'DocEntry',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link series} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIES: fieldBuilder.buildEdmTypeField('Series', 'Edm.Int32', true),
        /**
         * Static representation of the {@link printed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTED: fieldBuilder.buildEnumField('Printed', BoYesNoEnum, true),
        /**
         * Static representation of the {@link docDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_DATE: fieldBuilder.buildEdmTypeField(
          'DocDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link dueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUE_DATE: fieldBuilder.buildEdmTypeField(
          'DueDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link cardCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_CODE: fieldBuilder.buildEdmTypeField(
          'CardCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cardName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_NAME: fieldBuilder.buildEdmTypeField(
          'CardName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link address} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS: fieldBuilder.buildEdmTypeField('Address', 'Edm.String', true),
        /**
         * Static representation of the {@link reference1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_1: fieldBuilder.buildEdmTypeField(
          'Reference1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reference2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_2: fieldBuilder.buildEdmTypeField(
          'Reference2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link comments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENTS: fieldBuilder.buildEdmTypeField(
          'Comments',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link journalMemo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_MEMO: fieldBuilder.buildEdmTypeField(
          'JournalMemo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priceList} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_LIST: fieldBuilder.buildEdmTypeField(
          'PriceList',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link salesPersonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PERSON_CODE: fieldBuilder.buildEdmTypeField(
          'SalesPersonCode',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link fromWarehouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_WAREHOUSE: fieldBuilder.buildEdmTypeField(
          'FromWarehouse',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link toWarehouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_WAREHOUSE: fieldBuilder.buildEdmTypeField(
          'ToWarehouse',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATION_DATE: fieldBuilder.buildEdmTypeField(
          'CreationDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link updateDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPDATE_DATE: fieldBuilder.buildEdmTypeField(
          'UpdateDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link financialPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINANCIAL_PERIOD: fieldBuilder.buildEdmTypeField(
          'FinancialPeriod',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link transNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_NUM: fieldBuilder.buildEdmTypeField(
          'TransNum',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link docNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_NUM: fieldBuilder.buildEdmTypeField('DocNum', 'Edm.Int32', true),
        /**
         * Static representation of the {@link taxDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_DATE: fieldBuilder.buildEdmTypeField(
          'TaxDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link contactPerson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON: fieldBuilder.buildEdmTypeField(
          'ContactPerson',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link folioPrefixString} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOLIO_PREFIX_STRING: fieldBuilder.buildEdmTypeField(
          'FolioPrefixString',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link folioNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOLIO_NUMBER: fieldBuilder.buildEdmTypeField(
          'FolioNumber',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link docObjectCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOC_OBJECT_CODE: fieldBuilder.buildEdmTypeField(
          'DocObjectCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link authorizationStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTHORIZATION_STATUS: fieldBuilder.buildEnumField(
          'AuthorizationStatus',
          StockTransferAuthorizationStatusEnum,
          true
        ),
        /**
         * Static representation of the {@link bplid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BPLID: fieldBuilder.buildEdmTypeField('BPLID', 'Edm.Int32', true),
        /**
         * Static representation of the {@link bplName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BPL_NAME: fieldBuilder.buildEdmTypeField('BPLName', 'Edm.String', true),
        /**
         * Static representation of the {@link vatRegNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_REG_NUM: fieldBuilder.buildEdmTypeField(
          'VATRegNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link authorizationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTHORIZATION_CODE: fieldBuilder.buildEdmTypeField(
          'AuthorizationCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link startDeliveryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DELIVERY_DATE: fieldBuilder.buildEdmTypeField(
          'StartDeliveryDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link startDeliveryTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DELIVERY_TIME: fieldBuilder.buildEdmTypeField(
          'StartDeliveryTime',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link endDeliveryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DELIVERY_DATE: fieldBuilder.buildEdmTypeField(
          'EndDeliveryDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link endDeliveryTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DELIVERY_TIME: fieldBuilder.buildEdmTypeField(
          'EndDeliveryTime',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link vehiclePlate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEHICLE_PLATE: fieldBuilder.buildEdmTypeField(
          'VehiclePlate',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link atDocumentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AT_DOCUMENT_TYPE: fieldBuilder.buildEdmTypeField(
          'ATDocumentType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link eDocExportFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        E_DOC_EXPORT_FORMAT: fieldBuilder.buildEdmTypeField(
          'EDocExportFormat',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link elecCommStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELEC_COMM_STATUS: fieldBuilder.buildEnumField(
          'ElecCommStatus',
          ElecCommStatusEnum,
          true
        ),
        /**
         * Static representation of the {@link elecCommMessage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELEC_COMM_MESSAGE: fieldBuilder.buildEdmTypeField(
          'ElecCommMessage',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pointOfIssueCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POINT_OF_ISSUE_CODE: fieldBuilder.buildEdmTypeField(
          'PointOfIssueCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link letter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LETTER: fieldBuilder.buildEnumField('Letter', FolioLetterEnum, true),
        /**
         * Static representation of the {@link folioNumberFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOLIO_NUMBER_FROM: fieldBuilder.buildEdmTypeField(
          'FolioNumberFrom',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link folioNumberTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOLIO_NUMBER_TO: fieldBuilder.buildEdmTypeField(
          'FolioNumberTo',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link attachmentEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHMENT_ENTRY: fieldBuilder.buildEdmTypeField(
          'AttachmentEntry',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link documentStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_STATUS: fieldBuilder.buildEnumField(
          'DocumentStatus',
          BoStatus,
          true
        ),
        /**
         * Static representation of the {@link shipToCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_TO_CODE: fieldBuilder.buildEdmTypeField(
          'ShipToCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sapPassport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAP_PASSPORT: fieldBuilder.buildEdmTypeField(
          'SAPPassport',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastPageFolioNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_PAGE_FOLIO_NUMBER: fieldBuilder.buildEdmTypeField(
          'LastPageFolioNumber',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link dutyStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUTY_STATUS: fieldBuilder.buildEnumField(
          'DutyStatus',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link uFertigungszeit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_FERTIGUNGSZEIT: fieldBuilder.buildEdmTypeField(
          'U_Fertigungszeit',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link uIltisLieferzeit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ILTIS_LIEFERZEIT: fieldBuilder.buildEdmTypeField(
          'U_ILTIS_LIEFERZEIT',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link uCorFormType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_COR_FORM_TYPE: fieldBuilder.buildEdmTypeField(
          'U_COR_FormType',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uBelegok} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BELEGOK: fieldBuilder.buildEdmTypeField(
          'U_Belegok',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link uEst1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_EST_1: fieldBuilder.buildEdmTypeField('U_EST1', 'Edm.Int32', false),
        /**
         * Static representation of the {@link uEst2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_EST_2: fieldBuilder.buildEdmTypeField('U_EST2', 'Edm.Int32', false),
        /**
         * Static representation of the {@link uEst3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_EST_3: fieldBuilder.buildEdmTypeField('U_EST3', 'Edm.Int32', false),
        /**
         * Static representation of the {@link uAct1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ACT_1: fieldBuilder.buildEdmTypeField('U_ACT1', 'Edm.Int32', false),
        /**
         * Static representation of the {@link uAct2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ACT_2: fieldBuilder.buildEdmTypeField('U_ACT2', 'Edm.Int32', false),
        /**
         * Static representation of the {@link uAct3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ACT_3: fieldBuilder.buildEdmTypeField('U_ACT3', 'Edm.Int32', false),
        /**
         * Static representation of the {@link uEst4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_EST_4: fieldBuilder.buildEdmTypeField('U_EST4', 'Edm.Int32', false),
        /**
         * Static representation of the {@link uAct4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ACT_4: fieldBuilder.buildEdmTypeField('U_ACT4', 'Edm.Int32', false),
        /**
         * Static representation of the {@link uAct5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ACT_5: fieldBuilder.buildEdmTypeField('U_ACT5', 'Edm.Int32', false),
        /**
         * Static representation of the {@link uBsInfoservice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BS_INFOSERVICE: fieldBuilder.buildEdmTypeField(
          'U_BS_INFOSERVICE',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link uAbOk} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_AB_OK: fieldBuilder.buildEdmTypeField('U_AB_OK', 'Edm.String', true),
        /**
         * Static representation of the {@link uCorBwFromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_COR_BW_FROM_DATE: fieldBuilder.buildEdmTypeField(
          'U_COR_BW_FromDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uCorBwToDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_COR_BW_TO_DATE: fieldBuilder.buildEdmTypeField(
          'U_COR_BW_ToDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uTestbeleg} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_TESTBELEG: fieldBuilder.buildEdmTypeField(
          'U_Testbeleg',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uArtikelDetail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ARTIKEL_DETAIL: fieldBuilder.buildEdmTypeField(
          'U_ArtikelDetail',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uIntern} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_INTERN: fieldBuilder.buildEdmTypeField(
          'U_Intern',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uKalkulation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_KALKULATION: fieldBuilder.buildEdmTypeField(
          'U_Kalkulation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uProvBest} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_PROV_BEST: fieldBuilder.buildEdmTypeField(
          'U_PROV_Best',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uAv} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_AV: fieldBuilder.buildEdmTypeField('U_AV', 'Edm.String', true),
        /**
         * Static representation of the {@link uQm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_QM: fieldBuilder.buildEdmTypeField('U_qm', 'Edm.String', true),
        /**
         * Static representation of the {@link uFertStand} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_FERT_STAND: fieldBuilder.buildEdmTypeField(
          'U_FertStand',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uRahmenvertrag} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_RAHMENVERTRAG: fieldBuilder.buildEdmTypeField(
          'U_Rahmenvertrag',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uRahmenvertragsNr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_RAHMENVERTRAGS_NR: fieldBuilder.buildEdmTypeField(
          'U_RahmenvertragsNr',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uEingegangen} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_EINGEGANGEN: fieldBuilder.buildEdmTypeField(
          'U_Eingegangen',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uOppKalkulation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_OPP_KALKULATION: fieldBuilder.buildEdmTypeField(
          'U_OPP_KALKULATION',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uOppAbgabeart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_OPP_ABGABEART: fieldBuilder.buildEdmTypeField(
          'U_OPP_Abgabeart',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uOppPreise} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_OPP_PREISE: fieldBuilder.buildEdmTypeField(
          'U_OPP_Preise',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uEinvoice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_EINVOICE: fieldBuilder.buildEdmTypeField(
          'U_EINVOICE',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link stockTransferApprovalRequests} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOCK_TRANSFER_APPROVAL_REQUESTS: fieldBuilder.buildCollectionField(
          'StockTransfer_ApprovalRequests',
          StockTransferApprovalRequest,
          true
        ),
        /**
         * Static representation of the {@link electronicProtocols} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_PROTOCOLS: fieldBuilder.buildCollectionField(
          'ElectronicProtocols',
          ElectronicProtocol,
          true
        ),
        /**
         * Static representation of the {@link stockTransferLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOCK_TRANSFER_LINES: fieldBuilder.buildCollectionField(
          'StockTransferLines',
          StockTransferLine,
          true
        ),
        /**
         * Static representation of the {@link stockTransferTaxExtension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOCK_TRANSFER_TAX_EXTENSION: fieldBuilder.buildComplexTypeField(
          'StockTransferTaxExtension',
          StockTransferTaxExtensionField,
          true
        ),
        /**
         * Static representation of the {@link documentReferences} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_REFERENCES: fieldBuilder.buildCollectionField(
          'DocumentReferences',
          DocumentReference,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InventoryTransferRequests)
      };
    }

    return this._schema;
  }
}
