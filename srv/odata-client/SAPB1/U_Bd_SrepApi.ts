/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { U_Bd_Srep } from './U_Bd_Srep';
import { U_Bd_SrepRequestBuilder } from './U_Bd_SrepRequestBuilder';
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
export class U_Bd_SrepApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<U_Bd_Srep<DeSerializersT>, DeSerializersT>
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
  ): U_Bd_SrepApi<DeSerializersT> {
    return new U_Bd_SrepApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = U_Bd_Srep;

  requestBuilder(): U_Bd_SrepRequestBuilder<DeSerializersT> {
    return new U_Bd_SrepRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    U_Bd_Srep<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<U_Bd_Srep<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<U_Bd_Srep<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof U_Bd_Srep, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(U_Bd_Srep, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      U_Bd_Srep<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      U_Bd_Srep<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_TURNOV: OrderableEdmTypeField<
      U_Bd_Srep<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    U_BOOK_KEY: OrderableEdmTypeField<
      U_Bd_Srep<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_ACCOUNT: OrderableEdmTypeField<
      U_Bd_Srep<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_ACC_BAL: OrderableEdmTypeField<
      U_Bd_Srep<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_NR_1: OrderableEdmTypeField<
      U_Bd_Srep<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_NR_2: OrderableEdmTypeField<
      U_Bd_Srep<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_DT: OrderableEdmTypeField<
      U_Bd_Srep<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    U_TXT: OrderableEdmTypeField<
      U_Bd_Srep<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    U_VATID: OrderableEdmTypeField<
      U_Bd_Srep<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<U_Bd_Srep<DeSerializers>>;
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
         * Static representation of the {@link uTurnov} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_TURNOV: fieldBuilder.buildEdmTypeField(
          'U_Turnov',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link uBookKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_BOOK_KEY: fieldBuilder.buildEdmTypeField(
          'U_BookKey',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'U_Account',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uAccBal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_ACC_BAL: fieldBuilder.buildEdmTypeField(
          'U_AccBal',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link uNr1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_NR_1: fieldBuilder.buildEdmTypeField('U_Nr1', 'Edm.String', true),
        /**
         * Static representation of the {@link uNr2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_NR_2: fieldBuilder.buildEdmTypeField('U_Nr2', 'Edm.String', true),
        /**
         * Static representation of the {@link uDt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_DT: fieldBuilder.buildEdmTypeField(
          'U_Dt',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link uTxt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_TXT: fieldBuilder.buildEdmTypeField('U_Txt', 'Edm.String', true),
        /**
         * Static representation of the {@link uVatid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        U_VATID: fieldBuilder.buildEdmTypeField('U_VATID', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', U_Bd_Srep)
      };
    }

    return this._schema;
  }
}
