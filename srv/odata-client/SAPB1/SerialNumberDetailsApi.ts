/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SerialNumberDetails } from './SerialNumberDetails';
import { SerialNumberDetailsRequestBuilder } from './SerialNumberDetailsRequestBuilder';
import { ItemsApi } from './ItemsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class SerialNumberDetailsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SerialNumberDetails<DeSerializersT>, DeSerializersT>
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
  ): SerialNumberDetailsApi<DeSerializersT> {
    return new SerialNumberDetailsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link item} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM: OneToOneLink<
      SerialNumberDetails<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [ItemsApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      ITEM: new OneToOneLink('Item', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = SerialNumberDetails;

  requestBuilder(): SerialNumberDetailsRequestBuilder<DeSerializersT> {
    return new SerialNumberDetailsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SerialNumberDetails<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SerialNumberDetails<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SerialNumberDetails<DeSerializersT>,
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
    typeof SerialNumberDetails,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SerialNumberDetails,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DOC_ENTRY: OrderableEdmTypeField<
      SerialNumberDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ITEM_CODE: OrderableEdmTypeField<
      SerialNumberDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_DESCRIPTION: OrderableEdmTypeField<
      SerialNumberDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MFR_SERIAL_NO: OrderableEdmTypeField<
      SerialNumberDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERIAL_NUMBER: OrderableEdmTypeField<
      SerialNumberDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOT_NUMBER: OrderableEdmTypeField<
      SerialNumberDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYSTEM_NUMBER: OrderableEdmTypeField<
      SerialNumberDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ADMISSION_DATE: OrderableEdmTypeField<
      SerialNumberDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MANUFACTURING_DATE: OrderableEdmTypeField<
      SerialNumberDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    EXPIRATION_DATE: OrderableEdmTypeField<
      SerialNumberDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MFR_WARRANTY_START: OrderableEdmTypeField<
      SerialNumberDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    M_FR_WARRANTY_END: OrderableEdmTypeField<
      SerialNumberDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LOCATION: OrderableEdmTypeField<
      SerialNumberDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DETAILS: OrderableEdmTypeField<
      SerialNumberDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link item} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM: OneToOneLink<
      SerialNumberDetails<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SerialNumberDetails<DeSerializers>>;
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
         * Static representation of the {@link itemCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_CODE: fieldBuilder.buildEdmTypeField(
          'ItemCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ItemDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mfrSerialNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MFR_SERIAL_NO: fieldBuilder.buildEdmTypeField(
          'MfrSerialNo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'SerialNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lotNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOT_NUMBER: fieldBuilder.buildEdmTypeField(
          'LotNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link systemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYSTEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'SystemNumber',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link admissionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADMISSION_DATE: fieldBuilder.buildEdmTypeField(
          'AdmissionDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link manufacturingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUFACTURING_DATE: fieldBuilder.buildEdmTypeField(
          'ManufacturingDate',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link mfrWarrantyStart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MFR_WARRANTY_START: fieldBuilder.buildEdmTypeField(
          'MfrWarrantyStart',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link mFrWarrantyEnd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        M_FR_WARRANTY_END: fieldBuilder.buildEdmTypeField(
          'MFrWarrantyEnd',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link location} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION: fieldBuilder.buildEdmTypeField(
          'Location',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link details} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DETAILS: fieldBuilder.buildEdmTypeField('Details', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SerialNumberDetails)
      };
    }

    return this._schema;
  }
}
