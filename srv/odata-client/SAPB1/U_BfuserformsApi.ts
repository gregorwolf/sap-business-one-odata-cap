/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Bfuserforms } from './U_Bfuserforms';
import { U_BfuserformsRequestBuilder } from './U_BfuserformsRequestBuilder';
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
export class U_BfuserformsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Bfuserforms<DeSerializersT>, DeSerializersT>
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
  ): U_BfuserformsApi<DeSerializersT> {
    return new U_BfuserformsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Bfuserforms;

  requestBuilder(): U_BfuserformsRequestBuilder<DeSerializersT> {
    return new U_BfuserformsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    U_Bfuserforms<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<U_Bfuserforms<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Bfuserforms<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Bfuserforms, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Bfuserforms, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Bfuserforms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Bfuserforms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_FORM_TYPE: OrderableEdmTypeField<
      U_Bfuserforms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_USER: OrderableEdmTypeField<
      U_Bfuserforms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_TOP: OrderableEdmTypeField<
      U_Bfuserforms<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_LEFT: OrderableEdmTypeField<
      U_Bfuserforms<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_HEIGHT: OrderableEdmTypeField<
      U_Bfuserforms<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    U_WIDTH: OrderableEdmTypeField<
      U_Bfuserforms<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Bfuserforms<DeSerializers>>;
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
         * Static representation of the {@link uFormType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_FORM_TYPE: fieldBuilder.buildEdmTypeField(
          'U_FormType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_USER: fieldBuilder.buildEdmTypeField('U_User', 'Edm.String', true),
        /**
         * Static representation of the {@link uTop} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_TOP: fieldBuilder.buildEdmTypeField('U_Top', 'Edm.Int32', true),
        /**
         * Static representation of the {@link uLeft} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_LEFT: fieldBuilder.buildEdmTypeField('U_Left', 'Edm.Int32', true),
        /**
         * Static representation of the {@link uHeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_HEIGHT: fieldBuilder.buildEdmTypeField('U_Height', 'Edm.Int32', true),
        /**
         * Static representation of the {@link uWidth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_WIDTH: fieldBuilder.buildEdmTypeField('U_Width', 'Edm.Int32', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Bfuserforms)
      };
    }

    return this._schema;
  }
}
