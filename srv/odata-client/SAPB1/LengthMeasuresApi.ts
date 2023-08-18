/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LengthMeasures } from './LengthMeasures';
import { LengthMeasuresRequestBuilder } from './LengthMeasuresRequestBuilder';
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
export class LengthMeasuresApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LengthMeasures<DeSerializersT>, DeSerializersT>
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
  ): LengthMeasuresApi<DeSerializersT> {
    return new LengthMeasuresApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LengthMeasures;

  requestBuilder(): LengthMeasuresRequestBuilder<DeSerializersT> {
    return new LengthMeasuresRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LengthMeasures<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LengthMeasures<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<LengthMeasures<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof LengthMeasures, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(LengthMeasures, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    UNIT_CODE: OrderableEdmTypeField<
      LengthMeasures<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    UNIT_DISPLAY: OrderableEdmTypeField<
      LengthMeasures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_NAME: OrderableEdmTypeField<
      LengthMeasures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_CODEFOR_QUANTITY_DISPLAY: OrderableEdmTypeField<
      LengthMeasures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_LENGTHINMM: OrderableEdmTypeField<
      LengthMeasures<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    ALL_FIELDS: AllFields<LengthMeasures<DeSerializers>>;
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
         * Static representation of the {@link unitCodeforQuantityDisplay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_CODEFOR_QUANTITY_DISPLAY: fieldBuilder.buildEdmTypeField(
          'UnitCodeforQuantityDisplay',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unitLengthinmm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_LENGTHINMM: fieldBuilder.buildEdmTypeField(
          'UnitLengthinmm',
          'Edm.Double',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LengthMeasures)
      };
    }

    return this._schema;
  }
}
