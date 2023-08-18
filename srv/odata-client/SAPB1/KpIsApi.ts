/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { KpIs } from './KpIs';
import { KpIsRequestBuilder } from './KpIsRequestBuilder';
import { KpiItemLine } from './KpiItemLine';
import { KpiTypeEnum } from './KpiTypeEnum';
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
export class KpIsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<KpIs<DeSerializersT>, DeSerializersT>
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
  ): KpIsApi<DeSerializersT> {
    return new KpIsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = KpIs;

  requestBuilder(): KpIsRequestBuilder<DeSerializersT> {
    return new KpIsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<KpIs<DeSerializersT>, DeSerializersT> {
    return entityBuilder<KpIs<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<KpIs<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof KpIs, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(KpIs, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    KPI_CODE: OrderableEdmTypeField<
      KpIs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    KPI_NAME: OrderableEdmTypeField<
      KpIs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    KPI_TYPE: EnumField<
      KpIs<DeSerializers>,
      DeSerializersT,
      KpiTypeEnum,
      true,
      true
    >;
    NUMBER_OF_COLUMNS: OrderableEdmTypeField<
      KpIs<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    KPI_ITEM_LINES: CollectionField<
      KpIs<DeSerializers>,
      DeSerializersT,
      KpiItemLine,
      true,
      true
    >;
    ALL_FIELDS: AllFields<KpIs<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link kpiCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KPI_CODE: fieldBuilder.buildEdmTypeField(
          'KPICode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link kpiName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KPI_NAME: fieldBuilder.buildEdmTypeField('KPIName', 'Edm.String', true),
        /**
         * Static representation of the {@link kpiType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KPI_TYPE: fieldBuilder.buildEnumField('KPIType', KpiTypeEnum, true),
        /**
         * Static representation of the {@link numberOfColumns} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_COLUMNS: fieldBuilder.buildEdmTypeField(
          'NumberOfColumns',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link kpiItemLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KPI_ITEM_LINES: fieldBuilder.buildCollectionField(
          'KPI_ItemLines',
          KpiItemLine,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', KpIs)
      };
    }

    return this._schema;
  }
}
