/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxCodeDeterminationsTcd } from './TaxCodeDeterminationsTcd';
import { TaxCodeDeterminationsTcdRequestBuilder } from './TaxCodeDeterminationsTcdRequestBuilder';
import { TaxCodeDeterminationTcdDefaultWt } from './TaxCodeDeterminationTcdDefaultWt';
import { TaxCodeDeterminationTcdByUsage } from './TaxCodeDeterminationTcdByUsage';
import { TaxCodeDeterminationTcdKeyField } from './TaxCodeDeterminationTcdKeyField';
import { TaxCodeDeterminationTcdTypeEnum } from './TaxCodeDeterminationTcdTypeEnum';
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
export class TaxCodeDeterminationsTcdApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<TaxCodeDeterminationsTcd<DeSerializersT>, DeSerializersT>
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
  ): TaxCodeDeterminationsTcdApi<DeSerializersT> {
    return new TaxCodeDeterminationsTcdApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TaxCodeDeterminationsTcd;

  requestBuilder(): TaxCodeDeterminationsTcdRequestBuilder<DeSerializersT> {
    return new TaxCodeDeterminationsTcdRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TaxCodeDeterminationsTcd<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TaxCodeDeterminationsTcd<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TaxCodeDeterminationsTcd<DeSerializersT>,
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
    typeof TaxCodeDeterminationsTcd,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TaxCodeDeterminationsTcd,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ABS_ID: OrderableEdmTypeField<
      TaxCodeDeterminationsTcd<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TCD_TYPE: EnumField<
      TaxCodeDeterminationsTcd<DeSerializers>,
      DeSerializersT,
      TaxCodeDeterminationTcdTypeEnum,
      true,
      true
    >;
    DFT_AR_CODE: OrderableEdmTypeField<
      TaxCodeDeterminationsTcd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DFT_AP_CODE: OrderableEdmTypeField<
      TaxCodeDeterminationsTcd<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_CODE_DETERMINATION_TCD_DEFAULT_W_TS: CollectionField<
      TaxCodeDeterminationsTcd<DeSerializers>,
      DeSerializersT,
      TaxCodeDeterminationTcdDefaultWt,
      true,
      true
    >;
    TAX_CODE_DETERMINATION_TCD_BY_USAGES: CollectionField<
      TaxCodeDeterminationsTcd<DeSerializers>,
      DeSerializersT,
      TaxCodeDeterminationTcdByUsage,
      true,
      true
    >;
    TAX_CODE_DETERMINATION_TCD_KEY_FIELDS: CollectionField<
      TaxCodeDeterminationsTcd<DeSerializers>,
      DeSerializersT,
      TaxCodeDeterminationTcdKeyField,
      true,
      true
    >;
    ALL_FIELDS: AllFields<TaxCodeDeterminationsTcd<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link absId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABS_ID: fieldBuilder.buildEdmTypeField('AbsId', 'Edm.Int32', false),
        /**
         * Static representation of the {@link tcdType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TCD_TYPE: fieldBuilder.buildEnumField(
          'TcdType',
          TaxCodeDeterminationTcdTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link dftArCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DFT_AR_CODE: fieldBuilder.buildEdmTypeField(
          'DftArCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dftApCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DFT_AP_CODE: fieldBuilder.buildEdmTypeField(
          'DftApCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxCodeDeterminationTcdDefaultWTs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CODE_DETERMINATION_TCD_DEFAULT_W_TS:
          fieldBuilder.buildCollectionField(
            'TaxCodeDeterminationTCDDefaultWTs',
            TaxCodeDeterminationTcdDefaultWt,
            true
          ),
        /**
         * Static representation of the {@link taxCodeDeterminationTcdByUsages} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CODE_DETERMINATION_TCD_BY_USAGES: fieldBuilder.buildCollectionField(
          'TaxCodeDeterminationTCDByUsages',
          TaxCodeDeterminationTcdByUsage,
          true
        ),
        /**
         * Static representation of the {@link taxCodeDeterminationTcdKeyFields} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CODE_DETERMINATION_TCD_KEY_FIELDS:
          fieldBuilder.buildCollectionField(
            'TaxCodeDeterminationTCDKeyFields',
            TaxCodeDeterminationTcdKeyField,
            true
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TaxCodeDeterminationsTcd)
      };
    }

    return this._schema;
  }
}
