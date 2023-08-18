/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Bpcntr } from './U_Bpcntr';
import { U_BpcntrRequestBuilder } from './U_BpcntrRequestBuilder';
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
export class U_BpcntrApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Bpcntr<DeSerializersT>, DeSerializersT>
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
  ): U_BpcntrApi<DeSerializersT> {
    return new U_BpcntrApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Bpcntr;

  requestBuilder(): U_BpcntrRequestBuilder<DeSerializersT> {
    return new U_BpcntrRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<U_Bpcntr<DeSerializersT>, DeSerializersT> {
    return entityBuilder<U_Bpcntr<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Bpcntr<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Bpcntr, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Bpcntr, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Bpcntr<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Bpcntr<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BPCNTRY: OrderableEdmTypeField<
      U_Bpcntr<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BPDATE: OrderableEdmTypeField<
      U_Bpcntr<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BPCNTRG: OrderableEdmTypeField<
      U_Bpcntr<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BPCNTRT: OrderableEdmTypeField<
      U_Bpcntr<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Bpcntr<DeSerializers>>;
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
         * Static representation of the {@link uBpcntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BPCNTRY: fieldBuilder.buildEdmTypeField(
          'U_BPCNTRY',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBpdate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BPDATE: fieldBuilder.buildEdmTypeField(
          'U_BPDATE',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBpcntrg} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BPCNTRG: fieldBuilder.buildEdmTypeField(
          'U_BPCNTRG',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBpcntrt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BPCNTRT: fieldBuilder.buildEdmTypeField(
          'U_BPCNTRT',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Bpcntr)
      };
    }

    return this._schema;
  }
}
