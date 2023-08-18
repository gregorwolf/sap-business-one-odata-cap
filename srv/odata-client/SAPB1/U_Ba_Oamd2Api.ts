/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Ba_Oamd2 } from './U_Ba_Oamd2';
import { U_Ba_Oamd2RequestBuilder } from './U_Ba_Oamd2RequestBuilder';
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
export class U_Ba_Oamd2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Ba_Oamd2<DeSerializersT>, DeSerializersT>
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
  ): U_Ba_Oamd2Api<DeSerializersT> {
    return new U_Ba_Oamd2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Ba_Oamd2;

  requestBuilder(): U_Ba_Oamd2RequestBuilder<DeSerializersT> {
    return new U_Ba_Oamd2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    U_Ba_Oamd2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<U_Ba_Oamd2<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Ba_Oamd2<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Ba_Oamd2, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Ba_Oamd2, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Ba_Oamd2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Ba_Oamd2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_ASST_NUM: OrderableEdmTypeField<
      U_Ba_Oamd2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_FIS_YEAR: OrderableEdmTypeField<
      U_Ba_Oamd2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DPR_AR_ID: OrderableEdmTypeField<
      U_Ba_Oamd2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_DPR_DATE: OrderableEdmTypeField<
      U_Ba_Oamd2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_USE_LIFE: OrderableEdmTypeField<
      U_Ba_Oamd2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_REM_LIFE: OrderableEdmTypeField<
      U_Ba_Oamd2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_DPR_TYP_ID: OrderableEdmTypeField<
      U_Ba_Oamd2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DPR_TYP_CA: OrderableEdmTypeField<
      U_Ba_Oamd2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_USE_LIFE_C: OrderableEdmTypeField<
      U_Ba_Oamd2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Ba_Oamd2<DeSerializers>>;
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
         * Static representation of the {@link uAsstNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ASST_NUM: fieldBuilder.buildEdmTypeField(
          'U_AsstNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uFisYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_FIS_YEAR: fieldBuilder.buildEdmTypeField(
          'U_FisYear',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uDprArId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DPR_AR_ID: fieldBuilder.buildEdmTypeField(
          'U_DprArID',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uDprDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DPR_DATE: fieldBuilder.buildEdmTypeField(
          'U_DprDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uUseLife} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_USE_LIFE: fieldBuilder.buildEdmTypeField(
          'U_UseLife',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uRemLife} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_REM_LIFE: fieldBuilder.buildEdmTypeField(
          'U_RemLife',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uDprTypId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DPR_TYP_ID: fieldBuilder.buildEdmTypeField(
          'U_DprTypID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uDprTypCa} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DPR_TYP_CA: fieldBuilder.buildEdmTypeField(
          'U_DprTypCa',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uUseLifeC} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_USE_LIFE_C: fieldBuilder.buildEdmTypeField(
          'U_UseLifeC',
          'Edm.Int32',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Ba_Oamd2)
      };
    }

    return this._schema;
  }
}
