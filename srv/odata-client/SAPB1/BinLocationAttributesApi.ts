/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BinLocationAttributes } from './BinLocationAttributes';
import { BinLocationAttributesRequestBuilder } from './BinLocationAttributesRequestBuilder';
import { BinLocationFieldsApi } from './BinLocationFieldsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class BinLocationAttributesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BinLocationAttributes<DeSerializersT>, DeSerializersT>
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
  ): BinLocationAttributesApi<DeSerializersT> {
    return new BinLocationAttributesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link binLocationField} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BIN_LOCATION_FIELD: OneToOneLink<
      BinLocationAttributes<DeSerializersT>,
      DeSerializersT,
      BinLocationFieldsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [BinLocationFieldsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      BIN_LOCATION_FIELD: new OneToOneLink(
        'BinLocationField',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = BinLocationAttributes;

  requestBuilder(): BinLocationAttributesRequestBuilder<DeSerializersT> {
    return new BinLocationAttributesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BinLocationAttributes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BinLocationAttributes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BinLocationAttributes<DeSerializersT>,
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
    typeof BinLocationAttributes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BinLocationAttributes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ATTRIBUTE: OrderableEdmTypeField<
      BinLocationAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CODE: OrderableEdmTypeField<
      BinLocationAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ABS_ENTRY: OrderableEdmTypeField<
      BinLocationAttributes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link binLocationField} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BIN_LOCATION_FIELD: OneToOneLink<
      BinLocationAttributes<DeSerializersT>,
      DeSerializersT,
      BinLocationFieldsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BinLocationAttributes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link attribute} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE: fieldBuilder.buildEdmTypeField(
          'Attribute',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', true),
        /**
         * Static representation of the {@link absEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABS_ENTRY: fieldBuilder.buildEdmTypeField(
          'AbsEntry',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BinLocationAttributes)
      };
    }

    return this._schema;
  }
}
