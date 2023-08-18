/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { B1Sessions } from './B1Sessions';
import { B1SessionsRequestBuilder } from './B1SessionsRequestBuilder';
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
export class B1SessionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<B1Sessions<DeSerializersT>, DeSerializersT>
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
  ): B1SessionsApi<DeSerializersT> {
    return new B1SessionsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = B1Sessions;

  requestBuilder(): B1SessionsRequestBuilder<DeSerializersT> {
    return new B1SessionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    B1Sessions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<B1Sessions<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<B1Sessions<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof B1Sessions, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(B1Sessions, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    VERSION: OrderableEdmTypeField<
      B1Sessions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SESSION_TIMEOUT: OrderableEdmTypeField<
      B1Sessions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SESSION_ID: OrderableEdmTypeField<
      B1Sessions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<B1Sessions<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link version} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VERSION: fieldBuilder.buildEdmTypeField('Version', 'Edm.String', true),
        /**
         * Static representation of the {@link sessionTimeout} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SESSION_TIMEOUT: fieldBuilder.buildEdmTypeField(
          'SessionTimeout',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link sessionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SESSION_ID: fieldBuilder.buildEdmTypeField(
          'SessionId',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', B1Sessions)
      };
    }

    return this._schema;
  }
}
