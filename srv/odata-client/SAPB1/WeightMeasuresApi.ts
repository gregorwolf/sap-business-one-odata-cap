/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WeightMeasures } from './WeightMeasures';
import { WeightMeasuresRequestBuilder } from './WeightMeasuresRequestBuilder';
import { BinLocationsApi } from './BinLocationsApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class WeightMeasuresApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WeightMeasures<DeSerializersT>, DeSerializersT>
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
  ): WeightMeasuresApi<DeSerializersT> {
    return new WeightMeasuresApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link binLocations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BIN_LOCATIONS: OneToManyLink<
      WeightMeasures<DeSerializersT>,
      DeSerializersT,
      BinLocationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [BinLocationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      BIN_LOCATIONS: new OneToManyLink('BinLocations', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = WeightMeasures;

  requestBuilder(): WeightMeasuresRequestBuilder<DeSerializersT> {
    return new WeightMeasuresRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WeightMeasures<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WeightMeasures<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<WeightMeasures<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof WeightMeasures, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(WeightMeasures, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    UNIT_CODE: OrderableEdmTypeField<
      WeightMeasures<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    UNIT_DISPLAY: OrderableEdmTypeField<
      WeightMeasures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_NAME: OrderableEdmTypeField<
      WeightMeasures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_WEIGHTINMG: OrderableEdmTypeField<
      WeightMeasures<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link binLocations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BIN_LOCATIONS: OneToManyLink<
      WeightMeasures<DeSerializersT>,
      DeSerializersT,
      BinLocationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WeightMeasures<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link unitCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_CODE: fieldBuilder.buildEdmTypeField(
          'UnitCode',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link unitDisplay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_DISPLAY: fieldBuilder.buildEdmTypeField(
          'UnitDisplay',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unitName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_NAME: fieldBuilder.buildEdmTypeField(
          'UnitName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unitWeightinmg} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_WEIGHTINMG: fieldBuilder.buildEdmTypeField(
          'UnitWeightinmg',
          'Edm.Double',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WeightMeasures)
      };
    }

    return this._schema;
  }
}
