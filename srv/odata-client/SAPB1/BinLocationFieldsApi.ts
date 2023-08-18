/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BinLocationFields } from './BinLocationFields';
import { BinLocationFieldsRequestBuilder } from './BinLocationFieldsRequestBuilder';
import { WarehouseSublevelCodesApi } from './WarehouseSublevelCodesApi';
import { BinLocationAttributesApi } from './BinLocationAttributesApi';
import { BinLocationFieldTypeEnum } from './BinLocationFieldTypeEnum';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class BinLocationFieldsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BinLocationFields<DeSerializersT>, DeSerializersT>
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
  ): BinLocationFieldsApi<DeSerializersT> {
    return new BinLocationFieldsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link warehouseSublevelCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_SUBLEVEL_CODES: OneToManyLink<
      BinLocationFields<DeSerializersT>,
      DeSerializersT,
      WarehouseSublevelCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link binLocationAttributes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BIN_LOCATION_ATTRIBUTES: OneToManyLink<
      BinLocationFields<DeSerializersT>,
      DeSerializersT,
      BinLocationAttributesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WarehouseSublevelCodesApi<DeSerializersT>,
      BinLocationAttributesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      WAREHOUSE_SUBLEVEL_CODES: new OneToManyLink(
        'WarehouseSublevelCodes',
        this,
        linkedApis[0]
      ),
      BIN_LOCATION_ATTRIBUTES: new OneToManyLink(
        'BinLocationAttributes',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = BinLocationFields;

  requestBuilder(): BinLocationFieldsRequestBuilder<DeSerializersT> {
    return new BinLocationFieldsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BinLocationFields<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BinLocationFields<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BinLocationFields<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof BinLocationFields,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BinLocationFields,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ABS_ENTRY: OrderableEdmTypeField<
      BinLocationFields<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FIELD_TYPE: EnumField<
      BinLocationFields<DeSerializers>,
      DeSerializersT,
      BinLocationFieldTypeEnum,
      true,
      true
    >;
    FIELD_NUMBER: OrderableEdmTypeField<
      BinLocationFields<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      BinLocationFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVATED: EnumField<
      BinLocationFields<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    DEFAULT_FIELD_NAME: OrderableEdmTypeField<
      BinLocationFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouseSublevelCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_SUBLEVEL_CODES: OneToManyLink<
      BinLocationFields<DeSerializersT>,
      DeSerializersT,
      WarehouseSublevelCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link binLocationAttributes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BIN_LOCATION_ATTRIBUTES: OneToManyLink<
      BinLocationFields<DeSerializersT>,
      DeSerializersT,
      BinLocationAttributesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BinLocationFields<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link absEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABS_ENTRY: fieldBuilder.buildEdmTypeField(
          'AbsEntry',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link fieldType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIELD_TYPE: fieldBuilder.buildEnumField(
          'FieldType',
          BinLocationFieldTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link fieldNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIELD_NUMBER: fieldBuilder.buildEdmTypeField(
          'FieldNumber',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link activated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVATED: fieldBuilder.buildEnumField('Activated', BoYesNoEnum, true),
        /**
         * Static representation of the {@link defaultFieldName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_FIELD_NAME: fieldBuilder.buildEdmTypeField(
          'DefaultFieldName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BinLocationFields)
      };
    }

    return this._schema;
  }
}
