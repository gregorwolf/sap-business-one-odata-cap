/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Ba_Oprj } from './U_Ba_Oprj';
import { U_Ba_OprjRequestBuilder } from './U_Ba_OprjRequestBuilder';
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
export class U_Ba_OprjApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Ba_Oprj<DeSerializersT>, DeSerializersT>
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
  ): U_Ba_OprjApi<DeSerializersT> {
    return new U_Ba_OprjApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Ba_Oprj;

  requestBuilder(): U_Ba_OprjRequestBuilder<DeSerializersT> {
    return new U_Ba_OprjRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    U_Ba_Oprj<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<U_Ba_Oprj<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Ba_Oprj<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Ba_Oprj, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Ba_Oprj, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Ba_Oprj<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Ba_Oprj<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_ASST_NUM: OrderableEdmTypeField<
      U_Ba_Oprj<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_POS_NUM: OrderableEdmTypeField<
      U_Ba_Oprj<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_PRJ_CODE: OrderableEdmTypeField<
      U_Ba_Oprj<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_FRM_DATE: OrderableEdmTypeField<
      U_Ba_Oprj<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_TO_DATE: OrderableEdmTypeField<
      U_Ba_Oprj<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Ba_Oprj<DeSerializers>>;
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
         * Static representation of the {@link uPosNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_POS_NUM: fieldBuilder.buildEdmTypeField(
          'U_PosNum',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link uPrjCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_PRJ_CODE: fieldBuilder.buildEdmTypeField(
          'U_PrjCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uFrmDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_FRM_DATE: fieldBuilder.buildEdmTypeField(
          'U_FrmDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uToDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_TO_DATE: fieldBuilder.buildEdmTypeField(
          'U_ToDate',
          'Edm.DateTimeOffset',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Ba_Oprj)
      };
    }

    return this._schema;
  }
}
