/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TransportationDocument } from './TransportationDocument';
import { TransportationDocumentRequestBuilder } from './TransportationDocumentRequestBuilder';
import { TransportationDocumentLineData } from './TransportationDocumentLineData';
import { ElectronicProtocol } from './ElectronicProtocol';
import { ElectronicDocGenTypeEnum } from './ElectronicDocGenTypeEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
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
  CollectionField
} from '@sap-cloud-sdk/odata-v4';
export class TransportationDocumentApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TransportationDocument<DeSerializersT>, DeSerializersT>
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
  ): TransportationDocumentApi<DeSerializersT> {
    return new TransportationDocumentApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TransportationDocument;

  requestBuilder(): TransportationDocumentRequestBuilder<DeSerializersT> {
    return new TransportationDocumentRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TransportationDocument<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TransportationDocument<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TransportationDocument<DeSerializersT>,
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
    typeof TransportationDocument,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TransportationDocument,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TRANSP_DOC_NUMBER: OrderableEdmTypeField<
      TransportationDocument<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NEXT_NUMBER: OrderableEdmTypeField<
      TransportationDocument<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    POST_DATE: OrderableEdmTypeField<
      TransportationDocument<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    EL_DOC_GEN_TYPE: EnumField<
      TransportationDocument<DeSerializers>,
      DeSerializersT,
      ElectronicDocGenTypeEnum,
      true,
      true
    >;
    EL_DOC_EXPORT_FORMAT: OrderableEdmTypeField<
      TransportationDocument<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    TRANSPORTATION_NUMBER: OrderableEdmTypeField<
      TransportationDocument<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPIRATION_DATE: OrderableEdmTypeField<
      TransportationDocument<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    VEHICLE_ID: OrderableEdmTypeField<
      TransportationDocument<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRAILER_ID: OrderableEdmTypeField<
      TransportationDocument<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CARRIER_CODE: OrderableEdmTypeField<
      TransportationDocument<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ISSUE_GATE: OrderableEdmTypeField<
      TransportationDocument<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ATTACHMENT_ENTRY: OrderableEdmTypeField<
      TransportationDocument<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CANCELED: EnumField<
      TransportationDocument<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    WEIGHT: OrderableEdmTypeField<
      TransportationDocument<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    WEIGHT_UNIT: OrderableEdmTypeField<
      TransportationDocument<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    TRANSPORTED_TOTAL_LC: OrderableEdmTypeField<
      TransportationDocument<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    WAREHOUSE_CODE: OrderableEdmTypeField<
      TransportationDocument<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COT_CODE: OrderableEdmTypeField<
      TransportationDocument<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORTATION_DOCUMENT_LINE_DATA_COLLECTION: CollectionField<
      TransportationDocument<DeSerializers>,
      DeSerializersT,
      TransportationDocumentLineData,
      true,
      true
    >;
    ELECTRONIC_PROTOCOLS: CollectionField<
      TransportationDocument<DeSerializers>,
      DeSerializersT,
      ElectronicProtocol,
      true,
      true
    >;
    ALL_FIELDS: AllFields<TransportationDocument<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link transpDocNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSP_DOC_NUMBER: fieldBuilder.buildEdmTypeField(
          'TranspDocNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link nextNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEXT_NUMBER: fieldBuilder.buildEdmTypeField(
          'NextNumber',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link postDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POST_DATE: fieldBuilder.buildEdmTypeField(
          'PostDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link elDocGenType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EL_DOC_GEN_TYPE: fieldBuilder.buildEnumField(
          'ElDocGenType',
          ElectronicDocGenTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link elDocExportFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EL_DOC_EXPORT_FORMAT: fieldBuilder.buildEdmTypeField(
          'ElDocExportFormat',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link transportationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'TransportationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION_DATE: fieldBuilder.buildEdmTypeField(
          'ExpirationDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link vehicleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEHICLE_ID: fieldBuilder.buildEdmTypeField(
          'VehicleID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link trailerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRAILER_ID: fieldBuilder.buildEdmTypeField(
          'TrailerID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link carrierCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARRIER_CODE: fieldBuilder.buildEdmTypeField(
          'CarrierCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link issueGate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISSUE_GATE: fieldBuilder.buildEdmTypeField(
          'IssueGate',
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
         * Static representation of the {@link canceled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CANCELED: fieldBuilder.buildEnumField('Canceled', BoYesNoEnum, true),
        /**
         * Static representation of the {@link weight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEIGHT: fieldBuilder.buildEdmTypeField('Weight', 'Edm.Double', true),
        /**
         * Static representation of the {@link weightUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEIGHT_UNIT: fieldBuilder.buildEdmTypeField(
          'WeightUnit',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link transportedTotalLc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTED_TOTAL_LC: fieldBuilder.buildEdmTypeField(
          'TransportedTotalLC',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link warehouseCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_CODE: fieldBuilder.buildEdmTypeField(
          'WarehouseCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cotCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COT_CODE: fieldBuilder.buildEdmTypeField('COTCode', 'Edm.String', true),
        /**
         * Static representation of the {@link transportationDocumentLineDataCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORTATION_DOCUMENT_LINE_DATA_COLLECTION:
          fieldBuilder.buildCollectionField(
            'TransportationDocumentLineDataCollection',
            TransportationDocumentLineData,
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TransportationDocument)
      };
    }

    return this._schema;
  }
}
