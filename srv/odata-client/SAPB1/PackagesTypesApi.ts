/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PackagesTypes } from './PackagesTypes';
import { PackagesTypesRequestBuilder } from './PackagesTypesRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class PackagesTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PackagesTypes<DeSerializersT>, DeSerializersT>
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
  ): PackagesTypesApi<DeSerializersT> {
    return new PackagesTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PackagesTypes;

  requestBuilder(): PackagesTypesRequestBuilder<DeSerializersT> {
    return new PackagesTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PackagesTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PackagesTypes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PackagesTypes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PackagesTypes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(PackagesTypes, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TYPE: OrderableEdmTypeField<
      PackagesTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CODE: OrderableEdmTypeField<
      PackagesTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LENGTH_1: OrderableEdmTypeField<
      PackagesTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    LENGTH_1_UNIT: OrderableEdmTypeField<
      PackagesTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    LENGTH_2: OrderableEdmTypeField<
      PackagesTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    LENGTH_2_UNIT: OrderableEdmTypeField<
      PackagesTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    WIDTH_1: OrderableEdmTypeField<
      PackagesTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    WIDTH_1_UNIT: OrderableEdmTypeField<
      PackagesTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    WIDTH_2: OrderableEdmTypeField<
      PackagesTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    WIDTH_2_UNIT: OrderableEdmTypeField<
      PackagesTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    HEIGHT_1: OrderableEdmTypeField<
      PackagesTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    HEIGHT_1_UNIT: OrderableEdmTypeField<
      PackagesTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    HEIGHT_2: OrderableEdmTypeField<
      PackagesTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    HEIGHT_2_UNIT: OrderableEdmTypeField<
      PackagesTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    VOLUME: OrderableEdmTypeField<
      PackagesTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    VOLUME_UNIT: OrderableEdmTypeField<
      PackagesTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    WEIGHT_1: OrderableEdmTypeField<
      PackagesTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    WEIGHT_1_UNIT: OrderableEdmTypeField<
      PackagesTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    WEIGHT_2: OrderableEdmTypeField<
      PackagesTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    WEIGHT_2_UNIT: OrderableEdmTypeField<
      PackagesTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ALL_FIELDS: AllFields<PackagesTypes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEdmTypeField('Type', 'Edm.String', true),
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.Int32', false),
        /**
         * Static representation of the {@link length1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LENGTH_1: fieldBuilder.buildEdmTypeField('Length1', 'Edm.Double', true),
        /**
         * Static representation of the {@link length1Unit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LENGTH_1_UNIT: fieldBuilder.buildEdmTypeField(
          'Length1Unit',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link length2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LENGTH_2: fieldBuilder.buildEdmTypeField('Length2', 'Edm.Double', true),
        /**
         * Static representation of the {@link length2Unit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LENGTH_2_UNIT: fieldBuilder.buildEdmTypeField(
          'Length2Unit',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link width1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WIDTH_1: fieldBuilder.buildEdmTypeField('Width1', 'Edm.Double', true),
        /**
         * Static representation of the {@link width1Unit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WIDTH_1_UNIT: fieldBuilder.buildEdmTypeField(
          'Width1Unit',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link width2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WIDTH_2: fieldBuilder.buildEdmTypeField('Width2', 'Edm.Double', true),
        /**
         * Static representation of the {@link width2Unit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WIDTH_2_UNIT: fieldBuilder.buildEdmTypeField(
          'Width2Unit',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link height1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEIGHT_1: fieldBuilder.buildEdmTypeField('Height1', 'Edm.Double', true),
        /**
         * Static representation of the {@link height1Unit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEIGHT_1_UNIT: fieldBuilder.buildEdmTypeField(
          'Height1Unit',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link height2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEIGHT_2: fieldBuilder.buildEdmTypeField('Height2', 'Edm.Double', true),
        /**
         * Static representation of the {@link height2Unit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEIGHT_2_UNIT: fieldBuilder.buildEdmTypeField(
          'Height2Unit',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link volume} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOLUME: fieldBuilder.buildEdmTypeField('Volume', 'Edm.Double', true),
        /**
         * Static representation of the {@link volumeUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOLUME_UNIT: fieldBuilder.buildEdmTypeField(
          'VolumeUnit',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link weight1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEIGHT_1: fieldBuilder.buildEdmTypeField('Weight1', 'Edm.Double', true),
        /**
         * Static representation of the {@link weight1Unit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEIGHT_1_UNIT: fieldBuilder.buildEdmTypeField(
          'Weight1Unit',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link weight2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEIGHT_2: fieldBuilder.buildEdmTypeField('Weight2', 'Edm.Double', true),
        /**
         * Static representation of the {@link weight2Unit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEIGHT_2_UNIT: fieldBuilder.buildEdmTypeField(
          'Weight2Unit',
          'Edm.Int32',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PackagesTypes)
      };
    }

    return this._schema;
  }
}
