/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Ba_Cclsdpa } from './U_Ba_Cclsdpa';
import { U_Ba_CclsdpaRequestBuilder } from './U_Ba_CclsdpaRequestBuilder';
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
export class U_Ba_CclsdpaApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Ba_Cclsdpa<DeSerializersT>, DeSerializersT>
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
  ): U_Ba_CclsdpaApi<DeSerializersT> {
    return new U_Ba_CclsdpaApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Ba_Cclsdpa;

  requestBuilder(): U_Ba_CclsdpaRequestBuilder<DeSerializersT> {
    return new U_Ba_CclsdpaRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    U_Ba_Cclsdpa<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<U_Ba_Cclsdpa<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Ba_Cclsdpa<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Ba_Cclsdpa, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Ba_Cclsdpa, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Ba_Cclsdpa<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Ba_Cclsdpa<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_ITEM_CODE: OrderableEdmTypeField<
      U_Ba_Cclsdpa<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DPR_AR_ID: OrderableEdmTypeField<
      U_Ba_Cclsdpa<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_ACTIVE: OrderableEdmTypeField<
      U_Ba_Cclsdpa<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_ACCT_DETN: OrderableEdmTypeField<
      U_Ba_Cclsdpa<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_DPR_TYP_ID: OrderableEdmTypeField<
      U_Ba_Cclsdpa<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_USE_LIFE: OrderableEdmTypeField<
      U_Ba_Cclsdpa<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Ba_Cclsdpa<DeSerializers>>;
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
         * Static representation of the {@link uItemCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ITEM_CODE: fieldBuilder.buildEdmTypeField(
          'U_ItemCode',
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
         * Static representation of the {@link uActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ACTIVE: fieldBuilder.buildEdmTypeField(
          'U_Active',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uAcctDetn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ACCT_DETN: fieldBuilder.buildEdmTypeField(
          'U_AcctDetn',
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
         * Static representation of the {@link uUseLife} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_USE_LIFE: fieldBuilder.buildEdmTypeField(
          'U_UseLife',
          'Edm.Int32',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Ba_Cclsdpa)
      };
    }

    return this._schema;
  }
}
