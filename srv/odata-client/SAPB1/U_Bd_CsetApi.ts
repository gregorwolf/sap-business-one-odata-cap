/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Bd_Cset } from './U_Bd_Cset';
import { U_Bd_CsetRequestBuilder } from './U_Bd_CsetRequestBuilder';
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
export class U_Bd_CsetApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Bd_Cset<DeSerializersT>, DeSerializersT>
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
  ): U_Bd_CsetApi<DeSerializersT> {
    return new U_Bd_CsetApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Bd_Cset;

  requestBuilder(): U_Bd_CsetRequestBuilder<DeSerializersT> {
    return new U_Bd_CsetRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    U_Bd_Cset<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<U_Bd_Cset<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Bd_Cset<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Bd_Cset, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Bd_Cset, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Bd_Cset<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Bd_Cset<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_NAME: OrderableEdmTypeField<
      U_Bd_Cset<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DESC: OrderableEdmTypeField<
      U_Bd_Cset<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_VAL: OrderableEdmTypeField<
      U_Bd_Cset<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_TYP: OrderableEdmTypeField<
      U_Bd_Cset<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Bd_Cset<DeSerializers>>;
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
         * Static representation of the {@link uName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_NAME: fieldBuilder.buildEdmTypeField('U_Name', 'Edm.String', true),
        /**
         * Static representation of the {@link uDesc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DESC: fieldBuilder.buildEdmTypeField('U_Desc', 'Edm.String', true),
        /**
         * Static representation of the {@link uVal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_VAL: fieldBuilder.buildEdmTypeField('U_Val', 'Edm.String', true),
        /**
         * Static representation of the {@link uTyp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_TYP: fieldBuilder.buildEdmTypeField('U_Typ', 'Edm.Int32', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Bd_Cset)
      };
    }

    return this._schema;
  }
}
