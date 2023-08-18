/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Beolic } from './U_Beolic';
import { U_BeolicRequestBuilder } from './U_BeolicRequestBuilder';
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
export class U_BeolicApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Beolic<DeSerializersT>, DeSerializersT>
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
  ): U_BeolicApi<DeSerializersT> {
    return new U_BeolicApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Beolic;

  requestBuilder(): U_BeolicRequestBuilder<DeSerializersT> {
    return new U_BeolicRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<U_Beolic<DeSerializersT>, DeSerializersT> {
    return entityBuilder<U_Beolic<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Beolic<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Beolic, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Beolic, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Beolic<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Beolic<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BEUSER: OrderableEdmTypeField<
      U_Beolic<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BEDATE: OrderableEdmTypeField<
      U_Beolic<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BESTAT: OrderableEdmTypeField<
      U_Beolic<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_BETESM: OrderableEdmTypeField<
      U_Beolic<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Beolic<DeSerializers>>;
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
         * Static representation of the {@link uBeuser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BEUSER: fieldBuilder.buildEdmTypeField(
          'U_BEUSER',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBedate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BEDATE: fieldBuilder.buildEdmTypeField(
          'U_BEDATE',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBestat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BESTAT: fieldBuilder.buildEdmTypeField(
          'U_BESTAT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uBetesm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BETESM: fieldBuilder.buildEdmTypeField(
          'U_BETESM',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Beolic)
      };
    }

    return this._schema;
  }
}
